# Fix ease-skeleton GPU-Composited Shimmer

## What does this do?
Replaces the `background-position` shimmer animation with a `transform: translateX()`
on a `::after` pseudo-element, making the animation fully GPU-composited
(no layout or paint triggers on each frame).

## How is it used?
```html
<div class="ease-skeleton ease-skeleton--text"></div>
<div class="ease-skeleton ease-skeleton--avatar"></div>
```

## Why is it useful?
`transform` and `opacity` are the only CSS properties that can be animated
entirely on the GPU compositor thread. `background-position` still triggers
repaint. The fix eliminates jank on low-end devices. Fixes: #35801
