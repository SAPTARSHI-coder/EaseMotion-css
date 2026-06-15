# CSS timeline-scope Demo

## What does this do?

Demonstrates the `timeline-scope` CSS property, which makes a named scroll-timeline available to descendant elements. Multiple unrelated elements (progress bar, cards, parallax background) animate in sync from the same scroll position.

## How is it used?

```css
.scroller {
  scroll-timeline-name: --my-timeline;
  timeline-scope: --my-timeline;
}

.card     { animation-timeline: --my-timeline; }
.progress { animation-timeline: --my-timeline; }
```

A `@supports (animation-timeline: scroll())` guard provides a fallback for browsers that don't support scroll-driven animations, and `prefers-reduced-motion` disables all animations for accessibility.

## Why is it useful?

Without `timeline-scope`, each element that uses `animation-timeline` creates its own private scroll timeline — making multi-element synchronization impossible. With `timeline-scope`, a single named timeline drives progress bars, reveal animations, and parallax effects in perfect lockstep, all with zero JavaScript. This aligns with EaseMotion CSS's goal of declarative, performant motion without heavy dependencies.
