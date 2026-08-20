# React SlideDrawer Component

## Description
The `SlideDrawer` component is a reusable React wrapper that provides a smooth, hardware-accelerated sliding panel. It is commonly used in modern web applications for mobile navigation menus, filtering sidebars, or settings panels. It includes a darkened background overlay and built-in accessibility features like closing on `Escape` key press.

## Installation
Since this is a lightweight utility component, simply copy the `SlideDrawer.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isOpen` | Boolean | Yes | - | Controls the visibility of the drawer. |
| `children` | ReactNode | Yes | - | The content displayed inside the drawer panel. |
| `onClose` | Function | No | - | Callback fired when the user clicks the dark overlay or presses the `Escape` key. |
| `position` | String | No | `"left"` | Specifies which side of the screen the drawer slides in from (`"left"` or `"right"`). |
| `width` | String | No | `"300px"` | Custom CSS width for the drawer panel (e.g., `"400px"`, `"80vw"`, `"50%"`). |
| `className` | String | No | `""` | Additional custom CSS classes appended to the `<aside>` element. |

## Usage Example

```jsx
import React, { useState } from "react";
import SlideDrawer from "./SlideDrawer"; // Adjust path as necessary

function App() {
    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);

    return (
        <div style={{ padding: "4rem", display: "flex", gap: "2rem" }}>
            
            {/* Left-side Navigation Drawer */}
            <button onClick={() => setLeftOpen(true)}>
                Open Left Menu
            </button>
            <SlideDrawer
                isOpen={leftOpen}
                onClose={() => setLeftOpen(false)}
                position="left"
            >
                <div style={{ padding: "2rem" }}>
                    <h2>Navigation</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}><a href="#">Home</a></li>
                        <li style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}><a href="#">Profile</a></li>
                        <li style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}><a href="#">Settings</a></li>
                    </ul>
                </div>
            </SlideDrawer>

            {/* Right-side Settings/Filters Drawer */}
            <button onClick={() => setRightOpen(true)}>
                Open Right Filters
            </button>
            <SlideDrawer
                isOpen={rightOpen}
                onClose={() => setRightOpen(false)}
                position="right"
                width="400px"
            >
                <div style={{ padding: "2rem" }}>
                    <h2>Filters</h2>
                    <p>Filter content goes here...</p>
                    <button onClick={() => setRightOpen(false)}>Apply Filters</button>
                </div>
            </SlideDrawer>

        </div>
    );
}

export default App;
```

## Customization Notes
- The drawer uses hardware-accelerated CSS `transform: translateX()` properties. When closed, the panel sits off-screen (`-100%` or `100%`). When `isOpen` becomes true, the `.ease-drawer-open` class is applied, resetting the transform to `0`.
- The `width` and `position` props are dynamically mapped to inline styles so the drawer can be easily customized per instance without needing to write overriding CSS classes.
- A semi-transparent `.ease-drawer-overlay` backdrop renders conditionally. Clicking it triggers the `onClose` callback.

## Accessibility Considerations
- **Semantics:** The drawer panel is rendered as an `<aside>` element (a landmark region). 
- **Keyboard Navigation:** The component listens for the `Escape` key event when open, firing the `onClose` callback so keyboard users can dismiss the drawer easily. 
- **ARIA:** The panel has `aria-hidden={!isOpen}` ensuring screen readers ignore the content when it is closed/off-screen. The dark overlay is marked `aria-hidden="true"` as it is purely visual.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the sliding transitions and overlay fade-ins are completely removed (`transition: none !important`, `animation: none !important`). The drawer will instantly appear and disappear, preserving full functionality without motion effects.
