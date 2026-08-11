# EaseMotion CSS - Scroll-Driven Parallax Header

## What does this do?
This component provides a multi-layered parallax hero header that dynamically responds to the user's scroll position. Different visually layered elements move at staggered speeds and transforms as the page scrolls down.

## How is it used?
It leverages the modern CSS `animation-timeline: scroll()` property. By binding `animation-timeline: scroll()` to standard CSS `@keyframes`, the progress of each layer's animation is directly mapped to the vertical scrollbar offset rather than a fixed time duration.

```css
.ease-layer-bg {
  animation: ease-scroll-bg linear;
  animation-timeline: scroll();
}

@keyframes ease-scroll-bg {
  to {
    transform: translateY(30%);
  }
}
```

## Why is it useful?
Historically, parallax effects required JavaScript `window.addEventListener('scroll')` callbacks or `requestAnimationFrame` loops to compute element transforms on every scroll event. This clogged the main thread, causing severe frame drops, jank, and layout thrashing. 

By utilizing the native CSS Scroll-Driven Animations API (`animation-timeline`), calculation and rendering logic are handed off directly to the browser's compositor thread. This guarantees silky-smooth 60fps performance with zero JavaScript execution cost or main-thread overhead.
