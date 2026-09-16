# steps() Timing

## What does this do?

Demonstrates the CSS `steps()` timing function — which divides an animation into discrete, equal jumps (like a flipbook) rather than smooth interpolation. Useful for sprite sheet animations, typewriters, and loading dot sequences.

## How is it used?

```css
.element {
  animation: slide 3s steps(4) infinite;   /* 4 distinct positions */
  animation: slide 3s steps(8) infinite;   /* 8 distinct positions */
  animation: slide 3s steps(4, jump-none) infinite; /* no jump on start/end */
}
```

## Why is it useful?

Stepped animations are essential for sprite-sheet rendering, typewriter effects, loading dot sequences, and progress indicators — anywhere you want discrete "frames" rather than smooth motion. Understanding `steps()` and its `jump-*` variants gives developers precise control over frame-by-frame animation, fitting EaseMotion CSS's educational and practical approach.
