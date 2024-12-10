# AI-Powered Text Summarizer

An open-source web application that uses artificial intelligence to generate concise and meaningful summaries from long texts. Built with React, FastAPI, and Hugging Face's transformers library.

🔗 **[Live Demo](https://only-mar.github.io/AI-Text-Summarizer/)** | [Documentation](#getting-started) | [API Reference](#api-endpoints)

![AI Text Summarizer Demo](demo-screenshot.png)

## Live Services

- **Frontend:** [https://only-mar.github.io/AI-Text-Summarizer/](https://only-mar.github.io/AI-Text-Summarizer/)
- **Backend API:** [https://ai-text-summarizer-api.onrender.com](https://ai-text-summarizer-api.onrender.com)

> **Note:** The backend is hosted on Render's free tier, which may have cold starts. Initial requests might take 30-60 seconds while the server spins up.

## Features

- 🤖 AI-powered text summarization using BART-large-CNN model
- 🎨 Modern, responsive UI with dark mode support
- ✨ Beautiful animations and transitions
- 📊 Summary statistics (word count and compression ratio)
- 📋 Copy to clipboard functionality
- ⚡ Real-time server health monitoring
- 🔄 Handles long text inputs by automatic chunking

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios for API calls
- Hero Icons
- Modern animations and transitions

### Backend
- FastAPI
- Hugging Face Transformers
- PyTorch
- BART-large-CNN model

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/only-mar/AI-Text-Summarizer.git
cd AI-Text-Summarizer
```

2. Set up the backend
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app:app --reload --port 8000
```

3. Set up the frontend
```bash
cd frontend-new
npm install
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## API Endpoints

The API is available at `https://ai-text-summarizer-api.onrender.com`

### Health Check
```
GET /api/health
```
Returns the status of the summarization service.

Example:
```bash
curl https://ai-text-summarizer-api.onrender.com/api/health
```

### Summarize Text
```
POST /api/summarize
```
Request body:
```json
{
  "text": "Your long text here",
  "max_length": 130,  // optional
  "min_length": 30    // optional
}
```

Example:
```bash
curl -X POST https://ai-text-summarizer-api.onrender.com/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Your text to summarize"}'
```

## Local Development

If you prefer to run the services locally:

### Backend (Local)
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app:app --reload --port 8000
```
Local backend will be available at: http://localhost:8000

### Frontend (Local)
```bash
cd frontend-new
npm install
npm start
```
Local frontend will be available at: http://localhost:3000

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support the Project

If you find this project helpful, consider:

- ⭐ Starring the repository
- 🍕 [Buying me a coffee](https://www.buymeacoffee.com/onlymar)
- 🐛 Contributing to the codebase
- 📢 Sharing with others

## Author

**Omar Alhami (Mar)**
- Website: [so-creatvetech.com](https://so-creatvetech.com)
- GitHub: [@only-mar](https://github.com/only-mar)
- Email: omar.alhami@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Hugging Face Transformers](https://huggingface.co/transformers/) for the BART model
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
