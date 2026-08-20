# Spotlight Beam Sweep

**Issue:** #81689  
**Module:** SCSS Animation Utility  
**File:** `_spotlight-beam.scss`

---

## Overview

The **Spotlight Beam Sweep** utility (`.ease-anim-spotlight-beam-sweep`) provides a high-performance spotlight beam sweep animation for EaseMotion CSS. It creates a skewed beam pass across an element using GPU-accelerated keyframe transforms.

---

## 60 FPS Performance & Hardware Acceleration

This SCSS utility strictly adheres to using non-triggering layout/repaint properties:
- **`transform` (`translateX`, `skewX`)**: Executed directly on the GPU layer to prevent layout recalculations or paint cycles.
- **`opacity`**: Hardware-accelerated alpha blending.
- **`will-change: transform, opacity`**: Hints to the browser engine to promote the element to a dedicated compositor layer for smooth 60 FPS performance.

---

## CSS Variables & Timing Overrides

The animation supports dynamic timing and duration overrides via CSS variables with sensible default fallbacks:

- `--ease-duration`: Controls animation duration (Default: `1.5s`).
- `--ease-timing`: Controls animation timing function (Default: `cubic-bezier(0.25, 1, 0.3, 1)`).

### Example Timing Override

```css
.my-custom-spotlight {
  --ease-duration: 2s;
  --ease-timing: ease-in-out;
}
```

---

## SCSS & Keyframes Code

```scss
/* ==========================================================================
   Spotlight Beam Sweep
   Issue: #81689
   Hardware-accelerated beam sweep using skew and translate.
   ========================================================================== */

@keyframes ease-spotlight-beam-sweep {
  0% {
    opacity: 0;
    transform: translateX(-200%) skewX(-45deg);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(200%) skewX(-45deg);
  }
}

.ease-anim-spotlight-beam-sweep {
  animation-name: ease-spotlight-beam-sweep;
  animation-duration: var(--ease-duration, 1.5s);
  animation-timing-function: var(--ease-timing, cubic-bezier(0.25, 1, 0.3, 1));
  animation-fill-mode: forwards;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .ease-anim-spotlight-beam-sweep {
    animation: none !important;
    transform: translateX(0) skewX(0) !important;
    opacity: 1 !important;
    transition: none !important;
  }
}
```

---

## Accessibility Support

Includes full compliance for users with motion sensitivities by respecting `prefers-reduced-motion: reduce`: animation is disabled and fallback transform state is rendered safely.
