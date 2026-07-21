# Pricing Table Component — EaseMotion CSS

**Issue:** [#30310 — Add Pricing Table component with feature comparison layout](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30310)

A responsive pricing table grid with feature lists, highlighted/recommended tier, call-to-action buttons, and hover lift animation.

## Structure

```
submissions/docs/core_changes-issue-30310/
├── demo.html       # Demo showing 3-tier and 2-column pricing layouts
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-pricing` | CSS Grid container (`auto-fit`, `minmax(280px, 1fr)`) |
| `.ease-pricing-card` | Individual pricing column |
| `.ease-pricing-card--featured` | Highlighted/recommended tier (distinct border, scale, shadow) |
| `.ease-pricing-badge` | Floating badge on featured card (e.g. "Popular") |
| `.ease-pricing-header` | Name, price, and description container |
| `.ease-pricing-name` | Tier name |
| `.ease-pricing-price` | Price with optional `/mo` span |
| `.ease-pricing-desc` | Description text |
| `.ease-pricing-features` | Feature `<ul>` list |
| `.ease-pricing-feature--included` | Checkmark (✓) indicator |
| `.ease-pricing-feature--excluded` | Cross (✗) indicator |
| `.ease-pricing-cta` | Call-to-action button area |

## Features

- **Responsive grid:** Default `repeat(auto-fit, minmax(280px, 1fr))`, overridable via `style="grid-template-columns:..."`)
- **Featured tier:** Blue border, slight scale(1.03), elevated shadow, floating "Popular" badge
- **Hover lift:** Cards translate -4px on hover with smooth box-shadow transition
- **Feature indicators:** CSS `::before` with checkmark (✓) for included, cross (✗) for excluded
- **Mobile:** Stacks to single column on small screens; featured card scaling disabled
- **Reduced motion:** Hover transitions disabled when `prefers-reduced-motion: reduce`
- **Customizable:** All colors via `--ease-color-*` and spacing via `--ease-spacing-*` variables
