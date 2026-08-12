# Blur-in Effect for a Hero Image

## What does this example do?
This example demonstrates a modern, cinematic entrance animation for a hero section's background image. When the page loads, the large hero image transitions from a completely blurred and transparent state into a sharp, fully opaque image. This draws the user's focus naturally while providing a sense of depth and elegance.

## How is it used?
The effect is achieved purely through CSS `@keyframes`, manipulating the `opacity`, `filter`, and `transform` properties.

1.  **Define the Keyframes:**
    Create an animation that animates `filter: blur()`, `opacity`, and includes a slight `transform: scale()` reduction to simulate pulling the image into focus.
    ```css
    @keyframes blurIn {
        0% {
            opacity: 0;
            filter: blur(20px);
            transform: scale(1.05); /* Start slightly zoomed in */
        }
        100% {
            opacity: 1;
            filter: blur(0);
            transform: scale(1); /* Return to normal size */
        }
    }
    ```

2.  **Apply the Animation:**
    Apply the initial state to the image, and trigger the animation with the `forwards` fill-mode to ensure the image remains sharp and visible after the animation completes.
    ```css
    .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        /* Initial State */
        opacity: 0;
        filter: blur(20px);
        transform: scale(1.05);
        
        /* Trigger */
        animation: blurIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
    ```

## Why is it useful?
- **Aesthetics & UX:** A blur-in effect is much smoother and more professional than a sudden, jerky image load, especially for large, high-resolution hero graphics. The subtle zoom-out (`scale(1.05)` to `scale(1)`) mimics the focusing of a camera lens.
- **Zero JavaScript:** Handled entirely by the browser's CSS rendering engine, keeping the page lightweight and easy to maintain.
- **Accessibility:** Includes a strict `@media (prefers-reduced-motion: reduce)` block. For users with motion sensitivity, this block disables the animation, instantly setting the image to full opacity, zero blur, and scale `1`.
- **Edge Handling:** Notice that the animation starts at `scale(1.05)`. This is a critical CSS trick when animating `filter: blur()`. Blurring an image causes the edges to bleed transparency; scaling the image up slightly ensures those blurred, bleeding edges are pushed outside the container, preventing unsightly white borders during the animation.
