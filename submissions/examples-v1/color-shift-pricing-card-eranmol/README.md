# Color Shift Pricing Card — Issue #41471

## What does it do?

A pricing card component with a smooth gradient color-shift effect on hover. The card reveals a subtle blue→purple gradient glow when hovered, creating a polished "Creative Agency" aesthetic. Pure CSS, zero JavaScript.

## How is it used?

```html
<div class="pricing-card">
  <div class="card-glow"></div>
  <div class="card-content">
    <span class="plan-name">Pro</span>
    <div class="price">
      <span class="currency">$</span>
      <span class="amount">12</span>
      <span class="period">/month</span>
    </div>
    <ul class="features">
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
    <button class="cta-btn">Get Started</button>
  </div>
</div>
```

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--card-bg` | `#1e293b` | Card background |
| `--card-border` | `#334155` | Border color |
| `--card-accent` | `#3b82f6` | Accent / CTA color |
| `--card-radius` | `16px` | Border radius |
| `--shift-speed` | `0.5s` | Color shift animation speed |

### Modifiers

- `.featured` — Scaled up with always-visible glow and "Most Popular" badge
- Default cards — Glow appears only on hover

## Why is it useful?

Pricing cards are among the most commonly needed UI elements. The color-shift variant provides a modern, polished aesthetic that works for SaaS, agency, and product landing pages — all in pure CSS with no dependencies.
