# Skew-Active Modal — Minimalist Tech Layouts

A CSS-only modal that enters with a horizontal skew. The modal card starts tilted with `skewX(-6deg)` offset to the left, then un-skews and slides into its resting position when the checkbox is toggled.

## How It Works

A hidden checkbox controls the open state. When checked, the overlay fades in and the modal box transitions from `skewX(-6deg) translateX(-30px) scale(0.95) opacity: 0` to `skewX(0) translateX(0) scale(1) opacity: 1`. The cubic-bezier easing gives a smooth deceleration as the card settles.

The skew creates a directional entrance — the card appears to slide in from the left edge while straightening out, which feels more intentional than a plain fade or scale.

## Customization

- Change `--sam-emerald` to adjust the accent color
- Modify the initial `skewX()` value for a more or less aggressive tilt
- Adjust `translateX()` to control how far the card slides in
- Swap the easing function for different feels

## Accessibility

- `prefers-reduced-motion` disables all transitions while keeping the modal fully functional
- Overlay is clickable to close
- Semantic `role="dialog"` and `aria-modal="true"` attributes
- Close button has `aria-label` for screen readers
