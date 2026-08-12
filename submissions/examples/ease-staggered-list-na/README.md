# ⚡ Ease Staggered List Animation

A lightweight, hardware-accelerated cascading sequence component that reveals elements sequentially based on visibility triggers.

## ✨ Features
- **GPU Render Optimization:** Animates using `transform` vectors and `opacity` parameters to sidestep vertical layout calculation paint passes.
- **Intersection Observer Hook:** Integrates seamlessly with low-overhead scroll detection configurations.
- **Reduced Motion Support:** Fully targets `@media (prefers-reduced-motion)` specs to automatically clear delay parameters for accessible users.

## 🚀 Usage Guide

Construct your tracking node setup by adding the base configuration class to your structural markup wrapper:

```html
<ul class="ease-stagger-list" id="myList">
  <li class="ease-stagger-list__item">Item Sequence Alpha</li>
  <li class="ease-stagger-list__item">Item Sequence Beta</li>
</ul>