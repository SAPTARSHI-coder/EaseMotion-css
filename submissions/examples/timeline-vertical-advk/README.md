# Vertical Timeline

## What does this do?

A changelog rail where each entry fades and rises into place as it enters the
viewport, using a per-element `view()` scroll timeline.

## How is it used?

```css
.tml-e {
  animation: tml-in linear both;
  animation-timeline: view();
  animation-range: entry 8% cover 30%;
}
```

## Why is it useful?

Reveal-on-scroll is normally an `IntersectionObserver` that toggles a class. That
works, but it is binary: the element is either revealed or not, so the animation
plays at a fixed rate regardless of how fast the user is scrolling, and a fast
flick can leave entries animating after they have already passed.

`animation-timeline: view()` binds progress to the element's own travel through
the viewport, so the reveal is scrubbed by scroll position. Scroll slowly and it
eases in slowly; scroll back up and it reverses. `animation-range: entry 8% cover
30%` states exactly which part of that travel drives it, which is far more legible
than a threshold buried in observer options.

The distinction from the `scroll()` timeline used in the scroll-spy submission is
worth noting: `scroll()` tracks the scroll container's overall position, while
`view()` tracks *this element* relative to the viewport — which is what per-item
reveals actually want.

Browsers without scroll-driven animation support ignore `animation-timeline` and
the `both` fill leaves entries at their final state, so the timeline renders fully
visible rather than blank.
