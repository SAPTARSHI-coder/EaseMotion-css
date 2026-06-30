# ease-pricing-card

## What does this do?

Provides a reusable pricing table / tier card component with featured "popular" variant, monthly/annual billing toggle, checkmark/cross feature indicators, and a responsive auto-fill grid layout.

## How is it used?

**Basic card:**

```html
<div class="ease-pricing-grid">
  <div class="ease-pricing-card">
    <h3 class="ease-pricing-plan">Starter</h3>
    <div class="ease-pricing-price">
      <span class="ease-pricing-amount">$9</span>
      <span class="ease-pricing-period">/month</span>
    </div>
    <ul class="ease-pricing-features">
      <li class="ease-pricing-feature ease-pricing-feature--included">
        5 Projects
      </li>
      <li class="ease-pricing-feature ease-pricing-feature--excluded">
        API Access
      </li>
    </ul>
    <button class="ease-pricing-cta">Get Started</button>
  </div>
</div>
```

**Popular card:**

```html
<div class="ease-pricing-card ease-pricing-card--popular">
  <span class="ease-pricing-badge">Most Popular</span>
  <!-- ... -->
</div>
```

### Billing Toggle

```html
<div class="ease-pricing-billing-toggle">
  <label
    ><input type="radio" name="billing" value="monthly" checked />
    Monthly</label
  >
  <label><input type="radio" name="billing" value="annual" /> Annual</label>
</div>
```

Use the companion script to swap `data-monthly` / `data-annual` values on the amount and period elements.

### Variants

| Class                             | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `.ease-pricing-card`              | Standard card with border, shadow, hover lift        |
| `.ease-pricing-card--popular`     | Highlighted card with accent border, scale-up, badge |
| `.ease-pricing-cta--outline`      | Outline variant for the CTA button                   |
| `.ease-pricing-feature--included` | Green checkmark indicator                            |
| `.ease-pricing-feature--excluded` | Red cross indicator                                  |
| `.ease-pricing-grid`              | Responsive auto-fill grid container                  |

## Why is it useful?

Pricing sections are a universal website pattern. This component provides a consistent, accessible, and customizable pricing card system that integrates with EaseMotion's existing card and button patterns. The auto-fill grid and CSS custom properties make it adaptable to any color scheme and layout context.

## CSS Custom Properties

| Property    | Default   | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `--paccent` | `#6c63ff` | Accent color for popular card, toggles, and CTA |
| `--pradius` | `1rem`    | Card border radius                              |
| `--pgap`    | `1.5rem`  | Gap between cards in grid                       |

## Features

- Three tiers: Starter, Pro (popular), Enterprise
- Featured/popular variant with badge, scaled card, accent border
- Monthly/annual billing toggle (CSS toggle + light JS for price swap)
- Feature list with included (✓) and excluded (✕) indicators
- Outline and filled CTA button variants
- Hover lift animation (respects `prefers-reduced-motion`)
- Dark mode support via `prefers-color-scheme`
- Customizable accent color via `--paccent`
- Responsive auto-fill grid, single column on mobile
