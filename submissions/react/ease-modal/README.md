# React Modal Dialog

A robust, fully accessible React modal wrapper component that implements buttery-smooth CSS entrance and exit animations without relying on heavy third-party animation libraries.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `ModalDialog.jsx` and `style.css` into your components directory.

## Features
- **Smooth Animations:** Automatically leverages EaseMotion's `ease-fade-in` and `ease-slide-up` on mount, and gracefully delays unmounting to play an `ease-fade-out` animation on exit.
- **Focus Trapping:** Automatically focuses the modal content on mount to ensure keyboard/screen-reader accessibility.
- **Escape Key to Close:** Native event listener bound on mount to close the modal when `ESC` is pressed.
- **Scroll Lock:** Prevents the background `<body>` from scrolling while the modal is open.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `isOpen` | `boolean` | Required | Controls whether the modal is visible. |
| `onClose` | `function` | Required | Callback fired to close the modal. |
| `title` | `string` | `undefined` | Optional title displayed in the modal header. |
| `children` | `ReactNode` | Required | The content injected into the modal body. |
| `closeOnOverlayClick`| `boolean` | `true` | If true, clicking the dark backdrop closes the modal. |

## Usage

```jsx
import React, { useState } from 'react';
import ModalDialog from './ModalDialog';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <ModalDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Terms of Service"
      >
        <p>Please review our updated terms of service before continuing.</p>
        <button onClick={() => setIsOpen(false)}>I Agree</button>
      </ModalDialog>
    </div>
  );
}
```
