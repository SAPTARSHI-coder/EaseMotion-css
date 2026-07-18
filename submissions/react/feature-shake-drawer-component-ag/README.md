# Shake Drawer Component

## Description
The `ShakeDrawer` is a React component that implements an off-canvas side drawer. Alongside standard entrance and exit transitions, it features a special "shake" animation. This is particularly useful for situations where a user attempts to dismiss the drawer (by clicking the backdrop), but the application prevents it because a mandatory action (like saving a form) is required. The shake provides immediate, tactile feedback that the drawer cannot currently be closed.

## Installation
Copy `ShakeDrawer.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isOpen` | Boolean | Yes | - | Controls the visibility and sliding state of the drawer. |
| `onClose` | Function | Yes | - | Callback triggered when the backdrop is clicked. |
| `isShaking`| Boolean | No | `false` | When true, triggers the horizontal shake animation. |
| `children` | ReactNode | Yes | - | The content to be displayed inside the drawer. |
| `className`| String | No | `""` | Additional CSS classes for the drawer panel. |

## Usage Example

```jsx
import React, { useState } from 'react';
import ShakeDrawer from './ShakeDrawer';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);

    const handleClose = () => {
        if (hasUnsavedChanges) {
            // Trigger the shake animation to indicate it can't close
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Reset after animation
        } else {
            setIsOpen(false);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => setIsOpen(true)}>Open Settings</button>
            
            <ShakeDrawer isOpen={isOpen} onClose={handleClose} isShaking={isShaking}>
                <h2>Settings</h2>
                <p>You have unsaved changes. You must save before closing.</p>
                <button onClick={() => {
                    setHasUnsavedChanges(false);
                    setIsOpen(false);
                }}>
                    Save and Close
                </button>
            </ShakeDrawer>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **ARIA Roles:** The drawer is assigned `role="dialog"` and `aria-modal="true"` to indicate to screen readers that it is a modal window.
- **Backdrop:** A visually distinct backdrop is provided, and clicking it triggers the `onClose` callback (which the parent can decide to honor or reject via a shake).
- **Reduced Motion:** If a user prefers reduced motion, the sliding transitions and the shake animation are completely disabled. The drawer appears instantly. As a visual fallback for the shake effect, a red left border is temporarily applied to indicate the error state.
