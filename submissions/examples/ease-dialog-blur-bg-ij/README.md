# Dialog Blur BG

A CSS modal dialog with a blurred backdrop overlay and scaled content entrance animation.

## Features

- Backdrop blur via `backdrop-filter`
- Content scales from 0.85 to 1 on open
- Smooth opacity and visibility transitions
- Escape key and click-outside-to-close
- Multiple independent dialog instances

## Usage

Include the stylesheet and markup:

```html
<link rel="stylesheet" href="style.css">

<div class="dialog-overlay" id="my-dialog">
  <div class="dialog-content">
    <button class="dialog-close" data-close>&times;</button>
    <h2>Title</h2>
    <p>Content here.</p>
  </div>
</div>
```

Open by adding the `active` class:

```js
document.getElementById('my-dialog').classList.add('active');
```

## CSS Custom Properties

| Property                  | Default        | Description                 |
|---------------------------|----------------|-----------------------------|
| `--dialog-duration`       | `0.35s`        | Transition duration          |
| `--dialog-blur-amount`    | `10px`         | Backdrop blur radius         |
| `--dialog-overlay-color`  | `rgba(0,0,0,0.55)` | Overlay background     |
| `--dialog-bg`             | `#ffffff`      | Dialog background            |
| `--dialog-text-color`     | `#111111`      | Dialog text color            |
| `--dialog-radius`         | `14px`         | Dialog border radius         |

## Browser Support

- Chrome / Edge 76+
- Firefox 103+
- Safari 9+
- Opera 64+

## License

MIT
