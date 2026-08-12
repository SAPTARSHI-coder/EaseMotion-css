# Divider Line Grow

Horizontal divider/ruler lines that animate from zero width to full width from the center. Click a divider or use the "Animate All" button to trigger growth.

## Features

- Five divider styles: solid, dashed, dotted, gradient, double
- Click any divider to toggle its animation
- "Animate All" and "Reset" buttons
- Smooth `scaleX` transition with spring-like easing
- Customizable via CSS custom properties

## Usage

Include the stylesheet and add a `hr` with the base class and a style class:

```html
<link rel="stylesheet" href="style.css">

<hr class="dlg-divider dlg-solid" data-animated="false">
```

Add `dlg-animated` class to trigger the grow animation:

```js
document.querySelector('.dlg-divider').classList.add('dlg-animated');
```

### Style Classes

| Class          | Description       |
|----------------|-------------------|
| `dlg-solid`    | Solid line        |
| `dlg-dashed`   | Dashed line       |
| `dlg-dotted`   | Dotted line       |
| `dlg-gradient` | Gradient line     |
| `dlg-double`   | Double line       |

## CSS Custom Properties

| Property               | Default    | Description             |
|------------------------|------------|-------------------------|
| `--divider-duration`   | `0.6s`     | Animation duration      |
| `--divider-color`      | `#444444`  | Divider line color      |
| `--divider-height`     | `3px`      | Divider thickness       |
| `--divider-max-width`  | `600px`    | Maximum divider width   |
| `--divider-bg`         | `#f0f0f0`  | Page background color   |

## Browser Support

- Chrome / Edge 76+
- Firefox 103+
- Safari 9+
- Opera 64+

## License

MIT
