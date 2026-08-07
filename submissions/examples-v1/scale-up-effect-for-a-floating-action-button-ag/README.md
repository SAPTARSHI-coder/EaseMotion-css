# Scale-Up Effect for a Floating Action Button (FAB)

## What does this example do?
This example demonstrates a modern, interactive Floating Action Button (FAB) commonly found in material design and modern web applications. Positioned in the bottom-right corner of the screen, the button smoothly scales up in size when a user hovers over it with a mouse or focuses on it using a keyboard. 

## How is it used?
The effect is achieved using CSS transitions on the `transform` property.

1.  **Define the button:**
    Create a circular button fixed to the bottom right of the viewport.
    ```css
    .floating-button {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    ```

2.  **Define the interaction states:**
    Apply the `scale` transform on `:hover` and `:focus`. The `cubic-bezier` timing function defined above gives the scale a slight, playful "bounce" effect.
    ```css
    .floating-button:hover,
    .floating-button:focus {
        transform: scale(1.15);
    }
    
    .floating-button:active {
        transform: scale(0.95); /* Shrinks slightly when clicked */
    }
    ```

## Why is it useful?
- **Visual Feedback:** A scale-up effect immediately signals to the user that the element is interactive and important, improving the overall user experience without being overly distracting.
- **Zero JavaScript:** The entire interaction is handled by the browser's CSS rendering engine.
- **Performance:** Animating the `transform` property ensures the browser can hardware-accelerate the animation. This avoids layout recalculations (reflows), ensuring the animation stays buttery smooth even on low-end devices.
- **Accessibility:** 
  - Uses a semantic `<button>` tag with an `aria-label` for screen readers.
  - Implements a clear `:focus-visible` ring for keyboard navigators.
  - Includes a `@media (prefers-reduced-motion: reduce)` block that explicitly removes the `transform` animation for users with motion sensitivity, keeping the button usable and static.
