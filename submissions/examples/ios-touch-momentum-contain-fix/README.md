# Sandbox Layout Fix: iOS Safari `overscroll-behavior-x` Touch Momentum Chaining & Rubber-Band Resolution

## Overview
A high-performance WebKit touch interaction patch for horizontal carousels, code blocks, and scrollable rows nested inside modals, drawers, or slide-over panels on iOS devices. It completely eliminates background page rubber-banding, stops touch momentum chaining, and locks pan vectors strictly to the horizontal axis.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a simulated modal drawer with a scrollable inner carousel.
* `style.css` — Scoped layout modifier asset layer specifying `overscroll-behavior-x: contain`, `-webkit-overflow-scrolling: touch`, and `touch-action: pan-x`.

## 🐛 The Bug Resolved
Previously, dragging an inner scrollable area to its boundary edge inside a modal or drawer on iOS Safari caused the parent page or modal background to rubber-band and scroll, despite `overscroll-behavior-x: contain` being present. Mobile WebKit requires touch momentum chaining to be explicitly decoupled at the compositing layer when nested touch scroll contexts overlap on iOS devices.

## 🛠️ The Solution
The Mobile WebKit touch context and gesture recognizers are optimized. By combining `overscroll-behavior-x: contain;` with `-webkit-overflow-scrolling: touch;` and applying `touch-action: pan-x;` directly to the inner scrollable track, iOS Safari is forced to decouple touch momentum at the compositor layer and lock drag interactions exclusively to the horizontal axis.
