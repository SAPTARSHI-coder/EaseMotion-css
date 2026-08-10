# CSS Neon Sign Button

A glowing neon sign button featuring a subtle flickering and electrical
buzz effect using pure CSS.

## Features

- Neon sign-inspired button
- CSS glow effects
- Flickering neon animation
- Hover and active interactions
- Keyboard-accessible button
- Visible focus indicator
- Responsive layout
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## How It Works

The neon appearance is created using CSS `box-shadow` and
`text-shadow`.

The flickering effect is controlled with CSS keyframes:

```css
@keyframes neon-flicker {
  0%,
  18%,
  22%,
  24%,
  60%,
  62%,
  64%,
  100% {
    opacity: 1;
  }

  20%,
  23%,
  61%,
  63% {
    opacity: 0.45;
  }
}