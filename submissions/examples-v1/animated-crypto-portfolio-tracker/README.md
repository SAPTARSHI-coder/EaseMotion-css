# Animated Crypto Portfolio Tracker

A responsive Animated Crypto Portfolio Tracker component that displays cryptocurrency holdings, portfolio performance, asset allocation segments, and daily profit/loss metrics through a modern, glassmorphic fintech console.

## Usage

To use this component in your project, include the styles from `style.css` and use the following HTML structure:

```html
<!-- Hidden currency radio triggers -->
<input
  type="radio"
  id="acpt-toggle-usd"
  name="acpt-currency"
  class="acpt-currency-radio"
  checked
/>
<input
  type="radio"
  id="acpt-toggle-btc"
  name="acpt-currency"
  class="acpt-currency-radio"
/>

<div class="acpt-dashboard">
  <!-- Header with toggles -->
  <header class="acpt-header">
    <h2 class="acpt-title">Fintech Asset Console</h2>
    <div class="acpt-toggle-control">
      <label for="acpt-toggle-usd" class="acpt-toggle-btn acpt-toggle-btn--usd"
        >USD</label
      >
      <label for="acpt-toggle-btc" class="acpt-toggle-btn acpt-toggle-btn--btc"
        >BTC</label
      >
      <span class="acpt-toggle-slider" aria-hidden="true"></span>
    </div>
  </header>

  <div class="acpt-grid">
    <div class="acpt-left-col">
      <!-- Total Value Card (USD & BTC) -->
      <div class="acpt-panel acpt-val-panel">
        <div class="acpt-total-value">
          <span class="acpt-val-usd">$48,256.40</span>
          <span class="acpt-val-btc">0.7725 BTC</span>
        </div>
      </div>
      <!-- SVG Performance Line Graph -->
      <div class="acpt-panel">
        <svg class="acpt-chart-svg" viewBox="0 0 320 120">
          <path class="acpt-chart-line" d="..." />
          <path class="acpt-chart-area" d="..." />
        </svg>
      </div>
    </div>
    ...
  </div>
</div>
```

## Philosophy & Usefulness

This component aligns with EaseMotion CSS because it:

- **Prioritizes CSS-only interactions**: Employs radio selectors to switch between USD and BTC currency views instantly without JavaScript.
- **Showcases animation-first design**: Features a self-drawing SVG line path chart, horizontal stacked allocation bars expanding on load, and pulsing active gain indicators.
- **Includes accessibility out of the box**: Supports tab indexing on asset cards, focus visible rings on triggers, and stops all visual animations for `prefers-reduced-motion: reduce`.
