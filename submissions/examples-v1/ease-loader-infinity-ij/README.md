# Infinity Loader

Closes #13669

An SVG infinity symbol loader with a continuous stroke-dashoffset animation. Uses a single `<path>` with a clean infinity curve and CSS `stroke-dasharray` / `stroke-dashoffset` keyframes.

## Usage

```html
<div class="ease-loader-infinity">
  <svg viewBox="0 0 200 100">
    <path
      d="M50 50 C50 20, 90 20, 100 50 C110 80, 150 80, 150 50 C150 20, 110 20, 100 50 C90 80, 50 80, 50 50Z"
    />
  </svg>
</div>
```

## CSS Custom Properties

| Variable              | Default   | Description           |
| --------------------- | --------- | --------------------- |
| `--ease-loader-color` | `#3b82f6` | Infinity stroke color |
| `--ease-loader-size`  | `120px`   | Width of the loader   |
