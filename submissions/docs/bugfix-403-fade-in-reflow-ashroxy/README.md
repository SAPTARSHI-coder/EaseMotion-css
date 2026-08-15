# Bugfix Showcase: Issue #403 — Janky Fade-In Animation Layout Reflow

## 1. What does this do?

This showcase demonstrates the performance fix for `ease-fade-in` which prevents layout reflows on every animation frame by transition-scaling elements using GPU-accelerated `transform: scale()` instead of layout-expensive physical geometric dimensions (`width` and `height`).

## 2. How is it used?

Apply the standard `ease-fade-in` class to any HTML element:

```html
<div class="ease-fade-in">Smoothly animated content</div>
```

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy of delivering premium, high-performance, and drop-in motion utilities by ensuring that core entrance animations are CPU-friendly and run at a silky-smooth 60fps/120fps on all devices, especially mobile viewports, without triggering expensive browser repaint loops.
