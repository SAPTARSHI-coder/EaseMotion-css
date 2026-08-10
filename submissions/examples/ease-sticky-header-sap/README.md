# ease-sticky-header-sap

A sticky nav header that transitions from transparent/large to a compact blurred bar with shadow once the page scrolls past a threshold.

## Usage
1. Include `style.css`.
2. Add markup: `<header class="sticky-header-sap">` as the first element in the scrollable page.
3. Attach the scroll listener from `demo.html`, which toggles `.scrolled` past a scroll threshold.

## Customization
- `window.scrollY > 40` (JS): scroll distance before the header transitions.
- `backdrop-filter: blur(10px)`: glass effect intensity — drop for solid background instead.
- Padding/font-size values for compact vs default state.

## Notes
- `position: sticky` (not `fixed`) keeps the header in normal document flow while still sticking to the viewport top, avoiding manual offset/height calculations for the content below.
- Scroll listener is `{ passive: true }` to avoid blocking scroll performance.
- Respects `prefers-reduced-motion`: background/padding/font-size changes still apply on scroll, but instantly rather than transitioning.