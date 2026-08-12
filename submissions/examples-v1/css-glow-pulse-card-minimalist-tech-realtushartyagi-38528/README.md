# CSS Glow Pulse Card (Minimalist Tech Layout)

A refined, understated card with a monochrome aesthetic and a very subtle, precise glow. Designed for modern, content-focused tech websites that prioritize typography and whitespace.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations.
- **Refined Interaction:** Clean `translateY` hover state with an understated border-color transition.
- **Subtle Glow:** Uses a very faint drop-shadow glow pulse that doesn't distract from the content.
- **Auto Dark Mode:** Fully supports `@media (prefers-color-scheme: dark)` out of the box for automatic light/dark mode switching.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable animations for sensitive users.
- **Themable:** Built entirely with CSS Custom Properties.

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-minimal-glow-card">
  <!-- Subtle Glow Layer -->
  <div class="ease-minimal-glow-layer layer-1"></div>
  
  <!-- Content Box -->
  <div class="ease-minimal-content">
    <h3 class="minimal-title">Serverless Compute</h3>
    <p class="minimal-description">Deploy instantly at the edge.</p>
  </div>
</div>
```

## 🎨 Customization (CSS Variables)

Easily theme the card by overriding the variables in your CSS:

```css
:root {
  /* Control the background and border */
  --ease-min-surface: #ffffff;
  --ease-min-border: #eaeaea;
  
  /* Control the glow intensity and color */
  --ease-min-glow: rgba(0, 0, 0, 0.08); /* Faint dark shadow for light mode */
}

@media (prefers-color-scheme: dark) {
  :root {
    --ease-min-glow: rgba(255, 255, 255, 0.08); /* Faint light shadow for dark mode */
  }
}
```
