# React Neumorphic Soft Tooltip

## Description
A highly tactile, interactive React Tooltip component designed explicitly for **Neumorphic Soft** interfaces. It leverages React hooks for optimal state management and an extreme `cubic-bezier` curve to achieve a snappy **Elastic Slide** entrance animation. The tooltip features a premium extruded aesthetic, utilizing a careful blend of inset and outset CSS box-shadows to simulate physical elevation. It securely encapsulates its child component and safely mounts/unmounts from the DOM using a delayed rendering cycle.

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
| `accentColor`| `String` | `"#3182ce"` | A custom CSS hex/rgba color string that applies a subtle text-shadow accent to the inner content. |

## Usage Example

```jsx
import React from 'react';
import NeumorphicTooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ 
      padding: '5rem', 
      backgroundColor: '#e0e5ec', /* Crucial: Must match Neumorphic base color */
      minHeight: '100vh', 
      textAlign: 'center' 
    }}>
      <h2 style={{ color: '#4a5568', marginBottom: '3rem' }}>
        Settings Interface
      </h2>
      
      <NeumorphicTooltip 
        content="Enable high-performance CSS hardware acceleration."
        position="top"
        accentColor="#38bdf8"
      >
        <button style={{
          background: '#e0e5ec',
          color: '#3182ce',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '999px',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)'
        }} className="ease-hover-lift">
          Toggle Acceleration
        </button>
      </NeumorphicTooltip>
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Elastic Slide Transition**: Achieved using a custom CSS `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition on the `transform` property, creating a highly tactile, bouncy slide-in effect that complements the physical nature of Neumorphism.
- **Delayed Unmounting**: The React component uses a `setTimeout` within `handleMouseLeave` to allow the CSS exit transition to finish completely before unmounting the DOM node.
- **Physical Shadows**: Combines multi-layered `box-shadow` properties to ensure the tooltip and its directional pointer blend seamlessly into the background while appearing physically elevated.
- **EaseMotion Sync**: Integrates with global EaseMotion utility classes (like `ease-hover-lift`) to ensure consistent interactive feedback across the host application.
