# Rotate-on-Hover Settings Gear Icon

## What does this example do?
This example demonstrates a standard interactive UI pattern: a settings button containing a gear icon that subtly rotates when the user hovers over it with a mouse or focuses on it using a keyboard. This provides instant, intuitive visual feedback indicating interactivity.

## How is it used?
The effect is achieved purely through CSS transitions manipulating the `transform: rotate()` property.

1.  **Define the Base State and Transition:**
    Apply a `transition` to the `transform` property on the gear icon. Using a cubic-bezier timing function adds a slightly playful, elastic feel to the rotation compared to a standard `ease`.
    ```css
    .gear-icon {
        will-change: transform;
        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    ```

2.  **Define the Hover/Focus State:**
    Apply the rotation transform to the icon when its parent button is hovered or receives focus. Rotating exactly 180 degrees ensures the gear teeth align perfectly before and after the rotation, creating a seamless loop effect if triggered multiple times.
    ```css
    .settings-button:hover .gear-icon,
    .settings-button:focus-visible .gear-icon {
        transform: rotate(180deg);
    }
    ```

## Why is it useful?
- **Intuitive Feedback:** Micro-interactions like this confirm to the user that the element is clickable and responsive, enhancing the overall feel of the application.
- **Zero JavaScript:** Handled entirely by the browser's CSS rendering engine, ensuring high performance and zero JavaScript overhead.
- **Accessibility:** 
  - The icon is housed inside a semantic `<button>` element with an `aria-label="Settings"` to ensure screen readers announce its purpose (since the SVG itself is decorative).
  - The interaction triggers on both `:hover` (for mouse users) and `:focus-visible` (for keyboard users). A clear focus ring is also provided.
  - Includes a `@media (prefers-reduced-motion: reduce)` block that completely disables the rotation effect for users with motion sensitivity.
