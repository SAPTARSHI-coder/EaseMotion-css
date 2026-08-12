 feature/ease-loading-spinner-pr
# Smooth Center Reveal Utility Effect

## Overview

This submission adds a smooth center reveal utility effect for EaseMotion CSS.

## Features

- Pure HTML and CSS
- Center-out reveal animation
- Uses `clip-path`
- Smooth hover transition
- Responsive card layout
- No external libraries

## Usage

```html
<div class="ease-center-reveal">
  Content
</div>
=======
# Center Reveal Utility Effect (EaseMotion CSS)

A smooth, high-performance, GPU-accelerated suite of CSS-only transition utilities that reveal elements from the center outward. Implemented using modern CSS `clip-path` and `transform` functions, this package delivers premium interactive feedback with zero JavaScript dependencies.

---

## 🚀 What It Does

The **Center Reveal Effect** dynamically masks card details, product listings, overlay options, or modals, allowing them to sweep into view from their geometric center when triggered. Because it uses CSS masking, the child contents (images, buttons, code blocks) retain their actual dimensions and layouts without being squished, squeezed, or distorted.

The package includes:
- **Multiple masking shapes** (Circular, Diamond, Rectangular Inset, Split Curtain).
- **GPU-accelerated transformations** (Scale, Zoom-In, Zoom-Out, Rotation).
- **State triggering triggers** (Hover, Keyboard Focus, Checkbox state-toggle).
- **Accessibility defaults** (Respects `prefers-reduced-motion` settings).

---

## 🛠️ How to Use

The effect is structured using a parent-container trigger class (`.ease-reveal-container`) and a target element class (`.ease-reveal-element`).

### 1. Basic Hover Reveal (Circular Shape + Zoom In)

```html
<div class="ease-reveal-container">
  <!-- Underlay (always visible) -->
  <img src="cover.jpg" alt="Wallpaper">
  
  <!-- Overlay (revealed from center on hover) -->
  <div class="ease-reveal-element ease-reveal-circle ease-zoom-in">
    <h3>Title</h3>
    <p>Overlay Description</p>
  </div>
</div>
```

### 2. State-Activated Reveal (Click-to-Reveal via Sibling Checkbox)

If you need a toggleable modal or detailed view that responds to user clicks, implement the **CSS Checkbox Hack** using `.ease-reveal-input`:

```html
<div class="ease-reveal-container">
  <!-- Checkbox Controller -->
  <input type="checkbox" id="my-toggle" class="ease-reveal-input" hidden>
  
  <!-- Static Content -->
  <h4>Content Title</h4>
  <label for="my-toggle" class="open-btn">View Detailed Specs</label>
  
  <!-- Revealed Card Panel -->
  <div class="ease-reveal-element ease-reveal-inset ease-bounce">
    <label for="my-toggle" class="close-btn">&times;</label>
    <h4>Details Panel</h4>
    <p>Detailed data sheet goes here...</p>
  </div>
</div>
```

---

## 🏷️ Class Reference

Apply these classes alongside `.ease-reveal-element` to configure the animations:

### Mask Shapes (Select One)
| Class Name | Reveal Effect Shape | Initial Clip/State | Final Reveal Clip/State |
| :--- | :--- | :--- | :--- |
| `.ease-reveal-circle` | Circular Radial Sweep | `circle(0% at 50% 50%)` | `circle(150% at 50% 50%)` |
| `.ease-reveal-inset` | Rectangular Inset Scale | `inset(50%)` | `inset(0%)` |
| `.ease-reveal-diamond` | 4-Point Diamond Sweep | `polygon(50% 50%...)` | `polygon(50% -50%...)` |
| `.ease-reveal-scale` | GPU Scale Transform | `scale(0)` | `scale(1)` |
| `.ease-reveal-split-h` | Horizontal Split Curtain | `inset(0% 50%)` | `inset(0%)` |
| `.ease-reveal-split-v` | Vertical Split Curtain | `inset(50% 0%)` | `inset(0%)` |

### Micro-Motion Enhancements (Optional Mix-Ins)
- `.ease-zoom-in`: Sets default scale at `0.92`, expanding to `1` during reveal (creates depth expansion).
- `.ease-zoom-out`: Sets default scale at `1.1`, compressing to `1` during reveal (creates focus alignment).
- `.ease-rotate-cw`: Adds a subtle `-8deg` rotational tilt, returning to `0deg` to dynamicize the entrance.
- `.ease-bounce`: Overrides default cubic-bezier to trigger a springy `back-out` bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

### Speed Configuration
- `.ease-fast`: Sets transition duration to `0.35s`.
- `.ease-slow`: Sets transition duration to `0.95s`.
- **Custom Property**: Override inline using CSS variables:
  ```html
  <div class="ease-reveal-element ease-reveal-circle" style="--reveal-duration: 0.4s;">
  ```

---

## 💡 Why It Is Useful

1. **Prevents Content Squishing (Aspect-Ratio Preservation)**:  
   Traditional hover expansion (using `width`/`height` or `transform: scale()`) squishes text and images during transition, rendering them unreadable until fully open. Using `clip-path` masks the element boundary, ensuring code blocks, typography, and buttons remain in their final crisp ratio throughout the entire path.
   
2. **GPU Performance Optimization**:  
   Unlike transitions on layout properties (`width`, `margin`, `padding`), transitions on `clip-path`, `transform`, and `opacity` are combined into a single layer composition handled entirely by the GPU. This eliminates layout thrashing (reflow and redraw cycles) and maintains a smooth 60fps/120fps refresh rate even on mobile browsers.

3. **Accessible & Interactive Keyboard Fallbacks**:  
   Includes out-of-the-box `:focus-within` triggers. Keyboard users navigating via `Tab` will automatically reveal the overlay as soon as an interactive element inside the container gains focus.

4. **Reduced Motion Adaptation**:  
   Includes a built-in media-query hook that checks for user preferences (`prefers-reduced-motion: reduce`). When active, it disables the sweeps and scales, showing the target elements instantly on interaction, ensuring compliance with accessibility guidelines.

5. **Theme-Neutral**:  
   Fully styled using modern CSS custom properties. Adapts instantly when the global root theme is toggled.

