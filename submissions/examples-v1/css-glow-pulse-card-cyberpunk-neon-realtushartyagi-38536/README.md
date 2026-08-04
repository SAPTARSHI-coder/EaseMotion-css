# CSS Glow Pulse Card (Cyberpunk Neon Layout)

A pure CSS animated glowing card component designed for cyberpunk, retro-wave, and high-tech glitchy layouts. It utilizes overlapping gradient backgrounds, blur filters, and alternate-reverse keyframe animations to create an aggressive, breathing neon glow without any JavaScript overhead.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations (`@keyframes` and `filter: blur()`).
- **Aggressive Glow:** Uses two layered glows with intense scaling and dynamic blurring for a cyberpunk feel.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable the pulsing animation for sensitive users.
- **Themable:** Built entirely with CSS Custom Properties (Variables) for instant color palette swaps.

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-cyberpunk-glow-card">
  <!-- Top Layer: Your Content -->
  <div class="ease-cyberpunk-content">
    <h3>Access Granted</h3>
    <p>Welcome to Night City.</p>
  </div>
  
  <!-- Bottom Layers: The Animated Glow -->
  <div class="ease-cyberpunk-glow-layer layer-1"></div>
  <div class="ease-cyberpunk-glow-layer layer-2"></div>
</div>
```

## 🎨 Customization (CSS Variables)

You can easily theme this card by overriding the root variables:

```css
:root {
  --ease-cyberpunk-primary: #ff0055; /* Hot Pink */
  --ease-cyberpunk-secondary: #00ffaa; /* Toxic Green */
  --ease-cyberpunk-pulse-duration: 1.5s; /* Faster, more aggressive pulse */
}
```

## ♿ Accessibility Notes
- Ensure adequate contrast between `var(--ease-cyberpunk-surface)` and `var(--ease-cyberpunk-text)`.
- The included `prefers-reduced-motion` block ensures the flashing/pulsing effect is neutralized.
