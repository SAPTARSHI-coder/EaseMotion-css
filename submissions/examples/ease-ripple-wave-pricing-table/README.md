# Ease Ripple-Wave Pricing Table

## Description
A pricing table styled for creative portfolio sites, where hovering a card sends continuous concentric ripple rings outward — like waves on water — from a fixed origin point, and clicking triggers a one-shot expanding ripple burst. Bold gradient-text pricing and asymmetric card elevation give it a distinct portfolio feel. Pure CSS, zero JavaScript.

## Features
- Continuous ripple-wave rings emanate from a corner while hovering a card, staggered for a natural water-wave feel
- One-shot expanding ripple burst on click (`:active`), approximated from the card's center since pure CSS can't read cursor position
- Asymmetric card elevation (middle card sits higher) for a more editorial/creative layout feel
- Gradient-text pricing and CTA buttons
- Fully keyboard accessible (`role="list"`/`"listitem"`, real `<a>` CTAs with `:focus-visible`)
- Fully responsive (cards stack full-width, elevation offset removed, on narrow viewports)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-ripple-pricing" role="list" aria-label="Pricing tiers">
  <div class="pricing-card" role="listitem">
    <div class="ripple-wave"><span></span><span></span><span></span></div>
    <div class="card-inner">
      <p class="plan-eyebrow">Basic Package</p>
      <h3 class="plan-name">Freelance</h3>
      <div class="plan-price">
        <span class="amount">$499</span>
        <span class="period">/ project</span>
      </div>
      <ul class="plan-features">
        <li><svg>...</svg>Feature one</li>
      </ul>
      <a href="#" class="plan-cta">Get Started</a>
    </div>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--ripple-duration` | `1.2s` | Ripple wave cycle duration |
| `--ripple-color` | `rgba(56, 189, 248, 0.35)` | Ripple ring/burst color |
| `--accent` / `--accent-2` | `#38bdf8` / `#a78bfa` | Gradient endpoints for price text and CTA |
| `--radius` | `20px` | Card corner rounding |
| `--card-bg` | `#14141c` | Card background |

## Accessibility
Uses `role="list"`/`role="listitem"` semantics with real `<a>` CTA elements (not clickable `<div>`s) and visible `:focus-visible` outlines. Respects `prefers-reduced-motion` by fully disabling the ripple-wave and click-burst animations while keeping card hover elevation as a static visual cue.

## Files
- `demo.html` — live working example with 3 portfolio pricing tiers
- `style.css` — component styles and all ripple animations
- `README.md` — this file