# ⚡ Ease Animated Image Reveal on Scroll

An editorial reveal mechanism triggered dynamically via layout intersection layers.

## ✨ Features
- **Curtain Wipes:** Leverages hardware-bound directional translation steps across coordinate nodes.
- **Counter-Scale Zoom:** Pairs the block masking with an isolated down-scaling transformation map to deliver clean depth shifts.
- **Intersection Optimization:** Utilizes the high-efficiency `IntersectionObserver` module instead of high-friction window listener scrolls.

## 🚀 Usage Guide

Construct your item tags using the localized direction classes:

```html
<div class="ease-img-reveal ease-img-reveal--left">
  <img src="target-image.jpg" alt="Presentation layout asset" />
</div>