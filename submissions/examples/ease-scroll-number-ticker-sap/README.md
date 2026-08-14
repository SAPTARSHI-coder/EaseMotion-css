# ease-scroll-number-ticker-sap

A large single-number ticker with a prefix/suffix label, counting up with a strong ease-out curve once scrolled into view.

## Usage
1. Include `style.css`.
2. Add markup: a target `<span>` inside surrounding label text.
3. Attach the `IntersectionObserver` + RAF count-up from `demo.html`.

## Customization
- Target value and duration.
- Easing power (`Math.pow(1-p, 4)` = quartic ease-out) — lower exponent for a gentler deceleration.
- Prefix/suffix text and styling.

## Notes
- Single large ticker variant of the scroll count-up pattern, styled for hero-stat emphasis (large font, colored prefix) rather than a multi-stat row.
- `animated` flag prevents replay on repeated scroll in/out.
- No CSS transition is involved (text-content animation via RAF only), so this component has nothing to gate behind `prefers-reduced-motion` at the CSS level — the animation itself is inherently brief and value-communicating rather than persistent decorative motion.