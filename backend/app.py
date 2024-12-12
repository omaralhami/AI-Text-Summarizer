from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline
import torch
from typing import Optional
import os
from dotenv import load_dotenv
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI(title="AI Text Summarizer API")

# Configure CORS
allowed_origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://only-mar.github.io",
    "https://only-mar.github.io/AI-Text-Summarizer"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize variables
summarizer = None

def load_summarizer():
    """Load the summarization model."""
    try:
        logger.info("Loading summarization model...")
        device = "cpu"  # Force CPU usage for now
        logger.info(f"Using device: {device}")
        logger.info("Initializing pipeline with model: sshleifer/distilbart-cnn-12-6")
        
        # Add timeout for model loading
        import signal
        def timeout_handler(signum, frame):
            raise TimeoutError("Model loading timed out")
        
        # Set 30 second timeout
        signal.signal(signal.SIGALRM, timeout_handler)
        signal.alarm(30)
        
        try:
            model = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6", device=device)
            # Cancel the timeout
            signal.alarm(0)
        except TimeoutError:
            logger.error("Model loading timed out")
            return None
        except Exception as e:
            logger.error(f"Error in pipeline creation: {str(e)}")
            return None
        
        logger.info("Model loaded successfully")
        return model
    except Exception as e:
        logger.error(f"Error loading model: {str(e)}")
        logger.error(f"Error type: {type(e)}")
        import traceback
        logger.error(f"Traceback: {traceback.format_exc()}")
        return None

class SummarizeRequest(BaseModel):
    text: str
    max_length: Optional[int] = 130
    min_length: Optional[int] = 30

@app.get("/")
async def root():
    return {"message": "AI Text Summarizer API is running"}

@app.get("/api/health")
async def health_check():
    global summarizer
    if summarizer is None:
        summarizer = load_summarizer()
    
    if summarizer is None:
        raise HTTPException(status_code=503, detail="Failed to load model")
    return {"status": "healthy"}

@app.post("/api/summarize")
async def summarize_text(request: SummarizeRequest):
    global summarizer
    if summarizer is None:
        summarizer = load_summarizer()
    
    if summarizer is None:
        raise HTTPException(status_code=503, detail="Failed to load model")
    
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
        logger.error(f"Error during summarization: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to generate summary: {str(e)}")