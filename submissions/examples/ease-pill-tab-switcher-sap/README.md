# ease-pill-tab-switcher-sap

A simple pill-style tab group where each button gets its own scale-in dark background and a slight bounce when selected, independent of the other tabs.

## Usage
1. Include `style.css`.
2. Add markup: `.pill-btn` elements (mark one `active` initially) inside `.pill-tabs-sap`.
3. Attach the click toggle from `demo.html`.

## Customization
- Active pill background color.
- Bounce keyframe intensity (`pill-select-sap`).
- Number of tabs — each button independently manages its own `::before` fill, so any count works without layout math.

## Notes
- Unlike a sliding-indicator tab design, each button owns its own `::before` pill background that scales in/out independently — simpler to implement (no `offsetLeft` measurement needed) at the cost of not having a single indicator that visually travels between tabs.
- The `.active` class re-triggers the `pill-select-sap` bounce animation each time a tab is clicked, since the class is freshly added (not just toggled on an already-active element).
- Respects `prefers-reduced-motion`: the bounce animation and pill scale-in transition are both disabled; text color and background still switch correctly, just instantly.