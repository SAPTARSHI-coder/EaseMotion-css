# Continuous Gradient Shimmer Border Panel

## Description
A rounded container panel with a continuously rotating gradient shimmer border effect, ideal for status indicators, premium UI components, and layout highlight points.

## Usage
Simply structure your panel using the wrapper and inner content divs:
```html
<div class="shimmer-panel-wrapper">
  <div class="shimmer-panel-content">
    <h3 class="shimmer-panel-title">Active Security Shield</h3>
    <p class="shimmer-panel-desc">Continuous real-time threat detection active.</p>
  </div>
</div>
```

## Why is it useful?
Delivers high-fidelity visuals using a lightweight conic-gradient transition. Avoids CPU load by relying on hardware-accelerated CSS rotations. Safely switches to a static gradient overlay when the user requests reduced motion layouts.
