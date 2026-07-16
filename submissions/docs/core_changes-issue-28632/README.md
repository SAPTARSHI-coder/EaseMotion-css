# ease-ripple — Material-Inspired Ripple Click Effect

## What does this do?

Adds a Material Design ripple effect to interactive elements. Uses a `<span>` element animated with CSS `scale` and `opacity` on click. Minimal JS required to manage the ripple lifecycle.

## How is it used?

```html
<button class="ease-ripple">
  Click me
  <span class="ease-ripple-effect"></span>
</button>
```

```css
/* Button must be position: relative; overflow: hidden; */
button { position: relative; overflow: hidden; }
```

### Variants

| Class | Description |
|---|---|
| `.ease-ripple` | Container for ripple effect |
| `.ease-ripple-effect` | The ripple span element |
| `.ease-ripple-dark` | Dark ripple (for light surfaces) |
| `.ease-ripple-light` | Light ripple (for dark surfaces) |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-ripple-color` | `rgba(255,255,255,0.5)` | Ripple color |
| `--ease-ripple-duration` | `0.6s` | Animation duration |
