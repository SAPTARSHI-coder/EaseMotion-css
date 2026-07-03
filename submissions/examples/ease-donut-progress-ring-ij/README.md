# Donut Progress Ring

A circular / donut progress ring using SVG `stroke-dashoffset` animation. Shows percentage in the center and supports interactive value changes.

## Features

- SVG circle with `stroke-dasharray` / `stroke-dashoffset` animation
- Animated progress transitions with cubic-bezier easing
- Percentage displayed in center
- Slider, preset buttons, and replay functionality
- Customizable via CSS custom properties

## Usage

Include the stylesheet and markup:

```html
<link rel="stylesheet" href="style.css">

<div class="dpr-ring">
  <svg viewBox="0 0 140 140" class="dpr-svg">
    <circle cx="70" cy="70" r="58" class="dpr-track" />
    <circle cx="70" cy="70" r="58" class="dpr-fill" />
  </svg>
  <span class="dpr-text">0%</span>
</div>
```

Update progress via JS:

```js
const fill = document.querySelector('.dpr-fill');
const r = 58;
const c = 2 * Math.PI * r;
fill.style.strokeDasharray = c;
fill.style.strokeDashoffset = c - (percent / 100) * c;
```

## CSS Custom Properties

| Property               | Default    | Description                |
|------------------------|------------|----------------------------|
| `--ring-duration`      | `0.6s`     | Transition duration        |
| `--ring-size`          | `160px`    | Ring container size        |
| `--ring-stroke-width`  | `8`        | SVG stroke width           |
| `--ring-color`         | `#6366f1`  | Progress stroke color      |
| `--ring-track-color`   | `#e0e0e0`  | Track stroke color         |
| `--ring-font-size`     | `2rem`     | Center percentage font size|

## Browser Support

- Chrome / Edge 76+
- Firefox 103+
- Safari 9+
- Opera 64+

## License

MIT
