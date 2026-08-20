# Sticky Header Shrink

## What does this do?

Condenses a sticky header — padding, logo size and title size — as the page
scrolls, driven entirely by CSS scroll-driven animations.

## How is it used?

```css
.shs-head {
  animation: shs-condense linear both;
  animation-timeline: scroll(root block);
  animation-range: 0 120px;
}
```

Scroll `demo.html` and the header interpolates across the first 120px.

## Why is it useful?

The standard implementation attaches a `scroll` listener, compares
`window.scrollY` against a threshold, and toggles a class. That runs JavaScript
on the main thread for every scroll event, and because it toggles a boolean it
can only snap between two states — so the header pops at the threshold instead of
tracking the scroll.

`animation-timeline: scroll()` binds animation progress directly to scroll
position. The browser samples it off the main thread, and because progress is
continuous the header interpolates smoothly across the range rather than
switching. `animation-range: 0 120px` states the mapping declaratively, which is
far easier to tune than a magic number buried in a listener.

The degradation story is good: a browser without scroll-driven animation support
ignores `animation-timeline`, the keyframes never advance, and the header stays
at full size — a correct static header rather than a broken one. That matches
EaseMotion's no-build, no-JavaScript posture.
