# CSS Glow Pulse Card (Cyberpunk Glitch Layout)

An aggressive, neon-lit, and highly animated glow card designed for cyberpunk, gaming, or high-tech interface layouts. It features erratic keyframe animations to simulate a digital glitch effect.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations (`@keyframes` and `filter: blur()`).
- **Cyberpunk Aesthetics:** High-contrast dark background, angled borders using `clip-path`, and neon accents.
- **Glitch Glow:** Uses complex translation keyframes combined with dual-colored blur layers to simulate a hardware malfunction or digital breach.
- **Hover Interactions:** Aggressive text shadow manipulation on hover to further the glitch aesthetic.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable the aggressive animations for sensitive users.
- **Themable:** Built entirely with CSS Custom Properties (Variables) making it easy to swap neon colors.

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-cyberpunk-glow-card">
  <!-- Glitching Glow Layers -->
  <div class="ease-cyberpunk-glow-layer layer-1"></div>
  <div class="ease-cyberpunk-glow-layer layer-2"></div>
  
  <!-- Cyberpunk Content Box -->
  <div class="ease-cyberpunk-content">
    <h2 class="cyberpunk-title" data-text="WARNING">WARNING</h2>
    <p>System breach detected.</p>
  </div>
</div>
```

## 🎨 Customization (CSS Variables)

Easily theme the card by overriding the variables in your CSS:

```css
:root {
  /* Change the primary neon border and text accent */
  --ease-cp-border: #00ffff; /* Cyan */
  --ease-cp-border-secondary: #ff00ff; /* Magenta */
  
  /* Change the dual glitch glow colors */
  --ease-cp-glow-1: rgba(0, 255, 255, 0.6);
  --ease-cp-glow-2: rgba(255, 0, 255, 0.6);
}
```
