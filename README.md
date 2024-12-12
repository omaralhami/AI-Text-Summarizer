# 🤖 AI Text Summarizer

> Transform long texts into concise, meaningful summaries powered by state-of-the-art AI technology.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://only-mar.github.io/AI-Text-Summarizer)
[![Backend API](https://img.shields.io/badge/Backend-API-blue)](https://ai-text-summarizer-api.onrender.com)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?logo=fastapi)](https://fastapi.tiangolo.com/)

![AI Text Summarizer Demo](https://github.com/only-mar/AI-Text-Summarizer/blob/main/image/image.png)

<div align="center">

**Love this project? Consider supporting its development!**

<a href="https://www.buymeacoffee.com/onlymar" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
</a>

</div>

## ✨ Features

- 🚀 **Instant Summarization**: Get quick summaries of long articles, documents, or any text
- 🎯 **Smart Length Control**: Customize summary length to your needs
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🌙 **Dark Mode**: Easy on the eyes with automatic theme detection
- 🔄 **Real-time Processing**: See your summaries as they're generated
- 📋 **Copy to Clipboard**: One-click copying of generated summaries

## 🛠️ Tech Stack

### Frontend
- React.js with Hooks
- Tailwind CSS for styling
- Heroicons for beautiful icons
- Axios for API communication

### Backend
- FastAPI for high-performance API
- Hugging Face Transformers for AI model
- DistilBART CNN for efficient summarization
- Python 3.9+ for modern features

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ for frontend
- Python 3.9+ for backend
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/only-mar/AI-Text-Summarizer.git
   cd AI-Text-Summarizer
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn app:app --reload --port 8080
   ```

3. **Set up the frontend**
   ```bash
   cd frontend-new
   npm install
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - API Documentation: http://localhost:8080/docs

## 📖 How to Use

1. Visit the [live demo](https://only-mar.github.io/AI-Text-Summarizer)
2. Paste your text into the input area
3. Click "Summarize"
4. Get your concise summary instantly!
5. Use the copy button to save your summary

## 🌟 Features in Detail

### Smart Text Processing
- Handles long texts by automatically splitting into chunks
- Maintains context across paragraph breaks
- Optimized for news articles, documents, and general text

### Customization Options
- Adjust summary length (min/max words)
- Choose between concise or detailed summaries
- Copy results with one click

### Technical Highlights
- Efficient model loading and unloading
- Request queuing for optimal performance
- Error handling and recovery
- CORS-enabled for secure cross-origin requests

## 🔧 Configuration

### Environment Variables
- `PYTHON_VERSION`: 3.9.0 (backend)
- `PORT`: Dynamic port allocation
- Development/Production API URLs configured automatically

## 📱 Responsive Design

The application is fully responsive and works great on:
- 💻 Desktop browsers
- 📱 Mobile devices
- 📟 Tablets
- 🖥️ Various screen sizes

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for the amazing transformers library
- [FastAPI](https://fastapi.tiangolo.com/) for the modern web framework
- [React](https://reactjs.org/) for the powerful frontend library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 👨‍💻 Author

**Omar Alhami (Mar)**
- Website: [so-creativetech.com](https://so-creativetech.com)
- GitHub: [@only-mar](https://github.com/only-mar)
- Email: omar.alhami@gmail.com

## ❤️ Support the Project

If you find this project helpful, consider:

- ⭐ Starring the repository
- 🍕 Contributing to the codebase
- 📢 Sharing with others

<div align="center">

**Help keep this project alive!**

<a href="https://www.buymeacoffee.com/onlymar" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
</a>

</div>

---

<div align="center">
Made with ❤️ by <a href="https://github.com/only-mar">Mar</a>
</div>
