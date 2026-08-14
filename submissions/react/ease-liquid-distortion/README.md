# React SVG Liquid Distortion

When hovering an image on an Awwwards-winning website, seeing it ripple or distort as if underwater is a massive premium flex. This is almost exclusively done by importing massive WebGL libraries like Three.js and writing complex GLSL fragment shaders.

This submission demonstrates how to bypass WebGL entirely, utilizing native DOM SVG Filters injected via React to achieve the exact same liquid distortion effect seamlessly.

---

## 🏛️ The Architecture

### 1. The Invisible SVG Engine
Instead of rendering a `<canvas>`, we render a tiny, invisible `<svg>` element directly into the DOM tree of our React component. Inside this SVG, we define a custom `<filter>` with two critical primitives:

- **`<feTurbulence>`**: Generates a field of procedural Perlin noise (static).
- **`<feDisplacementMap>`**: Takes the pixels of whatever it's applied to, and physically shifts their X and Y coordinates based on the turbulence noise!

```jsx
<svg style={{ position: 'absolute', width: 0, height: 0 }}>
  <filter id={filterId}>
    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.015" numOctaves="3" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale={scale} />
  </filter>
</svg>
```

### 2. Linking to the Image
To apply this invisible SVG filter to our HTML `<img>`, we simply reference the ID of the filter in the image's CSS!
```css
.my-image {
    filter: url(#my-custom-filter);
}
```
*Note: Because React might render multiple LiquidImages on the same page, we generate a unique `filterId` for each component using `Math.random()` to prevent them from conflicting!*

### 3. The 60fps Physics Lerp
When the user hovers, we don't want the distortion to snap instantly. We want it to ease in like a fluid.
We use a React `useState` to track the `scale` of the displacement map. On hover, we use `requestAnimationFrame` and a linear interpolation (lerp) mathematical function to smoothly transition the scale from `0` to `40`. This creates a buttery smooth, 60fps rippling animation without any CSS `transition` jitters.

---

## 💻 Usage

Drop the component into your React app. You can control the intensity of the warp using the `hoverDistortion` prop!

```jsx
import { LiquidImage } from '@easemotion/react';

function App() {
  return (
    <LiquidImage 
      src="/my-photo.jpg"
      hoverDistortion={50} // Higher = more aggressive warping!
    />
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of external physics or WebGL rendering libraries.
- **Battery Drain:** WebGL constantly re-renders the entire canvas every frame. Our approach uses native SVG filters which are heavily optimized by the browser's 2D rendering engine.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in CSS media query that strips the `filter: url()` entirely, safely freezing the image in its original state.
