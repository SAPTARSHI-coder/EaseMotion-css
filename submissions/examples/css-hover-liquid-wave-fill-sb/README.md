# CSS Hover: Liquid Wave Fill

A smooth, accessible, performant pure-CSS hover effect featuring **Liquid Wave Fill** styling. No JavaScript required.

## What it does
On hover/focus, a liquid wave shape rises to fill the button using `transform` and `border-radius` morphing.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS hover effect
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<button class="wave-btn">
  <span class="wave-btn__wave" aria-hidden="true"></span>
  <span class="wave-btn__label">Hover to fill</span>
</button>
```

## Specifications
- **Category**: Hover Effects
- **Style**: Liquid Wave Fill
- Smooth CSS transitions, dark mode compatible, hardware accelerated.
- Pure HTML & Vanilla CSS (no external JS).

## Accessibility
- `:focus-visible` outline for keyboard users.
- `prefers-reduced-motion` disables transitions.

Closes #73375
