# Number Counter Up

An animated number counter component that counts up from 0 to a target value. Uses a cubic ease-out easing function for smooth, natural-feeling animations. Large numbers are automatically formatted with commas.

## Features

- Smooth count-up animation with easing
- Automatic comma formatting for large numbers
- Click-to-replay on any counter
- Fully customizable via CSS custom properties
- Responsive card layout

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="counter-card" data-target="1520">
  <span class="counter" data-target="1520">0</span>
  <span class="counter-label">Downloads</span>
</div>
```

```js
const counter = document.querySelector('.counter');
animateCounter(counter);
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ncu-duration` | `2s` | Animation duration |
| `--ncu-number-color` | `#2ed573` | Counter number color |
| `--ncu-label-color` | `#6c757d` | Label text color |
| `--ncu-size` | `3rem` | Number font size |
| `--ncu-accent` | `#1e90ff` | Accent color |
