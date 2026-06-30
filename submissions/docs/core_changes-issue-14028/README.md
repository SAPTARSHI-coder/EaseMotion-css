# Animated Sleep Cycle Wave — Issue #14028

## What does this do?

An animated sleep cycle wave/graph visualization that draws itself progressively. Shows a realistic overnight sleep pattern with distinct color-coded stages — Awake (amber), Light (blue), Deep (purple), and REM (pink) — using SVG path drawing animation.

## How is it used?

```html
<div class="ease-sleep-cycle">
  <svg viewBox="0 0 600 280">
    <path class="ease-sleep-wave ease-sleep-wave-deep" d="..." />
  </svg>
</div>
```

Add `ease-sleep-wave` to SVG `<path>` elements for the draw animation. Use `ease-sleep-wave-awake`, `ease-sleep-wave-light`, `ease-sleep-wave-deep`, and `ease-sleep-wave-rem` for stage coloring. The `@keyframes easeSleepDraw` animates `stroke-dashoffset` from 2000 to 0 over 3s.

## Why is it useful for EaseMotion CSS?

Health and fitness apps commonly visualize sleep data. This example demonstrates how EaseMotion's SVG animation technique can be used for data visualization — a practical real-world use case for the library.
