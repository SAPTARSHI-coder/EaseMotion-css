# CSS Scroll-Driven Parallax Feature

Submits motion-utility architectures and scroll-linked synchronization sandboxes (`.ease-parallax-slow`) under issue #15427.

## Functional Mechanics

- **The Problem:** Smooth parallax scrolling effects typically required complex JavaScript `scroll` event listeners. These methods are notorious for causing "scroll-jank" because they run on the main thread, often falling out of sync with the browser's paint cycles.
- **The Solution:** Native CSS motion timelines. The `.ease-parallax-slow` utility leverages `animation-timeline: scroll()`. By binding the animation progress directly to the scroll offset of the container, the browser handles the motion interpolation on the compositor thread. This ensures perfect sync with the user's scroll speed, zero frame drops, and minimal performance overhead.



## Usage Layout Structure
```html
<div class="ease-parallax-slow">
  <img src="floating-asset.png" alt="Parallax Effect">
</div>
```

Closes #15427
