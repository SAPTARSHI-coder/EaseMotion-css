# Sun to Moon Animated Theme Toggle

## What does this do?
This implements a pure CSS dark-mode toggle animation. A circular button starts as a glowing **Sun** (with radiating rays from `box-shadow`). When activated, it smoothly morphs into a **crescent Moon** by sliding an overlapping pseudo-element across the circle to mask part of it, while simultaneously fading the rays and rotating the entire button.

## How is it used?
Add the `.theme-toggle-btn` class to a `<button>`. Toggle the `.is-dark` class on the button via JavaScript to switch between the sun and moon states.

Example:
```html
<button class="theme-toggle-btn" onclick="this.classList.toggle('is-dark')"></button>
```

## Why is it useful?
- Provides an elegant, premium-feeling dark mode toggle without requiring any SVG icons or external libraries.
- The entire morphing effect is powered by CSS `transition` and `transform` on pseudo-elements, making it lightweight and highly performant.
- Accessible: works with `aria-label` and standard button semantics.
