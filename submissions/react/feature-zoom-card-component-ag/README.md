# Zoom Card Component (React)

## Description
The `ZoomCard` is a React component that provides a smooth exit animation. When the card needs to be hidden or removed from the DOM, it plays a "zoom out" animation (scaling down while fading out) before actually unmounting. This provides a polished, fluid user experience when dismissing alerts, removing items from a list, or closing temporary panels.

## Installation & Usage
Copy `ZoomCard.jsx` and `style.css` into your React project.

```jsx
import React, { useState } from 'react';
import ZoomCard from './ZoomCard';

function App() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <ZoomCard 
        isVisible={showCard} 
        onExited={() => console.log('Card has fully exited the DOM')}
      >
        <h3 style={{ marginTop: 0 }}>Special Offer!</h3>
        <p>Get 50% off on your next purchase.</p>
        <button onClick={() => setShowCard(false)}>
          Dismiss
        </button>
      </ZoomCard>
      
      {!showCard && (
        <button onClick={() => setShowCard(true)}>
          Show Card Again
        </button>
      )}
    </div>
  );
}

export default App;
```

## Props
- `isVisible` (boolean): Controls whether the card is shown. Set to `false` to trigger the zoom out exit animation. Default is `true`.
- `onExited` (function, optional): A callback fired exactly when the exit animation finishes and the component is removed from the DOM.
- `children` (ReactNode): The content of the card.

## How It Works
- **State Management**: The component intercepts the `isVisible` prop. When `isVisible` becomes `false`, it sets an internal `isAnimatingOut` state to `true` instead of immediately returning `null`.
- **Exit Animation**: The `isAnimatingOut` state applies the `.exiting-ag` class, which triggers the `@keyframes cardZoomOut-ag` animation.
- **Unmounting**: Listens to the `onAnimationEnd` event. When the exit animation completes, it sets an internal `shouldRender` state to `false`, finally returning `null` to remove the element from the DOM and calling `onExited()`.

## Accessibility Considerations
- **Pointer Events**: During the exit animation, `pointer-events: none` is applied so the user cannot interact with elements (like buttons) inside the card while it is disappearing.
- **ARIA Attributes**: `aria-hidden` is applied during the exit animation to hide it from screen readers immediately.
- **Reduced Motion**: The `prefers-reduced-motion: reduce` media query in `style.css` swaps the scaling zoom animation for a simple, fast fade-out animation (`cardFadeOutFallback-ag`), honoring OS-level accessibility preferences.
