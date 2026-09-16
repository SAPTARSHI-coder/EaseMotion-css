# Screen Reader Visually Hidden sr-only Utility Audit (#81949)

An accessibility validation test submission delivering a full WCAG 2.1 AA audit, standard screen reader visually-hidden `sr-only` utility implementation (`clip: rect(0 0 0 0)`), keyboard focus restoration support (`.sr-only-focusable`), and `forced-colors: active` high-contrast system color overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (4.5:1 minimum contrast ratio)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating icon button screen reader labels and focusable `sr-only` skip element behaviors.
- `style.css` - Cascade layer-based stylesheet containing standard `.sr-only`, `.sr-only-focusable`, and `@media (forced-colors: active)` overrides.
- `README.md` - Technical spec and accessibility guidelines.
