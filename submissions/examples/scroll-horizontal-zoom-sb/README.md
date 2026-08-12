# CSS Scroll-Driven Horizontal Slideshow with Zoom Transition

## What does it do?
A full-screen horizontal slideshow driven entirely by CSS
`animation-timeline: scroll(root)`. As the user scrolls
vertically, cards slide horizontally and zoom in/out using
native CSS scroll-driven animations — no JavaScript animation
libraries needed.

## How it works
```css
/* Track slides horizontally as user scrolls */
.scroll-track {
  animation: trackSlide linear both;
  animation-timeline: scroll(root);
}

/* Each card zooms at its scroll range */
.scroll-card-inner {
  animation: cardZoom linear both;
  animation-timeline: scroll(root);
  animation-range: 20% 40%; /* card's active range */
}
```

## Viewport Sizing Variables
```css
:root {
  --card-count: 5;           /* number of slides */
  --card-width: 100vw;       /* each card = full viewport width */
  --card-height: 100vh;      /* each card = full viewport height */
  --track-width: calc(var(--card-count) *