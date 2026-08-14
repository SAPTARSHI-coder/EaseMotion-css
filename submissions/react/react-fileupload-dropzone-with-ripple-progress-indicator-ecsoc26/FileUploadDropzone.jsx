import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FileUploadDropzone.css';

/**
 * FileUploadDropzone Component
 * Renders an interactive drag-and-drop file upload zone complete with a pulsating
 * ripple progress indicator, size filters, simulated progression, and keyboard accessibility.
 *
 * @param {Object} props
 * @param {number} [props.maxFileSize=10485760] - Maximum allowed file size in bytes (default: 10MB)
 * @param {Array} [props.allowedTypes=['image/*', 'application/pdf']] - Allowed MIME patterns
 * @param {string} [props.accentColor='#3b82f6'] - Highlight border and progress ripple color
 * @param {string} [props.theme='dark'] - UI layout theme: 'dark' | 'light' | 'glass'
 * @param {Function} [props.onUploadStart] - Callback triggered when file begins upload simulation
 * @param {Function} [props.onUploadSuccess] - Callback when file finishes upload simulation
 */
export default function FileUploadDropzone({
  maxFileSize = 10485760,
  allowedTypes = ['image/*', 'application/pdf'],
  accentColor = '#3b82f6',
  theme = 'dark',
  onUploadStart,
  onUploadSuccess
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const fileInputRef = useRef(null);
  const dropzoneRef = useRef(null);

  // Spotlight mouse variable coordinate update handler
  const handleMouseMove = (e) => {
    if (dropzoneRef.current) {
      const rect = dropzoneRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      dropzoneRef.current.style.setProperty('--mouse-x', `${x}px`);
      dropzoneRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Convert bytes size helper (e.g. 1048576 -> "1.00 MB")
  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  // Validate file parameters
  const validateFile = (file) => {
    if (file.size > maxFileSize) {
      setErrorMessage(`File exceeds the limit of ${formatBytes(maxFileSize)}.`);
      return false;
    }

    const fileType = file.type;
    const isAllowed = allowedTypes.some((pattern) => {
      if (pattern.endsWith('/*')) {
        const category = pattern.split('/')[0];
        return fileType.startsWith(`${category}/`);
      }
      return pattern === fileType;
    });

    if (!isAllowed) {
      setErrorMessage('Unsupported file format. Please upload PDF or image.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  // Process files uploads
  const handleFiles = (incomingFiles) => {
    const validFiles = Array.from(incomingFiles).filter(validateFile);
    if (validFiles.length === 0) return;

    const newFiles = validFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: file.size,
      progress: 0,
      status: 'uploading'
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    
    if (onUploadStart) {
      onUploadStart(newFiles);
    }

    // Simulate progress increments for each file
    newFiles.forEach((f) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 15) + 5;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setFiles((prev) =>
            prev.map((item) =>
              item.id === f.id ? { ...item, progress: 100, status: 'success' } : item
            )
          );
          if (onUploadSuccess) onUploadSuccess(f);
        } else {
          setFiles((prev) =>
            prev.map((item) =>
              item.id === f.id ? { ...item, progress: currentProgress } : item
            )
          );
        }
      }, 300);
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current.click();
    }
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          bg: '#ffffff',
          border: '2px dashed #cbd5e1',
          text: '#0f172a',
          muted: '#64748b',
          cardBg: '#f8fafc',
          cardBorder: '#e2e8f0',
          spotlightColor: 'rgba(15, 23, 42, 0.02)'
        };
      case 'glass':
        return {
          bg: 'rgba(15, 23, 42, 0.55)',
          border: '2px dashed rgba(255, 255, 255, 0.18)',
          text: '#f8fafc',
          muted: '#94a3b8',
          cardBg: 'rgba(255, 255, 255, 0.02)',
          cardBorder: 'rgba(255, 255, 255, 0.04)',
          backdropBlur: '12px',
          spotlightColor: 'rgba(255, 255, 255, 0.025)'
        };
      case 'dark':
      default:
        return {
          bg: '#0b0f19',
          border: '2px dashed #1e293b',
          text: '#f8fafc',
          muted: '#6b7280',
          cardBg: '#0f172a',
          cardBorder: '#1e293b',
          spotlightColor: 'rgba(255, 255, 255, 0.015)'
        };
    }
  };

  const styleTheme = getThemeStyles();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '420px',
        boxSizing: 'border-box'
      }}
    >
      {/* File Dropzone area */}
      <div
        ref={dropzoneRef}
        onMouseMove={handleMouseMove}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="upload-dropzone-container"
        style={{
          backgroundColor: styleTheme.cardBg,
          border: isDragActive ? `2px dashed ${accentColor}` : styleTheme.border,
          borderRadius: '24px',
          padding: '2.5rem 1.5rem',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          boxShadow: isDragActive ? `0 0 25px ${accentColor}18` : 'none',
          backgroundImage: `radial-gradient(circle 120px at var(--mouse-x, 0) var(--mouse-y, 0), ${styleTheme.spotlightColor}, transparent)`
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          accept={allowedTypes.join(',')}
          style={{ display: 'none' }}
        />

        {/* Dropzone Icons visual */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: `${accentColor}10`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            color: accentColor,
            border: `1.5px solid ${accentColor}25`
          }}
        >
          ⏏
        </div>

        {/* Labels info */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: styleTheme.text }}>
            {isDragActive ? 'Drop your files here' : 'Drag & drop files or click'}
          </span>
          <span style={{ fontSize: '0.75rem', color: styleTheme.muted, fontWeight: 600 }}>
            Supports PDF and Images up to {formatBytes(maxFileSize)}
          </span>
        </div>
      </div>

      {/* Error message alert */}
      {errorMessage && (
        <div
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            backgroundColor: '#ef444415',
            border: '1px solid #ef444430',
            color: '#f87171',
            fontSize: '0.8rem',
            fontWeight: 600,
            textAlign: 'left'
          }}
        >
          ⚠️ {errorMessage}
        </div>
      )}

      {/* Files List containing ripple progress indicator rings */}
      {files.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {files.map((file) => (
            <div
              key={file.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: '16px',
                backgroundColor: styleTheme.cardBg,
                border: `1px solid ${styleTheme.cardBorder}`,
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0, flex: 1 }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: styleTheme.text,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {file.name}
                </span>
                <span style={{ fontSize: '0.72rem', color: styleTheme.muted, fontWeight: 600 }}>
                  {formatBytes(file.size)}
                </span>
              </div>

              {/* Ripple progress indicator visual widget */}
              <div style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {file.status === 'uploading' && (
                  <>
                    <span className="ripple-circle" style={{ borderColor: accentColor }} />
                    <span className="ripple-circle ripple-delay-1" style={{ borderColor: accentColor }} />
                  </>
                )}
                
                {/* Numeric completion overlays */}
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: file.status === 'success' ? '#10b981' : styleTheme.text,
                    zIndex: 2,
                    fontFamily: '"Fira Code", monospace'
                  }}
                >
                  {file.status === 'success' ? '✓' : `${file.progress}%`}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Default props values definition
FileUploadDropzone.defaultProps = {
  maxFileSize: 10485760,
  allowedTypes: ['image/*', 'application/pdf'],
  accentColor: '#3b82f6',
  theme: 'dark'
};

// React PropTypes validation schema keys definitions
FileUploadDropzone.propTypes = {
  maxFileSize: PropTypes.number,
  allowedTypes: PropTypes.arrayOf(PropTypes.string),
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass']),
  onUploadStart: PropTypes.func,
  onUploadSuccess: PropTypes.func
};
