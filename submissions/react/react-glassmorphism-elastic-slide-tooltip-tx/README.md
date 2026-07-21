# React Glassmorphism Tooltip

## Description
A stunning, highly interactive React Tooltip component designed explicitly for modern **Glassmorphism UI** interfaces. It leverages React hooks for optimal state management and an extreme `cubic-bezier` curve to achieve a snappy **Elastic Slide** entrance animation. The tooltip features a premium frosted-glass aesthetic, utilizing `backdrop-filter: blur()`, semi-transparent backgrounds, and delicate borders to simulate a floating glass pane. It securely encapsulates its child component and safely mounts/unmounts from the DOM using a delayed rendering cycle.

## Installation
No external dependencies are required. 
1. Copy the `Tooltip.jsx` and `style.css` files into your React project components directory.
2. Ensure you have the global `easemotion.css` framework imported in your root application.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | The target element that triggers the tooltip on hover/focus. |
| `content` | `ReactNode` | **Required** | The content (text or elements) displayed inside the tooltip popover. |
| `position` | `String` | `"top"` | The placement of the tooltip relative to the target. Accepts `"top"` or `"bottom"`. |
| `glassBlur`| `String` | `"12px"` | A custom CSS value for the `backdrop-filter` property, controlling how frosted the glass appears. |

## Usage Example

```jsx
import React from 'react';
import GlassTooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ 
      padding: '5rem', 
      /* A vibrant background is essential to see the Glassmorphism effect */
      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      minHeight: '100vh', 
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ color: '#ffffff', marginBottom: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        Glass UI Prototype
      </h2>
      
      <GlassTooltip 
        content="This tooltip dynamically blurs the vibrant background beneath it."
        position="top"
        glassBlur="16px" // Extra frosted
      >
        <button style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          padding: '0.75rem 1.5rem',
          borderRadius: '999px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }} className="ease-hover-lift">
          Hover For Magic
        </button>
      </GlassTooltip>
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Elastic Slide Transition**: Achieved using a custom CSS `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition on the `transform` property, creating a bouncy, physics-based slide-in effect.
- **Delayed Unmounting**: The React component uses a `setTimeout` within `handleMouseLeave` to allow the CSS exit transition to finish completely before unmounting the DOM node, ensuring no jarring visual pops.
- **Glassmorphism Engine**: Utilizes `backdrop-filter: blur()` on both the main tooltip body and the directional arrow pointer, ensuring a seamless, continuous frosted glass effect over complex backgrounds. Automatically adapts to light/dark themes via `@media (prefers-color-scheme: light)`.
- **EaseMotion Sync**: Integrates with global EaseMotion utility classes (like `ease-hover-lift`) to ensure consistent interactive feedback across the host application.
