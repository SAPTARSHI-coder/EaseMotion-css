# Glowing Tab Bar with Neon styling (#78851)

A responsive zero-JavaScript tab navigation component featuring sliding active tab pill indicators, neon cyan ambient illumination, and spring micro-interactions built using pure CSS.

## Features
- **Zero-JavaScript State Switching:** Driven completely by radio input state handling (`:checked ~ .tab-indicator`).
- **Sliding Gliding Indicator:** Smooth CSS `transform: translateX()` spring transitions between selected tab slots.
- **Accessible & Semantic Structure:** Integrated with `role="tablist"`, `role="tab"`, and keyboard `:focus-visible` handling.

## File Hierarchy
- `style.css` - Custom neon color tokens, radio-state selector logic, gliding indicator translations, and responsive mobile breakpoints.
- `demo.html` - Accessible HTML structure showcasing tab controls.
- `README.md` - Technical specification and architecture overview.
