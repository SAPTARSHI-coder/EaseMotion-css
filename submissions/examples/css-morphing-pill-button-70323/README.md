# CSS Morphing Pill Button

1. What does this do? Renders a button that morphs its `border-radius` between a fully rounded pill and a square shape on hover/focus, with a gentle lift and color glow.
2. How is it used? Add a `<button class="btn btn--pill">`; the radius is driven by a single `--r` custom property that transitions on `:hover`/`:focus-visible`.
3. Why is it useful? Adds a ready-to-use morphing button animation with no JavaScript, keyboard-accessible focus state, and `prefers-reduced-motion` support.

Closes #70323
