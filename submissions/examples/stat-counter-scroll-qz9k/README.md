# Scroll-Triggered Stat Counter

## What does this do?

Statistics that count up from 0 to their target value the moment they
scroll into view, using `IntersectionObserver` to trigger the animation
exactly once — scrolling back up and down again doesn't restart the count.

## How is it used?

```html
<p class="scs-number" data-target="48000">0</p>
```

`scsInit` observes every `.scs-number` element; on intersection,
`scsAnimate` reads the target from `data-target` and animates toward it via
`requestAnimationFrame`, then the observer calls `unobserve` on that
specific element so the same counter never re-triggers.

## Why is it useful?

A scroll-triggered counter that doesn't unobserve after firing re-plays
the count-up animation every time the element scrolls back into the
viewport — a user scrolling up to re-read a section above the stats, then
scrolling back down past them, sees the numbers reset to 0 and count up
again, which reads as a bug rather than an intentional entrance effect.
Calling `observer.unobserve(entry.target)` the first time an element
intersects makes the animation genuinely one-shot: it plays exactly once,
on first appearance, regardless of how many more times the element
crosses the viewport afterward.

`font-variant-numeric: tabular-nums` on the counter keeps every digit the
same fixed width throughout the animation — without it, proportional-width
digits (a `1` narrower than an `8`, for instance) cause the number's total
width to fluctuate slightly as it counts, which shows up as the whole stat
and its label jittering left and right during the animation rather than
staying visually still.
