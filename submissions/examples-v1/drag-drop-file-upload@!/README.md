# Drag & Drop File Upload with Preview

This is a self-contained example demonstrating how to create a modern, interactive file upload interface with drag-and-drop functionality, file previews, progress bars, and smooth animations using minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎯 **Drag & Drop Zone:** Visual feedback when dragging files over the drop zone.
- 📁 **Multiple File Support:** Upload multiple files at once.
- 🖼️ **Image Previews:** Automatic thumbnail generation for image files.
- 📊 **Progress Bars:** Animated progress indicators with shimmer effects.
- ✨ **Smooth Animations:** Fade-in, slide-out, and scale transitions.
- 🗑️ **Remove Files:** Individual file removal with smooth animations.
- 📏 **File Size Validation:** Automatic validation against max file size.
- 🚫 **Duplicate Detection:** Prevents adding the same file twice.
- ♿ **Fully Accessible:** Proper ARIA labels and keyboard navigation.
- 📱 **Responsive Design:** Adapts to mobile screens.
- 🎨 **File Type Icons:** Different icons for different file types.
- 🚀 **Loading States:** Button loading animation during upload.
- ✓ **Success Feedback:** Animated success message after upload.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the upload container HTML structure.
4. Include the JavaScript class at the bottom of your page.
5. Initialize: `const fileUpload = new FileUpload();`

## HTML Structure
```html
<div class="upload-container">
  <!-- Drop Zone -->
  <div class="drop-zone" id="dropZone">
    <input type="file" id="fileInput" class="drop-zone__input" multiple />
    <label for="fileInput" class="drop-zone__label">
      <div class="drop-zone__icon">
        <!-- Upload icon SVG -->
      </div>
      <h3 class="drop-zone__title">Drag & Drop files here</h3>
      <p class="drop-zone__subtitle">or click to browse</p>
    </label>
  </div>

  <!-- File List -->
  <div class="file-list" id="fileList"></div>

  <!-- Upload Actions -->
  <div class="upload-actions" id="uploadActions">
    <button class="btn btn--secondary" id="clearBtn">Clear All</button>
    <button class="btn btn--primary" id="uploadBtn">Upload Files</button>
  </div>
</div>