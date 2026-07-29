# ⚡ Fix ease-flip White Gap Between Card Faces in Firefox

Cross-browser rendering optimization fix for the 3D flip card rotation component layout.

## ✨ What it does
Resolves a known rendering bug where Firefox displays a temporary white flash/gap boundary frame between the front and back faces at the exact midpoint (90-degree transition matrix) of a 3D Y-axis flip rotation.

## 🚀 How to Use
```html
<div class="ease-flip-card-fixed">
  <div class="ease-flip-card-fixed__inner">
    <div class="ease-flip-card-fixed__front">Front Content</div>
    <div class="ease-flip-card-fixed__back">Back Content</div>
  </div>
</div>