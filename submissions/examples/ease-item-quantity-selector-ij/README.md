# Item Quantity Selector

A quantity selector component with animated number transitions, min/max limits, and disabled states.

## Overview

Each product row has a compact quantity selector with minus and plus buttons. The displayed number animates with a vertical slide transition between values. Buttons are disabled when the value hits the minimum or maximum limit.

## Features

| Feature | Description |
|---|---|
| Number slide animation | Value slides up/down using `translateY` for a rolling digit effect |
| Min/max limits | Configurable range prevents invalid values |
| Disabled state | Buttons visually disable at boundaries with reduced opacity |
| Multiple instances | Three product rows operate independently |
| Accessible | ARIA labels and live region for screen reader updates |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--iqs-duration` | `0.25s` | Duration of the number slide animation |
| `--iqs-btn-bg` | `#f1f5f9` | Button background color |
| `--iqs-btn-color` | `#1e293b` | Button text/icon color |
| `--iqs-disabled-color` | `#cbd5e1` | Button color when disabled |
| `--iqs-input-bg` | `#ffffff` | Display area background |
| `--iqs-radius` | `0.5rem` | Selector border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="quantity-selector" data-min="0" data-max="10" data-value="0">
  <button class="qty-btn qty-minus" disabled>&minus;</button>
  <div class="qty-display">
    <span class="qty-number active">0</span>
  </div>
  <button class="qty-btn qty-plus">+</button>
</div>

<script>
  // The JavaScript manages value changes, button states, and slide animations
  // via data-* attributes for configuration
</script>
```

Set `data-min`, `data-max`, and `data-value` attributes on `.quantity-selector` to configure each instance. The JavaScript handles all interactions and animations automatically.
