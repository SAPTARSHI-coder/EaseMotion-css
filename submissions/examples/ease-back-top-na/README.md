# ⚡ Ease Animated Back to Top Progress Button

A high-performance fixed navigational tracking component utilizing structural SVG stroke layers to visual page coordinates depth.

## ✨ Features
- **GPU Backed Scale Intercepts:** Handles entry and hovering updates using standard matrix filters to keep page interaction loops clean.
- **Dynamic Circular Progress Mapping:** Connects scroll positions directly to circle boundary offset rules.
- **A11y Adaptive Overrides:** Completely scales down structural spring properties under `prefers-reduced-motion` instructions to guarantee a predictable user experience.

## 🚀 Usage Guide

Append the navigation layout block at the bottom of your primary body tag block inside your layout structure:

```html
<button class="ease-back-top" id="backToTop" aria-label="Back to top">
  <svg class="ease-back-top__ring" viewBox="0 0 36 36">
    <circle class="ease-back-top__track" cx="18" cy="18" r="16"/>
    <circle class="ease-back-top__progress" cx="18" cy="18" r="16"/>
  </svg>
  <span class="ease-back-top__arrow">↑</span>
</button>