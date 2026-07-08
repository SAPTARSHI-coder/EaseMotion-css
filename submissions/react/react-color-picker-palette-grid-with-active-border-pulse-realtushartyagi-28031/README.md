# React Color Picker Palette Grid with Active Border Pulse

A modular, highly accessible React component that renders a grid of color swatches. When a user selects a color, the active swatch triggers a continuous CSS keyframe border pulse animation, utilizing dynamic CSS variables to perfectly match the glow to the selected color.

## Files
- `ColorPickerPalette.jsx` – The React component containing the state management and JSX structure.
- `ColorPickerPalette.css` – The stylesheet containing the grid layout, hover micro-interactions, and the `@keyframes easeActiveBorderPulse` animation.

## How it works
This component leverages a combination of React state and dynamic CSS variables:
1. **State Management**: React tracks the `activeColor` string (e.g. `'#3b82f6'`). 
2. **Dynamic Variables**: Inline styles inject the raw color value into a custom CSS variable (`--swatch-glow-color`) on each button element.
3. **The Pulse Animation**: The `.ease-swatch-active` class applies an infinite keyframe animation (`easeActiveBorderPulse`). This keyframe animates the `box-shadow` property using `var(--swatch-glow-color)`, creating a perfectly color-matched, radiating glow effect without needing JavaScript-based animation libraries.

## Installation & Usage

1. Copy both `ColorPickerPalette.jsx` and `ColorPickerPalette.css` into your React project (e.g. into `src/components/`).
2. Import and use the component in your app:

```jsx
import React, { useState } from 'react';
import ColorPickerPalette from './components/ColorPickerPalette';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  // Custom palette array (optional)
  const myBrandColors = [
    '#10b981', '#3b82f6', '#8b5cf6', '#f43f5e',
    '#0ea5e9', '#eab308', '#ec4899', '#14b8a6'
  ];

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <ColorPickerPalette 
        colors={myBrandColors} 
        initialColor="#8b5cf6"
        onChange={(color) => setSelectedColor(color)} 
      />
    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | `Array<string>` | *(Standard 12-color array)* | Array of hex, rgb, or hsl color strings to populate the grid. |
| `initialColor` | `string` | `'#3b82f6'` | The color value that should be selected when the component mounts. |
| `onChange` | `function` | `() => {}` | Callback function triggered when a user clicks a swatch. Receives the selected color string as an argument. |

## Accessibility (prefers-reduced-motion)
This component is fully keyboard accessible, utilizing `type="button"`, `role="radio"`, and `aria-checked` attributes to ensure screen readers understand the grid's purpose. It implements a strict `@media (prefers-reduced-motion: reduce)` query that entirely disables the infinite pulse animation and replaces it with a static, color-matched focus outline to prevent vestibular triggers.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero external dependencies. Color pickers often rely on heavy canvas or JS-driven libraries. By creatively utilizing CSS variables tied to a central `@keyframes` box-shadow animation, this component delivers a premium, highly tactile "border pulse" interaction using purely native, hardware-accelerated CSS.
