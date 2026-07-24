# Shake Effect for a Notification Bell

## What does this example do?
This example demonstrates a micro-interaction commonly used in modern navigation bars: a notification bell that "shakes" or "rings" when the user hovers over it or focuses on it with a keyboard. It draws attention to the notification area and provides playful, responsive feedback to user interaction.

## How is it used?
The effect uses CSS `@keyframes` to rapidly rotate the element back and forth.

1.  **Define the Keyframes:**
    Create a `@keyframes` rule that rotates the element positively and negatively in decreasing increments to simulate a dissipating shake/ring effect.
    ```css
    @keyframes shake {
        0%, 100% { transform: rotate(0); }
        15% { transform: rotate(20deg); }
        30% { transform: rotate(-15deg); }
        45% { transform: rotate(10deg); }
        60% { transform: rotate(-5deg); }
        75% { transform: rotate(2deg); }
    }
    ```

2.  **Apply the Animation:**
    Apply the animation to the button on `:hover` and `:focus`. Crucially, set the `transform-origin` to `top center` so the bell swings from its top hinge, rather than spinning around its center.
    ```css
    .notification-bell {
        transform-origin: top center;
    }
    
    .notification-bell:hover,
    .notification-bell:focus {
        animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
    }
    ```

## Why is it useful?
- **User Engagement:** Micro-interactions like this make an interface feel alive and polished. They can also be triggered programmatically (e.g., adding a class via JS when a new notification arrives) to draw the user's eye.
- **Performance:** Animating the `transform` property ensures the browser can hardware-accelerate the animation, avoiding layout reflows and maintaining a smooth 60fps framerate.
- **Accessibility:** 
  - The component uses a semantic `<button>` tag with an `aria-label`.
  - It includes a visible `:focus-visible` outline for keyboard users.
  - A `@media (prefers-reduced-motion: reduce)` block disables the shake animation completely for users who prefer reduced motion.
