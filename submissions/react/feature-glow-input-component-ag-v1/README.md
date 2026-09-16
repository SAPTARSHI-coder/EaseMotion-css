# Glow Input Component

## Description
The `GlowInput` component provides a standard HTML input wrapper with an engaging, smooth glow effect on hover and focus. It seamlessly passes down all standard input HTML attributes (like `type`, `placeholder`, `onChange`) and uses React `forwardRef` so it functions identically to a native `<input>`.

## Installation
Copy `GlowInput.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `glowColor` | String | No | `"#3b82f6"` | Valid CSS color representing the glow. |
| `className`| String | No | `""` | Additional CSS classes for custom styling. |
| `...rest` | Any | No | - | All standard HTML `<input>` attributes are supported. |

## Usage Example

```jsx
import React, { useRef } from 'react';
import GlowInput from './GlowInput';

function App() {
    const inputRef = useRef(null);

    return (
        <div style={{ padding: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Email Address
            </label>
            <GlowInput 
                ref={inputRef}
                type="email"
                placeholder="hello@example.com"
                glowColor="rgba(16, 185, 129, 0.6)" // Emerald glow
            />
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Focus Indicators:** The glow acts as a highly visible focus indicator, significantly aiding keyboard users navigating the form.
- **Reduced Motion:** If a user prefers reduced motion, the CSS seamlessly disables the transition duration. The border and box-shadow changes apply instantly without the "fade in" glow animation.
