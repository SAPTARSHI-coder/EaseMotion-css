# ease-animated-breadcrumb-trail-sap

A breadcrumb navigation trail where each link gets an animated underline on hover, and the final crumb is styled as the non-interactive current page.

## Usage
1. Include `style.css`.
2. Add markup: `<a>` links separated by `.crumb-sep`, ending in a `.crumb-current` span for the active page.

## Notes
- Underline grows via `scaleX()` from `transform-origin: left`, same lightweight technique as the standalone underline-nav component.
- The final crumb uses a plain `<span>` (not `<a>`), correctly signaling it's the current page and not a clickable link.
- Respects `prefers-reduced-motion`: underline scale transition is removed, color change remains.