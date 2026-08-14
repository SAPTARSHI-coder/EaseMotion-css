# Skip Link Navigation Anchor Accessibility (#81950)

An accessibility submission delivering a full WCAG 2.1 AA audit, skip-to-content navigation anchor support (`<a href="#main-content">`), target container focus management (`tabindex="-1"`), and `forced-colors: active` high-contrast system color overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (4.5:1 minimum contrast ratio)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating keyboard skip navigation activation, target focus jumping, and landmark region associations.
- `style.css` - Cascade layer-based stylesheet with high contrast mode `@media (forced-colors: active)` media query support.
- `README.md` - Technical spec and accessibility guidelines.
