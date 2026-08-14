# Fade In Skeleton Component

This component provides a premium **Fade In Skeleton** loading placeholder designed for modern Cyberpunk dashboards, presenting custom shimmer linear gradients and glowing neon outlines.

---

### 1. What does this do?

It creates glowing card placeholder layers with shifting neon shimmer wave gradients that fade out smoothly to reveal loaded profile content when assets are ready.

---

### 2. How is it used?

Wrap skeleton placeholder layout items inside the `.ease-skeleton-layer` container class, and your final content elements inside the `.ease-loaded-layer` class, inside the base `.ease-skeleton-card` parent:

```html
<!-- Main Parent slot -->
<div class="ease-skeleton-card" aria-busy="true">
  <!-- Loading skeleton view -->
  <div class="ease-skeleton-layer">
    <div class="ease-sk-block ease-sk-avatar"></div>
    <div class="ease-sk-block ease-sk-title"></div>
    <div class="ease-sk-block ease-sk-text"></div>
  </div>

  <!-- Loaded content view -->
  <div class="ease-loaded-layer">
    <img src="avatar.png" alt="user photo" />
    <h4>User Name</h4>
    <p>Operational data description</p>
  </div>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **enhanced loading transition aesthetics** by replacing simple gray flashes with high-quality, neon glow shimmer outlines.

It provides visual continuity across asset states, reducing perceived loading delays on modern dashboards. The component is also designed with accessibility first, maintaining `aria-busy="true"` tags during shimmers and automatically disabling translations/shimmers for users who enable `prefers-reduced-motion` settings.

---

### Technical Breakdown

#### Customization Options

The animation shimmers and glowing frames can be adjusted in the playground:

- **Speeds**: `--shimmer-speed: 3.5s` (Slow), `1.8s` (Normal), `0.8s` (Fast), `0s` (Static).
- **Glow**: Adjusts `--glow-blur: 12px` (Subtle) to `25px` (Hyper).
- **Accents**: Custom CSS color variables mapping dual primary/secondary gradients.
