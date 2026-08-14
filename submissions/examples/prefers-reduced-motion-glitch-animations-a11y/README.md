# Prefers-Reduced-Motion Glitch Animations (#81938)

An accessibility enhancement and validation test submission delivering an accessible Glitch Animation pattern compliant with WCAG 2.3.1 (Three Flashes or Below Threshold) and WCAG 2.3.3 (Animation from Interactions), featuring automatic `@media (prefers-reduced-motion: reduce)` motion kill switch, manual user toggle, screen reader state announcements (`aria-live="polite"`), and system `forced-colors: active` high-contrast overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (WCAG 2.3.1 Three Flashes, 2.3.3 Animation from Interactions & 4.1.3 Status Messages)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating glitch animations, motion toggle, and reduced-motion compliance.
- `style.css` - Cascade layer stylesheet defining accessible glitch state rules, reduced-motion keyframe overrides, and `@media (forced-colors: active)`.
- `README.md` - Technical spec and accessibility guidelines.
