# Pure CSS 3D Holographic Foil Trading Card (`.ease-holo-card`)

A 100% pure CSS component that recreates the reflective, iridescent rainbow foil effect of rare collectible trading cards, VIP event passes, and Web3 membership cards. Built with zero JavaScript using advanced CSS gradient math, blend modes, specular shine overlays, and 3D perspective transforms.

---

## 🌟 Features

- **Pure CSS Rainbow Foil**: Employs `repeating-linear-gradient()` with `mix-blend-mode: color-dodge` and CSS filters (`brightness`, `contrast`, `saturate`) to simulate realistic light refractions.
- **3D Perspective & Tilt**: Uses CSS 3D transforms (`rotateY`, `rotateX`, `translateZ`) in combination with a `perspective: 1000px` wrapper for physical depth.
- **Specular Shine Layer**: Dynamic `radial-gradient` specular highlight on `::after` that shifts position and intensifies on cursor hover.
- **Color Foil Presets**: Includes Standard Rainbow, Gold (`.ease-holo-card-gold`), Cosmic Nebula (`.ease-holo-card-cosmic`), and Platinum Silver (`.ease-holo-card-silver`).
- **Continuous Shimmer Animation**: Optional `.ease-holo-shimmer` class for continuous animated foil glints.
- **Accessibility & Reduced Motion**: Automatically disables 3D tilts and animated gradients when `prefers-reduced-motion: reduce` is enabled. Full keyboard `:focus-visible` support included.

---

## 🚀 Quick Usage

Include `easemotion.css` in your project:

```html
<link rel="stylesheet" href="easemotion.css">
```

### Basic HTML Markup

```html
<div class="ease-holo-card-wrapper">
  <div class="ease-holo-card" tabindex="0">
    <!-- Card Artwork / Background -->
    <img class="ease-holo-card-art" src="artwork.jpg" alt="Trading Card Artwork">

    <!-- Card Content Layer -->
    <div class="ease-holo-card-content">
      <div class="card-header">
        <span class="ease-holo-card-badge">Secret Rare</span>
      </div>
      <div class="card-footer">
        <h2 class="ease-holo-card-title">Cyber Dragoon</h2>
        <div class="ease-holo-card-subtitle">Elemental Titan</div>
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 Component Modifiers

| Class Name | Description |
| :--- | :--- |
| `.ease-holo-card` | Base holographic card with standard rainbow foil overlay. |
| `.ease-holo-card-gold` | Warm metallic gold foil gradient variant. |
| `.ease-holo-card-cosmic` | Vibrant cosmic cyan-magenta iridescent variant. |
| `.ease-holo-card-silver` | Sleek platinum silver monochrome metallic foil. |
| `.ease-holo-shimmer` | Animated continuous shimmering glint modifier. |

---

## ⚙️ CSS Custom Properties

Customize card dimensions, tilt angles, and foil opacity via CSS custom properties:

```css
.custom-card {
  --ease-holo-width: 350px;
  --ease-holo-aspect: 2.5 / 3.5;
  --ease-holo-radius: 1.5rem;
  --ease-holo-opacity: 0.7;
  --ease-holo-tilt-x: -12deg;
  --ease-holo-tilt-y: 15deg;
  --ease-holo-blend: color-dodge;
}
```

---

## 🔬 Technical Implementation & Blend Mode Math

1. **Iridescent Rainbow Overlay (`::before`)**: Uses a 115° repeating diagonal rainbow linear gradient spanning 300% canvas size.
2. **Color Dodge Blending**: `mix-blend-mode: color-dodge` multiplies light refractions against the background artwork.
3. **Specular Highlight (`::after`)**: Layered dual radial & linear white specular gradients combined with `mix-blend-mode: overlay`.
4. **3D Depth Stacking**: `transform-style: preserve-3d` organizes Z-layering: Artwork (Z: 1) < Rainbow Foil (Z: 2) < Glare Highlight (Z: 3) < Text Content (Z: 4).
