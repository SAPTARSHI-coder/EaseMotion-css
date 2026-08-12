# React SlideUp List Item Component

## Description
The `SlideUpItem` component is a reusable React wrapper specifically designed for list elements. It smoothly reveals its children on mount by fading them in while sliding them upward into their final resting place. This is a common and highly effective pattern for revealing dynamic lists, notification feeds, or card grids.

## Installation
Since this is a lightweight utility component, you can simply copy the `SlideUpItem.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | Content to be displayed inside the list item (`<li>`). |
| `className` | String | No | `""` | Additional custom CSS classes applied to the wrapper `<li>`. |
| `delay` | String | No | - | Custom animation delay (e.g., `"0.1s"`, `"100ms"`). Highly recommended when mapping over arrays to create a staggered entrance effect. |
| `duration` | String | No | - | Custom animation duration (e.g., `"0.8s"`). Overrides the default `0.5s`. |

## Usage Example

The most common use case is mapping over an array of data and applying a staggered delay using the array index.

```jsx
import React from "react";
import SlideUpItem from "./SlideUpItem"; // Adjust path as necessary

function App() {
    const notifications = [
        "New message from Sarah",
        "Your report is ready",
        "System update completed"
    ];

    return (
        <div style={{ padding: "2rem", maxWidth: "400px" }}>
            <h2>Recent Notifications</h2>
            
            {/* The wrapper must be a <ul> or <ol> for semantic validity */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {notifications.map((note, index) => (
                    <SlideUpItem 
                        key={index} 
                        delay={`${index * 0.15}s`} // Creates a cascading stagger effect
                        className="my-custom-list-item"
                    >
                        <div style={{ 
                            padding: "1rem", 
                            margin: "0.5rem 0", 
                            background: "#f1f5f9", 
                            borderRadius: "8px" 
                        }}>
                            {note}
                        </div>
                    </SlideUpItem>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

## Customization Notes
- The default animation uses a smooth `cubic-bezier(0.25, 0.46, 0.45, 0.94)` easing curve and slides up by `20px`. You can modify these values in `style.css`.
- The wrapper is explicitly an `<li>` element to maintain semantic HTML when used inside `<ul>` or `<ol>` lists.

## Accessibility Considerations
- **Semantic structure:** Renders as an `<li>`, ensuring screen readers correctly interpret the element as part of a list.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the animation is bypassed (`animation: none !important; opacity: 1 !important; transform: none !important;`), ensuring the content renders instantly in its final position without distracting movement.
