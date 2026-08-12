# Underline Focus

Form inputs with an animated underline that expands from the center on focus using a CSS pseudo-element and `scaleX` transform.

## Usage

Include `style.css` and wrap each input in a `.iuf-wrap` container. The underline is drawn via `::after` and animated with `.iuf-focused`.

```html
<div class="iuf-wrap">
  <input type="text" class="iuf-input">
</div>
```

## CSS Custom Properties

| Property             | Default   | Description                          |
|----------------------|-----------|--------------------------------------|
| `--iuf-duration`     | `0.3s`    | Transition duration                  |
| `--iuf-line-color`   | `#6366f1` | Underline color                      |
| `--iuf-line-height`  | `2px`     | Underline thickness                  |
| `--iuf-input-bg`     | `#f9fafb` | Input background                     |
| `--iuf-text-color`   | `#111827` | Input text color                     |
| `--iuf-radius`       | `6px`     | Input border-radius (top corners)    |

## JavaScript API

Add/remove the `.iuf-focused` class on `.iuf-wrap` on `focus`/`blur` events to trigger the underline animation.

## Browser Support

All modern browsers supporting `::after` pseudo-elements, `transform: scaleX()`, and CSS custom properties.
