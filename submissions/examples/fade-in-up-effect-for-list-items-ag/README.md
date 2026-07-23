# Fade-in-Up Effect for List Items

## What does this example do?
This example demonstrates a smooth, cascading "fade-in-up" entrance animation for a list of items. When the page loads, the items gracefully slide upwards into their final position while fading from completely transparent to fully opaque. Each successive item in the list is delayed slightly, creating a pleasing staggered entrance effect.

## How is it used?
The effect is achieved entirely with CSS keyframes and the `animation-delay` property.

1.  **Define the initial state and animation:**
    Apply the initial state (`opacity: 0`, `transform: translateY(30px)`) to the list items, and attach the `fadeInUp` animation to them using `animation: fadeInUp 0.6s cubic-bezier(...) forwards;`. The `forwards` keyword ensures the element retains the styles from the last keyframe once the animation completes.

2.  **Define the keyframes:**
    ```css
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    ```

3.  **Stagger the animations:**
    Use the `:nth-child()` pseudo-class to apply increasing delays to each item in the list.
    ```css
    .animated-list .list-item:nth-child(1) { animation-delay: 0.1s; }
    .animated-list .list-item:nth-child(2) { animation-delay: 0.2s; }
    /* ... and so on ... */
    ```

## Why is it useful?
- **Visual Hierarchy:** Entrance animations draw the user's eye to new content, establishing a clear visual hierarchy and making the page feel more dynamic and polished.
- **Zero JavaScript:** By relying purely on CSS keyframes and structural pseudo-classes (`:nth-child`), this effect avoids the performance overhead and complexity of JavaScript animation libraries.
- **Performance:** Animating `transform` and `opacity` guarantees that the browser can hardware-accelerate the animation, ensuring a smooth 60fps frame rate without triggering expensive layout recalculations (reflows).
- **Accessibility:** The example includes a `@media (prefers-reduced-motion: reduce)` block that disables the animation, ensuring the content is immediately visible and static for users who experience discomfort from motion.
