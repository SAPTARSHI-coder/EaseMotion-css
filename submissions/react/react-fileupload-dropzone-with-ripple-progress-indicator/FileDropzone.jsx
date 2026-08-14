import React, { useState, useRef, useCallback } from 'react';

/**
 * FileUpload Dropzone with Ripple Progress Indicator
 * 
 * @param {Function} onFileDrop - Callback when a file is successfully uploaded (receives the file object)
 * @param {String} accept - Accepted file types (e.g. "image/*, .pdf")
 * @param {Number} maxSize - Maximum file size in bytes (default 5MB)
 */
const FileDropzone = ({ 
  onFileDrop, 
  accept = "*", 
  maxSize = 5 * 1024 * 1024 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileState, setFileState] = useState('IDLE'); // IDLE, UPLOADING, SUCCESS, ERROR
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  // --- Drag and Drop Handlers ---
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (fileState === 'IDLE' || fileState === 'ERROR') {
      setIsDragging(true);
    }
  }, [fileState]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const processFile = (file) => {
    if (!file) return;

    if (file.size > maxSize) {
      setFileState('ERROR');
      setErrorMessage(`File exceeds ${(maxSize / 1024 / 1024).toFixed(1)}MB limit.`);
      return;
    }

    setFileName(file.name);
    setFileState('UPLOADING');
    setProgress(0);

    // Mock upload progression
    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setFileState('SUCCESS');
          if (onFileDrop) onFileDrop(file);
          return 100;
        }
        // Random increment between 5 and 15
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 200);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (fileState === 'UPLOADING') return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]); // Only process the first file for this demo
    }
  }, [fileState]);

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const resetState = (e) => {
    e.stopPropagation();
    setFileState('IDLE');
    setProgress(0);
    setErrorMessage('');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // --- Render Helpers ---

  const renderContent = () => {
    if (fileState === 'UPLOADING') {
      return (
        <div className="ease-dropzone-content uploading">
          {/* The Ripple Progress Indicator */}
          <div className="ease-ripple-container">
            <div className="ease-ripple" style={{ transform: `scale(${progress / 100})`, opacity: 1 - (progress / 100) }}></div>
            <div className="ease-progress-text">{progress}%</div>
          </div>
          <p className="ease-filename">{fileName}</p>
          <p className="ease-status-text">Uploading...</p>
        </div>
      );
    }

    if (fileState === 'SUCCESS') {
      return (
        <div className="ease-dropzone-content success">
          <div className="ease-status-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="ease-filename">{fileName}</p>
          <p className="ease-status-text">Upload complete!</p>
          <button className="ease-dropzone-btn secondary" onClick={resetState}>Upload Another</button>
        </div>
      );
    }

    if (fileState === 'ERROR') {
      return (
        <div className="ease-dropzone-content error">
          <div className="ease-status-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <p className="ease-error-message">{errorMessage}</p>
          <button className="ease-dropzone-btn" onClick={resetState}>Try Again</button>
        </div>
      );
    }

    // Default IDLE State
    return (
      <div className="ease-dropzone-content idle">
        <div className="ease-upload-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        <p className="ease-dropzone-title">Drag & drop your file here</p>
        <p className="ease-dropzone-subtitle">or</p>
        <button 
          className="ease-dropzone-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Browse Files
        </button>
        <p className="ease-dropzone-hint">Max file size: {(maxSize / 1024 / 1024).toFixed(0)}MB</p>
      </div>
    );
  };

  return (
    <div 
      className={`ease-dropzone-wrapper 
        ${isDragging ? 'is-dragging' : ''} 
        ${fileState.toLowerCase()}
      `}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileInput} 
        accept={accept}
        style={{ display: 'none' }} 
        aria-hidden="true"
      />
      
      {/* Dynamic Background Pattern overlay that animates on drag */}
      <div className="ease-dropzone-bg-pattern"></div>

      {renderContent()}
    </div>
  );
};

export default FileDropzone;
