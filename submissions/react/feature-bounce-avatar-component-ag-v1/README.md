# Bounce Avatar Component

## Description
The `BounceAvatar` component provides a standard image avatar wrapper with a playfully exaggerated exit animation (`bounce-exit`). It utilizes an `isExiting` state prop to trigger the animation, allowing developers to cleanly remove user avatars from lists or profiles with visual flair.

## Installation
Copy `BounceAvatar.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `src` | String | Yes | - | URL of the avatar image. |
| `alt` | String | No | `"Avatar"` | Alternative text for screen readers. |
| `isExiting` | Boolean | No | `false` | When set to `true`, the component applies the exit animation class. |
| `className`| String | No | `""` | Additional CSS classes for custom styling. |

## Usage Example

```jsx
import React, { useState } from 'react';
import BounceAvatar from './BounceAvatar';

function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    const handleRemove = () => {
        // Trigger the exit animation
        setIsExiting(true);
        // Wait for the CSS animation to complete before removing from DOM
        setTimeout(() => setIsVisible(false), 600);
    };

    if (!isVisible) return null;

    return (
        <div style={{ padding: '2rem' }}>
            <BounceAvatar 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Felix's Avatar"
                isExiting={isExiting}
            />
            <button onClick={handleRemove} style={{ display: 'block', marginTop: '1rem' }}>
                Remove User
            </button>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Alt Text:** Ensure the `alt` prop describes the user or image content appropriately. 
- **Reduced Motion:** If a user prefers reduced motion, the CSS safely suppresses the complex scale/bounce transform entirely. The avatar simply hides instantly when `isExiting` is toggled.
