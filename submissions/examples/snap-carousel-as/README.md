# Scroll Snap Carousel

### What does this do?

It lays out a horizontal carousel of cards that snaps each card to the center as the user scrolls or swipes. It uses CSS scroll snap only, so it works with touch, trackpad, and keyboard, with no JavaScript.

### How is it used?

```html
<div class="carousel" tabindex="0">
  <article class="slide">Slide 1</article>
  <article class="slide">Slide 2</article>
</div>
```

The track sets `scroll-snap-type: x mandatory` and each slide sets `scroll-snap-align: center`. Side padding lets the first and last slide reach the center.

### Why is it useful?

Carousels are everywhere for galleries and feature highlights. This builds a smooth snapping carousel with native scroll behavior instead of a heavy script. The scrollbar is hidden for a clean look and reduced motion disables smooth scrolling.
