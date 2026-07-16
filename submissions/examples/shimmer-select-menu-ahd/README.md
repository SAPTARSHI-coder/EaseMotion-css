# Shimmer Select Menu

A responsive and accessible select menu component featuring a smooth shimmer animation, inspired by modern finance dashboard interfaces and built using pure HTML and CSS.

## Features

- Pure CSS shimmer animation
- Native semantic `<select>` element
- No JavaScript required
- Finance dashboard-inspired visual design
- Fully keyboard accessible
- Visible focus states
- Responsive across desktop and mobile screens
- Supports `prefers-reduced-motion`
- Uses reusable `ease-*` CSS variables and animation conventions

## How It Works

The component uses a native HTML `<select>` element for built-in accessibility and keyboard interaction.

A decorative shimmer layer moves across the select menu using the `ease-shimmer-select-sweep` CSS keyframe animation. The shimmer layer uses `pointer-events: none`, ensuring it never interferes with user interaction.

## Usage

```html
<div class="shimmer-select-wrapper">
  <select class="shimmer-select ease-shimmer-select">
    <option value="" selected disabled>Select asset type</option>
    <option value="stocks">Stocks</option>
    <option value="mutual-funds">Mutual Funds</option>
    <option value="etfs">ETFs</option>
    <option value="bonds">Bonds</option>
  </select>

  <span class="select-arrow" aria-hidden="true"></span>
  <span class="shimmer-effect" aria-hidden="true"></span>
</div>