# React ShakeBell Component

## Description
The `ShakeBell` component is a reusable React wrapper that provides animated notification feedback. It displays a standard bell icon (🔔) that gently shakes to indicate interactivity or alert states. This is a common pattern used in web application navigation bars or dashboards to draw attention to unread messages or notifications.

## Installation
Since this is a lightweight utility component, simply copy the `ShakeBell.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

The component forwards all standard HTML `<button>` attributes (like `onClick`, `disabled`, `type`, `aria-*`), plus the following custom props:

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | String | No | `""` | Additional custom CSS classes appended to the button. |
| `animate` | Boolean | No | `false` | If `true`, the bell shakes continuously (useful for active/unread states). If `false`, it only shakes on hover or keyboard focus. |
| `duration` | String | No | `"0.5s"` | Custom animation transition duration for the shaking effect. |

## Usage Example

```jsx
import React, { useState } from "react";
import ShakeBell from "./ShakeBell"; // Adjust path as necessary

function App() {
    const [hasUnread, setHasUnread] = useState(true);

    const handleNotificationClick = () => {
        setHasUnread(false);
        alert("Opening notifications panel...");
    };

    return (
        <div style={{ padding: "4rem", display: "flex", gap: "2rem", alignItems: "center" }}>
            
            {/* Basic usage (Shakes on hover/focus) */}
            <div>
                <p>Standard (Hover to shake)</p>
                <ShakeBell onClick={() => alert("No new notifications")} />
            </div>
            
            {/* Active State (Shakes continuously to draw attention) */}
            <div>
                <p>Active Unread (Continuous shake)</p>
                <ShakeBell 
                    animate={hasUnread} 
                    onClick={handleNotificationClick} 
                />
            </div>

            {/* Disabled State (Animation is disabled) */}
            <div>
                <p>Disabled</p>
                <ShakeBell disabled />
            </div>

        </div>
    );
}

export default App;
```

## Customization Notes
- The physical "bell" feeling is achieved by setting `transform-origin: top center` on both the button and the icon container, making it swing from the top like a real bell.
- The `animate` prop toggles between two CSS classes: `.ease-shake-active` (infinite animation loop) and `.ease-shake-hover` (one-shot animation triggered by `:hover` or `:focus-visible`).
- You can easily replace the native emoji (🔔) with an SVG icon from libraries like Heroicons, FontAwesome, or Lucide by changing the inner contents of the `span.ease-shake-icon` in `ShakeBell.jsx`.

## Accessibility Considerations
- **Keyboard Navigation:** The component uses a native `<button>` element, ensuring it receives focus in the normal document tab order and can be activated via `Enter` or `Spacebar`. 
- **Screen Readers:** An `aria-label="Notifications"` is provided on the button context, and the inner icon `span` is marked `aria-hidden="true"` so that screen readers don't read the raw emoji out loud redundantly.
- **Focus Rings:** A customized `:focus-visible` box-shadow ring is applied. This assists keyboard users in identifying focus without showing an ugly outline when mouse users click the button.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the shaking animations are completely removed (`animation: none !important`). Background color changes on hover and focus rings remain intact to preserve interactivity cues without triggering motion sensitivity.
