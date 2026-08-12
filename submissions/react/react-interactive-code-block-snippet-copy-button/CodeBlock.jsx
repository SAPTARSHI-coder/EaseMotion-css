import React, { useState, useEffect } from 'react';

/**
 * Interactive Code Block with Snippet Copy Button
 * 
 * @param {String} code - The code snippet to display and copy
 * @param {String} language - The programming language for syntax styling (optional)
 * @param {String} filename - Optional filename to display in the header
 */
const CodeBlock = ({ code, language = 'javascript', filename }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="ease-code-block-wrapper">
      {/* Optional Header (e.g. for filename) */}
      {filename && (
        <div className="ease-code-block-header">
          <span className="ease-code-filename">{filename}</span>
          <span className="ease-code-language">{language}</span>
        </div>
      )}

      <div className="ease-code-block-body">
        <pre className="ease-code-pre">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>

        <button 
          className={`ease-code-copy-btn ${isCopied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          title="Copy code"
        >
          <div className="ease-code-copy-icon-wrapper">
            {/* Default Copy Icon */}
            <svg 
              className="ease-code-icon-copy" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            
            {/* Success Check Icon */}
            <svg 
              className="ease-code-icon-check" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="ease-code-copy-text">
            {isCopied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
