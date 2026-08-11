# Glassmorphism Pricing Table

A sleek, pure CSS, responsive pricing table showcasing the power of EaseMotion's built-in glassmorphism tokens and smooth hover animations.

## 🌟 What is this?
This component provides a stunning 3-tier pricing layout. It perfectly demonstrates how to build premium UI using `var(--ease-glass-bg)`, `backdrop-filter`, and CSS Grid, wrapped in EaseMotion's entrance animations.

## 🛠️ How it uses EaseMotion CSS
- **Design Tokens:** Relies heavily on `var(--ease-glass-bg)`, `var(--ease-glass-border)`, and `var(--ease-glow-primary)` to achieve the frosted glass aesthetic with a colorful glow on hover.
- **Motion First:** The cards utilize the `.ease-slide-up` entrance animation with stagger delays (`.ease-delay-100`, `.ease-delay-200`) to create a cascading load effect.
- **Pure CSS:** Zero JavaScript required.

## 🚀 How to use it

1. Ensure the core `easemotion.css` framework is linked in your HTML.
2. Structure the HTML Grid as shown in `demo.html`.
3. Apply the CSS classes provided in `style.css` to enable the `.ease-pricing-card` glass panels.

```html
<div class="ease-pricing-card ease-slide-up ease-delay-100">
  <h3 class="ease-pricing-tier">Basic</h3>
  <div class="ease-pricing-price">$9<span>/mo</span></div>
  <!-- ... features and button ... -->
</div>
```

## 📱 Responsiveness
The layout uses a CSS Grid that stacks vertically on mobile (`grid-template-columns: 1fr`) and expands to a 3-column layout on desktop viewports (`min-width: 768px`). The "Pro" tier utilizes `transform: scale(1.05)` on desktop to highlight it as the most popular choice.
