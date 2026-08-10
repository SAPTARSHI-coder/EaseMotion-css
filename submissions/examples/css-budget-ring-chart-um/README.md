# CSS Budget Ring Chart

## 1. What does this do?
This component renders an interactive monthly budget allocation donut/ring chart using SVG and pure CSS, showing category legend highlights and center value shifts upon hover or focus.

## 2. How is it used?
Configure interactive SVG segments alongside the center metadata displays and legend lists:
```html
<div class="chart-visual-wrapper">
  <svg class="ring-svg" viewBox="0 0 100 100">
    <!-- Circle segments with tab navigation support -->
    <circle class="ring-segment housing" cx="50" cy="50" r="40" tabindex="0"></circle>
  </svg>

  <div class="chart-center-details">
    <div class="default-details">Total: $5,000</div>
    <div class="h-details">Housing: $2,000</div>
  </div>
</div>
```

## 3. Why is it useful?
It demonstrates clean SVG path drawing, keyboard-navigable chart segments, and active state mapping using the CSS `:has()` selector, providing responsive and lightweight dashboard layouts without JavaScript.
