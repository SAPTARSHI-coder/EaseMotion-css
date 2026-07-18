# Flip Drawer Component

## Description
The `FlipDrawer` is a React component that implements an off-canvas side drawer with a dynamic 3D flip animation. Instead of the traditional slide-in effect, this drawer swings in like a door opening on a hinge located at the edge of the screen.

## Installation
Copy `FlipDrawer.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isOpen` | Boolean | Yes | - | Controls the visibility and flipping state of the drawer. |
| `onClose` | Function | Yes | - | Callback triggered when the backdrop is clicked. |
| `children` | ReactNode | Yes | - | The content to be displayed inside the drawer. |
| `className`| String | No | `""` | Additional CSS classes for the drawer panel. |

## Usage Example

```jsx
import React, { useState } from 'react';
import FlipDrawer from './FlipDrawer';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => setIsOpen(true)}>Open Flip Drawer</button>
            
            <FlipDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Welcome</h2>
                <p>This drawer swung in using a 3D flip animation!</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </FlipDrawer>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **ARIA Roles:** The drawer is assigned `role="dialog"` and `aria-modal="true"` to indicate to screen readers that it is a modal window.
- **Reduced Motion:** If a user prefers reduced motion, the 3D flipping transitions are completely disabled. The drawer appears instantly using standard opacity toggling to ensure the content remains accessible without triggering motion discomfort.
