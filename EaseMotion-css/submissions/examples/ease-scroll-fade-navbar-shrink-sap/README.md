# ease-scroll-fade-navbar-shrink-sap

A navbar that compacts on scroll — padding tightens, the logo shrinks, and a secondary tagline fades and collapses away entirely.

## Usage
1. Include `style.css`.
2. Add markup: `<header class="shrink-navbar-sap">` with a logo + `.tagline` + nav.
3. Attach the scroll listener from `demo.html`.

## Notes
- The tagline uses both `opacity` and `max-height` together, so it doesn't just become invisible — it also collapses its layout space, letting the header genuinely shrink in height rather than just visually fading a still-occupied area.
- Respects `prefers-reduced-motion`: padding/logo-size/tagline transitions are all removed, leaving only box-shadow as a subtle scroll-state cue.