# React SaaS Showcase Tooltip

## Description
A polished, highly interactive React Tooltip component designed explicitly for modern **SaaS Showcase** interfaces and dashboards. It leverages React hooks for optimal state management and an extreme `cubic-bezier` curve to achieve a snappy **Elastic Slide** entrance animation. The tooltip features a clean aesthetic with soft drop shadows, a crisp top accent border, and intelligent light/dark mode support based on system preferences. It securely encapsulates its child component and safely mounts/unmounts from the DOM using a delayed rendering cycle.

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
| `accentColor`| `String` | `"#4f46e5"` | A custom CSS hex/rgba color string that applies a vibrant 4px top border to the tooltip card. |

## Usage Example

```jsx
import React from 'react';
import SaasTooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ 
      padding: '5rem', 
      backgroundColor: '#f8fafc',
      minHeight: '100vh', 
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ color: '#0f172a', marginBottom: '3rem' }}>
        Dashboard Overview
      </h2>
      
      <SaasTooltip 
        content="View detailed analytics breakdown for the last 30 days of active user engagement."
        position="top"
        accentColor="#2563eb" // Bright SaaS blue
      >
        <button style={{
          background: '#ffffff',
          color: '#1e293b',
          border: '1px solid #e2e8f0',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }} className="ease-hover-lift">
          Analytics Report
        </button>
      </SaasTooltip>
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Elastic Slide Transition**: Achieved using a custom CSS `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition on the `transform` property, creating a highly tactile, bouncy slide-in effect that feels responsive and alive.
- **Delayed Unmounting**: The React component uses a `setTimeout` within `handleMouseLeave` to allow the CSS exit transition to finish completely before unmounting the DOM node, ensuring no jarring visual pops.
- **Modern SaaS Aesthetics**: Utilizes a clean white background, soft layered drop shadows, and a subtle but vibrant top border accent to distinguish the popover from the dashboard background. Automatically adapts to dark mode via `@media (prefers-color-scheme: dark)`.
- **EaseMotion Sync**: Integrates with global EaseMotion utility classes (like `ease-hover-lift`) to ensure consistent interactive feedback across the host application.
