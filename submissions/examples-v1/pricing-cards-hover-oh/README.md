# Component: Interactive Pricing Cards

This submission implements the Interactive Pricing Cards for issue **#47325**.

## Description

Pricing cards with hover animations and 3D tilt effects.

## Features

- **3D Hover Effect**: Card lifts and tilts on hover
- **Featured Card**: Highlighted popular plan
- **Badge Animation**: Popular badge on featured card
- **Button Transitions**: Color and scale on hover
- **Responsive Grid**: Adapts to screen size

## Usage

```html
<div class="pricing-card">
  <h3>Plan Name</h3>
  <div class="price">$29<span>/mo</span></div>
  <ul class="features">
    <li>✓ Feature 1</li>
  </ul>
  <button class="plan-btn">Get Started</button>
</div>
```

## Featured Card

```html
<div class="pricing-card featured">
  <div class="badge">Popular</div>
  ...
</div>
```

## CSS

```css
.pricing-card:hover {
  transform: translateY(-10px) rotateX(5deg);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}
```

## Acceptance Criteria

- ✅ 3D hover tilt animation
- ✅ Featured card variant
- ✅ Popular badge
- ✅ Button hover effects
- ✅ README.md included
