# Circular Progress Indicator Component

## 1. What does this do?
This component renders lightweight circular progress bars using SVG `stroke-dashoffset` path-drawing transitions, completely animated via pure CSS keyframes on load.

## 2. How is it used?
Structure your HTML using the container wrapper, which holds the target SVG and text labels:

```html
<div class="ease-progress-circle-container" style="--ease-progress-value: 75; --ease-progress-size: 120px; --ease-progress-color: #6c63ff;">
  <svg class="ease-progress-circle" viewBox="0 0 100 100">
    <circle class="ease-progress-circle__bg" cx="50" cy="50" r="40" />
    <circle class="ease-progress-circle__fill" cx="50" cy="50" r="40" />
  </svg>
  <div class="ease-progress-circle__label">
    <span class="ease-progress-circle__percentage">75%</span>
  </div>
</div>
```

### Configurable CSS Variables
- `--ease-progress-value`: Progress value from `0` to `100` (e.g., `75`).
- `--ease-progress-size`: Inner/outer diameter of the circle (defaults to `120px`).
- `--ease-progress-color`: Stroke color of the fill ring.
- `--ease-progress-stroke`: Width of the indicator stroke (defaults to `8`).

### Modifiers/Variants
- `.ease-progress-circle--glow`: Adds an HSL-colored shadow glow filter to the indicator.
- `.ease-progress-circle--thin`: Configures a thin stroke-width of `4` for minimalist pages.
- `.ease-progress-circle--thick`: Configures a bold stroke-width of `12` for heavy emphasis.

---

## 3. Why is it useful?
Circular progress indicators are highly visual components widely used in dashboards, dashboards, metrics widgets, and system dashboards. Because it utilizes pure CSS and SVG variables, it avoids loading rendering-heavy JavaScript frameworks, making it lightweight and fast to load.
