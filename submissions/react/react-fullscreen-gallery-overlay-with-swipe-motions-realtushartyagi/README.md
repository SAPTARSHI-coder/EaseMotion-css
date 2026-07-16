# React Fullscreen Gallery Overlay with Swipe Motions

A modular, copy-paste ready React component that provides a beautiful, native-feeling fullscreen image gallery overlay. It features a backdrop blur (`backdrop-filter`), a spring-based scale-up entrance animation, interactive thumbnails, and mobile touch-swipe support powered by standard React synthetic events. Built entirely with React hooks and EaseMotion CSS utilities.

## 📦 Files Included
- `FullscreenGallery.jsx`: The isolated React component containing the overlay structure, state management, and swipe tracking logic.
- `style.css`: The stylesheet defining the backdrop blurs, spring animations, and swipe transitions.
- `demo.html`: A self-contained preview using Babel standalone.

## 🚀 Features

- **Backdrop Blur & Scale-Up**: Utilizes `backdrop-filter: blur(10px)` and an `@keyframes ease-scale-up` animation with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a premium entrance.
- **Swipe Support**: Tracks `onTouchStart`, `onTouchMove`, and `onTouchEnd` to determine left/right swipe intent (minimum 50px threshold), allowing natural mobile navigation without external libraries like `framer-motion` or `react-swipeable`.
- **Keyboard Navigation**: Press `ArrowRight`, `ArrowLeft`, and `Escape` to interact seamlessly.
- **Directional Swipe Animations**: When transitioning images, the CSS dynamically applies `animating-next` or `animating-prev` classes to slide the image out of the viewport in the correct direction, mimicking a native mobile gallery.
- **Scroll Lock**: Automatically disables `document.body` scrolling while the modal is open.

## 💻 Usage Example

```jsx
import React, { useState } from 'react';
import FullscreenGallery from './FullscreenGallery';
import './style.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const myImages = [
    { url: '/img/photo1.jpg', caption: 'Mountain View' },
    { url: '/img/photo2.jpg', caption: 'City Scape' }
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View Gallery</button>
      
      <FullscreenGallery 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={myImages}
        initialIndex={0}
      />
    </div>
  );
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about bridging the gap between raw CSS performance and interactive JavaScript logic.

By relying on React state strictly for indexing and CSS classes for the visual transitions (`animating-next`, `animating-prev`), we keep the animations hardware-accelerated. The component uses EaseMotion's signature spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)` to ensure the overlay's entrance and the thumbnail bar's slide-up feel physically bouncy and organic rather than rigid and linear. The lack of external dependencies respects the project's goal of lightweight, copy-paste components.
