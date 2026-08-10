# Ease 3D Parallax Tilt Card Component (`ease-tilt-card-3d`)

An interactive, GPU-accelerated **3D Spatial Parallax Tilt Card** component for EaseMotion CSS. Designed for high-end SaaS product cards, feature showcases, and portfolio items.

---

## ⚡ Features

- **Real-time Pointer Track**: Calculates relative cursor position to compute 3D matrix rotations (`rotateX` / `rotateY`).
- **Multi-layer Depth Parallax**: Internal child elements with `data-depth` translate on the Z-axis (`translateZ`) at distinct rates.
- **Dynamic Specular Glare Overlay**: Interactive shine vector that recalculates gradient angle and opacity in real time.
- **Spring Back Physics**: Smooth cubic-bezier spring-back animation on `pointerleave`.
- **Zero Heavy Dependencies**: Pure CSS3 GPU transforms + lightweight RequestAnimationFrame JavaScript timing loop.

---

## 📁 Directory Structure

```text
submissions/examples/ease-tilt-card-3d/
├── demo.html    # Interactive live showcase & controls
├── style.css    # Card 3D perspective styles & theme variables
└── README.md    # Integration documentation & API options
```

---

## 🚀 Quick Usage

### 1. HTML Markup

```html
<article class="ease-tilt-card-3d" data-tilt-max="20" data-tilt-perspective="1000" data-tilt-scale="1.04">
  <div class="ease-tilt-glare"></div>
  <div class="ease-tilt-content">
    <span class="ease-depth-layer" data-depth="25">PRO FEATURE</span>
    <h2 class="ease-depth-layer" data-depth="35">GPU Spatial Motion</h2>
    <p class="ease-depth-layer" data-depth="20">Card content description...</p>
  </div>
</article>
```

### 2. Attribute Options

| Data Attribute | Default | Description |
| :--- | :--- | :--- |
| `data-tilt-max` | `20` | Maximum tilt angle in degrees |
| `data-tilt-perspective` | `1000` | 3D perspective distance in pixels |
| `data-tilt-scale` | `1.04` | Scale multiplier on hover |
| `data-depth` | `20` | Z-axis translation depth (px) for child layers |

---

## ⚙️ CSS Custom Properties

```css
:root {
  --ease-tilt-bg: #090d16;
  --ease-tilt-card-bg: rgba(22, 30, 46, 0.7);
  --ease-tilt-card-border: rgba(255, 255, 255, 0.12);
  --ease-tilt-card-radius: 24px;
  --ease-tilt-card-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
```

---

## 📜 License

MIT © 2026 Saptarshi Sadhu / EaseMotion CSS Contributors
