# React FadeIn Wrapper Component

## Description
The `FadeIn` component is a reusable React wrapper that smoothly reveals its children on mount using a hardware-accelerated CSS opacity transition. This allows developers to easily apply entrance animations to any section of their UI without writing complex JavaScript animation logic or installing heavy external libraries.

## Installation
Since this is a lightweight utility component, you can simply copy the `FadeIn.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | Content to be wrapped and animated. |
| `className` | String | No | `""` | Additional custom CSS classes applied to the wrapper `div`. |
| `delay` | String | No | - | Custom animation delay (e.g., `"0.5s"`, `"200ms"`). Useful for staggering multiple elements. |
| `duration` | String | No | - | Custom animation duration (e.g., `"1s"`, `"800ms"`). Overrides the default `0.6s`. |

## Usage Example

```jsx
import React from "react";
import FadeIn from "./FadeIn"; // Adjust path as necessary

function App() {
    return (
        <div style={{ padding: "2rem" }}>
            {/* Basic usage */}
            <FadeIn>
                <h1>Welcome to EaseMotion</h1>
            </FadeIn>
            
            {/* Adding a delay for a staggered effect */}
            <FadeIn delay="0.3s">
                <p>Smooth animations made simple.</p>
            </FadeIn>
            
            {/* Customizing duration and passing additional classes */}
            <FadeIn duration="1.2s" className="my-custom-card">
                <div style={{ padding: "1rem", background: "#f3f4f6", marginTop: "1rem" }}>
                    I fade in very slowly!
                </div>
            </FadeIn>
        </div>
    );
}

export default App;
```

## Customization Notes
- The default animation uses a smooth `cubic-bezier(0.39, 0.575, 0.565, 1)` easing curve for a natural appearance. You can modify this in `style.css`.
- The wrapper is a standard `div` element set to `display: block`. If you need a `span` or inline behavior, you can pass a utility class via `className` or adjust the CSS.

## Accessibility Considerations
- **Semantic structure:** The wrapper is a neutral `<div>` that does not interfere with the semantic structure or ARIA roles of its children.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the animation is bypassed (`animation: none !important; opacity: 1 !important;`), ensuring the content renders instantly and remains fully accessible.
