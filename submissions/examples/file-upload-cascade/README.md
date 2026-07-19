# File Upload Component

A drag-and-drop file upload component with visual feedback, file preview, and multiple style variants using CSS.

## What does this do?

This creates file upload components with dashed border styling, drag-over visual feedback using CSS `:hover` and `:focus` states, file preview grid layout, and multiple size and style variants.

## How is it used?

```html
<div class="file-upload">
  <input type="file" multiple accept="image/*">
  <span class="file-upload-icon">📁</span>
  <h3 class="file-upload-title">Drag & Drop Files</h3>
  <p class="file-upload-description">or click to browse</p>
  <span class="file-upload-hint">PNG, JPG, GIF up to 10MB</span>
</div>

<!-- Size variants -->
<div class="file-upload file-upload-sm">...</div>
<div class="file-upload file-upload-lg">...</div>

<!-- Style variants -->
<div class="file-upload file-upload-solid">...</div>
<div class="file-upload file-upload-minimal">...</div>
```

Drag-over feedback uses CSS classes:

```css
.file-upload.drag-over {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
  transform: scale(1.02);
}
```

## Why is it useful?

File upload is a fundamental form component for document submission, image uploads, and file management systems. The drag-and-drop styling with visual feedback provides better UX by clearly indicating when files can be dropped. The file preview grid layout using CSS allows users to see selected files before uploading. Multiple size and style variants make it versatile for different design contexts. The CSS-first approach for hover and focus states keeps the implementation lightweight, with minimal JavaScript only for file handling and preview generation. This component demonstrates modern form patterns and drag-and-drop interactions used in web applications.
