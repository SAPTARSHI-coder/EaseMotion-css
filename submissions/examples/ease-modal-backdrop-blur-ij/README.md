# Modal Backdrop Blur

A CSS modal component with a blurred backdrop overlay and scaled content entrance animation.

## Features

- Backdrop blur via `backdrop-filter`
- Content scales from 0.8 to 1 on open
- Smooth opacity transitions
- Escape key and click-outside-to-close
- Multiple independent modal instances

## Usage

Include the stylesheet and the markup:

```html
<link rel="stylesheet" href="style.css">

<div class="modal-overlay" id="my-modal">
  <div class="modal-content">
    <button class="modal-close" data-close>&times;</button>
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
  </div>
</div>
```

Open the modal by adding the `active` class to the overlay:

```js
document.getElementById('my-modal').classList.add('active');
```

## CSS Custom Properties

| Property                  | Default  | Description                    |
| ------------------------- | -------- | ------------------------------ |
| `--modal-duration`        | `0.3s`   | Transition duration            |
| `--modal-backdrop-blur`   | `8px`    | Backdrop blur radius           |
| `--modal-bg`              | `rgba(0,0,0,0.5)` | Backdrop background  |
| `--modal-content-bg`      | `#fff`   | Modal content background       |
| `--modal-border-radius`   | `12px`   | Modal content border radius    |
| `--modal-max-width`       | `480px`  | Maximum width of modal content |

## Browser Support

- Chrome / Edge 76+
- Firefox 103+
- Safari 9+
- Opera 64+

## License

MIT
