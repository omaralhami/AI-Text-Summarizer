import React, { useState, useEffect } from 'react';
import { 
  SunIcon, 
  MoonIcon,
  ClipboardIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Import pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

function MainContent() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');

  useEffect(() => {
    setMounted(true);
    checkServerHealth();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const checkServerHealth = async () => {
    try {
      const response = await axios.get('http://localhost:8002/api/health');
      setServerStatus(response.data.status);
    } catch (error) {
      setServerStatus('unhealthy');
      console.error('Server health check failed:', error);
    }
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    setError(null);
    setSummary('');

    try {
      const response = await axios.post('http://localhost:8002/api/summarize', {
        text: inputText,
        max_length: 130,
        min_length: 30
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        setError(error.response.data.detail || 'Failed to generate summary. Please try again.');
      } else if (error.request) {
        setError('Cannot connect to the server. Please check if the server is running.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleClear = () => {
    setInputText('');
    setSummary('');
    setError(null);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="flex-grow relative z-10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                     shadow-lg hover:shadow-xl transform hover:scale-110
                     transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500 animate-pulse-slow" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Header */}
          <div className={`text-center mb-12 ${mounted ? 'animate-slide-down' : 'opacity-0'}`}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-main to-primary-dark 
                         dark:from-primary-light dark:to-primary-main bg-clip-text text-transparent 
                         mb-4 transform hover:scale-105 transition-transform duration-300">
              AI Text Summarizer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg animate-fade-in">
              Transform long texts into concise, meaningful summaries
            </p>
          </div>

          {/* Server Status Alert */}
          {serverStatus === 'unhealthy' && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-100 
                           rounded-lg animate-fade-in">
              ⚠ The summarization service is currently unavailable. Please try again later.
            </div>
          )}

          {/* Main Content */}
          <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl 
                        shadow-lg hover:shadow-xl p-8 transition-all duration-300
                        ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Input Section */}
            <div className="mb-6">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-48 p-4 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-gray-100 
                         focus:ring-2 focus:ring-primary-main dark:focus:ring-primary-light focus:border-transparent
                         transition-all duration-300 hover:shadow-md
                         transform hover:scale-[1.01]"
                placeholder="Paste your text here..."
              />
              {error && (
                <p className="mt-2 text-red-500 dark:text-red-400 animate-fade-in">
                  {error}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleSummarize}
                disabled={loading || !inputText.trim() || serverStatus === 'unhealthy'}
                className="px-8 py-3 bg-gradient-to-r from-primary-main to-primary-dark 
                         hover:from-primary-dark hover:to-primary-main
                         text-white rounded-lg shadow-md hover:shadow-lg
                         transform hover:scale-105 hover:-translate-y-1
                         transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2
                         dark:focus:ring-offset-gray-800
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Summarizing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Summarize
                    </>
                  )}
                </span>
              </button>

              {inputText && (
                <button
                  onClick={handleClear}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           text-gray-700 dark:text-gray-300 rounded-lg
                           transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                           dark:focus:ring-offset-gray-800"
                >
                  <span className="flex items-center">
                    <XMarkIcon className="h-5 w-5 mr-2" />
                    Clear
                  </span>
                </button>
              )}
            </div>

            {/* Summary Section */}
            {summary && (
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Summary
                  </h2>
                  <button
                    onClick={() => handleCopy(summary)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                    title={copied ? 'Copied!' : 'Copy to clipboard'}
                  >
                    {copied ? (
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <ClipboardIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {summary}
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-sm bg-primary-main/10 text-primary-main 
                                 dark:text-primary-light rounded-full">
                    {summary.split(' ').length} words
                  </span>
                  <span className="px-3 py-1 text-sm bg-primary-main/10 text-primary-main 
                                 dark:text-primary-light rounded-full">
                    {Math.round((summary.length / inputText.length) * 100)}% of original
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 px-4 bg-gray-100 dark:bg-[#1e2837] relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2023 AI Text Summarizer. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Developed by{" "}
              <a
                href="https://github.com/only-mar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-main hover:text-primary-dark dark:hover:text-primary-light"
              >
                Omar Alhami (Mar)
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.buymeacoffee.com/onlymar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-main dark:hover:text-primary-light"
            >
              Support Project
            </a>
            <Link
              to="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-main dark:hover:text-primary-light"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-main dark:hover:text-primary-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App; 