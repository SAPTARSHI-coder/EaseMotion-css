# Native CSS Scroll-Snapping Carousel

A horizontal image carousel with drag/swipe momentum and snapping —
built entirely with native CSS `scroll-snap` APIs, no JavaScript, no
30KB+ swipe library like Swiper.js.

## How it works

- `.snap-carousel` is a flex container with `overflow-x: auto` and
  **`scroll-snap-type: x mandatory`** — this tells the browser every
  scroll gesture must come to rest on a snap point along the x axis.
- Each `.snap-item` sets **`scroll-snap-align: center`**, defining that
  snap point as its own center, plus `scroll-snap-stop: always` so fast
  swipes can't skip past a slide.
- `scroll-behavior: smooth` makes any programmatic or keyboard-driven
  scroll (e.g. an anchor link or arrow key) animate smoothly instead of
  jumping.
- Momentum and physics come **entirely from the OS/browser's native
  touch scrolling** — no `touchstart`/`touchmove` math, no requestAnimationFrame
  loop, so it runs at native frame rate.
- The scrollbar is hidden (`scrollbar-width: none` / `::-webkit-scrollbar
  { display: none }`) while scroll functionality is fully preserved.

```css
.snap-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.snap-item {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
```

## Usage

```html
<div class="snap-carousel">
  <div class="snap-item"><img src="..." alt=""></div>
  <div class="snap-item"><img src="..." alt=""></div>
  <div class="snap-item"><img src="..." alt=""></div>
</div>
```

Add as many `.snap-item` children as needed — the carousel scales
automatically. Item width is controlled via `flex-basis` on `.snap-item`
and adjusts at two breakpoints to reveal more neighboring slides on
larger screens.

## Customizing

- **Slide width:** change `flex-basis` on `.snap-item` (or the
  responsive breakpoint values).
- **Snap point:** switch `scroll-snap-align` to `start` or `end` instead
  of `center` for edge-aligned snapping.
- **Gap:** adjust `gap` on `.snap-carousel`.

## Why it fits EaseMotion CSS

Fully declarative, zero dependencies, zero JavaScript — the entire
interaction (drag, momentum, snap, smooth-scroll) is handled by native
browser APIs. Class names are self-explanatory and the whole block is
copy-paste portable into any layout.

## Accessibility

- Carousel remains keyboard-scrollable (arrow keys / Tab + native focus
  scrolling) since it's a plain scrollable container, not a custom
  widget intercepting input.
- Images use empty `alt=""` as decorative placeholders — replace with
  descriptive `alt` text for real content.

## Browser support

`scroll-snap-type` and `scroll-snap-align` are supported in all modern
evergreen browsers (Chrome 69+, Firefox 68+, Safari 11+, Edge 79+).
Browsers without support simply fall back to normal free scrolling with
no error.