# Shake Icon Component

## Description
The `ShakeIcon` is a simple React wrapper component that applies a rapid horizontal shaking animation to its children. This effect is a standard UI pattern for indicating errors (like invalid input) or drawing the user's attention to an active state (like an incoming notification bell).

## Installation
Copy `ShakeIcon.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | The icon content (e.g., SVG, emoji). |
| `isShaking`| Boolean | No | `false` | When true, triggers the continuous shake animation. |
| `className`| String | No | `""` | Additional CSS classes for custom styling. |

## Usage Example

```jsx
import React, { useState } from 'react';
import ShakeIcon from './ShakeIcon';

function App() {
    const [hasError, setHasError] = useState(false);

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => setHasError(!hasError)}>
                Toggle Error State
            </button>
            
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShakeIcon isShaking={hasError}>
                    ⚠️
                </ShakeIcon>
                <span>{hasError ? "Invalid input detected!" : "All systems normal."}</span>
            </div>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **ARIA Live:** When `isShaking` is active, the wrapper applies `aria-live="polite"`. If the text content inside changes alongside the visual shake, screen readers will announce it.
- **Reduced Motion:** Rapid shaking animations can cause discomfort for users with vestibular disorders. If `prefers-reduced-motion: reduce` is detected, the shake animation is entirely disabled. Instead, as a fallback, the icon's `color` shifts to red (`#ef4444`) to provide a static visual indicator of the active state.
