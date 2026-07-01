# FileUpload Dropzone with Ripple Progress Indicator (React Component)

A beautiful, interactive drag-and-drop file upload component for React. It features a completely dependency-free ripple progress indicator and leverages EaseMotion CSS utilities for highly polished state transitions (drag, upload, success, error).

## Features
- **Drag and Drop Interface:** Fully functional native HTML5 drag-and-drop API integration via React hooks, combined with a fallback hidden `<input>` for click-to-browse.
- **Ripple Progress Indicator:** An animated, pulsating ripple effect that serves as a modern alternative to standard progress bars, dynamically scaling alongside upload progress.
- **EaseMotion Integration:** Uses standard `ease-` classes for hover lifts (`ease-hover-lift`), state entrances (`ease-fade-in`, `ease-pop-in`), error states (`ease-shake`), and drag active states (`ease-pulse-border`).
- **Zero External Dependencies:** Built completely with pure React (`useState`, `useRef`, `useCallback`) and standard CSS. 

## Installation

1. Copy `FileUploadDropzone.jsx` into your React project components directory.
2. Copy `style.css` (or merge its contents into your project's stylesheet).
3. Handle the actual API file upload logic by replacing the simulated `setInterval` block inside the `validateAndProcessFile` method.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onUploadSuccess` | Function | - | Callback triggered when the upload successfully reaches 100%. Passes the `File` object. |
| `maxSizeMB` | Number | `5` | The maximum allowed file size in Megabytes. |
| `acceptedTypes` | String | `".pdf,.png,.jpg,.jpeg"` | Native HTML `accept` attribute string dictating allowed extensions. |

## Usage Example

```jsx
import React from 'react';
import FileUploadDropzone from './FileUploadDropzone';

function App() {
  const handleSuccess = (file) => {
    console.log("Successfully uploaded:", file.name);
    // You can trigger your global toast notifications here
  };

  return (
    <div style={{ padding: '50px', background: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <FileUploadDropzone 
        onUploadSuccess={handleSuccess} 
        maxSizeMB={10} 
        acceptedTypes=".pdf,.png,.jpg,.jpeg,.zip"
      />
    </div>
  );
}

export default App;
```
