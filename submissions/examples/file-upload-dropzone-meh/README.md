# File Upload Dropzone

A pure CSS file upload dropzone component with multiple visual states — default, drag-over, uploading with progress bar, success with file list, and error with failure indicators.

## What It Does

Creates a styled file upload dropzone with:
- 📁 **Default state** — dashed border with upload icon
- 🎯 **Drag-over state** — pulsing border and bouncing icon
- ⏳ **Uploading state** — animated progress bar with shimmer effect
- ✅ **Success state** — green border with file list and checkmarks
- ❌ **Error state** — red border with shake animation and error messages

## How to Use

```html
<!-- Default Dropzone -->
<div class="dropzone dropzone-default">
  <div class="dropzone-content">
    <div class="dropzone-icon">📤</div>
    <h3>Upload Your Files</h3>
    <p>Drag & drop files here or click to browse</p>
    <span class="dropzone-hint">Max file size: 10MB</span>
  </div>
  <input type="file" class="dropzone-input" multiple>
</div>

<!-- Drag Over -->
<div class="dropzone dropzone-dragover">...</div>

<!-- Uploading with Progress -->
<div class="dropzone dropzone-uploading">
  ...
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  <span class="progress-text">65% completed</span>
</div>

<!-- Success with File List -->
<div class="dropzone dropzone-success">
  ...
  <div class="file-list">
    <div class="file-item">
      <span class="file-icon">📄</span>
      <span class="file-name">document.pdf</span>
      <span class="file-size">2.4 MB</span>
      <span class="file-status done">✓</span>
    </div>
  </div>
</div>

<!-- Error State -->
<div class="dropzone dropzone-error">
  ...
  <div class="file-item error-item">
    ...
    <span class="file-status fail">✗</span>
  </div>
  <span class="error-msg">video.mp4 exceeds 10MB limit</span>
</div>