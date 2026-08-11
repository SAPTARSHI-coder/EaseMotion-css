# ease-swipe-carousel-dots-sap

A touch-swipeable carousel with animated pagination dots — the active dot stretches into a pill shape, and slides transition via `transform: translateX()`.

## Usage
1. Include `style.css`.
2. Add markup: `.carousel-slide` elements inside `.carousel-track`, plus matching `.dot` elements.
3. Attach the touch swipe and dot-click handlers from `demo.html`.

## Customization
- Swipe distance threshold (`50` in JS): how far a swipe must travel to change slides.
- `.dot.active` width/shape for the pill-stretch effect.
- Number of slides: dots and slides must stay in sync (same count, same order).

## Notes
- Slide transitions use `transform: translateX(-N * 100%)` rather than scroll-snap, giving full control over transition easing and enabling the dot indicators to stay in sync with JS-tracked state.
- Touch swipe direction/threshold logic mirrors common mobile carousel UX (swipe left = next, swipe right = previous).
- Respects `prefers-reduced-motion`: track transition and dot width/color transition are both disabled; swipe/dot-click navigation still functions, just without eased motion.