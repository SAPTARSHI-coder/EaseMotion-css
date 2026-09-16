# Zoom Tooltip Component

## Description
The `ZoomTooltip` is a React component that displays contextual information when a user hovers over or focuses an element. It features a playful, dynamic entrance animation by combining an opacity fade with a bouncy `scale()` transform (using a custom `cubic-bezier` easing).

## Installation
Copy `ZoomTooltip.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | The target element that triggers the tooltip (e.g., a button or icon). |
| `content` | String | Yes | - | The text to display inside the tooltip popup. |
| `className`| String | No | `""` | Additional CSS classes for custom styling on the wrapper. |

## Usage Example

```jsx
import React from 'react';
import ZoomTooltip from './ZoomTooltip';

function App() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <ZoomTooltip content="Save your changes">
                <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
                    Save
                </button>
            </ZoomTooltip>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Keyboard Navigation:** The wrapper listens to `onFocus` and `onBlur`, ensuring that users navigating via the `Tab` key can trigger and read the tooltip just like mouse users.
- **ARIA Attributes:** The tooltip itself is assigned `role="tooltip"` and `aria-hidden` is dynamically toggled based on visibility.
- **Reduced Motion:** If a user prefers reduced motion, the zooming scale animation is removed via `prefers-reduced-motion: reduce`. The tooltip will only use a simple opacity fade to appear, minimizing distracting motion.
