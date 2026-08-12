# Slide Modal Component (React)

## Description
A React modal component that features a smooth "Slide" entrance animation. The modal drops in from the top with a subtle ease-out deceleration, and slides back up slightly while fading out on exit.

## Usage
```jsx
import { useState } from 'react';
import SlideModalAG from './SlideModalAG';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <SlideModalAG isOpen={isOpen} onClose={() => setIsOpen(false)} title="Alert">
        This is a sliding modal!
      </SlideModalAG>
    </>
  );
}
```

## Accessibility
- Uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` to connect the modal to its header for screen readers.
- Background overlay clicks automatically trigger the `onClose` callback.
- **Reduced Motion**: Disables the transform animations, falling back to instant opacity toggles for safety.
