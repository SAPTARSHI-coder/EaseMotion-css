# Ripple-Wave Modal — Minimalist Tech Layouts

A CSS-only modal that opens with a radial ripple wave expanding from the center, while the card scales in with a spring overshoot.

## How It Works

A hidden checkbox controls the open/close state. When checked, the backdrop fades in and a `::before` pseudo-element expands from `0` to `180vmax` — large enough to cover any viewport. The modal card transitions from `scale(0.92) translateY(12px)` to its resting position with a spring cubic-bezier that gives a subtle bounce.

The ripple uses a semi-transparent indigo circle that expands behind the backdrop overlay, creating the illusion of a wave spreading from the center of the screen.

## Customization

Override `--rwm-indigo` to change the accent color. Adjust the `180vmax` size for smaller or larger ripple coverage. The card scale and translate values control the entrance intensity.

## Accessibility

- `prefers-reduced-motion` disables all transitions while keeping the modal functional
- Backdrop is clickable to close
- Semantic `role="dialog"` and `aria-modal="true"` on the modal
- Close buttons have `aria-label` for screen readers
