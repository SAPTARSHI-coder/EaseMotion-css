# CSS interpolate-size Demo

## What does this do?

Demonstrates `interpolate-size: allow-keywords` — a CSS property that enables smooth transitions between `auto` and fixed length values, solving the long-standing problem of animating `height: auto`.

## How is it used?

```css
.panel {
  interpolate-size: allow-keywords;
  height: 0;
  transition: height 0.35s ease;
}

.panel.open {
  height: auto; /* Now animates smoothly! */
}
```

## Why is it useful?

Animating to/from `auto` was one of the oldest unsolved CSS pain points. The old workaround — `max-height` hacks — causes timing mismatches, clipped content, and hard-coded values that break with dynamic content. `interpolate-size: allow-keywords` solves this natively, making accordions, expandable panels, and dropdowns work correctly with zero JavaScript — aligning with EaseMotion CSS's zero-dependency, human-readable philosophy.
