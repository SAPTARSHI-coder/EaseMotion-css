# CSS Staggered Entrance Tooltip

Pure CSS animated tooltips with staggered entrance transitions, designed for E-Commerce Checkout layouts.

## What does it do?

Adds smooth, line-by-line staggered entrance animations to tooltip content. When a user hovers or focuses a checkout field, each tooltip line fades and slides in sequentially — creating a polished, modern interaction with zero JavaScript.

## Features

- **Staggered entrance** — Each tooltip line animates in with a configurable delay via `--tooltip-delay-step`
- **Pure CSS** — No JavaScript, no frameworks, no dependencies
- **Keyboard accessible** — Tooltips appear on `:focus` and `:focus-within` for keyboard navigation
- **Responsive** — Adapts to mobile viewports with adjusted positioning and text wrapping
- **Reduced motion support** — Respects `prefers-reduced-motion: reduce` for accessibility
- **Customizable** — 9 CSS custom properties control timing, easing, scale, colors, and spacing
- **E-Commerce styled** — Dark theme with subtle shadows, designed for checkout form contexts

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--tooltip-delay-step` | `80ms` | Delay between each line's entrance |
| `--tooltip-duration` | `300ms` | Duration of each line's animation |
| `--tooltip-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce-style easing curve |
| `--tooltip-scale-start` | `0.85` | Starting scale factor |
| `--tooltip-translate-y` | `6px` | Vertical offset before entrance |
| `--tooltip-bg` | `#1e293b` | Tooltip background colour |
| `--tooltip-color` | `#f1f5f9` | Tooltip text colour |
| `--tooltip-border-radius` | `8px` | Corner radius |
| `--tooltip-shadow` | `0 8px 24px rgba(0,0,0,0.25)` | Drop shadow |

## Usage

```html
<div class="checkout-field" tabindex="0">
  <label>Card Number</label>
  <input type="text" placeholder="1234 5678 9012 3456"
         aria-describedby="tooltip-card">
  <div class="stagger-tooltip" id="tooltip-card" role="tooltip">
    <div class="tooltip-item">Enter your 16-digit card number</div>
    <div class="tooltip-item">No spaces or dashes needed</div>
    <div class="tooltip-item">We never store your full card number</div>
  </div>
</div>
```

## How it works

1. `.stagger-tooltip` is hidden by default (`opacity: 0; visibility: hidden`)
2. On `:hover` or `:focus-within` of the parent `.checkout-field`, the tooltip becomes visible
3. Each `.tooltip-item` uses `nth-child` with `transition-delay` set via `calc(var(--tooltip-delay-step) * n)`
4. Items transition from `translateY(6px) scale(0.85)` to `translateY(0) scale(1)` with a bounce easing
5. When the tooltip hides, all delays reset to `0ms` for instant hide

## Browser Support

- Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- Uses CSS custom properties, `:focus-within`, and `calc()` — widely supported

## Tech Stack

- HTML + CSS only, no JavaScript
