# 3D Tilt Card

**Category:** Component — Interactions  
**Type:** CSS + JavaScript  
**Folder:** `submissions/examples/ease-card-3d-tilt-ij/`

---

## Overview

The 3D Tilt Card component creates an immersive perspective-shifting effect on mouse hover. Each card responds to cursor position by rotating along the X and Y axes, simulating a physical 3D surface. The effect is smooth, hardware-accelerated, and gracefully degrades when motion preferences are reduced.

---

## Features

- **Real-time 3D tilt** — card rotation follows mouse position with natural perspective
- **Customizable tokens** — all visual parameters exposed as CSS custom properties
- **Scale on hover** — cards subtly scale up for tactile feedback
- **Smooth transitions** — eased rotation with `will-change` hinting for GPU acceleration
- **Responsive grid** — three-column layout collapses to single column on mobile
- **Reduced motion support** — respects `prefers-reduced-motion: reduce`

---

## Usage

### HTML Structure

```html
<article class="tilt-card" data-tilt>
  <div class="tilt-card-inner">
    <span class="card-icon">🚀</span>
    <h2 class="card-title">Launch Fast</h2>
    <p class="card-desc">Your description here.</p>
  </div>
</article>
```

Include the JavaScript to enable the tilt effect. Each `.tilt-card` with a `data-tilt` attribute is automatically enhanced.

---

## Customization

| CSS Custom Property | Default | Description |
|---|---|---|
| `--card-tilt-perspective` | `1000px` | 3D perspective value applied to the card wrapper |
| `--card-tilt-scale` | `1.03` | Scale factor applied on hover |
| `--card-tilt-bg` | `#ffffff` | Card background color |
| `--card-tilt-shadow` | `0 20px 60px rgba(0,0,0,0.15)` | Card box shadow |
| `--card-tilt-radius` | `16px` | Card border radius |

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 49+ | Full support |
| Firefox | 52+ | Full support |
| Safari | 10+ | Full support |
| iOS Safari | 10+ | Full support |

---

## License

Submitted under the same license as the EaseMotion CSS repository.
