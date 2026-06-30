# CSS timeline-scope Demo

## What does this do?

Demonstrates `timeline-scope` — a CSS property that makes a named scroll-timeline available to descendant elements, enabling synchronized scroll-driven animations across unrelated elements.

## How is it used?

```css
.parent {
  scroll-timeline-name: --my-scroll;
  timeline-scope: --my-scroll;
}

.child-a { animation-timeline: --my-scroll; }
.child-b { animation-timeline: --my-scroll; }
```

Without `timeline-scope`, `animation-timeline: --my-scroll` only works on the element that defines `scroll-timeline-name`. With `timeline-scope`, any descendant can reference it.

## Why is it useful?

Scroll-driven animations often need multiple elements (cards, headers, progress bars) to react to the same scroll position in sync. Without `timeline-scope`, each element creates its own private scroll timeline — making synchronization impossible. This property shares a single timeline across elements, enabling cohesive scroll-driven experiences with pure CSS — a perfect fit for EaseMotion CSS's zero-dependency philosophy.
