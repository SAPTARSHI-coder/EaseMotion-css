# Ease Pricing Card Component

## What does this do?

A premium, highly interactive, and responsive suite of Pricing Cards and Plan layouts featuring modern visual aesthetics (such as gradients, dark styles, and outline presets), hover transitions, popular badge animations, and a pure-CSS billing toggle.

---

## Why is it useful?

Pricing cards are a critical component for SaaS landing pages, memberships, and product checkouts. This component provides 10 distinct, production-ready design variants that load with zero dependencies and adapt fluidly across devices. By utilizing standard CSS variables, it integrates seamlessly into the EaseMotion CSS framework and supports native dark/light modes out of the box.

---

## How is it used?

### Basic HTML Structure

```html
<div class="ease-pricing-wrapper">
  <!-- Grid container -->
  <div class="ease-pricing-grid">
    <!-- Card element -->
    <div class="ease-pricing-card ease-card--standard">
      <div class="ease-card-header">
        <!-- Optional popular badge -->
        <span class="ease-pricing-badge ease-badge--popular">Popular</span>
        <h4 class="ease-plan-name">Standard Plan</h4>
        <p class="ease-plan-desc">
          For small teams building modern apps together.
        </p>
      </div>

      <!-- Price & Cycle -->
      <div class="ease-price-wrap">
        <span class="ease-price">$29</span>
        <span class="ease-period">/ month</span>
      </div>

      <!-- Feature List -->
      <ul class="ease-feature-list">
        <li class="ease-feature-item">
          <span class="ease-feature-icon">
            <svg viewBox="0 0 24 24">
              <polyline class="icon-check" points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          5 User licenses
        </li>
        <li class="ease-feature-item disabled">
          <span class="ease-feature-icon">
            <!-- Disabled feature mark -->
          </span>
          Custom Domains
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="#" class="ease-pricing-btn ease-pricing-btn--primary">Get Pro</a>
    </div>
  </div>
</div>
```

---

## Features

- **Pure CSS Layout & Toggle**: A billing cycle switch (Monthly / Yearly) driven by a standard checkbox hack, requiring zero JavaScript.
- **Micro-animations**: Dynamic hover scaling (`translateY(-8px)`), border animations, glowing drop shadows, and pulsating action badges.
- **High-End Aesthetics**: High visual contrast, soft CSS box shadows, custom cubic-bezier curves for transitions, and gradients.
- **Adaptive Dark Mode**: Automatic dark/light theme adjustments based on `prefers-color-scheme`, plus a dedicated dark override class (`.ease-card--dark`).
- **Responsive Fluid Grid**: Self-adjusting layout using CSS Grid `repeat(auto-fit, minmax(280px, 1fr))`.

---

## Variants

1. **Basic Plan** (`.ease-card--basic`): Minimalist borders and gray CTA button for lower tiers.
2. **Standard Plan** (`.ease-card--standard`): Standard accent border with a primary colored CTA button.
3. **Premium Plan** (`.ease-card--premium`): Soft primary shadow and clean visual styling.
4. **Enterprise Plan** (`.ease-card--enterprise`): Radial gradient surface styling for premium, high-value plans.
5. **Featured Plan** (`.ease-card--featured`): Thicker primary border, high-contrast glow shadow, and a top-accent gradient line.
6. **Gradient Pricing Card** (`.ease-card--gradient`): Colorful linear gradient border outline, gradient text title, and gradient CTA background.
7. **Outline Pricing Card** (`.ease-card--outline`): Transparent background with dark outline borders, fitting beautifully on ambient backgrounds.
8. **Dark Pricing Card** (`.ease-card--dark`): Explicit dark mode card with deep dark slate colors, neon highlights, and custom dark buttons.
9. **Minimal Pricing Card** (`.ease-card--minimal`): Spaciously designed card with no container borders, projecting a shadow only on hover.
10. **Comparison Pricing Card** (`.ease-card--comparison`): Horizontal dashboard layout displaying header description, price, and feature details aligned side-by-side.

---

## Card Elements

- **`.ease-pricing-card`**: Main container shell.
- **`.ease-plan-name`**: Plan title (`h4` or `h3` tags).
- **`.ease-plan-desc`**: Muted description summary.
- **`.ease-price`**: Large formatted price value.
- **`.ease-period`**: Billing period details (e.g. `/mo` or `/yr`).
- **`.ease-feature-list`**: List container for checklist items.
- **`.ease-feature-item`**: Single feature detail. Use class `.disabled` to mute and gray out.
- **`.ease-pricing-btn`**: Call to action link/button. Available variants:
  - `ease-pricing-btn--primary`
  - `ease-pricing-btn--outline`
  - `ease-pricing-btn--secondary`
- **`.ease-pricing-badge`**: Small text label tag. Available types:
  - `ease-badge--popular` (adds pulse scaling animation)
  - `ease-badge--discount` (green success pill)

---

## Customization

You can override style variables by targeting `:root` or wrapping containers in custom classes:

```css
/* Custom variables overrides */
:root {
  --ep-color-primary: #10b981; /* Shift primary colors to Emerald Green */
  --ep-color-gradient-start: #10b981;
  --ep-color-gradient-end: #3b82f6; /* Custom green-to-blue gradient */

  --ease-radius-xl: 2rem; /* Make card corners more rounded */
}
```
