# React ScaleButton Component

## Description
The `ScaleButton` component is a reusable React wrapper that provides immediate, physical-feeling interaction feedback. It slightly scales up on hover/focus to indicate interactivity, and scales down slightly when actively pressed. This simple animation pattern makes web applications feel more responsive and native.

## Installation
Since this is a lightweight utility component, simply copy the `ScaleButton.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

The component forwards all standard HTML `<button>` attributes (like `onClick`, `disabled`, `type`, `aria-*`), plus the following custom props:

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | The content (text, icons, etc.) displayed inside the button. |
| `variant` | String | No | `"primary"` | The visual style variant of the button. Accepts `"primary"`, `"secondary"`, or `"outline"`. |
| `className` | String | No | `""` | Additional custom CSS classes appended to the button. |
| `duration` | String | No | `"0.2s"` | Custom animation transition duration for the scaling effect (e.g., `"0.5s"`). |

## Usage Example

```jsx
import React from "react";
import ScaleButton from "./ScaleButton"; // Adjust path as necessary

function App() {
    return (
        <div style={{ padding: "4rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            
            {/* Basic usage (Primary by default) */}
            <ScaleButton onClick={() => alert("Primary Clicked!")}>
                Submit Form
            </ScaleButton>
            
            {/* Secondary Variant */}
            <ScaleButton variant="secondary" onClick={() => console.log("Canceled")}>
                Cancel
            </ScaleButton>

            {/* Outline Variant with Custom Duration */}
            <ScaleButton variant="outline" duration="0.4s">
                Learn More
            </ScaleButton>

            {/* Disabled State (Scaling is automatically disabled) */}
            <ScaleButton disabled>
                Processing...
            </ScaleButton>

        </div>
    );
}

export default App;
```

## Customization Notes
- The physical "press" feeling is achieved via the `:active` pseudo-class dropping the scale to `0.95`, contrasting with the `:hover` scale of `1.05`.
- Standard button styling (padding, borders, basic colors) is provided in `style.css` but can be easily overridden via standard CSS or the `className` prop (such as passing Tailwind utility classes).
- If you use Tailwind or another framework and wish to override background colors entirely, you may want to remove the specific `.ease-scale-btn-*` variant classes from `style.css`.

## Accessibility Considerations
- **Keyboard Navigation:** The component uses a native `<button>` element, ensuring it receives focus in the normal document tab order and can be activated via `Enter` or `Spacebar`. 
- **Focus Rings:** A customized `:focus-visible` box-shadow ring is applied. This assists keyboard users in identifying focus without showing an ugly outline when mouse users click the button.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the scaling transitions are completely removed (`transform: none !important`). Color changes on hover and focus rings remain intact to preserve interactivity cues without triggering motion sensitivity.
