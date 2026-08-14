# Swing Badge Component (React)

## Description
This is a standard React badge component featuring a "Swing" interactive animation. When hovered, the badge swings back and forth from its top center axis, mimicking a physical object hanging from a point. This "Attention Seeker" effect adds a playful, physical feel to interactive elements.

## Installation
Ensure you have a React environment set up. Import the `SwingBadge` component and its associated CSS into your application.

## Usage
Wrap your text or numbers inside the `<SwingBadge>` component. You can optionally pass a `variant` prop (`primary`, `success`, `warning`) to change its visual style.

```jsx
import React from 'react';
import SwingBadge from './SwingBadge';

function App() {
    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
            <SwingBadge>New!</SwingBadge>
            <SwingBadge variant="success">Completed</SwingBadge>
            <SwingBadge variant="warning">99+</SwingBadge>
        </div>
    );
}

export default App;
```

## How It Works
The component manages its hover state internally using React's `useState` (`isHovered`) hooked into `onMouseEnter` and `onMouseLeave`. 
When `isHovered` is true, the `.ease-swing-active-ag` class is appended, which triggers the `easeSwingAg` CSS keyframes. The animation utilizes `transform: rotate3d()` for a smooth swinging motion. Crucially, the CSS includes `transform-origin: top center`, which ensures the badge swings from the top like a pendulum, rather than spinning around its exact center.

## Accessibility Considerations
- **Semantic HTML:** Badges are generally visual decorators. Ensure they accompany text that makes sense to a screen reader, or provide visually hidden text if the badge contains crucial information (like an unread count) that isn't obvious from the surrounding context.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the swinging animation is entirely disabled (`animation: none !important`), and the badge remains static on hover.
