import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="flex-grow relative z-10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <Link 
                to="/" 
                className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-main to-primary-dark bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Overview</h2>
                <p>
                  At AI Text Summarizer, we take your privacy seriously. This privacy policy describes how we handle information when you use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Data Collection</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>We do not store any text submitted for summarization</li>
                  <li>No personal information is collected</li>
                  <li>We don't use cookies or tracking mechanisms</li>
                  <li>All processing is done server-side and immediately discarded</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">How We Process Your Text</h2>
                <p>
                  When you submit text for summarization:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Text is sent securely to our servers</li>
                  <li>Processed in real-time using our AI model</li>
                  <li>Summary is generated and returned to you</li>
                  <li>Both original text and summary are immediately deleted</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Third-Party Services</h2>
                <p>
                  We use the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Hugging Face Transformers for AI processing</li>
                  <li>GitHub Pages for hosting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Updates to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our privacy policy, please{" "}
                  <Link to="/contact" className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main">
                    contact us
                  </Link>
                  .
                </p>
              </section>
            </div>
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

export default PrivacyPolicy; 