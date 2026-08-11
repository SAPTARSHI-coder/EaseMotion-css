# React Component: Interactive Carousel Slider with Thumbnail Indicators (#28045)

A modular, copy-paste ready React component for the EaseMotion CSS framework that provides a fully interactive image slider complete with synchronized thumbnail navigation, smooth CSS-driven sliding animations, and pause-on-hover auto-play functionality.

## 📦 What's included?

- `Carousel.jsx`: The core React component utilizing React Hooks (`useState`, `useEffect`, `useCallback`) for state management.
- `style.css`: The raw CSS file powering the slider layout and smooth EaseMotion-style transitions.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Smooth Sliding**: Uses CSS `transform` and a tuned `cubic-bezier` for butter-smooth sliding between images.
- **Thumbnail Sync**: An interactive row of thumbnails below the main stage that indicates the active slide and allows direct navigation.
- **Auto-Play**: Automatically advances to the next slide after a configured interval.
- **Pause on Hover**: Auto-play temporarily pauses when the user hovers over the carousel to allow uninterrupted viewing.
- **Responsive**: Adapts gracefully to mobile screens, adjusting thumbnail sizes and permanently displaying navigation arrows on touch devices.
- **Zero External Dependencies**: Built entirely with standard React and CSS.

## 🚀 How to use

1. Copy `Carousel.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import Carousel from './Carousel';
import './style.css'; // Adjust path as needed

const App = () => {
  const images = [
    { url: '/images/slide1.jpg', alt: 'Slide 1' },
    { url: '/images/slide2.jpg', alt: 'Slide 2' },
    { url: '/images/slide3.jpg', alt: 'Slide 3' },
  ];

  return (
    <div className="container">
      {/* 
        images: Array of image objects
        autoPlayInterval: Time in ms between slides (0 to disable). Default is 5000.
      */}
      <Carousel images={images} autoPlayInterval={4000} />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** champions animation as a core component of the user experience, rather than an afterthought. Standard carousels often feel rigid or choppy. By shifting the heavy lifting of the sliding animation entirely to CSS `transform` (utilizing `will-change: transform` and a signature EaseMotion `cubic-bezier` curve), this React component achieves perfectly smooth 60fps transitions, ensuring a premium feel without heavy JavaScript animation libraries.
