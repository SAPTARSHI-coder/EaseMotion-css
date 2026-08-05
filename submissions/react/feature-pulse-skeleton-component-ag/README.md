# Pulse Skeleton Component (React)

## Description
The `PulseSkeleton` is a React component used to display a placeholder block while content is loading. It uses a smooth, continuous CSS pulse animation (fading opacity) to indicate that the application is busy fetching data. The component supports different shapes (text lines, rectangles, circles) and optionally supports a "hover only" mode for interactive mockups.

## Installation & Usage
Copy `PulseSkeleton.jsx` and `style.css` into your React project.

```jsx
import React from 'react';
import PulseSkeleton from './PulseSkeleton';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      {/* Avatar */}
      <PulseSkeleton variant="circle" width="64px" height="64px" />
      
      <div style={{ marginTop: '1rem' }}>
        {/* Title */}
        <PulseSkeleton variant="text" width="60%" height="1.5em" />
        
        {/* Body Text */}
        <PulseSkeleton variant="text" />
        <PulseSkeleton variant="text" />
        <PulseSkeleton variant="text" width="80%" />
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        {/* Interactive Hover-Only variant */}
        <PulseSkeleton variant="rect" height="150px" hoverOnly={true} />
        <p style={{ fontSize: '0.8rem', color: '#666' }}>Hover the box above to see the pulse</p>
      </div>
    </div>
  );
}

export default App;
```

## Props
- `variant` (string, optional): Defines the shape. Valid values are `'text'` (rounded small corners, margin bottom), `'rect'` (rounded corners), `'circle'` (50% border-radius). Default is `'text'`.
- `width` (string|number, optional): The CSS width of the skeleton.
- `height` (string|number, optional): The CSS height of the skeleton.
- `hoverOnly` (boolean, optional): If `true`, the pulse animation only runs when the user hovers over the element. Useful for interactive UI demos. Default is `false` (infinite continuous pulse).
- Any standard HTML div attributes can also be passed and will be applied to the root element.

## How It Works
- The component is essentially a styled `<div>` with a background color (`#e5e7eb`).
- A `@keyframes` animation (`skeletonPulse-ag`) transitions the `opacity` between `1` and `0.4` over a 2-second cycle using a smooth `cubic-bezier` timing function.
- Depending on the `hoverOnly` prop, the animation is either applied globally or mapped to the `:hover` pseudo-class.

## Accessibility Considerations
- Uses `aria-busy="true"` to indicate to screen readers that the section is in a loading state.
- Uses `aria-hidden="true"` so that the literal visual block isn't read aloud disruptively as just "blank". (Note: best practice for skeletons often involves wrapping them in a live region that announces "Loading...").
- The `prefers-reduced-motion: reduce` media query in `style.css` completely disables the pulsing opacity animation to accommodate users sensitive to continuous visual changes.
