# ease-pricing-card-hover

A reusable pricing card component with smooth hover animations, gradient accents, feature checklists, a "Popular" badge, and an animated CTA button. Pure CSS, zero dependencies.

## Features

- Card lift + scale on hover with soft purple-blue glow shadow
- Gradient overlay fade-in on hover
- Price amount subtly scales and tints on hover
- Animated checkmark feature list with hover color shift
- Featured/Popular ribbon badge
- CTA button with animated gradient sweep on hover and press feedback
- Fully responsive (stacks on smaller screens)

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-pricing-card` markup structure from `demo.html`.
3. Add `.ease-pricing-card--featured` and an `.ease-badge` span for a highlighted plan.

```html
<div class="ease-pricing-card">
  <p class="ease-plan-name">Basic</p>
  <div class="ease-price">
    <span class="ease-price__amount">$9</span>
    <span class="ease-price__period">/ month</span>
  </div>
  <ul class="ease-feature-list">
    <li>Feature one</li>
  </ul>
  <button class="ease-cta-button">Get Started</button>
</div>