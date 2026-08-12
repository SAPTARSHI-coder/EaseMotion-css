# CSS Scroll-Driven Parallax Header

## 1. What does this do?
This component creates a multi-layered parallax hero header that dynamically responds to the user's scroll position. As the user scrolls down the page, different visual layers (background nebula, starfield, mountain silhouetted foreground, and central typography) move and transform at staggered rates to create a deep, immersive 3D spatial effect.

## 2. How is it used?
It utilizes the modern CSS Scroll-Driven Animations API via `animation-timeline: scroll()`. By attaching `animation-timeline: scroll()` alongside standard CSS `@keyframes` animations, the progression of keyframes is linked directly to the scrollbar container's scroll offset rather than an elapsed time duration:

```css
.ease-layer-bg {
  animation: ease-scroll-bg linear;
  animation-timeline: scroll();
}

@keyframes ease-scroll-bg {
  to { transform: translateY(30%); }
}
```

## 3. Why is it useful?
Historically, implementing smooth multi-layered parallax scrolling required JavaScript event listeners attached to `window.addEventListener('scroll')`. Scripting on scroll often clogs the browser's main thread, causing frame drops, jank, and severe layout thrashing (especially on mobile devices or complex pages). 

By leveraging native CSS Scroll-Driven Animations, the scroll calculation and matrix transformations are delegated directly to the browser's GPU compositor thread. This delivers silky-smooth 60+ FPS performance with zero JavaScript execution cost and zero main-thread overhead.
