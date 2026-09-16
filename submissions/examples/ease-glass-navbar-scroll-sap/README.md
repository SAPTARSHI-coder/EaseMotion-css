# ease-glass-navbar-scroll-sap

A sticky navbar that transitions from fully transparent to a frosted-glass blur as the page scrolls past a threshold.

## Usage
1. Include `style.css`.
2. Add markup: `<header class="glass-navbar-sap">` as the first element of the page.
3. Attach the scroll listener from `demo.html`, toggling `.scrolled` past a threshold.

## Customization
- `window.scrollY > 40` threshold.
- `backdrop-filter: blur(14px)` intensity.
- Background opacity in the scrolled state.

## Notes
- Both `background` and `backdrop-filter` are listed in the `transition` shorthand together, so the blur eases in alongside the background opacity rather than snapping in.
- `position: sticky` avoids manual offset/height calculation for content below the navbar.
- Respects `prefers-reduced-motion`: the transition is removed entirely, so the scrolled state applies instantly rather than easing in.