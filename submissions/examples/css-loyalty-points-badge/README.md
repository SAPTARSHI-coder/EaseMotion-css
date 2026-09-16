# CSS Loyalty Points Badge

A pure CSS loyalty and rewards points display badge component designed for e-commerce user profiles, gaming portals, and membership dashboards. Features a crown icon frame, animated light shimmer overlay, gold ambient glow, and hover status popovers. Built without JavaScript dependencies.

## How it works

The badge component (`.ease-loyalty-badge`) leverages dark gold ambient box shadows and CSS linear gradients. Continuous light sheen effects are driven by an absolute pseudo-overlay layer (`.ease-badge-shimmer`) translating across the card via `@keyframes ease-shimmer`. On hover or keyboard focus, the crown icon scales slightly while revealing a popover (`.ease-badge-popover`) detailing tier progress.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-badge-bg`: Main dark surface background (`#0f172a`)
- `--ease-badge-card-bg`: Outer card background (`#1e293b`)
- `--ease-badge-border`: Boundary border line color (`#334155`)
- `--ease-badge-text`: Headline and value text color (`#f8fafc`)
- `--ease-badge-muted`: Subtitle description text color (`#94a3b8`)
- `--ease-badge-gold`: Primary amber gold accent color (`#f59e0b`)
- `--ease-badge-gold-light`: Highlight gold color (`#fbbf24`)
- `--ease-badge-gold-glow`: Translucent glow value (`rgba(245, 158, 11, 0.25)`)
- `--ease-badge-duration`: Hover transition speed (`0.35s`)

## Accessibility & Performance

- Fully accessible using semantic container tags (`role="region"`, `aria-label`, `tabindex="0"`), clear contrast ratios, and screen-reader accessible rewards metrics.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables shimmer keyframe animations and scale transforms.