# Pricing Card Switch

Pricing cards component with a monthly/yearly toggle switch. Prices animate between values using a vertical slide number effect. Selected card scales up with a highlighted border and checkmark animations.

## Features

- Monthly/Yearly toggle with smooth knob transition
- Animated price transitions between billing periods
- Card scale and border highlight on selection
- Checkmark icon fill animation on selected card
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pcs-duration` | `0.3s` | Transition duration |
| `--pcs-card-bg` | `#ffffff` | Card background color |
| `--pcs-selected-color` | `#6366f1` | Selected/accent color |
| `--pcs-toggle-bg` | `#e0e7ff` | Toggle background color |
| `--pcs-radius` | `16px` | Card border radius |
| `--pcs-shadow` | `0 4px 24px rgba(0,0,0,0.08)` | Card box shadow |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include demo.html markup -->
<script src="script.js"></script>
```

Customize the theme by overriding the CSS custom properties:

```css
:root {
  --pcs-selected-color: #f59e0b;
  --pcs-duration: 0.5s;
}
```
