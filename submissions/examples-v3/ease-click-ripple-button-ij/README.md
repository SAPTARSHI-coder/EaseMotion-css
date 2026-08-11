# Click Ripple Button

Material-inspired buttons that produce an expanding ripple effect originating from the exact click position.

## Features

- Ripple originates from cursor coordinates on click
- Multiple button variants: default, primary, outline, small, large, pill
- Smooth scale + opacity ripple animation
- Customisable via CSS custom properties

## Usage

Link the stylesheet and add the `cr-btn` class to any `<button>`:

```html
<button class="cr-btn" type="button">Click Me</button>
```

## Custom Properties

| Property               | Default           | Description              |
|------------------------|-------------------|--------------------------|
| `--cr-btn-duration`    | `0.6s`            | Ripple animation duration |
| `--cr-btn-ripple-color` | `rgba(255,255,255,0.5)` | Ripple colour       |
| `--cr-btn-bg`          | `#6366f1`         | Button background         |
| `--cr-btn-text-color`  | `#ffffff`         | Button text colour        |
| `--cr-btn-radius`      | `8px`             | Button border radius      |

## Variants

Add a modifier class to style the button:

- `cr-btn--primary` — blue accent
- `cr-btn--outline` — bordered transparent
- `cr-btn--small` — compact sizing
- `cr-btn--large` — enlarged sizing
- `cr-btn--pill` — fully rounded
