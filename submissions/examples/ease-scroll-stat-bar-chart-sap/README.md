# ease-scroll-stat-bar-chart-sap

Horizontal stat bars that grow from 0 to their target value when scrolled into view, using `IntersectionObserver` to trigger a class and a CSS custom property (`--value`) to drive the fill width.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.stat-bar-chart-sap` markup from `demo.html`, setting `style="--value: XX%;"` per bar.
3. Include the observer script from `demo.html` — scroll-triggering needs JS; CSS handles the fill animation.

## Customization
- Change the `1.1s cubic-bezier(...)` transition for a faster/slower fill.
- Adjust `threshold: 0.4` in the observer to trigger earlier/later.
- Swap the `linear-gradient` fill color to restyle.

## Accessibility
Add `role="img"` with an `aria-label` describing each stat's percentage for screen readers, since the value is conveyed visually via width.

## Browser support
All modern browsers (`IntersectionObserver`, CSS custom properties).