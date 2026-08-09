# React FileUpload Dropzone with Ripple Progress Indicator

## Overview

A reusable React component that provides a simple file upload dropzone with a simulated upload progress bar and a ripple animation when the upload completes. The component uses React hooks and EaseMotion CSS utility classes.

---

## Features

- 📂 File selection
- 📊 Upload progress indicator
- 🌊 Ripple animation on completion
- ✨ EaseMotion CSS animations
- ⚛️ Built with React Hooks
- 🚫 No external dependencies

---

## Installation

Copy the `DropzoneRipple.jsx` component into your React project.

```jsx
import DropzoneRipple from "./DropzoneRipple";
```

---

## Usage

```jsx
function App() {
  return (
    <div>
      <DropzoneRipple />
    </div>
  );
}

export default App;
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| None | - | - | This component does not require any props. |

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-scale-in`
- `ease-hover-lift`

---

## Technologies Used

- React
- React Hooks (`useState`)
- EaseMotion CSS

---

## Folder Structure

```
react-fileupload-dropzone-with-ripple-progress-indicator/
├── DropzoneRipple.jsx
└── README.md
```

---

## Preview

- Drag and drop / choose a file
- Displays selected file name
- Simulates upload progress
- Shows ripple animation after upload completion
- Displays "Upload Complete" message