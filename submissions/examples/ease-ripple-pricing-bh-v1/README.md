# ease-ripple-pricing Ripple-Wave Pricing Table

## What does this do?

A pricing table component with ripple-wave animation effects on hover, designed for fintech dashboard layouts. Features smooth concentric wave animations that emanate from user interaction points.

## How is it used?

```html
<div class="ease-ripple-pricing">
  <div class="ease-ripple-card">
    <div class="plan-header">
      <h3>Basic</h3>
      <span class="price">$9</span>
    </div>
    <ul class="features">
      <li>5 Projects</li>
      <li>Basic Support</li>
    </ul>
    <button class="ease-ripple-btn">Get Started</button>
  </div>
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-ripple-pricing` | Container for pricing cards |
| `.ease-ripple-card` | Individual pricing card |
| `.ease-ripple-btn` | CTA button with ripple effect |
| `.ease-ripple-featured` | Highlighted featured plan |

## Why is it useful?

Creates an engaging pricing table with subtle ripple animations:

- ✅ CSS-only ripple animations
- ✅ Multiple plan tiers
- ✅ Featured plan highlighting
- ✅ Responsive layout
- ✅ Accessible with prefers-reduced-motion
