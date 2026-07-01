# React Component: FileUpload Dropzone with Ripple Progress Indicator (#28248)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a highly interactive file upload zone. It features physical drag-state physics, a simulated upload progress state with a CSS-driven expanding ripple, and spring-loaded success/error states.

## 📦 What's included?

- `FileDropzone.jsx`: The React component managing native drag-and-drop event listeners (`onDragEnter`, `onDragLeave`, `onDrop`), file validation (size limits), and a simulated progress interval loop to demonstrate the `UPLOADING` state.
- `style.css`: The CSS stylesheet powering the tactile border transforms, the infinite panning dot background pattern, the component state swapping animations (`easeDropzoneContentIn`), and the data-driven ripple scale effect.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone.

## 🛠 Features

- **Tactile Drag Physics**: Dragging a file over the zone triggers a `scale(1.02)` border expansion, turns the zone blue, and activates an infinite panning animation on a previously invisible dot-matrix background.
- **Data-Driven Ripple Indicator**: During upload, a CSS circle visually expands its `transform: scale()` while fading its `opacity`, bound directly to the React `progress` state integer (0 to 100). This avoids heavy canvas drawing while looking premium.
- **State Machine Rendering**: The component cleanly switches between 4 views (`IDLE`, `UPLOADING`, `SUCCESS`, `ERROR`). Each state change triggers a `cubic-bezier` pop-in animation for the new UI elements.
- **Accessibility & Fallback**: The native `<input type="file" />` is hidden but fully functional, triggered via the "Browse Files" button for users who cannot or prefer not to drag-and-drop.

## 🚀 How to use

1. Copy `FileDropzone.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Use the component and attach an `onFileDrop` handler to route the file object to your actual backend API (like AWS S3 or a Node server).

```jsx
import React from 'react';
import FileDropzone from './FileDropzone';
import './style.css'; 

const MediaUploader = () => {
  const handleUpload = (file) => {
    // Note: The component simulates progress for UI feedback. 
    // In a real app, you would pass the file to your API here.
    console.log("Ready to upload to server:", file.name, file.size);
  };

  return (
    <div style={{ padding: '40px' }}>
      <FileDropzone 
        accept="image/png, image/jpeg" 
        maxSize={5 * 1024 * 1024} // 5MB
        onFileDrop={handleUpload}
      />
    </div>
  );
};

export default MediaUploader;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

Standard file inputs are notoriously difficult to style and feel detached from the rest of the application. This dropzone embraces physical response: it physically swells up (`scale(1.02)`) when a file hovers over it, giving immediate validation. The progress state replaces standard loading bars with a breathing, expanding ripple whose velocity is tied directly to the upload progress percentage, providing organic feedback to a technical process.
