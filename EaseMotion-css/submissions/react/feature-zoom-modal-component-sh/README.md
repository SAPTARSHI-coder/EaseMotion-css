# Zoom Modal Component (React)

A beginner-friendly, accessible React modal with a smooth zoom-in entrance animation.

## What does this do?
A reusable `<ZoomModal>` component that fades in a backdrop and zooms/scales the modal into view. Includes keyboard (Escape) support, click-outside-to-close, and respects `prefers-reduced-motion`.

## How is it used?
```jsx
import { useState } from 'react';
import ZoomModal from './ZoomModal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ZoomModal isOpen={open} onClose={() => setOpen(false)} title="Hello">
        <p>This modal zooms in smoothly.</p>
      </ZoomModal>
    </>
  );
}
```

## Why is it useful?
Modals are one of the most common UI patterns, and a clean zoom-in/zoom-out transition adds polish without extra libraries. This component is fully self-contained, accessible (`role="dialog"`, `aria-modal`, focus handling, Escape-to-close), and respects users' reduced-motion preferences — fitting EaseMotion's animation-first, accessible-by-default philosophy.
