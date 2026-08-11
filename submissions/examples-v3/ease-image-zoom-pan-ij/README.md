# Image Zoom Pan

An image container where the image zooms in and follows the cursor position using CSS `transform: scale` and `translate`.

## Usage

Include `style.css` and the container markup:

```html
<div class="izp-container" id="izpContainer">
  <div class="izp-image" id="izpImage">
    <img src="..." alt="" />
  </div>
</div>
```

JavaScript tracks mouse position and sets `--izp-x` and `--izp-y`:

```js
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  image.style.setProperty('--izp-x', x);
  image.style.setProperty('--izp-y', y);
});
```

## CSS Variables

| Variable                      | Default  | Description             |
|-------------------------------|----------|-------------------------|
| `--izp-max-scale`             | `2.5`    | Maximum zoom level      |
| `--izp-transition-duration`   | `0.15s`  | Zoom/pan animation speed|
| `--izp-bg-color`              | `#f3f4f6`| Container background    |

## How it works

- The image uses `scale(var(--izp-max-scale))` for zoom
- `translate()` uses `(50 - var(--izp-x))` and `(50 - var(--izp-y))` to shift the focal point under the cursor
- On mouse leave, position resets to center (50%, 50%)

## Browser Support

All modern browsers supporting CSS custom properties and 2D transforms.
