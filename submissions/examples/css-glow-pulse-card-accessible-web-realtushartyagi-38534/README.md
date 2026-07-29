# CSS Glow Pulse Card (Accessible Web Layout)

A pure CSS animated glowing card component designed with accessibility as the primary focus. It utilizes a subtle, non-distracting pulse effect and fully respects user system preferences for reduced motion and high contrast.

## 🚀 Features
- **Zero JavaScript:** Runs purely on CSS animations (`@keyframes` and `filter: blur()`).
- **Accessibility First:** 
  - Uses `@media (prefers-reduced-motion: reduce)` to disable the pulsing animation for sensitive users, falling back to a static state.
  - Uses `@media (prefers-contrast: more)` to completely remove the glow and apply high-contrast borders for users with vision impairments.
  - Includes proper `tabindex` and `:focus-visible` styling for keyboard navigation.
- **Themable:** Built entirely with CSS Custom Properties (Variables) for easy color adjustments.

## 📁 Installation

1. Copy the `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-accessible-glow-card" tabindex="0">
  <div class="ease-accessible-content">
    <h3>Accessible Component</h3>
    <p>This component respects user preferences.</p>
  </div>
  
  <div class="ease-accessible-glow-layer layer-1"></div>
  <div class="ease-accessible-glow-layer layer-2"></div>
</div>
```

## 🎨 Customization (CSS Variables)

You can easily theme this card by overriding the root variables:

```css
:root {
  --ease-accessible-primary: #007700; /* Dark Green */
  --ease-accessible-secondary: #004400; 
}
```
