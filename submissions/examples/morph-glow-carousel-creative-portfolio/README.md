# CSS Morph-Glow Carousel for Creative Portfolio Layouts

A pure HTML5 & CSS3, shape-morphing, glassmorphic carousel deck engineered specifically for modern dark-themed creative portfolios, digital agency showcases, and interactive web exhibits.

## ✨ Overview

Traditional carousel components rely on heavy JavaScript dependencies or external libraries for touch gestures, slide state tracking, and layout transitions. The **Morph-Glow Carousel** reimagines portfolio showcases using modern CSS capabilities:

1. **Glassmorphism Base:** Each showcase card is crafted with frosted glass surfaces (`backdrop-filter: blur()`), multi-layered semi-transparent background gradients, and sleek 1px glass borders.
2. **Morph-Glow Geometry:** Upon hover or keyboard focus (`:focus-visible` / `:focus-within`), cards undergo a smooth geometry transformation (`border-radius: 20px` morphing to `32px 12px 32px 16px`) while casting a vibrant neon glowing aura.
3. **Pure CSS State Controller:** Powered by hidden radio inputs (`:checked ~ .carousel-viewport`) and SVG/Label arrow controls that allow seamless slide navigation without a single line of JavaScript.

---

## 🚀 Key Features

- **100% Pure HTML & CSS:** Zero JavaScript required for state management, slide sliding, or shape morphing.
- **Shape-Morphing Geometry:** Powered by an elastic spring bounce curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Multi-Layered Ambient Glow:** Dual `::before` and `::after` pseudo-elements create an atmospheric radial glow aura that dynamically amplifies on card interactions.
- **4 Studio Neon Color Themes:**
  - 🟣 **Electric Purple (`.card-theme-purple`):** Designed for 3D VFX, spatial art, and creative direction.
  - 🔵 **Cyber Cyan (`.card-theme-cyan`):** Tailored for WebGL engines, AI models, and real-time graphics.
  - 🟢 **Emerald Mint (`.card-theme-emerald`):** Perfect for fintech OS, system architectures, and mobile apps.
  - 🟡 **Rose Amber (`.card-theme-amber`):** High-visibility theme for audio DSP and generative soundscapes.
- **Full Accessibility (A11y):** Includes `role="region"`, `role="group"`, ARIA attributes, high-contrast `:focus-visible` outline rings, and keyboard tab order.
- **Reduced Motion Support:** Includes a dedicated `@media (prefers-reduced-motion: reduce)` block that stops ambient float keyframes and converts spring morphs into clean, non-disorienting state changes.

---

## 🎨 Customization (CSS Custom Properties)

Configure design tokens on `:root` or apply theme overrides to match your design system:

```css
:root {
  /* Color Tokens */
  --bg-dark: #080a10;
  --bg-card: rgba(18, 22, 36, 0.65);

  /* Neon Aura Colors */
  --glow-cyan: #00f2fe;
  --glow-purple: #9d4edd;
  --glow-pink: #ff2a85;
  --glow-emerald: #00f5d4;

  /* Morphing Physics */
  --morph-duration: 0.5s;
  --morph-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --radius-default: 20px;
  --radius-morphed: 32px 12px 32px 16px;
}
```

---

## 📋 Integration Guide

### 1. HTML Structure

Embed the radio controllers, carousel viewport, and label navigation within your layout:

```html
<section class="morph-carousel" role="region" aria-label="Portfolio Works">
  <!-- Radio State Controllers -->
  <input type="radio" id="slide-1" name="carousel" class="carousel-radio" checked>
  <input type="radio" id="slide-2" name="carousel" class="carousel-radio">

  <!-- Carousel Window -->
  <div class="carousel-viewport">
    <div class="carousel-track">
      <!-- Slide Item -->
      <div class="carousel-slide">
        <a href="#project" class="project-card card-theme-cyan" tabindex="0">
          <div class="card-header">
            <div class="card-icon-wrap">🌀</div>
            <span class="card-tag">WebGL 2.0</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">Aether WebGL Engine</h3>
            <p class="card-description">Real-time volumetric particle shaders.</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Pagination Controls -->
  <div class="carousel-controls">
    <div class="pagination-dots">
      <label for="slide-1" class="nav-dot" tabindex="0"></label>
      <label for="slide-2" class="nav-dot" tabindex="0"></label>
    </div>
  </div>
</section>
```

---

## 📱 Responsive & Motion Specifications

- **Desktop (1024px+):** 3 Cards displayed per slide deck.
- **Tablet (640px - 1024px):** 2 Cards per slide with dynamic viewport scaling.
- **Mobile (< 640px):** 1 Card featured per slide with vertical focus optimization.
- **Motion Reduction:** Fully compliant with WCAG 2.1 motion guidelines under `prefers-reduced-motion`.
