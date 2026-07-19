# 🔍 Zoom-In Popover

A pure CSS animated popover with a smooth zoom-in interaction transition, designed for responsive dashboard interfaces.

## Features
- Pure CSS (no JavaScript required)
- Zoom-in animation on hover/focus (scale from 0.7 to 1.0)
- 4 positions: top, bottom, left, right
- Custom CSS properties for timing, easing, and scale
- Keyboard accessible (focus management)
- Fully responsive
- Dashboard-style card layout

## Custom CSS Properties
- `--ease-popover-timing: 0.3s`
- `--ease-popover-easing: cubic-bezier(0.34, 1.56, 0.64, 1)`
- `--ease-popover-scale-start: 0.7`
- `--ease-popover-scale-end: 1`

## Usage
```html
<div class="ease-card" tabindex="0">
    <div class="ease-card-icon">📈</div>
    <h3>Sales</h3>
    <div class="ease-popover ease-popover-top">
        <div class="ease-popover-content">
            <h4>Sales Overview</h4>
            <ul>
                <li>Today: $1,230</li>
                <li>This Week: $8,450</li>
            </ul>
        </div>
    </div>
</div>