# ease-elastic-tabs-sap

A tab switcher where a floating indicator pill bounces elastically to the selected tab's position and width.

## Usage
1. Include `style.css`.
2. Add markup: `.tab-indicator` + a row of `.tab-btn` elements inside `.elastic-tabs-sap`.
3. Attach the click handler from `demo.html`, which measures the clicked tab's `offsetLeft`/`offsetWidth` and moves the indicator.

## Customization
- `cubic-bezier(0.34, 1.56, 0.64, 1)` on `.tab-indicator`: the overshoot/bounce curve — adjust for more or less elastic feel.
- Indicator background/shadow for theming.
- Number of tabs — indicator logic works with any count via `offsetLeft`/`offsetWidth`.

## Notes
- Indicator position/width are computed from real DOM measurements (`offsetLeft`, `offsetWidth`) rather than fixed percentages, so tabs of varying text length still get an accurately sized indicator.
- Both `transform` (position) and `width` are transitioned together with the same bouncy easing, so the indicator visually "stretches" toward its new position rather than just sliding.
- Respects `prefers-reduced-motion`: indicator movement becomes instant (no transition), tab switching still functions correctly.