# Scroll Horizontal Gallery

A horizontally scrolling image gallery with CSS scroll-snap, smooth-scroll
prev/next buttons, and keyboard arrow-key support.

**Level:** Intermediate

## Usage

Place items inside `.gallery-track` within `.gallery`. Prev/Next buttons and
Arrow keys call `scrollBy` with `behavior: 'smooth'`; native `scroll-snap`
handles settling on each item.

## Accessibility

- `.gallery` is focusable (`tabindex="0"`) with an `aria-label`, and supports
  ArrowLeft/ArrowRight directly, not just the button controls.
- Nav buttons have explicit `aria-label`s since they only contain arrow glyphs.
- `prefers-reduced-motion` switches `scroll-behavior` to `auto` (instant jump)
  instead of animated smooth scroll.

## Notes

- Uses native CSS `scroll-snap-type: x mandatory` + `scroll-snap-align:
  center` so snapping works even without JS (e.g. via trackpad/touch swipe),
  JS only adds the button/keyboard affordances on top.
- Custom scrollbar styling is WebKit-only (`::-webkit-scrollbar`); other
  browsers fall back to their native scrollbar, which is fine functionally.