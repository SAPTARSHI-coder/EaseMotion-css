# Slide-out-Right Dismissing Toast

## What does this example do?
This example demonstrates a notification toast that automatically dismisses itself by sliding out to the right side of the screen and fading away. 

## How is it used?
The effect is achieved purely through CSS `@keyframes`, manipulating the `transform: translateX()` and `opacity` properties, combined with an `animation-delay` to keep the toast visible for a set duration before dismissing.

1.  **Define the Keyframes:**
    Create a `@keyframes` animation that controls the exit sequence.
    ```css
    @keyframes slideOutRight {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(120%); /* Move entirely outside its bounds */
            opacity: 0;
        }
    }
    ```

2.  **Apply the Animation:**
    Apply the animation to the toast container. Use `animation-delay` (e.g., `3s`) to specify how long the toast remains on screen. Use the `forwards` fill-mode so it remains hidden after the animation ends.
    ```css
    .toast {
        /* ... styling ... */
        animation: slideOutRight 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 3s forwards;
    }
    ```
    *Note on Overflow:* The parent `.toast-container` uses `overflow: hidden;` to ensure the toast sliding off-screen doesn't trigger horizontal scrollbars on the main `body`.

## Why is it useful?
- **Smooth UX:** A toast that slides out provides a gentle, natural exit compared to abruptly disappearing from the DOM.
- **Zero JavaScript Exit:** While JavaScript is typically used to inject the toast and eventually remove it from the DOM entirely, the CSS handles the visual exit, ensuring high-performance hardware-accelerated rendering.
- **Accessibility:** 
  - The toast container uses `aria-live="polite"` and `role="status"` to ensure screen readers announce the message without aggressively interrupting the user's current task.
  - A `@media (prefers-reduced-motion: reduce)` block elegantly swaps the sliding `slideOutRight` animation for a simple, static `fadeOut` animation. This preserves the auto-dismiss functionality while removing the lateral motion for sensitive users.
