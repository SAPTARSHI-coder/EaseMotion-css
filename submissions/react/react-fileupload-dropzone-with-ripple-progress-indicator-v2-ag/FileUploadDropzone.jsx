import React, { useState, useRef, useCallback } from 'react';
import './style.css'; 

/**
 * FileUpload Dropzone
 * A React component demonstrating interactive file uploads and an EaseMotion Ripple Progress indicator.
 */
const FileUploadDropzone = ({
  onUploadSuccess,
  maxSizeMB = 5,
  acceptedTypes = ".pdf,.png,.jpg,.jpeg"
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle, uploading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const validateAndProcessFile = (selectedFile) => {
    if (!selectedFile) return;

    // Validate Size limit
    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      setStatus('error');
      setErrorMessage(`File exceeds ${maxSizeMB}MB limit.`);
      return;
    }

    setFile(selectedFile);
    setStatus('uploading');
    setErrorMessage('');
    setProgress(0);

    // Simulate Network Upload Progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setStatus('success');
          if (onUploadSuccess) onUploadSuccess(selectedFile);
        }, 500);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 200);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setErrorMessage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="dropzone-wrapper ease-fade-in-up">
      <div 
        className={`dropzone-container ${isDragging ? 'dragging ease-pulse-border' : ''} ${status === 'uploading' ? 'uploading' : ''} ease-hover-lift`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => status === 'idle' && fileInputRef.current?.click()}
        role="button"
        tabIndex="0"
        aria-label="File upload dropzone"
      >
        <input 
          type="file"
          ref={fileInputRef}
          className="file-input-hidden"
          accept={acceptedTypes}
          onChange={handleChange}
        />

        {status === 'idle' && (
          <div className="dropzone-content idle-state ease-fade-in">
            <div className="upload-icon ease-bounce">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3>Drag & Drop your file here</h3>
            <p>or click to browse ({maxSizeMB}MB max)</p>
          </div>
        )}

        {status === 'uploading' && (
          <div className="dropzone-content uploading-state ease-fade-in">
            <div className="ripple-progress-container">
              {/* Dynamic Ripple Effect mapping to state */}
              <div className="ripple-ring ease-ripple" style={{ transform: `scale(${1 + (progress / 100) * 1.5})`, opacity: 1 - (progress / 100) }}></div>
              <div className="ripple-ring ease-ripple" style={{ animationDelay: '0.4s' }}></div>
              <div className="progress-text">{progress}%</div>
            </div>
            <h3 className="file-name truncate">{file.name}</h3>
            <p>Uploading...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="dropzone-content success-state ease-fade-in">
            <div className="success-icon ease-pop-in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="file-name truncate">{file.name}</h3>
            <p className="success-text">Upload Complete!</p>
            <button className="reset-btn ease-hover-glow" onClick={handleReset}>Upload Another</button>
          </div>
        )}

        {status === 'error' && (
          <div className="dropzone-content error-state ease-shake">
            <div className="error-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Upload Failed</h3>
            <p className="error-text">{errorMessage}</p>
            <button className="reset-btn error-btn ease-hover-glow" onClick={handleReset}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadDropzone;
