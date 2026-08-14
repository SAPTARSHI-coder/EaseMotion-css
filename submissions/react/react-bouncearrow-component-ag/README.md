# React BounceArrow Component

## Description
The `BounceArrow` component is a reusable React wrapper that displays a smooth, continuous bouncing arrow. It is perfect for drawing attention to scrollable areas, pointing toward call-to-action buttons, or indicating navigation directions within modern web applications.

## Installation
Since this is a lightweight utility component, you can simply copy the `BounceArrow.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `direction` | String | No | `"down"` | Controls the arrow direction. Accepts `"up"`, `"down"`, `"left"`, or `"right"`. |
| `className` | String | No | `""` | Additional custom CSS classes applied to the arrow `span`. |
| `size` | String | No | - | Custom font size for the arrow (e.g., `"2rem"`, `"24px"`). |
| `duration` | String | No | `"2s"` | Custom animation loop duration (e.g., `"1.5s"`, `"3s"`). |

## Usage Example

```jsx
import React from "react";
import BounceArrow from "./BounceArrow"; // Adjust path as necessary

function App() {
    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Default usage (Bounces down) */}
            <section style={{ textAlign: "center" }}>
                <h2>Scroll Down</h2>
                <BounceArrow />
            </section>
            
            {/* Custom Direction and Size */}
            <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span>Swipe right for more</span>
                <BounceArrow direction="right" size="1.5rem" color="#3b82f6" />
            </section>

            {/* Faster Custom Animation */}
            <section style={{ textAlign: "center" }}>
                <h2>Scroll Up</h2>
                <BounceArrow direction="up" duration="1s" className="custom-arrow-class" />
            </section>

        </div>
    );
}

export default App;
```

## Customization Notes
- The component dynamically applies CSS animation keyframes based on the `direction` prop (`ease-bounce-up`, `ease-bounce-down`, `ease-bounce-left`, `ease-bounce-right`).
- The `size` prop directly modifies the `fontSize` inline style for convenience, though it can also be controlled entirely via a custom `className`.
- The animation is fully CSS-driven utilizing hardware-accelerated `transform` properties.

## Accessibility Considerations
- **Semantic structure:** Renders as an inline `<span>` with an appropriate `aria-label` based on the chosen direction, and `role="img"` to communicate its purpose to screen readers.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the continuous bouncing animation is bypassed (`animation: none !important`), ensuring the arrow remains visible and functional without distracting motion.
