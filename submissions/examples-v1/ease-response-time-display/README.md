# Ease Response Time Display

A pure CSS component that visualizes API/service response times as animated cards with a status badge, numeric value, and a filling progress bar.

## Features
- Pure CSS animations — no JavaScript required
- Three status states: `fast`, `medium`, `slow` (via `data-status` attribute)
- Staggered entrance animation for multiple cards
- Pulsing badge animation for medium/slow states to draw attention
- Animated bar fill driven by a `--fill` CSS custom property

## Usage
```html
<div class="ease-rtd-card" data-status="fast">
  <div class="ease-rtd-header">
    <span class="ease-rtd-label">API Response</span>
    <span class="ease-rtd-badge">FAST</span>
  </div>
  <div class="ease-rtd-value">
    <span class="ease-rtd-number">128</span>
    <span class="ease-rtd-unit">ms</span>
  </div>
  <div class="ease-rtd-bar">
    <div class="ease-rtd-bar-fill" style="--fill: 20%;"></div>
  </div>
</div>
```

## Customization
- Change `data-status` to `fast`, `medium`, or `slow` to switch color themes.
- Set `--fill` inline (e.g. `style="--fill: 75%;"`) to control the bar length.
- Adjust `.ease-rtd-card` width or `.ease-rtd-container` gap for layout needs.