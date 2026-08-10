# Ripple-Wave Navbar — Minimalist Tech Layouts

A clean, sticky navigation bar with a radial ripple-wave hover effect. When you hover a link, two staggered circular waves expand outward from the center, creating a subtle ripple feel without JavaScript.

## Features

- **Dual ripple waves**: Two pseudo-elements expand in sequence with different timing, producing a layered ripple that feels organic
- **Sticky positioning**: Navbar stays visible as you scroll, with a frosted-glass blur backdrop
- **Brand animation**: The logo square tilts and scales on hover for a playful micro-interaction
- **CTA glow**: The call-to-action button uses a radial gradient sweep to draw attention
- **Responsive**: Nav links collapse on small screens; CTA stays visible

## Customization

All values are controlled through CSS custom properties in `:root`. Override `--rwn-indigo` to change the accent color, or tweak `--rwn-nav-h` for a taller or shorter bar. The ripple diameter is set in the hover rules for `::before` and `::after`.

## Accessibility

- Focus-visible outlines on all interactive elements
- `prefers-reduced-motion` disables all transitions and ripple animations
- Semantic `<nav>` with `aria-label`
