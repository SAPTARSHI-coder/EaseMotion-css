# Animation Play State Utilities

Provides utility classes to easily pause and resume CSS animations without writing custom CSS or JavaScript.

## What does this do?
It introduces `animation-play-state` utility classes (`.animate-pause`, `.animate-running`, `.hover-pause`, `.hover-running`) to give developers declarative control over when animations play or freeze.

## How is it used?

```html
<!-- Permanently pause an animation -->
<div class="ease-spin animate-pause">I am paused</div>

<!-- Pause an infinite animation while the user hovers over it -->
<div class="ease-spin hover-pause">Hover to pause</div>

<!-- Only animate when the user hovers -->
<!-- (Requires the base animation to be paused initially) -->
<div class="ease-spin paused-by-default hover-running">Hover to spin</div>
```

## Why is it useful?
It fits EaseMotion's zero-config, declarative philosophy by letting developers control complex interactive animation states purely through HTML utility classes, significantly improving developer experience and accessibility (e.g. pausing distracting animations).
