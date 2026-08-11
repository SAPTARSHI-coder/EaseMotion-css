# React ToastContainer Component

## Description
The `ToastContainer` component is a reusable React wrapper designed to manage and display temporary notification messages (toasts). It provides a fixed-position container that gracefully handles multiple stacked notifications. Accompanied by standard CSS animations, it ensures that toasts smoothly enter the screen and stack correctly, while maintaining semantic accessibility via `aria-live`.

## Installation
Since this is a lightweight utility component, simply copy the `ToastContainer.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | The toast notification elements to render. |
| `position` | String | No | `"top-right"` | Where to pin the container. Accepts: `"top-right"`, `"top-left"`, `"top-center"`, `"bottom-right"`, `"bottom-left"`, `"bottom-center"`. |
| `maxVisible` | Number | No | - | If provided, limits the maximum number of toast elements rendered at one time. Older/excess toasts are truncated. |
| `className` | String | No | `""` | Additional custom CSS classes appended to the container. |

## Usage Example

```jsx
import React, { useState } from "react";
import ToastContainer from "./ToastContainer"; // Adjust path as necessary

function App() {
    // In a real application, toasts would be managed via context, a reducer, or a library like Zustand.
    // This is a simple local state example for demonstration.
    const [toasts, setToasts] = useState([
        { id: 1, message: "Profile updated successfully." },
        { id: 2, message: "New message received." }
    ]);

    const addToast = () => {
        const newToast = { id: Date.now(), message: `New notification ${Date.now()}` };
        // Add to the front of the array so it renders at the top of the flex column
        setToasts(prev => [newToast, ...prev]);
    };

    return (
        <div style={{ padding: "4rem" }}>
            <button onClick={addToast}>Trigger Toast</button>

            {/* Container automatically manages positioning, ARIA, and max-visibility */}
            <ToastContainer position="bottom-right" maxVisible={3}>
                {toasts.map((toast) => (
                    <div key={toast.id} className="ease-toast">
                        {toast.message}
                    </div>
                ))}
            </ToastContainer>
        </div>
    );
}

export default App;
```

## Customization Notes
- **Pointer Events:** The `.ease-toast-container` wrapper has `pointer-events: none` so that users can click elements beneath the container where there are no active toasts. The direct children (`> *`) have `pointer-events: auto` to allow for close buttons or interactions within the toast itself.
- **Flex Direction:** For `top-*` positions, the flex column stacks normally. For `bottom-*` positions, the CSS automatically applies `flex-direction: column-reverse`. This ensures that new toasts always appear closest to the edge of the screen and push older toasts inward.
- **Entry Animations:** The `style.css` file includes a sample `.ease-toast` class. The container automatically adjusts the entry `@keyframes` (sliding down from the top, or sliding up from the bottom) based on the assigned `position` prop.

## Accessibility Considerations
- **Semantics:** The container is marked with `role="region"`, `aria-label="Notifications"`, and most importantly `aria-live="polite"`. This guarantees that screen readers will announce new toasts as they are appended to the DOM without interrupting the user's current task.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the sliding entrance animations are completely removed (`animation: none !important`). Notifications will appear instantly on the screen, preserving the flow of information without causing disorientation.
