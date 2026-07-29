# Bounce Button for Dark Mode

This component provides a premium suite of interactive, pure CSS **Bounce Buttons** designed specifically for dark-mode layouts, allowing buttons to rebound with tactile spring physics on user interactions.

---

### 1. What does this do?

It implements six distinct, highly customizable variants of a spring-driven bounce button that respond to hover, focus, and click inputs with fluid physical spring calculations, adaptive colors, and background skin compatibility in dark mode.

---

### 2. How is it used?

Include the base button class `.ease-btn-bounce` along with one of the dynamic animation variations. Below are examples of the variations:

```html
<!-- 1. Elastic Bounce Button -->
<button class="ease-btn-bounce ease-btn-bounce-elastic">Elastic Spring</button>

<!-- 2. Tactile 3D Bounce Button -->
<button class="ease-btn-bounce ease-btn-bounce-3d">Tactile 3D Push</button>

<!-- 3. Bubble Swell Button -->
<button class="ease-btn-bounce ease-btn-bounce-bubble">Bubble Swell</button>

<!-- 4. Cyber Glitch Bounce -->
<button class="ease-btn-bounce ease-btn-bounce-glitch">
  Cyber Neon Glitch
</button>

<!-- 5. Directional Magnetic Icon Bounce -->
<button class="ease-btn-bounce ease-btn-bounce-magnetic">
  <span>Magnetic Arrow</span>
  <svg>...</svg>
</button>

<!-- 6. Aura Ring Glow Bounce -->
<button class="ease-btn-bounce ease-btn-bounce-accent">Aura Ring Glow</button>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **fluid, responsive micro-animations** by replacing typical static state transitions with realistic physical spring dynamics (utilizing custom cubic-beziers).

It enhances the tactile feedback of dark-mode elements where contrast can be low, without requiring heavy JavaScript libraries (e.g. Framer Motion) or causing browser paint lag. The component is also fully accessible, incorporating high-contrast focus outlines and automatic animation disabling for users with `prefers-reduced-motion` enabled.

---

### Technical Breakdown

#### Spring Physics Configurations

The buttons respond to custom spring constants configured via CSS custom properties:

- **Balanced Spring (Default)**: `cubic-bezier(0.25, 1.5, 0.5, 1)` with a `0.35s` transition.
- **Heavy Damping Spring**: `cubic-bezier(0.175, 0.885, 0.45, 1.25)` with a `0.5s` transition.
- **High Stiffness/Snap Spring**: `cubic-bezier(0.3, 1.8, 0.5, 1)` with a `0.2s` transition.
