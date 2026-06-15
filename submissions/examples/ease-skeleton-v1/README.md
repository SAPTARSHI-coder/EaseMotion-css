# ⚡ EaseMotion CSS — Performance Skeleton Components

A highly optimized, hardware-accelerated **Pure CSS Skeleton Loading Module**. This package delivers fluid content-placeholder states without relying on heavy JavaScript dependencies or runtime blocking, preserving a premium user experience while components fetch asynchronous data.

---

## 🚀 Key Architectural Improvements

* 📦 **Dynamic Token Architecture:** Re-mapped to system-level variables supporting fluid **Light and Dark mode transitions** out of the box.
* 🏎️ **GPU-Accelerated Rendering:** Added `will-change: background-position` context bounds to eliminate composite-layer layout shifting.
* 📐 **Ergonomic Shimmer Angle:** Upgraded the legacy vertical axis map to a premium `110deg` tracking slice, making layout loading feel faster and more physical.
* ♿ **Accessibility Compliant:** Built-in automatic fallback to a non-animated layout state when a visitor enables structural `@media (prefers-reduced-motion)` machine specifications.

---

## 📖 Framework Component Usage

Drop basic skeleton primitives into your UI layout markup to quickly mock up your component structural dimensions.

```html
<span class="ease-skeleton"></span>

<span class="ease-skeleton ease-skeleton--rounded" style="--ease-width: 65%; --ease-height: 14px;"></span>