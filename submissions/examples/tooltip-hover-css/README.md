# Tooltip Hover — CSS Only

Pure CSS tooltip system using `::before` and `::after` pseudo-elements. Hover-triggered with smooth fade animation.

## Features

- Four positions: top, bottom, left, right
- Arrow indicators built with CSS borders
- Fade + slide transition on hover
- Color variants: default, primary, success, warning, error
- Self-contained, no JavaScript required

## Usage

Wrap any element with `.tooltip-trigger`, add a `data-tip` attribute, and optionally toggle position/color classes:

```html
<div class="tooltip-trigger tooltip-bottom tooltip-primary" data-tip="Hello!">
  <button>Hover me</button>
</div>
```
