# Flash Drawer Component (React)

## Description
A React drawer component that implements a "Flash" Exit Animation. When the drawer is closed, it briefly flashes (changing background color) while quickly fading out and slightly shifting to the right. This provides distinct visual confirmation of the dismissal action.

## Files
- `FlashDrawerAG.jsx`: Contains the React component handling the mount/unmount rendering logic so the exit animation can complete before the component is unmounted.
- `style.css`: Contains the drawer styling, the overlay behavior, and the `@keyframes drawer-flash-out-ag` animation.

## Usage
```jsx
import React, { useState } from 'react';
import FlashDrawerAG from './FlashDrawerAG';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <FlashDrawerAG isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Drawer Content</h2>
        <p>This will flash when closing.</p>
      </FlashDrawerAG>
    </div>
  );
}
```

## Accessibility
- Includes `role="dialog"` and `aria-modal="true"` to denote its status as an overlay to screen readers.
- Background overlay clicks trigger the `onClose` function.
- **Reduced Motion**: Disables the slide-in and the flashing exit animation. Replaces them with simple `opacity` fades (`drawer-fade-in-ag` and `drawer-fade-out-ag`) to keep the interface accessible for motion-sensitive users.
