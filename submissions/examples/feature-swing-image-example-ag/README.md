# Swing Image Exit Example

## Description
This is a standard HTML/CSS/JS example demonstrating an exit animation for an image card. When the user clicks "Remove", the card swings backward on a top hinge and fades out, simulating a physical sign swinging away.

## Files
- `demo.html`: Contains the markup for the image card and a simple JS function to add the exit class.
- `style.css`: Contains the basic layout styling and the `@keyframes ease-swing-exit-ag` animation.

## How It Works
1. The `.image-card-ag` has `transform-origin: top center` set so that any 3D rotation happens around its top edge (like a hinge). The parent container has `perspective: 1000px` to give depth to the 3D rotation.
2. Clicking "Remove" executes JS that adds the `.swing-image-exit-ag` class to the card.
3. The `ease-swing-exit-ag` animation slightly swings the card forward (`rotateX(-20deg)`) for anticipation, then swings it entirely backward (`rotateX(90deg)`) while fading the opacity to 0.

## Accessibility Considerations
- Meaningful `alt` text is provided for the image (in a real app, describe the image content).
- The button has an explicit `aria-label`.
- **Reduced Motion**: Disables the 3D swing entirely via `@media (prefers-reduced-motion: reduce)`. The exit animation is replaced with a simple, safe opacity fade-out.
