# Dynamic Modal Dialog with Backdrop Blur & Scale-Up

A versatile React modal component utilizing EaseMotion CSS for smooth scale-up transitions and a backdrop blur effect. It features accessible keyboard navigation, focus management, and dynamic content injection.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `isOpen` | `boolean` | **Required** | Toggles the visibility of the modal |
| `onClose` | `() => void` | **Required** | Callback fired when the user attempts to close the modal |
| `title` | `string` | `undefined` | Optional header title for the dialog |
| `children` | `ReactNode` | **Required** | The main body content |
| `footerActions` | `ReactNode` | `undefined` | Optional action buttons to render in the footer |
| `maxWidth` | `string` | `'500px'` | Maximum width of the modal container |
| `closeOnBackdropClick` | `boolean` | `true` | Allows closing the modal by clicking outside it |

## Installation

1. Copy `DynamicModal.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React, { useState } from 'react';
import DynamicModal from './DynamicModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '40px' }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <DynamicModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Deletion"
        footerActions={
          <>
            <button className="ease-btn ease-btn-secondary ease-squish-button" onClick={() => setIsOpen(false)}>Cancel</button>
            <button className="ease-btn ease-btn-primary ease-squish-button" onClick={() => alert('Deleted!')}>Delete</button>
          </>
        }
      >
        <p>Are you sure you want to permanently delete this item? This action cannot be undone.</p>
      </DynamicModal>
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Backdrop Blur**: Utilizes a custom `.ease-fade-in-blur` animation that animates both `opacity` and the CSS `backdrop-filter` for a premium glassmorphic overlay.
- **Scale-Up Animation**: The dialog enters using `.ease-scale-up` (`cubic-bezier(0.34, 1.56, 0.64, 1)`), starting from `scale(0.95)` and shifting slightly up the Y-axis. This gives a very tactile, spring-like feel consistent with EaseMotion.
- **Accessibility & Focus**: Basic focus trap on open and `Escape` key listeners ensures standard, accessible modal behavior without external libraries.
