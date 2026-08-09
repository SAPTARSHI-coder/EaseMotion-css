# Blur Card Entrance Example

## Description
This is a standard HTML/CSS example demonstrating a modern "blur-in" entrance animation for dashboard cards. The cards scale up slightly, slide up, and un-blur as they enter the screen, creating a high-quality, polished look often seen in modern UI frameworks.

## Files
- `demo.html`: Contains a CSS grid layout with several cards. Inline styles are used to set staggered `animation-delay`s.
- `style.css`: Contains the basic card styling and the `@keyframes ease-blur-card-enter-ag` animation.

## How It Works
1. The `.blur-card-ag` elements are initially hidden via `opacity: 0`, scaled down slightly, shifted down via `translateY(10px)`, and blurred using `filter: blur(10px)`.
2. The `ease-blur-card-enter-ag` keyframes animate these three properties to their normal resting states.
3. The animation uses a custom cubic bezier (`cubic-bezier(0.16, 1, 0.3, 1)`) for a smooth, natural deceleration curve.
4. Inline `animation-delay` in the HTML allows the cards to stagger their entrances for a cascading effect.

## Accessibility Considerations
- HTML elements are appropriately semantic (headings and paragraphs).
- Contrast ratios are kept high.
- **Reduced Motion**: Disables the blur, scale, and translation via `@media (prefers-reduced-motion: reduce)`. The entrance animation falls back to a simple, safe opacity fade-in, while maintaining the staggered delay.
