# File Upload Dropzone

## Overview

A self-contained file upload dropzone UI for modern SaaS dashboards, with a large drag-and-drop area, dashed border styling, upload icon, accepted file tags, and mock upload progress cards. This direct demo opens in the browser with no JavaScript.

## Features

- Pure HTML and CSS only
- Large drag-and-drop upload area with icon and dashed border
- Hover and focus visual state for interactive feel
- Accepted file tags: PNG, JPG, PDF, ZIP
- Upload progress mock cards with status badges
- Responsive layout for desktop and mobile
- Smooth glassy SaaS appearance

## Usage

```html
<link rel="stylesheet" href="style.css">
<main class="upload-panel">
  <header class="upload-header">
    <p class="eyebrow">Upload center</p>
    <h1>Drag & drop files</h1>
    <p class="upload-copy">Drop files to start uploading or click to select your documents. Supported types: PNG, JPG, PDF, ZIP.</p>
  </header>

  <section class="dropzone-area" tabindex="0">
    <div class="dropzone-icon">⤴</div>
    <h2>Drop files here</h2>
    <p>or browse to choose your upload</p>
    <div class="file-tags">
      <span>PNG</span>
      <span>JPG</span>
      <span>PDF</span>
      <span>ZIP</span>
    </div>
  </section>

  <section class="upload-status">
    <article class="upload-card">
      <div class="upload-card-top">
        <div>
          <p class="upload-title">Dashboard assets</p>
          <p class="upload-subtitle">Design system export (.zip)</p>
        </div>
        <span class="upload-badge badge-complete">Completed</span>
      </div>
      <div class="upload-bar">
        <span class="upload-progress progress-full"></span>
      </div>
    </article>
  </section>
</main>
```

## Why it fits EaseMotion CSS

This component uses only HTML and CSS, making it fully self-contained and easy to integrate into a SaaS dashboard UI. The design emphasizes clean motion, responsive layout, and visual hierarchy without JavaScript, aligning with EaseMotion CSS standards.
