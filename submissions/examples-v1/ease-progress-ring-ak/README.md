# ⚡ Animated Progress Ring & Donut Chart Component

High-fidelity vector SVG circular gauges rendering fluid viewport calculations.

## ✨ What it does
Implements a declarative, mathematical SVG progress ring that draws itself via hardware-accelerated keyframe interpolation utilizing CSS variables.

## 🚀 How to Use
```html
<div class="ease-progress-ring-ak" style="--progress: 80;">
  <svg viewBox="0 0 100 100">
    <circle class="ease-progress-ring-ak__track" cx="50" cy="50" r="42"/>
    <circle class="ease-progress-ring-ak__fill" cx="50" cy="50" r="42"/>
  </svg>
  <div class="ease-progress-ring-ak__label">80%</div>
</div>