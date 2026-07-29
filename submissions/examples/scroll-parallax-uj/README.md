# Smooth Reveal Scroll Parallax

## What does this do?

It applies a scroll-linked vertical movement to background images or elements using native CSS scroll-driven animation timelines.

## How is it used?

Apply the `scroll-parallax-uj` class to an element that you wish to shift while the page is scrolling:

```html
<div class="hero-viewport" style="position: relative; overflow: hidden;">
  <div class="scroll-parallax-uj" style="position: absolute; height: 120%;">
    <img src="scenery.jpg" alt="Background">
  </div>
</div>
```

Ensure the container viewport has `overflow: hidden` and the parallax element extends slightly taller than the container to prevent gaps during translation.

## Why is this useful?

This utility leverages modern CSS scroll timelines (`animation-timeline: scroll(root)`) to deliver responsive, smooth scroll interactions. It runs entirely on the browser's compositor thread, eliminating main-thread JavaScript overhead, and disables all movement when users prefer reduced motion.
