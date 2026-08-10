# CSS Animation Performance Best Practices Guide

## 1. What does this do?

This guide is a self-contained educational showcase demonstrating CSS animation performance best practices, comparing compositor-only properties (`transform` and `opacity`) with layout/paint-triggering properties (`top`/`left`, `width`/`height`) through an interactive dashboard.

---

## 2. How is it used?

Animations should be built using properties that bypass the browser's **Layout** and **Paint** stages, sending changes directly to the **Compositor** thread.

### High-Performance (Compositor Thread)

Use `transform` (for position, scale, rotation, skew) and `opacity` (for fading effects).

#### Recommended CSS Pattern:

```css
/* Smooth 60fps translation using transform */
.animate-slide-optimized {
  will-change: transform;
  animation: slide-smooth 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
}

@keyframes slide-smooth {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```

### Low-Performance (Layout/Paint Thrashing)

Avoid animating properties that force the browser to recalculate element geometry (Reflow) or redraw pixels (Repaint).

#### Pitfall CSS Pattern (Avoid):

```css
/* Choppy translation forcing layout recalculation */
.animate-slide-unoptimized {
  animation: slide-choppy 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
}

@keyframes slide-choppy {
  from {
    left: 0;
  }
  to {
    left: 100px;
  }
}
```

### Key Comparison

| Animation Type  | Animating Property             | Rendering Pipeline Phase   | Cost / Performance             |
| :-------------- | :----------------------------- | :------------------------- | :----------------------------- |
| **Optimized**   | `transform: translate(...)`    | Composite Only             | 🟢 Ultra Low (GPU accelerated) |
| **Optimized**   | `opacity: [0-1]`               | Composite Only             | 🟢 Ultra Low (GPU accelerated) |
| **Unoptimized** | `left` / `top` / `margin`      | Layout → Paint → Composite | 🔴 Very High (Forces Reflow)   |
| **Unoptimized** | `width` / `height` / `padding` | Layout → Paint → Composite | 🔴 Very High (Forces Reflow)   |
| **Unoptimized** | `box-shadow` / `color`         | Paint → Composite          | 🟡 Medium (Forces Repaint)     |

---

## 3. Why is it useful?

This guide fits EaseMotion CSS's philosophy of offering a **high-performance, motion-first framework**.

By educating developers on how browser rendering engines handle different animation properties, it ensures that when developers customize or build motion paths:

1. They avoid **jank** (dropped frames) and CPU spikes, especially on low-powered mobile devices.
2. They leverage **hardware (GPU) acceleration** correctly without over-allocating memory with excessive `will-change` properties.
3. They preserve accessibility by understanding how to implement `@media (prefers-reduced-motion: reduce)` fallbacks.
