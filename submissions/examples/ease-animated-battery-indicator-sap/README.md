# ease-animated-battery-indicator-sap

A battery-shaped fill indicator that animates to its charge level, turning red when critically low.

## Usage
1. Include `style.css`.
2. Add markup: `.battery-body` (with a CSS-drawn nub via `::after`) + `.battery-fill` inside.
3. Call a `setLevel(pct)`-style function to update fill width and low-battery styling.

## Notes
- The battery's terminal nub is drawn with `::after` rather than a separate element, keeping the markup to a single fill div inside the body.
- Fill color switches to red via a `.low` class threshold check (`pct <= 20`), separate from the width animation itself.
- Respects `prefers-reduced-motion`: fill-width transition is removed so level changes are instant; the color-change transition remains as non-motion feedback.