# Animated Pricing Card Component (`ease-pricing-xyz`)

A zero-dependency, CSS-only animated pricing card component designed for the **EaseMotion CSS** framework. Perfect for SaaS products, service websites, and subscription plans with smooth hover effects and feature reveals.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and CSS animations.
- **Animation-First**: Smooth hover lift, popular badge pulse, price fade-in, and staggered feature list animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Tiers**: Support for multiple pricing plans (Starter, Pro, Enterprise).
- **Popular Badge**: Animated badge with pulse effect to highlight recommended plans.
- **Feature List**: Staggered slide-in animations for feature items with checkmarks.
- **CTA Button**: Gradient button with ripple effect on click and hover lift.
- **Compact Variant**: Simplified pricing cards for billing cycles (monthly/yearly).
- **Gradient Accents**: Beautiful gradient text and backgrounds for visual appeal.
- **Accessible**: Proper semantic HTML structure and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Pricing Card
```html
<div class="ease-pricing-xyz">
  <div class="ease-pricing-xyz-header">
    <h3 class="ease-pricing-xyz-name">Plan Name</h3>
    <p class="ease-pricing-xyz-description">Plan description</p>
  </div>
  
  <div class="ease-pricing-xyz-price">
    <span class="ease-pricing-xyz-currency">$</span>
    <span class="ease-pricing-xyz-amount">29</span>
    <span class="ease-pricing-xyz-period">/month</span>
  </div>

  <ul class="ease-pricing-xyz-features">
    <li class="ease-pricing-xyz-feature">
      <span class="ease-pricing-xyz-check">✓</span>
      <span>Feature 1</span>
    </li>
    <li class="ease-pricing-xyz-feature">
      <span class="ease-pricing-xyz-check">✓</span>
      <span>Feature 2</span>
    </li>
  </ul>

  <button class="ease-pricing-xyz-cta">Get Started</button>
</div>