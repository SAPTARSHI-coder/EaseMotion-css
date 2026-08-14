# ease-animated-tab-underline-slide-sap

A tab navigation bar where the active-state underline slides smoothly between tabs, rather than snapping. Underline position/width is computed from `offsetLeft`/`offsetWidth` on click and applied via CSS transition.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.tab-underline-sap` markup from `demo.html` (any number of `.tab-underline-sap__tab` buttons + one `.tab-underline-sap__indicator` span).
3. Include the click handler script from `demo.html` — measuring tab position/width requires JS; CSS handles the slide transition.

## Customization
- Change the `gap` between tabs to adjust spacing.
- Edit the `0.3s cubic-bezier(...)` transition for a snappier/softer slide.
- Swap the `linear-gradient` on the indicator to restyle.

## Accessibility
Includes `role="tablist"`/`role="tab"`; add `aria-selected` toggling alongside `.is-active` for full ARIA tab pattern compliance.

## Browser support
All modern browsers.