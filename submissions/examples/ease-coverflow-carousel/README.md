# Native CSS Apple-Style CoverFlow Carousel (#77431)

## Abstract

The **EaseMotion Native CoverFlow Carousel** provides a zero-JavaScript implementation of Apple's iconic iTunes/iOS CoverFlow interface. Historically, achieving smooth 3D perspective carousels required heavy external JavaScript libraries (such as Swiper.js or custom requestAnimationFrame loops). With modern CSS specifications, this component delivers 60fps GPU-accelerated 3D transforms driven entirely by native browser scroll physics and Scroll-Driven Animations (`animation-timeline: view()`).

---

## Scroll Snapping Physics

The core scroll behavior relies on CSS Scroll Snap module level 1:

```css
.ease-coverflow-track {
  display: flex;
  gap: 0;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0 50vw;
}

.ease-coverflow-card {
  scroll-snap-align: center;
}
```

### Key Technical Aspects:
1. **Deceleration & Momentum**: By enforcing `scroll-snap-type: x mandatory`, the browser delegates swipe gestures and scroll inertia directly to the operating system's native scroll engine, yielding fluid deceleration on mobile and desktop devices.
2. **Dead-Center Positioning**: The track features `padding: 0 50vw;` combined with `scroll-snap-align: center;`. This padding allows the first and last cards in the sequence to be snapped precisely into the center of the viewport scrollport without clipping.
3. **Seamless Overlap**: Negative horizontal margins (`margin: 0 -40px;`) pull neighboring cards closer together, forming the classic tightly stacked CoverFlow perspective.

---

## The animation-timeline: view() Engine

Instead of relying on JavaScript scroll listeners or IntersectionObservers, the 3D spatial transformation is bound to the element's visibility inside the scrollport using modern CSS Scroll-Driven Animations.

```css
.ease-coverflow-card {
  animation: ease-coverflow-rotate linear both;
  animation-timeline: view(inline);
  animation-range: cover 0% cover 100%;
}
```

### How `animation-timeline: view(inline)` Replaces JS Libraries:
- **Direct GPU Binding**: `animation-timeline: view(inline)` binds the `@keyframes ease-coverflow-rotate` timeline directly to the card's horizontal progress across the scroll container's inline axis.
- **Intersection Interpolation**: As a card scrolls into view (0% to 50% progress), it transitions from a rotated, scaled-down side perspective (`rotateY(45deg) scale(0.7) translateZ(-100px)`) into the focal active position (`rotateY(0deg) scale(1) translateZ(50px)`). As it moves past center (50% to 100% progress), it smoothly rotates away (`rotateY(-45deg)`).
- **Off-Main-Thread Execution**: Because hardware-accelerated properties (`transform`, `opacity`, `z-index`) are controlled by the compositor pipeline, animation execution bypasses JavaScript thread bottlenecks entirely, delivering jitter-free 60fps performance across all modern browsers supporting Scroll-Driven Animations.
