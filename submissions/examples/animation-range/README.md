# animation-range Demo

## What does this do?

Demonstrates the CSS `animation-range` property — which controls the start and end points of a scroll-driven animation within the scroll timeline (entry, exit, contain, cover ranges).

## How is it used?

```css
.element {
  animation: bar-fill linear;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}

@keyframes bar-fill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

## Why is it useful?

Scroll-driven animations need precise control over when they start and stop. `animation-range` lets you define exactly which phase of the scroll (entry, exit, contain) triggers the animation and at what percentage — essential for creating polished scroll-linked effects like progress bars, parallax, and reveal animations. This aligns with EaseMotion CSS's scroll-driven animation capabilities.
