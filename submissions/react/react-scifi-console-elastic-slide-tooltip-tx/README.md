# React Sci-Fi Console Tooltip

## Description
A premium, highly interactive React Tooltip component designed specifically for **Sci-Fi Console** interfaces. It leverages React hooks for state management and an extreme `cubic-bezier` curve to achieve a snappy **Elastic Slide** entrance animation. The tooltip features a sleek cyberpunk aesthetic, including a `clip-path` chamfered corner design, neon glowing borders, and an infinite `@keyframes` scanline overlay. It securely encapsulates its child component and safely mounts/unmounts from the DOM using a delayed rendering cycle.

## Installation
No external dependencies (like Framer Motion) are required. 
1. Copy the `Tooltip.jsx` and `style.css` files into your React project components directory.
2. Ensure you have the global `easemotion.css` framework imported in your root application.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | The target element that triggers the tooltip on hover/focus. |
| `content` | `ReactNode` | **Required** | The content (text or elements) displayed inside the tooltip popover. |
| `position` | `String` | `"top"` | The placement of the tooltip relative to the target. Accepts `"top"` or `"bottom"`. |
| `glowColor`| `String` | `"#00f0ff"` | The CSS hex/rgba color string for the neon borders, scanlines, and corners. |

## Usage Example

```jsx
import React from 'react';
import SciFiTooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ padding: '5rem', backgroundColor: '#020617', minHeight: '100vh', textAlign: 'center' }}>
      <h2 style={{ color: '#e0f2fe', fontFamily: 'monospace', marginBottom: '3rem' }}>
        System Diagnostic UI
      </h2>
      
      <SciFiTooltip 
        content="WARNING: Reactor core temperatures exceeding nominal parameters. Immediate cooling required."
        position="top"
        glowColor="#ef4444" // Custom red neon glow
      >
        <button style={{
          background: '#0f2a4a',
          color: '#38bdf8',
          border: '1px solid #38bdf8',
          padding: '1rem 2rem',
          fontFamily: 'monospace',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }} className="ease-hover-lift">
          Inspect Core Status
        </button>
      </SciFiTooltip>
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Elastic Slide Transition**: Achieved using a custom CSS `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition on the `transform` property, creating a highly tactile, bouncy slide-in effect.
- **Delayed Unmounting**: The React component uses a `setTimeout` within `handleMouseLeave` to allow the CSS exit transition to finish completely before unmounting the DOM node.
- **Cyberpunk Aesthetics**: Implements `clip-path` for hardware-accelerated chamfered corners and an infinite linear background gradient animation to simulate a CRT scanline sweeping across the text.
- **EaseMotion Sync**: Integrates with global EaseMotion utility classes (like `ease-hover-lift`) to ensure consistent interactive feedback across the host application.
