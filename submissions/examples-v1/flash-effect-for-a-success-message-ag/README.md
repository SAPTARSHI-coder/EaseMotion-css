# Flash Effect for a Success Message

## What does this example do?
This example demonstrates a "flash" entrance animation for a success notification or alert box. When the message is rendered in the DOM, it pops into view with a quick bounce scale, while its background color flashes a slightly brighter shade of green before settling into its resting color. 

## How is it used?
The effect is achieved purely through CSS `@keyframes`, manipulating the `opacity`, `transform: scale()`, and `background-color` properties.

1.  **Define the Keyframes:**
    Create a `@keyframes` animation that controls the entrance and the "flash".
    ```css
    @keyframes flash {
        0% {
            opacity: 0;
            transform: scale(0.95);
            background-color: #a7f3d0; /* Bright green flash */
        }
        15% {
            opacity: 1;
            transform: scale(1.02); /* Slight overshoot (bounce) */
            background-color: #ecfdf5; /* Return to normal background */
        }
        30% { transform: scale(0.98); }
        45% { transform: scale(1); }
        100% {
            opacity: 1;
            transform: scale(1);
            background-color: #ecfdf5;
        }
    }
    ```

2.  **Apply the Animation:**
    Apply the animation to the success message container using the `forwards` fill-mode to lock the final state.
    ```css
    .success-message {
        background-color: #ecfdf5;
        border: 1px solid #10b981;
        animation: flash 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
    ```

## Why is it useful?
- **User Feedback:** A flash effect immediately draws the user's eye to the success notification, confirming their action (like submitting a form) was completed successfully without being overly disruptive.
- **Zero JavaScript:** Handled entirely by the CSS rendering engine when the element is added to the DOM or the page loads.
- **Accessibility:** 
  - The HTML container uses `role="status"` and `aria-live="polite"`, ensuring screen readers announce the success message when it appears without interrupting the user.
  - Color contrast is carefully tuned to ensure the dark green text is legible against the light green background.
  - A `@media (prefers-reduced-motion: reduce)` block disables the animation, instantly setting the alert to full opacity and scale `1` for users with motion sensitivity.
