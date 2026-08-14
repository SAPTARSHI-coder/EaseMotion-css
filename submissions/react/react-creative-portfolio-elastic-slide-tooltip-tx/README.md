# React Creative Portfolio Tooltip

## Description
A bold, highly interactive React Tooltip component designed explicitly for modern **Creative Portfolio** interfaces. Embracing neo-brutalist design trends, it features thick stark borders, solid offset shadows, and high-contrast vibrant colors. It leverages React hooks for optimal state management and an extreme `cubic-bezier` curve to achieve a snappy **Elastic Slide** entrance animation. It securely encapsulates its child component and safely mounts/unmounts from the DOM using a delayed rendering cycle.

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
| `accentColor`| `String` | `"#ffeb3b"` | A custom CSS hex/rgba color string that defines the vibrant background color of the tooltip popover. |

## Usage Example

```jsx
import React from 'react';
import PortfolioTooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ 
      padding: '5rem', 
      backgroundColor: '#f4f4f0', /* Warm off-white paper background */
      minHeight: '100vh', 
      textAlign: 'center',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif'
    }}>
      <h2 style={{ 
        color: '#000000', 
        marginBottom: '4rem', 
        fontSize: '3rem', 
        letterSpacing: '-0.04em',
        fontWeight: '900'
      }}>
        SELECTED WORKS.
      </h2>
      
      <PortfolioTooltip 
        content="View the complete case study and wireframes."
        position="top"
        accentColor="#00e676" // Vibrant neon green
      >
        <button style={{
          background: '#ffffff',
          color: '#000000',
          border: '3px solid #000000',
          padding: '1rem 2rem',
          fontWeight: '800',
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '6px 6px 0px 0px #000000'
        }} className="ease-hover-lift">
          Case Study: 01
        </button>
      </PortfolioTooltip>
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Elastic Slide Transition**: Achieved using a custom CSS `cubic-bezier(0.68, -0.55, 0.265, 1.55)` transition on the `transform` property, creating a highly tactile, bouncy slide-in effect that feels energetic and playful.
- **Delayed Unmounting**: The React component uses a `setTimeout` within `handleMouseLeave` to allow the CSS exit transition to finish completely before unmounting the DOM node, preventing abrupt visual cuts.
- **Neo-Brutalist Aesthetics**: Utilizes thick borders, flat solid shadows (`box-shadow: Xpx Ypx 0px 0px`), and vibrant accent colors to create a striking, unpolished aesthetic popular in modern digital portfolios. Automatically inverts borders and shadows for dark mode via `@media (prefers-color-scheme: dark)`.
- **EaseMotion Sync**: Includes custom overrides for the standard `ease-hover-lift` utility class to simulate a physical button press (reducing the solid shadow) rather than a soft drop-shadow float, maintaining thematic consistency.
