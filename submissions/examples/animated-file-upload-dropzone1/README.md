# Animated File Upload Dropzone

A clean, modern, and fully responsive **File Upload Dropzone** interface. This example demonstrates how to combine **EaseMotion CSS** for staggered list entrances and continuous icon pulsing with custom CSS transitions for the interactive dropzone state, creating a polished file management experience.

## 🚀 Features

- **Continuous Icon Animation**: Uses `ease-pulse` on the cloud icon to draw attention to the upload area.
- **Interactive Dropzone State**: The dropzone smoothly transitions its border, background, and scale when hovered or in an "active" drag-over state.
- **Staggered File List Entrance**: Uploaded files fade in sequentially using `ease-fade-in-up` and `ease-delay-*` for a premium, cascading effect.
- **Mock Progress Bars**: Visual indicators showing upload completion (100%, 75%, 40%) with smooth width transitions.
- **Spinning Loading Icons**: In-progress uploads feature a continuously spinning refresh icon using custom CSS keyframes.
- **Interactive Buttons**: Uses `ease-hover-grow` on the browse button and action icons for satisfying tactile feedback.
- **Fully Responsive**: The file list gracefully wraps on mobile devices, stacking the progress bar below the file info.

## 📂 File Structure

```text
submissions/examples/animated-file-upload-dropzone/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, dropzone states, and file list
└── README.md    # Documentation