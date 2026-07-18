# Fade-out-Down Closing Modal

## What does this example do?
This example demonstrates a smooth exit animation for a modal dialog. Instead of abruptly disappearing when closed, the modal gracefully fades out while slightly dropping downward, creating a sense of physical weight and natural dismissal.

## How is it used?
The effect is achieved using CSS `@keyframes` that manipulate the `opacity` and `transform: translateY()` properties. In this pure CSS demo, we use `animation-delay` to trigger the exit after 2 seconds to simulate a dismissal event.

1.  **Define the Keyframes:**
    Create a `@keyframes` animation for the modal box itself, shifting it downwards while fading it out.
    ```css
    @keyframes fadeOutDown {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(50px); /* Move down slightly */
        }
    }
    ```

2.  **Apply the Animation:**
    Apply the animation to the `.modal` element. Use a cubic-bezier curve to give the drop a natural, gravity-like acceleration. Use the `forwards` fill-mode so the modal remains hidden after the animation ends.
    ```css
    .modal {
        animation: fadeOutDown 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
    }
    ```
    *Note:* In a real application, you would typically add a CSS class (e.g., `.is-closing`) containing this animation via JavaScript when the user clicks the "Close" button, rather than using an `animation-delay`.

## Why is it useful?
- **Polished UX:** Dismissing a modal abruptly can feel jarring. A fade-out-down animation provides spatial context, visually confirming that the layer is being discarded or put away.
- **High Performance:** Transitioning `opacity` and `transform` allows the browser to utilize hardware acceleration, guaranteeing smooth 60fps animations even on mobile devices.
- **Accessibility:** 
  - The modal markup utilizes `aria-modal="true"`, `role="dialog"`, and `aria-labelledby` to ensure proper screen reader context.
  - A `@media (prefers-reduced-motion: reduce)` block is included. For users who prefer reduced motion, it swaps the `fadeOutDown` animation (which involves spatial movement) for a simple `simpleFadeOut` animation. This preserves the smooth exit without the potentially disorienting drop effect.
