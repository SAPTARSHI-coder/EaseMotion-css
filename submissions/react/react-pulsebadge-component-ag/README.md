# React PulseBadge Component

## Description
The `PulseBadge` component is a reusable React wrapper that displays a small, animated pill-shaped badge. It continuously pulses, making it perfect for drawing attention to real-time statuses like "Live", "New", "Updating", or unread notification counts.

## Installation
Since this is a lightweight utility component, you can simply copy the `PulseBadge.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | Text or icon content to be displayed inside the badge. |
| `className` | String | No | `""` | Additional custom CSS classes applied to the badge `span`. |
| `color` | String | No | `"#ef4444"` (Red) | Custom badge background color (e.g., `"#3b82f6"`, `"green"`). |
| `duration` | String | No | `"2s"` | Custom animation loop duration (e.g., `"1.5s"`, `"3s"`). |

## Usage Example

```jsx
import React from "react";
import PulseBadge from "./PulseBadge"; // Adjust path as necessary

function App() {
    return (
        <div style={{ padding: "2rem", display: "flex", gap: "1.5rem" }}>
            
            {/* Basic usage (Default Red) */}
            <PulseBadge>
                Live
            </PulseBadge>
            
            {/* Custom Color */}
            <PulseBadge color="#3b82f6">
                New Feature
            </PulseBadge>

            {/* Custom Color, faster pulse, and custom classes */}
            <PulseBadge 
                color="#10b981" 
                duration="1s" 
                className="my-custom-badge"
            >
                3 Unread
            </PulseBadge>

        </div>
    );
}

export default App;
```

## Customization Notes
- The animation combines `transform: scale()` with a `box-shadow` expansion to create a breathing, glowing effect.
- The default text color is white (`#ffffff`). If you pass a very light color via the `color` prop, you may want to override the text color using the `className` prop for better contrast.

## Accessibility Considerations
- **Semantic structure:** Renders as an inline `<span>`, ensuring it flows naturally alongside text and icons.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the infinite pulsing animation is bypassed (`animation: none !important`), ensuring the badge renders as a standard, static pill without distracting continuous movement.
