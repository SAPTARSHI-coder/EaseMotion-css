# 🎯 Wobble-Focus Popover

A pure CSS animated popover with a smooth wobble-focus interaction transition, designed for dashboard analytics interfaces.

## Features
- Pure CSS (no JavaScript required)
- Wobble-focus animation on hover/focus
- Keyboard accessible (focus management)
- Fully responsive
- 4 positions: top, bottom, left, right
- Customizable via CSS variables:
  - `--ease-popover-timing: 0.4s`
  - `--ease-popover-easing: cubic-bezier(0.34, 1.56, 0.64, 1)`
  - `--ease-popover-scale: 1.05`
  - `--ease-popover-wobble: 8deg`

## Usage
```html
<div class="ease-card" tabindex="0">
    <h3>Analytics</h3>
    <div class="ease-popover ease-popover-top">
        <div class="ease-popover-content">
            <h4>Analytics Overview</h4>
            <ul>
                <li>Total Views: 12,847</li>
                <li>Unique Visitors: 8,234</li>
            </ul>
        </div>
    </div>
</div>