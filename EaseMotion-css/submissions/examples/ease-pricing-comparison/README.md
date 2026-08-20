# Pricing Comparison Table — EaseMotion CSS

A responsive pricing comparison table with monthly/yearly billing toggle, featured plan highlight, feature comparison, and CTA buttons.

## Features

- **3 pricing tiers**: Free ($0), Pro ($19/mo or $15/yr), Enterprise (Custom)
- **Monthly / Yearly billing toggle** with "Save 20%" label
- **Featured plan** with "Most Popular" badge and accent border
- **Feature comparison** with checkmark and cross icons
- **CTA buttons** in primary, outline, and ghost styles
- **Hover lift** animation on cards
- **Responsive grid** — stacks vertically on narrow screens
- **Dark theme** — matches EaseMotion CSS design system

## Usage

Open `demo.html` in a browser. Toggle between Monthly and Yearly billing to see prices update.

## File Structure

```
ease-pricing-comparison/
├── demo.html       — Main demo page
├── style.css       — Component styling
└── README.md       — This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-pricing-table` | Grid container for plan cards |
| `.ease-pricing-card` | Individual pricing plan card |
| `.ease-pricing-card.featured` | Highlighted recommended plan |
| `.ease-plan-badge` | "Most Popular" badge |
| `.ease-plan-name` | Plan title |
| `.ease-plan-price` | Price display container |
| `.price-amount` | Price number (has data-monthly / data-yearly) |
| `.price-period` | "/month" or "/year" label |
| `.ease-plan-desc` | Plan description |
| `.ease-plan-features` | Feature list with check/cross icons |
| `.ease-plan-btn` | CTA button (variants: `-primary`, `-outline`, `-ghost`) |
