# Animation Delay Sequences Utility & Demos

Issue: [#15909](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/15909)

## What does this do?
Provides the `.ease-delay-sequence` utility and demonstrates how CSS custom properties (like `--delay-index`) and sequential delay styling can be used to coordinate complex staggered list entries, typographic letter waves, and grid cascading ripple animations.

## How is it used?
Define the base animation and apply the sequence index using `--delay-index` to compute staggered offsets:
```html
<ul class="list">
  <li class="item ease-fade-in ease-delay-sequence" style="--delay-index: 1;">Item 1</li>
  <li class="item ease-fade-in ease-delay-sequence" style="--delay-index: 2;">Item 2</li>
  <li class="item ease-fade-in ease-delay-sequence" style="--delay-index: 3;">Item 3</li>
</ul>
```

## Why is it useful?
Staggering animations prevents visual overload by showing content progressively, creating a polished, natural flow. Implementing this with CSS custom variables allows dynamic intervals and complex radial/grid coordinates without writing verbose hardcoded delay classes.
