# File Dropzone Keyboard Drag-and-Drop (#81910)

An accessibility enhancement and validation test submission delivering a fully accessible File Upload Dropzone supporting keyboard interaction (<kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>Escape</kbd>), dynamic screen reader status updates via `aria-live="polite"`, high-contrast target ring indicators, and `forced-colors: active` system overrides.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (WCAG 2.1.1 Keyboard & 4.1.3 Status Messages)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating keyboard operability, dropzone interaction, and live region feedback.
- `style.css` - Cascade layer stylesheet defining accessible dropzone state styles, focus indicators, and `@media (forced-colors: active)` overrides.
- `README.md` - Technical spec and accessibility guidelines.
