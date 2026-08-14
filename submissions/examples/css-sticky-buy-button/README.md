# CSS Sticky Buy Button (#70845)

A pure CSS sticky call-to-action (CTA) purchase bar that remains fixed at the bottom of the mobile viewport and integrates inline on desktop breakpoints.

## Features
- **Mobile-First Sticky Positioning:** Docked at the bottom of the screen on narrow viewports using `position: fixed` and `backdrop-filter`.
- **Responsive Layout:** Automatically transitions into a standard inline card element on desktop viewports via media queries.
- **Accessibility:** High-contrast focus indicators, explicit ARIA region labels, and `@media (prefers-reduced-motion: reduce)` compliance.

## File Hierarchy
- `style.css` - Sticky bottom bar layout, backdrop filters, responsive breakpoints, and hover animations.
- `demo.html` - Product overview layout showcasing the sticky CTA bar.
- `README.md` - Technical specification and documentation.
