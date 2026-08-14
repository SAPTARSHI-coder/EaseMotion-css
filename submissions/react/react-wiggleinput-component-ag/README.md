# React WiggleInput Component

## Description
The `WiggleInput` component is a reusable React wrapper for standard `<input>` elements that provides subtle movement feedback. When triggered (usually upon a validation error), it smoothly shakes side-to-side. This helps draw the user's attention to fields that require correction without being overly aggressive.

## Installation
Since this is a lightweight utility component, you can simply copy the `WiggleInput.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

The component accepts all standard React HTML input attributes (e.g., `value`, `onChange`, `placeholder`, `type`, `disabled`), passing them directly to the underlying `<input>` element.

**Additional Props:**

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `error` | Boolean | No | `false` | When set to `true`, it triggers the wiggle animation and applies a red error border. It also sets `aria-invalid="true"`. |
| `className` | String | No | `""` | Additional custom CSS classes applied to the input. |
| `duration` | String | No | `"0.5s"` | Custom animation duration (e.g., `"0.3s"`, `"1s"`). |

## Usage Example

```jsx
import React, { useState } from "react";
import WiggleInput from "./WiggleInput"; // Adjust path as necessary

function LoginForm() {
    const [email, setEmail] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation logic
        if (!email.includes("@")) {
            setHasError(true);
            return;
        }
        
        setHasError(false);
        alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", padding: "2rem" }}>
            <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem" }}>
                    Email Address
                </label>
                <WiggleInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        // Clear error on user typing
                        if (hasError) setHasError(false);
                    }}
                    error={hasError}
                    /* Optional: You can pass custom durations or classes */
                    // duration="0.4s"
                />
            </div>
            
            <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                Submit
            </button>
        </form>
    );
}

export default LoginForm;
```

## Customization Notes
- The internal state automatically removes the active wiggle class after the animation duration completes. This ensures that if the `error` state is toggled again (e.g., the user clicks submit twice without fixing the issue), the animation will accurately replay.
- Base styling for padding, border-radius, and focus rings are provided in `.ease-wiggle-input`. You can easily override these by modifying `style.css` or passing Tailwind/Bootstrap utility classes via the `className` prop.

## Accessibility Considerations
- **Semantic structure:** Renders as a standard HTML `<input>`, ensuring full compatibility with `<label>` associations and form submission handlers.
- **`aria-invalid` Mapping:** When the `error` prop is `true`, the component automatically maps this to the `aria-invalid="true"` attribute, informing screen readers of the validation state.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the shaking animation is bypassed (`animation: none !important`), ensuring the input remains static. The visual red border (error state) remains intact as a stationary cue.
