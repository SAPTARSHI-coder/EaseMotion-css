# Jello FAB React Component

## Description
This is a standard React component implementing a Floating Action Button (FAB) with a "Jello" entrance animation. The FAB uses a sequence of 3D scale transforms to create a wobbly, gelatinous bounce effect as it enters the screen.

## Files
- `JelloFAB.jsx`: The React functional component that renders the button and manages the initial animation state.
- `style.css`: Contains the button styling and the `@keyframes ease-jello-enter-ag` animation logic.

## Usage

```jsx
import React from 'react';
import JelloFAB from './JelloFAB';

function App() {
  const handleClick = () => {
    console.log('FAB clicked');
  };

  return (
    <div>
      <p>Content goes here...</p>
      <JelloFAB 
        icon="+" 
        label="Add New Item" 
        onClick={handleClick} 
        position="bottom-right" 
      />
    </div>
  );
}
```

## How It Works
1. On initial mount, the component renders with the `.ease-jello-in-ag` class.
2. The CSS keyframes `ease-jello-enter-ag` use `scale3d` across multiple frames (20%, 30%, 40%, 50%, etc.) to stretch and squash the element horizontally and vertically, producing a jello wobble.
3. The component uses a `setTimeout` to remove the animation class after 900ms to prevent re-triggering the animation on subsequent re-renders, while retaining standard hover effects.

## Accessibility
- Requires a `label` prop to populate the `aria-label` attribute, ensuring screen readers can identify the button's purpose since the visual content is typically an icon.
- Uses semantic `<button type="button">`.
- **Reduced Motion**: Disables the wobbly scale transforms via `@media (prefers-reduced-motion: reduce)`. The entrance falls back to a simple, fast opacity fade.
