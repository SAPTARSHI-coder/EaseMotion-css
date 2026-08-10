# Animated File Upload — Issue #7414

## Overview

Drag-and-drop file upload zone with visual feedback: border glow on drag, bounce animation, progress bar, success/error states, and file list with remove.

## Features

- Dashed-border drop zone with centered icon
- Drag-over: primary border + background glow + icon bounce animation
- File list with icon, name, size, and remove button
- Upload progress bar (simulated)
- Success state (green checkmark)
- Error state (red border + shake animation)
- Accepts multiple files
- Click-to-browse fallback

## Usage

```html
<div class="ease-upload-zone" id="dropZone">
  <div class="ease-upload-icon">📁</div>
  <div class="ease-upload-text">Drag & drop files here</div>
  <div class="ease-upload-hint">or click to browse</div>
  <input type="file" id="fileInput" multiple style="display: none">
</div>
<ul class="ease-upload-files" id="fileList"></ul>
```

## Files

- `demo.html` — Interactive upload zone with file list and progress simulation
- `style.css` — Drop zone, animations, file items, progress bar
- `README.md` — This documentation
