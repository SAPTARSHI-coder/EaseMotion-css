# Rotate-Fade Modal — Minimalist Tech Layouts

A CSS-only modal that enters with a rotation and fade. The card starts tilted at -4 degrees with reduced scale and opacity, then rotates to level while scaling up and fading in.

## How It Works

A hidden checkbox controls the open/close state. When checked, the backdrop fades in and the modal card transitions from `rotate(-4deg) scale(0.9) translateY(16px) opacity: 0` to its resting position. The spring cubic-bezier gives a slight overshoot as the card settles.

The rotation creates a more dynamic entrance than a simple scale, making the modal feel like it's being placed onto the screen rather than just appearing.

## Customization

Override `--rfm-emerald` to change the accent color. Adjust the initial `rotate()` and `scale()` values for more or less dramatic entrances. The spring easing can be replaced with `ease-out` for a more subdued feel.

## Accessibility

- `prefers-reduced-motion` disables all transitions while keeping the modal functional
- Backdrop is clickable to close
- Semantic `role="dialog"` and `aria-modal="true"` on the modal
- Close buttons have `aria-label` for screen readers
