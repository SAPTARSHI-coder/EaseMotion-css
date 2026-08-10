# Scroll Snap Carousel

## What does this do?

A horizontal carousel using CSS scroll snapping, with anchor links as the paging
controls.

## How is it used?

```html
<div class="ssc" tabindex="0" role="region" aria-label="Featured components">
  <article class="ssc-s" id="s1">...</article>
  <article class="ssc-s" id="s2">...</article>
</div>
<nav class="ssc-dots" aria-label="Carousel navigation">
  <a href="#s1" aria-label="Slide 1"></a>
</nav>
```

## Why is it useful?

Carousels are the single most over-engineered component on the web. A typical
slider library reimplements touch physics, momentum and paging that the browser
already does natively — and usually loses keyboard access and screen-reader
navigation in the process, because the slides end up in transformed containers
with the off-screen ones still focusable.

`scroll-snap-type: x mandatory` gives real paging with the platform's own touch
and trackpad handling. The slides remain normal document flow, so tab order is
correct, find-in-page reaches them, and a screen reader can navigate the region
linearly.

Anchor links as controls mean the carousel pages with no JavaScript whatsoever,
and each control has a genuine accessible name and focus behaviour.

Making the track `tabindex="0"` is required rather than decorative: a scrollable
region that cannot receive focus cannot be scrolled with the arrow keys, which is
a WCAG keyboard-access failure that most native-scroll carousels overlook.
`scroll-behavior` reverts to `auto` under reduced motion so paging jumps rather
than glides.
