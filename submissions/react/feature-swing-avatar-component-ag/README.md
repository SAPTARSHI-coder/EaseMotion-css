# Swing Avatar Component

## Description
The `SwingAvatar` is a React component that animates its entrance by swinging into view from the top hinge (similar to a sign swinging down). This playful entrance animation is perfect for profiles, author cards, or any UI where you want a slightly more dynamic presentation than a static image load.

## Installation
Copy `SwingAvatar.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `src` | String | Yes | - | URL of the avatar image. |
| `alt` | String | Yes | - | Alternative text describing the avatar. |
| `size` | String | No | `"64px"` | Sets both width and height for a perfect circle. |
| `className`| String | No | `""` | Additional CSS classes for custom styling. |

## Usage Example

```jsx
import React from 'react';
import SwingAvatar from './SwingAvatar';

function App() {
    return (
        <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
            {/* Default size */}
            <SwingAvatar 
                src="https://i.pravatar.cc/150?img=32" 
                alt="User Profile" 
            />
            
            {/* Custom size */}
            <SwingAvatar 
                src="https://i.pravatar.cc/150?img=12" 
                alt="Secondary Profile" 
                size="96px"
            />
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Image Semantics:** Requires an `alt` prop to ensure screen readers can describe the image.
- **Reduced Motion:** If a user prefers reduced motion, the CSS seamlessly disables the swing animation. The avatar image will mount instantly in its final resting position without any motion.
