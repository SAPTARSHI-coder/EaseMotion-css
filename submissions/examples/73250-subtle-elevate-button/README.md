# CSS Button: Subtle Elevate Variation

A refined button component featuring a subtle elevation effect,
soft shadows, smooth transitions, and accessible interaction states.

## ✨ Features

- Subtle hover elevation
- Soft multi-layer shadows
- Smooth CSS transitions
- Primary, secondary, success, warning, danger, and ghost variants
- Responsive layout
- Keyboard-accessible native buttons
- Visible focus states
- Dark-mode compatible styling
- Reduced-motion support
- No JavaScript
- No external dependencies

## 🎨 Variants

The demo includes:

- Primary
- Secondary
- Success
- Warning
- Danger
- Ghost

## ⚡ Elevation Effect

The button uses a small vertical translation and expanded shadows
on hover:

```css
.elevate-button:hover {
  transform: translate3d(0, -4px, 0);

  box-shadow:
    0 12px 22px rgba(0, 0, 0, 0.28),
    0 5px 18px var(--button-shadow);
}