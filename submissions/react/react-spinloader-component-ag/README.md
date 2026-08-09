# React SpinLoader Component

## Description
The `SpinLoader` component is a reusable React wrapper that provides a smooth, continuous spinning animation. It acts as a visual loading indicator, perfect for signaling background processes, data fetching, or page transitions within modern web applications.

## Installation
Since this is a lightweight utility component, you can simply copy the `SpinLoader.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

The component accepts standard HTML attributes (passed directly to the wrapper div) in addition to the following props:

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | String | No | `""` | Additional custom CSS classes applied to the loader. |
| `size` | String | No | `"2rem"` | Controls the loader dimensions (e.g., `"32px"`, `"1.5rem"`). Maps to width and height. |
| `color` | String | No | `"#3b82f6"` (Blue) | Controls the primary spinner border color variant (e.g., `"#10b981"`, `"red"`). |
| `duration` | String | No | `"1s"` | Custom animation loop duration (e.g., `"0.5s"`, `"2s"`). |

## Usage Example

```jsx
import React, { useState, useEffect } from "react";
import SpinLoader from "./SpinLoader"; // Adjust path as necessary

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a network request
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Default usage */}
            <section>
                <h3>Basic Loader</h3>
                {isLoading ? <SpinLoader /> : <p>Data loaded successfully!</p>}
            </section>
            
            {/* Custom Color and Size */}
            <section>
                <h3>Custom Styled Loader</h3>
                <SpinLoader size="48px" color="#10b981" />
            </section>

            {/* Fast Custom Animation */}
            <section>
                <h3>Fast Loader</h3>
                <SpinLoader duration="0.4s" color="#ef4444" size="1.5rem" />
            </section>

        </div>
    );
}

export default App;
```

## Customization Notes
- The internal structure utilizes a CSS border trick: a light semi-transparent border forms a track, while a single solid border (top-color) provides the primary colored segment that rotates.
- The `size` prop directly modifies both the `width` and `height` inline styles for convenience, though sizing can also be controlled entirely via a custom `className`.
- The animation is fully CSS-driven utilizing hardware-accelerated `transform: rotate()` properties set to a `linear` timing function for a consistent spin speed.

## Accessibility Considerations
- **Semantic structure:** Renders as a `<div>` with `role="status"` and `aria-label="Loading"`. This implicitly acts as an aria-live region, ensuring screen readers announce the loading status to visually impaired users when the component mounts.
- **Screen Reader Only Text:** An invisible `<span>Loading...</span>` utilizing the `.ease-sr-only` class is included inside the component as a reliable fallback for assistive technologies.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the continuous spinning animation is bypassed (`animation: none !important`), ensuring the loader remains static but visible as a segmented circle, communicating the loading state without distracting motion.
