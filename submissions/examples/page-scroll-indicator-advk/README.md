# Reading Progress Bar

## What does this do?

A top-edge reading progress bar plus a circular dial, both scrubbed by document
scroll from the same `scroll()` timeline.

## How is it used?

```css
.rpb {
  animation: rpb-grow linear both;
  animation-timeline: scroll(root block);
}
@keyframes rpb-grow { to { transform: scaleX(1); } }
```

## Why is it useful?

Progress bars are the canonical `scroll` listener: read `scrollTop`, divide by
`scrollHeight`, write a style, every event. That forces a layout read on each
tick and runs during the interaction least tolerant of main-thread work.

Binding both indicators to `scroll(root block)` moves the sampling to the
compositor and, more usefully, guarantees they agree. Two independent listeners
updating a bar and a dial will drift under load; two animations on one timeline
cannot.

The dial shows a technique worth knowing: a `conic-gradient` colour stop cannot be
animated unless the value driving it is a registered custom property. Declaring
`--rpb-p` with `@property { syntax: "<percentage>" }` makes it interpolatable, so
the sweep is smooth rather than stepping.

The reduced-motion decision here is deliberate and different from the other
submissions. Scroll progress is entirely user-driven — it moves only when the user
moves — so it is not the autonomous motion WCAG 2.3.3 targets, and the bar is kept.
Only the dial is dropped, because its continuous conic repaint is the expensive,
visually busy half of the pair.
