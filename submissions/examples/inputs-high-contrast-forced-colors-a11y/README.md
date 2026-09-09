# Input Accessibility Audit & High Contrast Mode Forced-Colors (#81923)

An accessibility submission delivering a full WCAG 2.1 AA audit and `forced-colors: active` high-contrast system color overrides for Input controls.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (4.5:1 minimum contrast ratio)
- **High Contrast Support:** System `forced-colors: active` mapped to `Field`, `FieldText`, `CanvasText`, `Canvas`, and `Highlight`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating focus management, explicit label pairing, and ARIA attributes for inputs.
- `style.css` - Cascade layer-based stylesheet with high contrast mode `@media (forced-colors: active)` media query support.
- `README.md` - Technical spec and accessibility guidelines.
