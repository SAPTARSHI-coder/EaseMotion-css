# CSS Fade-Out Accordion (Dashboard Analytics Layouts)

A pure CSS responsive accordion designed for analytical dashboards. It utilizes the modern `:has(` pseudo-class to fade out inactive panels when a specific pane is checked or focused, letting the active analytical card stand out clearly.

## Features
- **Smart Focus Fade-Out**: Leverages the `:has()` parent selector to dim non-active accordion items to `0.45` opacity when one item is expanded, minimizing visual clutter.
- **Pure CSS checked Logic**: Implemented using hidden native radio buttons, enabling keyboard navigation via the space/arrow keys.
- **Dashboard AEsthetics**: Styled with slate/emerald/indigo theme presets, clean drop shadows, and subtle micro-borders matching modern analytics platforms.
- **Custom properties**: Timing variables and opacity thresholds are fully customizable.

## Files
- `demo.html`: Analytics dashboard sandbox showcasing multiple accordion sections with dummy analytical charts (represented with styled grids).
- `style.css`: Accordion core layout, slide-down content transition, and target-based fade-out animations.