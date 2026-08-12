# Ease Scroll Parallax Header

## 1. What does this do?
This example demonstrates a multi-layered parallax hero header that responds dynamically to the user's scroll position. As the page scrolls, distinct visual layers—including a background space nebula, a starfield pattern, mountain silhouettes, and main title typography—move at staggered speeds and transform in scale/opacity to create a rich 3D depth effect.

## 2. How is it used?
The component utilizes the modern CSS Scroll-Driven Animations specification, specifically the `animation-timeline: scroll()` property.

By binding `animation-timeline: scroll()` to standard `@keyframes` rules, animation progress is directly mapped to the scrollbar offset of the container rather than a time duration. Each layer defines custom keyframe transformations to achieve differential scroll speeds:

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

## 3. Why is it useful?
Historically, implementing smooth parallax scrolling required JavaScript event listeners attached to `window.addEventListener('scroll', ...)`. These JavaScript handlers frequently overburdened the main execution thread, causing severe frame drops, jank, and layout thrashing.

With native CSS Scroll-Driven Animations, scroll position calculations and transform matrix math are handed directly to the browser's compositor engine on the GPU. This eliminates main-thread script execution overhead entirely, yielding constant 60fps/120fps smooth scrolling performance.
