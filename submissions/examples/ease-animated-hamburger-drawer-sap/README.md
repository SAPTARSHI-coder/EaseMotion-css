# ease-animated-hamburger-drawer-sap

A hamburger icon that morphs to an X and slides a navigation drawer in from the left, both animating together.

## Usage
1. Include `style.css`.
2. Add markup: `.drawer-hamburger` (3 spans) + `.drawer-panel` (nav links) inside `.drawer-wrap-sap`.
3. Attach the click toggle from `demo.html`, keeping `aria-expanded` synced.

## Customization
- Drawer slide distance/direction (currently full-width slide-in from left).
- Hamburger bar spacing/color.
- Panel width, background, and nav link styling.

## Notes
- Hamburger morph and panel slide are two independent transitions triggered by the same `.open` class toggle, so they play in sync without needing separate JS timing coordination.
- `aria-expanded` reflects the functional open/closed state for assistive tech.
- Respects `prefers-reduced-motion`: both the hamburger bar transforms and the panel slide transition are disabled, so toggling is instant.