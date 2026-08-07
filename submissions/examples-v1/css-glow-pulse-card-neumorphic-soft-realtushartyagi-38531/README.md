# CSS Glow Pulse Card (Neumorphic Soft Layout)

A pure CSS animated glowing card component designed to blend soft UI (neumorphism) with an ambient, breathing glow pulse. Perfect for modern, clean, and minimalist dashboard interfaces.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations (`@keyframes` and `filter: blur()`).
- **Soft UI Shadows:** Utilizes precise `box-shadow` techniques for inset and outset neumorphic effects.
- **Ambient Glow:** Uses two layered glowing circles with heavy blur to create a soft, breathing background light.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable the pulsing animation for sensitive users.
- **Themable:** Built entirely with CSS Custom Properties (Variables).

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-neumorphic-glow-card">
  <!-- Glow Layers -->
  <div class="ease-neumorphic-glow-layer layer-1"></div>
  <div class="ease-neumorphic-glow-layer layer-2"></div>
  
  <!-- Main Soft UI Content -->
  <div class="ease-neumorphic-content">
    <h3>Neumorphic Element</h3>
    <button class="neumorphic-btn">Click Me</button>
  </div>
</div>
```

## 🎨 Customization (CSS Variables)

You can easily theme this card by overriding the root variables in your CSS:

```css
:root {
  /* Change the glow color */
  --ease-neu-glow-color: #ff007a; 
  
  /* Change the background and shadow colors for dark mode */
  --ease-neu-bg: #1a202c;
  --ease-neu-surface: #1a202c;
  --ease-neu-shadow-dark: #0f131a;
  --ease-neu-shadow-light: #252d3e;
}
```
