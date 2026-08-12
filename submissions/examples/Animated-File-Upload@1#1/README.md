# Animated File Upload Component (`ease-file-upload-xyz`)

A zero-dependency, CSS-only animated file upload component designed for the **EaseMotion CSS** framework. Perfect for drag-and-drop file uploads, progress indicators, and image previews.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native file input and CSS animations.
- **Animation-First**: Smooth drag-and-drop hover effects, bouncing upload icon, file list slide-in, and image preview scale animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic drag-drop zone, compact button, and image upload with preview grid.
- **File List**: Animated file items with progress bars, status indicators, and remove buttons.
- **State Support**: Uploading, success, and error states with distinct visual indicators.
- **Image Previews**: Grid layout with hover-reveal remove buttons.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Drag & Drop Upload
```html
<div class="ease-file-upload-xyz">
  <input type="file" id="file-input" class="ease-file-upload-xyz-input" multiple>
  <label for="file-input" class="ease-file-upload-xyz-dropzone">
    <div class="ease-file-upload-xyz-icon">
      <!-- SVG icon here -->
    </div>
    <div class="ease-file-upload-xyz-text">
      <strong>Drag & drop files here</strong>
      <span>or click to browse</span>
    </div>
    <div class="ease-file-upload-xyz-hint">
      Supports: JPG, PNG, PDF (Max 10MB)
    </div>
  </label>
</div>