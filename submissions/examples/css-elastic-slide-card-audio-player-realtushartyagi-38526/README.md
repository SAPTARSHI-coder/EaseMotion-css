# CSS Elastic Slide Card (Audio Player Layout)

An immersive UI card that reveals audio playback controls through a dynamic, elastic sliding animation when hovered or focused. Designed for modern music players, podcast interfaces, and media dashboards.

## 🚀 Features
- **Zero JavaScript:** Built entirely with pure CSS transitions.
- **Elastic Animation:** Uses a custom `cubic-bezier` timing function to create a spring-like sliding effect.
- **Accessible:** Uses `:focus-within` for keyboard navigation support and `prefers-reduced-motion` to disable animations for sensitive users.
- **Auto Dark Mode:** Adapts seamlessly to user system preferences using `@media (prefers-color-scheme: dark)`.
- **Abstract Album Art:** Includes a pure CSS animated album art placeholder for immediate visual impact.

## 📁 Installation

1. Copy `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-audio-slide-card" tabindex="0">
  
  <!-- Front Panel (Album Info) -->
  <div class="ease-audio-front">
    <div class="album-art">...</div>
    <div class="track-info">
      <h3 class="track-title">Midnight City Lights</h3>
    </div>
  </div>
  
  <!-- Back Panel (Controls) -->
  <div class="ease-audio-back">
    <div class="player-controls">
      <!-- SVG Buttons -->
    </div>
  </div>
  
</div>
```

## 🎨 Customization (CSS Variables)

Customize the look and feel easily by overriding root variables:

```css
:root {
  /* Main Accent Color (Play button, progress bar) */
  --ease-audio-accent: #8b5cf6;
  
  /* Hover Accent */
  --ease-audio-accent-hover: #7c3aed;
  
  /* Background of the hidden control panel */
  --ease-audio-panel: #0f172a;
}
```
