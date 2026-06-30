# 3D Rotating Cube Loader

### 1. What does this do?

This component creates a fully 3D rotating cube that tumbles continuously on all axes, functioning as a modern, eye-catching loading spinner.

### 2. How is it used?

Apply the `.cube-container` class to a wrapper and include six child elements with classes matching each face orientation:

```html
<div class="cube-container">
  <div class="cube-wrapper">
    <div class="cube-face face-front"></div>
    <div class="cube-face face-back"></div>
    <div class="cube-face face-left"></div>
    <div class="cube-face face-right"></div>
    <div class="cube-face face-top"></div>
    <div class="cube-face face-bottom"></div>
  </div>
</div>
```

**Variants:**

- **Themes**:
  - `.cube-glass`: Frosted glass faces using `backdrop-filter`.
  - `.cube-neon`: Glowing borders with vibrant neon cyan drop shadows.
  - `.cube-wireframe`: Completely transparent faces showing only the border outlines.
- **Speed**:
  - `.cube-fast`: Speeds up rotation cycles (1.8s).
  - `.cube-slow`: Slows down rotation cycles (8s).

**Custom Properties:**

- `--cube-size`: Defines the width and height of the loader (default: `80px`).
- `--cube-speed`: Rotation duration cycle (default: `4s`).
- `--cube-color`: Face background fill color (default: indigo tint).
- `--cube-border-color`: Border color of each face (default: indigo).

### 3. Why is it useful?

It elevates common loading feedback states into a premium, three-dimensional visual using pure CSS. The geometry calculations are fully handled dynamically using CSS custom properties (`calc(var(--cube-size) / 2)`), meaning it scales automatically to any custom size set in your stylesheet. It also supports `@media (prefers-reduced-motion: reduce)` overrides, pausing the spin animation and positioning the cube at a static, aesthetically pleasing 3D perspective angle.
