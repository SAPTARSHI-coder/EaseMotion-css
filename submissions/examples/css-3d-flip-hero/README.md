# CSS 3D Flip Hero

A responsive hero section featuring a 3D flip-in animation using pure CSS.

## Features

- Pure CSS 3D transform and animation
- Responsive hero layout
- CSS custom properties for theming
- Light and dark mode support
- Accessible semantic HTML
- `prefers-reduced-motion` support
- No JavaScript required

## Files

- `demo.html` — Demo markup
- `style.css` — Component styles and animations

## Animation

The hero card uses `transform-style: preserve-3d`,
`perspective`, `backface-visibility`, and `rotateY()` to create
the 3D flip effect when the page loads.

## Usage

Open `demo.html` in a modern web browser.

## Accessibility

The animation respects the user's `prefers-reduced-motion`
setting. Decorative visual content is marked with `aria-hidden`
where appropriate.