# ease-hover-nav-bubble-indicator-sap

A nav bar with a floating pill "bubble" that glides to whichever link is being hovered, snapping back to the first item on mouse leave.

## Usage
1. Include `style.css`.
2. Add markup: `.bubble-indicator` + `.bubble-link` elements inside `.bubble-nav-sap`.
3. Attach the `mouseenter`/`mouseleave` handlers from `demo.html`.

## Customization
- Default/reset link on mouse leave (currently first link) — swap for tracking an "active page" link instead.
- Bubble background/shadow.
- Transition easing for glide speed.

## Notes
- Bubble position/width are computed from real DOM measurements (`offsetLeft`/`offsetWidth`), so it stays accurate for links of any label length.
- On mouse leave, the bubble resets to the first link rather than staying wherever it last was — this is a hover-preview indicator, not a persistent active-page marker; swap `moveTo(links[0])` for an "active" link reference if that behavior is preferred.
- Respects `prefers-reduced-motion`: bubble glide transition is removed, so it jumps directly to the hovered link's position.