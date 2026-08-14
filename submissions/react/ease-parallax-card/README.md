# React 3D Parallax Hover Card

Premium fintech, cryptocurrency, and gaming sites often feature high-end cards that "tilt" and track your mouse in 3D space as you hover over them, creating a physical sense of depth.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `ParallaxCard.jsx` and `style.css` into your components directory.

## Features
- **Precise Vector Math:** Calculates exactly where your cursor is relative to the exact center of the card.
- **Adjustable Boundaries:** Set a maximum tilt angle so the card doesn't flip over backward if the user moves their mouse rapidly.
- **Zero-Jitter Rendering:** React handles the math, but passes the raw calculated degrees directly to CSS Custom Properties, allowing native, hardware-accelerated `transform` to handle the actual 60fps rendering.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `children` | `ReactNode` | Required | The content (your card UI) to make 3D. |
| `tiltMaxAngleX`| `number` | `15` | Maximum tilt in degrees on the X-axis. |
| `tiltMaxAngleY`| `number` | `15` | Maximum tilt in degrees on the Y-axis. |
| `className` | `string` | `''` | Optional extra classes for the wrapper. |

## Usage

```jsx
import React from 'react';
import ParallaxCard from './ParallaxCard';

export default function App() {
  return (
    <div style={{ padding: '100px', display: 'flex', gap: '40px' }}>
      
      {/* Standard 15-degree tilt */}
      <ParallaxCard>
        <div className="demo-card">
          <h2>Pro Plan</h2>
          <p>$29/mo</p>
        </div>
      </ParallaxCard>

      {/* Extreme 30-degree tilt */}
      <ParallaxCard tiltMaxAngleX={30} tiltMaxAngleY={30}>
        <div className="demo-card">
          <h2>Enterprise Plan</h2>
          <p>$99/mo</p>
        </div>
      </ParallaxCard>
      
    </div>
  );
}
```

## Why it fits EaseMotion CSS
Achieving a 3D tilt effect requires JavaScript to read the raw `clientX` and `clientY` mouse bounds. However, most React libraries process this math and then use React state to constantly re-render inline styles directly onto the DOM node 60 times a second. This absolutely destroys performance on lower-end devices.

This wrapper flawlessly executes the EaseMotion hybrid philosophy. It calculates the normalized offset vectors in React, but instead of forcing a full DOM layout recalculation, it silently passes the calculated degrees (`--rx`, `--ry`) to the browser's CSS engine. The CSS engine then utilizes `will-change: transform` and `perspective` to render the 3D tilt entirely on the GPU, guaranteeing a premium, stutter-free experience.
