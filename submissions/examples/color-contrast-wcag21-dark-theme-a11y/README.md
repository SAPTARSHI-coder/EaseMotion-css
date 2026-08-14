# Color Contrast WCAG 2.1 AA Audit for Dark Theme (#81943)

An accessibility validation test submission delivering a full WCAG 2.1 AA color contrast audit for dark mode UI themes, verifying text luminance contrast (&ge; 4.5:1), non-text UI control contrast (&ge; 3:1), zero axe-core errors, and `forced-colors: active` high-contrast system color overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (WCAG 1.4.3 Contrast Minimum & 1.4.11 Non-text Contrast)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating calibrated dark theme color tokens and interactive elements.
- `style.css` - Cascade layer-based stylesheet defining WCAG 2.1 AA compliant dark mode variables, focus rings, and `@media (forced-colors: active)` overrides.
- `README.md` - Technical spec and accessibility guidelines.
