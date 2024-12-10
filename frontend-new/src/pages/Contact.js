import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
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
              Contact Us
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have questions, suggestions, or found a bug? We'd love to hear from you! Here's how you can reach us:
                </p>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Developer Contact</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-400">
                      <p>
                        <span className="font-semibold">Name:</span>{" "}
                        Omar Alhami (Mar)
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a 
                          href="mailto:omar.alhami@gmail.com"
                          className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main"
                        >
                          omar.alhami@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Website:</span>{" "}
                        <a 
                          href="https://so-creatvetech.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main"
                        >
                          so-creatvetech.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Social Links</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-400">
                      <p>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a 
                          href="https://github.com/only-mar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main"
                        >
                          @only-mar
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Support the Project:</span>{" "}
                        <a 
                          href="https://www.buymeacoffee.com/onlymar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-main hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-main"
                        >
                          Buy me a coffee
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Project Repository</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This project is open source! You can find the code, report issues, or contribute on GitHub:
                    </p>
                    <a 
                      href="https://github.com/only-mar/AI-Text-Summarizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We typically respond to inquiries within 24-48 hours. For bug reports and feature requests, 
                      please use the GitHub issues page for better tracking.
                    </p>
                  </div>
                </div>
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

export default Contact; 