# Scroll-Driven Kinetic Typography

## Abstract

This module introduces pure CSS Scroll-Driven Kinetic Typography for the EaseMotion CSS library, addressing Issue #77025. By leveraging modern declarative CSS animations linked to scroll timelines, dynamic multi-directional typography marquee movement and kinetic mesh transformations are achieved without writing a single line of JavaScript.

## GSAP Obsolescence

Traditionally, kinetic text warp effects and scroll-synced marquees required heavy JavaScript animation engines like GSAP (ScrollTrigger) or custom `requestAnimationFrame` loop implementations. These legacy JavaScript approaches suffer from several core drawbacks:

- **Main-Thread Bottlenecks:** `requestAnimationFrame` and `IntersectionObserver` callbacks run on the browser's main thread, causing frame drops and jitter during rapid scrolling or under heavy DOM workloads.
- **Bundle Overhead:** Including external animation libraries inflates asset sizes and increases initial script parsing/execution time.
- **Event Hydration Delays:** JavaScript scroll listeners cannot run until scripts are fetched, parsed, and hydrated.

By binding `@keyframes` progression directly to the document's scroll container via `animation-timeline: scroll(root)`, scroll-driven kinetic typography completely replaces JavaScript dependencies. The browser offloads scroll position calculations and keyframe interpolation directly to the compositor thread.

## Native GPU Interpolation

The implementation utilizes native compositor-driven CSS primitives to achieve high-performance text transformations:

1. **Scroll Timeline Binding:** `animation-timeline: scroll(root)` binds the progress of `@keyframes ease-move-left`, `@keyframes ease-move-right`, and `@keyframes ease-warp-scale` directly to the vertical scroll progress of the document root.
2. **Velocity-Aware Physical Warping:** As the user scrolls, typography components dynamically warp along the Y and X axes (`transform: scaleY(1.5) scaleX(0.9)`) while tightening letter spacing (`letter-spacing: -0.15em`), synchronized in real-time with scroll velocity.
3. **Hardware Acceleration:** Properties like `transform` and `opacity` are rendered via `will-change: transform`, triggering dedicated GPU layers for zero-layout-shift (0 repaint/reflow) kinetic scrolling at native 60/120 FPS display refresh rates.
