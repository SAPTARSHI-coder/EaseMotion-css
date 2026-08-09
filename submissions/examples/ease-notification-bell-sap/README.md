# ease-notification-bell-sap

A notification bell icon that rings (rotates side-to-side) when a new notification arrives, with a red dot indicator that clears on click.

## Usage
1. Include `style.css`.
2. Add markup: bell button with an inline `<svg>` icon + `.notif-dot` span.
3. Toggle `.has-notif` when a notification exists, and briefly add `.ring` to trigger the ring animation (see `demo.html`).

## Customization
- `bell-ring-sap` keyframes: ring intensity/speed.
- `.notif-dot` color/size/position.
- `transform-origin: top center` on the SVG: pivot point for the ring rotation — keep at top so it swings like a real bell.

## Notes
- `.ring` class is added and removed via `setTimeout` matching the animation duration (600ms), so the ring can be re-triggered on each new notification rather than only playing once.
- `.has-notif` is a separate, persistent class from `.ring` — the dot stays visible until the user clicks the bell (clearing notifications), independent of the one-off ring animation.
- Respects `prefers-reduced-motion`: ring rotation animation is disabled entirely; the dot's fade/scale-in also becomes instant, but its presence/absence still communicates notification state.