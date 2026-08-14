# React Component: Fullscreen Gallery Overlay with Swipe Motions (#28046)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a premium, immersive fullscreen image gallery lightbox complete with physics-based slide transitions, keyboard navigation, and mobile touch swipe support.

## 📦 What's included?

- `GalleryOverlay.jsx`: The React component managing modal visibility, array indexing, `ArrowLeft`/`ArrowRight` keyboard events, and mobile touch threshold logic (`onTouchStart`, `onTouchEnd`).
- `style.css`: The CSS stylesheet powering the frosted glass blur backdrop, `cubic-bezier` hover scales on buttons, and the high-friction directional slide animations.
- `demo.html`: A self-contained browser demo running the React component to showcase launching the overlay from a grid of thumbnails.

## 🛠 Features

- **Directional Slide Physics**: By tracking the `slideDirection` in React state ('next' vs 'prev'), the component dynamically applies `.slide-in-right` or `.slide-in-left` CSS classes. These classes use a `cubic-bezier(0.2, 0.8, 0.2, 1)` easing curve, creating a high-friction "skid" effect where the image enters fast but slows down gracefully to a halt.
- **Mobile Swipe Support**: The React component listens to `onTouchStart` and `onTouchEnd` events on the viewport. If the user swipes their finger horizontally past a 50px threshold, it triggers the next/prev image logic automatically. Arrow buttons are hidden on mobile devices via CSS media queries to prefer swiping.
- **Keyboard Navigation**: Pressing `ArrowRight` or `ArrowLeft` navigates the gallery. Pressing `Escape` closes the overlay.
- **Scroll Locking**: When opened, the component locks the `document.body` scroll to prevent the background page from moving.

## 🚀 How to use

1. Copy `GalleryOverlay.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of image objects and manage the `isOpen` state.

```jsx
import React, { useState } from 'react';
import GalleryOverlay from './GalleryOverlay';
import './style.css'; 

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const images = [
    { src: '/img1.jpg', alt: 'Photo 1', title: 'Sunset over mountains' },
    { src: '/img2.jpg', alt: 'Photo 2', title: 'City street at night' }
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>View Gallery</button>
      <GalleryOverlay 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        images={images} 
        initialIndex={0} 
      />
    </>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability. 

Standard web carousels and lightboxes often feel disconnected. When an image slides in with a linear `ease` transition, it feels robotic. 

By employing a strong `cubic-bezier(0.2, 0.8, 0.2, 1)` curve for the slide entrance and pairing it with a slight `scale(0.95)` to `scale(1)` pop, we mimic the physical momentum of a heavy object sliding into place on a table. The addition of native touch-swipe thresholds ensures the component feels like a native OS level interaction on mobile devices, aligning perfectly with the EaseMotion philosophy.
