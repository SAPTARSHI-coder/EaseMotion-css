# Glow Badge Component

## Description
The `GlowBadge` is a React component that displays a small pill-shaped label with an optional pulsating box-shadow "glow" effect. Badges are typically used to highlight status, categories, or numbers. Adding a subtle glow effect makes the badge function as an "Attention Seeker," ideal for drawing the user's eye to new items, critical alerts, or live statuses.

## Installation
Copy `GlowBadge.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isGlowing` | Boolean | No | `true` | Controls whether the glowing animation is active. |
| `color` | String | No | `"blue"` | The color theme of the badge (`"blue"`, `"red"`, `"green"`, `"amber"`). |
| `children` | ReactNode | Yes | - | The text or content inside the badge. |
| `className`| String | No | `""` | Additional CSS classes for custom styling. |

## Usage Example

```jsx
import React from 'react';
import GlowBadge from './GlowBadge';

function App() {
    return (
        <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
            {/* Standard static badge */}
            <GlowBadge isGlowing={false} color="blue">Beta</GlowBadge>
            
            {/* Attention seeking glowing badges */}
            <GlowBadge color="green">Live Now</GlowBadge>
            <GlowBadge color="amber">Warning</GlowBadge>
            <GlowBadge color="red">Critical Error</GlowBadge>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Semantic Usage:** Badges often convey visual information that might lack context for screen readers. Ensure the text inside the badge is descriptive, or pair it with appropriate `aria-label`s on parent elements if the badge acts as a notification count.
- **Reduced Motion:** Infinite pulsating animations can be distracting for some users. A strict `prefers-reduced-motion: reduce` media query is included. If activated, the glowing animation is disabled, and the badge falls back to displaying a static, subtle solid border using the glow color variable to maintain a slight emphasis without motion.
