# Button Hover Collection

Eight buttons each with a distinct hover effect: slide background, fill from center, border draw, glow, underline, scale, shadow lift, and ripple.

## Features

- Eight unique CSS-only hover effects (no JavaScript)
- Consistent sizing and dark theme styling
- Smooth transitions with cubic-bezier easing
- Accessible focus-visible outlines
- `prefers-reduced-motion` media query disables animations

## Usage

Open `demo.html` in any modern browser. Each button is a `<button>` element with a `data-effect` attribute matching one of the eight effects. Copy individual button CSS blocks to reuse specific effects in your own projects.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires CSS `clip-path` support for the border-draw effect and `transform-style` for smooth transitions. The `prefers-reduced-motion` media query ensures accessibility for users with motion sensitivity.
