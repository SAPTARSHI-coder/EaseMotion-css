# ease-hover-nav-mega-menu-sap

A hover-triggered mega menu panel with multiple content columns, fading and sliding into view beneath the nav trigger.

## Usage
1. Include `style.css`.
2. Add markup: `.mega-trigger` + `.mega-panel` (with `.mega-col` groups) inside `.mega-menu-sap`.

## Customization
- Panel width/columns for different content amounts.
- Slide distance/fade duration.
- Column heading and link styling.

## Notes
- `:hover` is applied to the parent `.mega-menu-sap` (not just the trigger), so moving the cursor from the trigger into the panel itself doesn't close the menu — the whole wrapper counts as the hover zone.
- Panel uses `visibility` + `opacity` + `transform` together (not `display: none`) for a genuine animated reveal rather than an instant pop.
- Respects `prefers-reduced-motion`: slide transform is removed, leaving a quick opacity/visibility fade only.