# CSS Glow Pulse Card (SaaS Showcase Layout)

A premium, sharp, and highly polished glow card designed specifically for modern SaaS platform landing pages, pricing tiers, or feature showcases.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations (`@keyframes` and `filter: blur()`).
- **SaaS Aesthetics:** Clean borders, soft internal box-shadows, and a vibrant primary accent color drop shadow glow.
- **Hover Interactions:** Smooth Y-axis lift on hover, common in premium SaaS designs.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable animations for sensitive users while retaining visual hierarchy.
- **Themable:** Built entirely with CSS Custom Properties (Variables) making it easy to adapt to your brand colors.

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-saas-glow-card">
  <!-- Dynamic Glow Background -->
  <div class="ease-saas-glow-layer layer-1"></div>
  <div class="ease-saas-glow-layer layer-2"></div>
  
  <!-- SaaS Content Box -->
  <div class="ease-saas-content">
    <div class="saas-header">
      <span class="saas-badge">Enterprise</span>
    </div>
    <h3>Custom Analytics</h3>
    <button class="saas-btn">Get Started</button>
  </div>
</div>
```

## 🎨 Customization (CSS Variables)

Easily theme the card to match your SaaS brand by overriding the variables in your CSS:

```css
:root {
  /* Main Accent Color (e.g., Brand Purple) */
  --ease-saas-primary: #8b5cf6; 
  --ease-saas-primary-hover: #7c3aed;
  --ease-saas-glow: rgba(139, 92, 246, 0.4);
}
```
