# Staggered Entrance List Component

A pure CSS implementation of a cascading (staggered) entrance animation. This component dynamically delays the entrance of list items to create a smooth, orchestrated flowing effect as content loads.

## Features
- **Dynamic CSS Variables**: Uses the `--item-index` custom property on HTML elements combined with `calc()` to dynamically orchestrate animation delays, avoiding the need for heavily repetitive `:nth-child` CSS rules.
- **Performant**: Relies on GPU-accelerated `transform` and `opacity` properties with a custom `cubic-bezier` timing function for a buttery smooth organic feeling.
- **Accessible**: Fully respects `@media (prefers-reduced-motion: reduce)`. If the user has motion sensitivity enabled, the staggered sliding entrance is replaced with a rapid, simultaneous fade-in.

## Usage
Open `demo.html` in your browser. 
Upon page load, the list items will slide up and fade in sequentially.
Click the **Replay Animation** button to see the effect again.

The core mechanic lives in the `animation-delay` declaration:
```css
.staggered-item {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: calc(var(--item-index, 0) * var(--stagger-delay));
}
```

## Files
- `demo.html`: The HTML structure demonstrating the `style="--item-index: X"` technique.
- `style.css`: The styling rules containing the mathematical stagger logic and keyframes.
