# Advanced Glassmorphic Interactive Card (Iteration 152)

A lightweight, high-performance **3D Glassmorphism Interactive Card** featuring smooth perspective hover transformations, dynamic depth lighting, and responsive styling—built strictly with **pure CSS3**.

Designed as a component submission for **EaseMotion-css**.

---

## ✨ Features

* **Zero JavaScript:** Fully interactive visual state and hover transformations built entirely with standard CSS.
* **Modern Glassmorphism:** Uses native CSS `backdrop-filter` combined with soft translucent borders and elevated dynamic shadows.
* **Hardware-Accelerated 3D Depth:** Utilizes `perspective` and `transform-style: preserve-3d` for seamless hover animations.
* **Accessibility Native:** Built-in `@media (prefers-reduced-motion: reduce)` support to respect system-level user preferences.
* **Fully Responsive:** Adapts effortlessly across mobile, tablet, and desktop viewports.

---

## 🚀 Usage

### 1. HTML Markup

Insert the following structure into your template:

```html
<div class="em-card-container">
  <div class="em-glass-card">
    <div class="em-badge">Iteration 152</div>
    <div class="em-card-content">
      <h3 class="em-title">EaseMotion Interface</h3>
      <p class="em-description">Pure CSS advanced interactive component with dynamic glassmorphic depth and fluid hover transitions.</p>
    </div>
    <div class="em-card-footer">
      <span class="em-stat">CSS3 Powered</span>
      <button type="button" class="em-action-btn" aria-label="Explore Component">Explore</button>
    </div>
  </div>
</div>