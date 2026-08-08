# Ease 3D Gallery (Scroll Timelines)

### 1. What does this do?
The `ease-3d-gallery` component natively maps the horizontal scroll position of elements within a container directly to a 3D Y-axis rotation timeline using modern CSS Scroll-Driven Animations. As cards scroll horizontally across the viewport, they dynamically rotate along the Y-axis (`rotateY`), scale, and adjust depth (`translateZ`) and opacity entirely on the compositor thread.

### 2. How is it used?
Set up 3D perspective context on the parent horizontal scroll viewport, and apply `animation-timeline: view(inline)` along with the `@keyframes` to each card item:

```css
/* Container / Viewport */
.ease-3d-viewport {
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
  perspective: 1200px;
  transform-style: preserve-3d;
}

/* Individual 3D Card */
.ease-3d-card {
  flex: 0 0 300px;
  scroll-snap-align: center;
  animation: ease-rotate-3d linear both;
  animation-timeline: view(inline);
  animation-range: cover 0% cover 100%;
}

@keyframes ease-rotate-3d {
  0% {
    transform: rotateY(45deg) translateZ(-250px) scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: rotateY(0deg) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotateY(-45deg) translateZ(-250px) scale(0.8);
    opacity: 0.3;
  }
}
```

### 3. Why is it useful?
It permanently eliminates the need for JavaScript `IntersectionObserver` math, `requestAnimationFrame` scroll listeners, or heavyweight WebGL 3D libraries (like Three.js) for basic 3D carousel arrays. By leveraging native CSS Scroll Timelines, the browser calculates perspective and rotation transforms directly on the GPU compositor thread, resulting in silky-smooth 60fps performance without main-thread jank or JS runtime overhead.
