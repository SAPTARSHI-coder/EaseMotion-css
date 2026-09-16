# Text Track Spread

A dependency-free EaseMotion text component where individual letters widen from
the center on hover or keyboard focus, then return with a smooth breathing
motion.

## Files

- `demo.html` contains the accessible text effect examples.
- `style.css` defines the spread distances, focus state, responsive sizing, and
  reduced-motion fallback.

## Accessibility

Each visual word is exposed through an `aria-label`, while individual decorative
letters are hidden from assistive technology. The component supports
`:focus-visible` for keyboard users and disables transitions when
`prefers-reduced-motion` is enabled.
