# Sandbox Component Showcase: Pure-CSS Centered and Magnified Carousel Slider Deck

## Overview
A zero-dependency, pure-CSS interactive carousel slider deck component isolated within an examples subdirectory. It manages dynamic track shifts and active product card magnifying highlights natively via synchronized input selection variables, running smooth sliding focus states without script lifecycles.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation user cockpit hosting horizontal flex tracks and label cards to verify carousel translations.
* `style.css` — Scoped layout sheet establishing isolated custom spring scaling and tracking transformations linked back to global tokens.

## 🚀 Key Layout Mechanics
1. **Linear Form State Tracking:** Bypasses JavaScript click handler installations by deploying an absolute input radio matrix framework. Sibling lookups handle carousel states natively to reposition tracking lanes: `input:checked ~ .alm-slider-track-lane`.
2. **GPU-Accelerated Slide Transformations:** Shifts the entire track layer horizontally using high-performance vectors (`transform: translateX()`) paired with elastic spring animation parameters (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Concurrently, focused cards scale cleanly up to `scale(1.05)` while adjacent options diminish down to `opacity: 0.4`, isolating rendering calculations completely on the hardware compositor plane.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/slider-deck/`.
