# React Magnetic Button

Premium agency sites (like Framer or Vercel) often feature "magnetic" buttons — as your cursor gets close, the button itself gets slightly pulled toward the cursor, creating a highly tactile, physical feel.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `MagneticButton.jsx` and `style.css` into your components directory.

## Features
- **Dynamic Pull Strength:** Adjust how aggressively the button tracks the cursor.
- **Smart Transitions:** Snaps responsively while the user is actively hovering, but smoothly springs back to the center origin when the cursor leaves.
- **Hardware Accelerated:** React handles the vector math, but passes the exact X/Y offsets to CSS Custom Properties, allowing native CSS `transform: translate()` to handle the actual 60fps movement.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `children` | `ReactNode` | Required | The content (e.g., your button, icon, or text) to make magnetic. |
| `pullStrength`| `number` | `0.3` | Multiplier for how far the button moves (0.1 to 1.0). Higher is further. |
| `className` | `string` | `''` | Optional extra classes for the wrapper. |

## Usage

```jsx
import React from 'react';
import MagneticButton from './MagneticButton';

export default function App() {
  return (
    <div style={{ padding: '100px', display: 'flex', gap: '40px' }}>
      
      {/* Standard Pull */}
      <MagneticButton>
        <button className="my-custom-btn">Hover Me</button>
      </MagneticButton>

      {/* Stronger Pull */}
      <MagneticButton pullStrength={0.6}>
        <div className="icon-circle">🚀</div>
      </MagneticButton>
      
    </div>
  );
}
```

## Why it fits EaseMotion CSS
While creating a magnetic effect absolutely requires JavaScript to track the exact `e.clientX` and `e.clientY` bounds relative to the button's center, actually moving the DOM node using JavaScript state causes jitter and dropped frames. 

This wrapper perfectly blends React logic with EaseMotion's CSS-first philosophy. It calculates the offset in React, but immediately hands those numbers off to CSS variables (`--mx`, `--my`). The browser's native hardware-accelerated rendering engine then takes over, translating the node smoothly and handling the cubic-bezier spring animations natively when the hover state changes.
