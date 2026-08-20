# Landmark Role Accessibility Audit for Header, Navbar, & Footer (#81953)

An accessibility submission delivering a full WCAG 2.1 AA landmark region audit, proper HTML5 landmark structure (`<header>`, `<nav>`, `<main>`, `<footer>`), skip-navigation link support, and `forced-colors: active` high-contrast system color overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (4.5:1 minimum contrast ratio)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, and `Highlight`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating landmark region navigation, skip-to-content functionality, and ARIA attributes.
- `style.css` - Cascade layer-based stylesheet with high contrast mode `@media (forced-colors: active)` media query support.
- `README.md` - Technical spec and accessibility guidelines.
