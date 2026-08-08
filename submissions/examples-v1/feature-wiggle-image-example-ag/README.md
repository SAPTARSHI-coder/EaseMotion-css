# Wiggle Image Example

## Description
This is a standard HTML/CSS example demonstrating a "Wiggle" attention-seeker animation applied to an image. The image remains still for the majority of the animation cycle, but periodically wiggles rapidly side-to-side to draw the user's eye, making it ideal for promotional content or important graphics.

## Files
- `demo.html`: Contains a simple promotional card layout with an `<img>` tag holding the `.wiggle-image-ag` class.
- `style.css`: Contains the basic layout styling and the `@keyframes ease-wiggle-attention-ag` animation logic.

## How It Works
1. The `.wiggle-image-ag` class applies a 3-second infinite animation (`ease-wiggle-attention-ag`).
2. The keyframes dictate that from 0% to 80% of the duration, the image stays completely still (`rotate(0deg)`).
3. From 80% to 100% (the last ~600ms of the 3s loop), the image rapidly rotates back and forth (`3deg`, `-3deg`, `2deg`, `-1deg`), producing the wiggle effect before settling back to 0.

## Accessibility Considerations
- The `<img>` tag includes a descriptive `alt` attribute for screen readers.
- **Reduced Motion**: Disables the periodic wiggle animation entirely via `@media (prefers-reduced-motion: reduce)`, respecting users who are sensitive to sudden movements.
