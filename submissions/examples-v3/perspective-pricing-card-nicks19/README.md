# Perspective Pricing Card (SaaS Dashboard)

A high-end, interactive pricing card component featuring pure CSS 3D perspective transformations and a continuous floating animation, inspired by modern SaaS dashboards.

## Features

- **Pure CSS 3D Effect**: Uses `perspective` and `transform-style: preserve-3d` to create a spatial rotation on hover, completely without JavaScript.
- **Dynamic Floating**: Applies a subtle infinite `translateY` animation to give the card a feeling of weightlessness until interacted with.
- **Z-Axis Popping**: Child elements (like the text and button) are shifted along the Z-axis (`translateZ`) to literally pop out of the card during the 3D rotation, creating a stunning parallax effect.
- **SaaS Aesthetics**: Clean layout with crisp typography, prominent pricing typography, and a modern primary accent color.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`, ensuring the `.ease-pricing-card` is nested immediately inside the `.ease-perspective-wrapper`.

## Usage Example

```html
<!-- Wrapper establishes the 3D perspective viewport -->
<div class="ease-perspective-wrapper">
  
  <!-- The card itself handles the rotation -->
  <div class="ease-pricing-card">
    
    <div class="ease-card-badge">Most Popular</div>
    
    <div class="ease-card-header">
      <h2 class="ease-plan-name">Pro Team</h2>
      <p class="ease-plan-desc">For scaling startups</p>
    </div>
    
    <div class="ease-card-price">
      <span class="ease-currency">$</span><span class="ease-amount">49</span><span class="ease-period">/mo</span>
    </div>
    
    <!-- ... features list and CTA button ... -->
    
  </div>
</div>
```

## Why it fits EaseMotion CSS

- **Spatial Mechanics**: Moving beyond flat 2D interactions, this component introduces developers to powerful CSS 3D transforms (`rotateX`, `rotateY`, `translateZ`).
- **Physics-based Interpolation**: Uses the EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve to snap the card into its tilted perspective on hover, giving it a premium, responsive feel.
- **State Composition**: Demonstrates how to elegantly pause an infinite animation (`animation-play-state: paused`) while gracefully transitioning into a hover state.
