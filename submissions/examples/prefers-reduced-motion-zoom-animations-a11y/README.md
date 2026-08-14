# Prefers-Reduced-Motion Zoom Animations (#81929)

An accessibility audit and enhancement implementation delivering an accessible Zoom Animation pattern compliant with WCAG 2.1 AA and WCAG 2.3.3 (Animation from Interactions). Features automatic spatial scale transition disabling under `@media (prefers-reduced-motion: reduce)`, explicit user motion toggle, dynamic screen reader announcements (`aria-live="polite"`), comprehensive keyboard navigation (Arrow keys, Enter, Space, Tab, Home, End, Escape), and native `forced-colors: active` high-contrast support.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (WCAG 2.3.3 Animation from Interactions & WCAG 4.1.3 Status Messages)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating zoom transitions, keyboard navigation, and motion overrides.
- `style.css` - Cascade layer stylesheet defining accessible zoom state rules, reduced-motion overrides, and high-contrast forced color rules.
- `README.md` - Technical specification and accessibility standards.
