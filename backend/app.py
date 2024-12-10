from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline
import torch
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Text Summarizer API")

# Configure CORS
allowed_origins = [
    "http://localhost:3000",
    "https://only-mar.github.io"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the summarization pipeline
try:
    device = 0 if torch.cuda.is_available() else -1
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=device)
except Exception as e:
    print(f"Error loading model: {e}")
    summarizer = None

class SummarizeRequest(BaseModel):
    text: str
    max_length: Optional[int] = 130
    min_length: Optional[int] = 30

@app.get("/")
async def root():
    return {"message": "AI Text Summarizer API is running"}

@app.get("/api/health")
async def health_check():
    if summarizer is None:
        raise HTTPException(status_code=503, detail="Summarization model not loaded")
    return {"status": "healthy"}

@app.post("/api/summarize")
async def summarize_text(request: SummarizeRequest):
    if summarizer is None:
        raise HTTPException(status_code=503, detail="Summarization model not loaded")
    
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")
    
    try:
        # Split long text into chunks if necessary (BART has a max input length)
        max_chunk_length = 1024
        words = request.text.split()
        chunks = []
        current_chunk = []
        current_length = 0
        
        for word in words:
            if current_length + len(word) + 1 <= max_chunk_length:
                current_chunk.append(word)
                current_length += len(word) + 1
            else:
                if current_chunk:
                    chunks.append(" ".join(current_chunk))
                current_chunk = [word]
                current_length = len(word)
        
        if current_chunk:
            chunks.append(" ".join(current_chunk))
        
        # Summarize each chunk
        summaries = []
        for chunk in chunks:
            summary = summarizer(chunk, 
                               max_length=request.max_length, 
                               min_length=request.min_length, 
                               do_sample=False)[0]['summary_text']
            summaries.append(summary)
        
        # Combine summaries if there were multiple chunks
        final_summary = " ".join(summaries)
        
        return {"summary": final_summary}
    
    except Exception as e:
        print(f"Error during summarization: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate summary") 