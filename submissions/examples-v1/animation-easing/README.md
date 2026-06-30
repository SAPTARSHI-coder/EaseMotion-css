# Animation Easing Visual Guide

## What does this do?

A visual guide to CSS `animation-timing-function` — showing `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier`, and `steps()` with animated balls that make the differences immediately visible.

## How is it used?

```css
.element {
  animation: slide 2s ease-out infinite; /* smooth stop */
  animation: slide 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; /* bouncy */
  animation: slide 2s steps(5) infinite; /* five distinct jumps */
}
```

## Why is it useful?

Choosing the right easing function is one of the most impactful decisions in animation design — it controls the "feel" of motion. A visual guide helps developers understand the difference between `ease-in` (fast start, slow end) and `ease-out` (fast end) at a glance, without reading mathematical definitions. This educational approach fits EaseMotion CSS's philosophy of making CSS animation accessible and human-readable.
