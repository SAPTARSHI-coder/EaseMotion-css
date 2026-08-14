# ease-scroll-snap-gallery-sap

A horizontally scrollable, swipeable image/card gallery that snaps cleanly to each slide — pure CSS `scroll-snap`, no JS required for the core behavior.

## Usage
1. Include `style.css`.
2. Add markup: `.snap-item` children inside `.snap-gallery-sap`, one per slide.

## Customization
- `flex: 0 0 100%`: slides full-width; change to `0 0 80%` for a peek-preview of adjacent slides.
- `scroll-snap-type: x mandatory`: forces a strict snap; use `proximity` for a looser feel.
- Gradient backgrounds per `:nth-child`.

## Notes
- Fully native scroll-snap — works with touch swipe, trackpad, and mouse-drag scrollbars with zero JS, and respects the user's natural scroll momentum/inertia.
- `scroll-snap-align: center` on each item is what makes the browser stop precisely at each slide rather than wherever the scroll momentum happens to end.
- Respects `prefers-reduced-motion`: `scroll-behavior: auto` avoids any smooth-scroll easing on programmatic scrolls (native swipe/drag remains user-driven and unaffected either way).