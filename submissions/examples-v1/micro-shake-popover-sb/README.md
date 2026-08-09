#  Micro Shake Popover

A pure CSS animated popover with a smooth micro shake interaction transition, designed for Cyberpunk Neon interfaces.

## Features
- Pure CSS (no JavaScript required)
- Micro shake animation on hover/focus
- Cyberpunk neon aesthetic (cyan glow, dark background)
- 4 positions: top, bottom, left, right
- Custom CSS properties for timing, easing, shake intensity, and scale
- Keyboard accessible (focus management)
- Fully responsive

## Custom CSS Properties
- `--ease-popover-timing: 0.3s`
- `--ease-popover-easing: cubic-bezier(0.34, 1.56, 0.64, 1)`
- `--ease-popover-shake-intensity: 4px`
- `--ease-popover-scale: 1.02`

## Usage
```html
<div class="ease-neon-card" tabindex="0">
    <h3>Neon Pulse</h3>
    <div class="ease-popover ease-popover-top">
        <div class="ease-popover-content">
            <h4>Neon Pulse Status</h4>
            <ul>
                <li>Frequency: 2.4 GHz</li>
                <li>Amplitude: 85%</li>
            </ul>
        </div>
    </div>
</div>