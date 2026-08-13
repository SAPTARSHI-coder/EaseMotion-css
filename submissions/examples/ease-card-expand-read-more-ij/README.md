# Card Expand Read More

A card component with truncated text that expands on button click using max-height transitions.

## Usage

Include `style.css` and add the following HTML:

```html
<div class="cer-card" id="cerCard">
  <div class="cer-content">...</div>
  <button class="cer-btn">Read More</button>
</div>
```

JavaScript toggles the `.cer-expanded` class:

```js
document.getElementById('cerBtn').addEventListener('click', () => {
  document.getElementById('cerCard').classList.toggle('cer-expanded');
});
```

## CSS Variables

| Variable                      | Default  | Description           |
|-------------------------------|----------|-----------------------|
| `--cer-transition-duration`   | `0.4s`   | Expand/collapse speed |
| `--cer-collapsed-height`      | `120px`  | Collapsed content height |
| `--cer-bg-color`              | `#ffffff`| Card background       |
| `--cer-accent-color`          | `#6366f1`| Button accent color   |

## Browser Support

All modern browsers supporting CSS custom properties and `max-height` transitions.
