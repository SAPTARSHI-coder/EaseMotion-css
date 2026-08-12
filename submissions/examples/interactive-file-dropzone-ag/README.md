# Interactive SaaS File Upload Dropzone

A modern, responsive, and glassmorphic file drag-and-drop upload component built with EaseMotion CSS utility principles.

## Features

- **Glassmorphic Aesthetic:** Styled with backdrop blur filters, glowing gradient borders, and dark-mode themes.
- **Drag & Drop Interactions:** Includes smooth hover, focus-visible, and `.is-dragover` active pulse animations.
- **Animated Progress Bars:** Features striped animated CSS progress bars (`@keyframes stripeMove`) for uploading states.
- **Micro-Interactions:** Floating cloud upload icon, smooth pop-in file card entrance transitions, and interactive remove triggers.
- **Pure JavaScript Interactivity:** Uses vanilla JS solely for drag events and state class toggles with zero external dependencies.

## Usage

```html
<div class="dropzone" id="dropzone">
  <div class="dropzone-pulse-glow"></div>
  <div class="dropzone-content">
    <div class="cloud-icon-wrapper">...</div>
    <h3>Drag & drop files here</h3>
    <label for="file-input" class="browse-btn">Browse Files</label>
  </div>
</div>
```

## Structure

```
interactive-file-dropzone-ag/
├── demo.html
├── style.css
├── script.js
└── README.md
```

## Why is it useful?

File upload dropzones are essential components in dashboard, cloud storage, and SaaS applications. This example showcases how EaseMotion CSS keyframes, backdrop blurs, and micro-interactions can elevate standard file uploads into a polished user experience.
