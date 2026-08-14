# Bug Fix: Glow Animation Color Banding Elimination

## Issue #32490

This submission resolves color banding artifacts observed during the execution of `.ease-ambient-glow` and `.ease-hover-glow` animations, particularly visible on low color-depth displays.

---

## 1. Description

Color banding occurs when single, large-radius box shadows (`box-shadow: 0 0 30px rgba(...)`) attempt to transition over a wide pixel span. On standard or low-bit depth displays, the GPU cannot smoothly interpolate the opacity steps, producing discrete bands/stripes of color.

By replacing single-layer wide shadows with **layered shadows** of progressive radius and lower opacity, we achieve a perceptually smooth gradient distribution that eliminates banding.

---

## 2. Proposed Core Implementation

In [core/animations.css](file:///c:/Users/Harsh/EaseMotion-css/core/animations.css#L1387-L1390), update the `@keyframes ease-kf-ambient-glow` block:

```css
@keyframes ease-kf-ambient-glow {
  0%, 100% {
    box-shadow: 
      0 0 5px rgba(99, 102, 241, 0.15),
      0 0 10px rgba(99, 102, 241, 0.1),
      0 0 15px rgba(99, 102, 241, 0.05);
  }
  50% {
    box-shadow: 
      0 0 10px rgba(168, 85, 247, 0.3),
      0 0 20px rgba(168, 85, 247, 0.2),
      0 0 30px rgba(168, 85, 247, 0.1);
  }
}
```

Similarly, apply layered shadows to any hover glow component styles.
