# CSS Shimmer-Sweep Card Grid for Fintech Dashboard Layouts

## Description
Fixes #59281 — a pure CSS stats card grid with a diagonal shimmer-sweep
highlight that loops across each card, designed for fintech dashboard
summary sections (balances, spend, investments, credit score, etc).

## Usage
```html
<div class="ease-shimmer-grid">
  <div class="ease-shimmer-grid__card">
    <p class="ease-shimmer-grid__label">Total Balance</p>
    <p class="ease-shimmer-grid__value">$48,210.55</p>
    <p class="ease-shimmer-grid__delta ease-shimmer-grid__delta--up">▲ 3.2% this month</p>
  </div>
  <!-- repeat for each stat -->
</div>
```

Use `ease-shimmer-grid__delta--up` or `--down` on the delta line to color
it green or red.

## Custom Properties
This component relies on neutral grayscale tokens and a translucent
white gradient for the sweep, so it needs no `--ease-color-primary`
override — it's designed to sit correctly on any accent color.

## Features
- Pure CSS/HTML — no JavaScript required
- Continuous diagonal shimmer sweep per card, staggered via `nth-child`
  delays so cards don't all shimmer in sync
- 3-column responsive grid, collapsing to 2 columns below 900px and
  1 column below 560px
- Up/down delta indicator classes for quick trend styling
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — disables the shimmer
  sweep entirely, cards render as static tiles

## Testing
Open `demo.html` in a browser and watch the shimmer loop across each
card. Resize the window to check the 3 → 2 → 1 column responsive
breakpoints, and toggle your OS "reduce motion" setting to verify the
fallback.