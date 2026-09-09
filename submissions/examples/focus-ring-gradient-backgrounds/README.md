# Focus Ring Visibility on Gradient Backgrounds

An audited, WCAG 2.1 AA compliant dual-layer focus indicator pattern designed to guarantee >= 3:1 contrast visibility across vibrant, multi-hued, shifting gradient backgrounds.

## 🌟 Audit Fixes & Strategy

* **Dual-Layer Focus Ring System:** Combines an explicit `outline: 3px solid` with a layered `box-shadow` halo buffer. This ensures that if the inner outline passes over a light stop, the outer dark halo maintains contrast (and vice versa).
* **Zero Outline Suppression:** Never uses `outline: none` or `outline: 0` without immediately binding a high-visibility `:focus-visible` ring.
* **Forced-Colors Mode Support (`forced-colors: active`):** Restores native high-contrast `Highlight` system outlines when viewed in Windows High Contrast Mode, ignoring custom shadows.
* **Z-Index Layering:** Sets `z-index: 10` on focus to prevent adjacent card containers, overflow masks, or grid elements from clipping focus outlines.

## 🚀 Usage Guide

Apply the dual-layer focus pattern to any interactive element (`<button>`, `<a>`, `<input>`):

```css
.your-interactive-element:focus-visible {
  /* Primary inner ring */
  outline: 3px solid #ffffff !important;
  outline-offset: 3px !important;
  
  /* Outer contrast buffer halo */
  box-shadow: 0 0 0 5px #030712, 0 0 0 7px #00f3ff !important;
  z-index: 10;
}
