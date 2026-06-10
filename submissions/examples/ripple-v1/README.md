# ease-ripple

Pure CSS click ripple effect using `:active::after` and `scale` keyframes. Zero JavaScript required.

## Usage

```html
<button class="ease-ripple">Click me</button>
<button class="ease-ripple ease-ripple-light">Light ripple</button>
<button class="ease-ripple ease-ripple-dark">Dark ripple</button>
```

## Variants

| Class | Description |
|---|---|
| `ease-ripple` | Default dark ripple |
| `ease-ripple-light` | White ripple for dark buttons |
| `ease-ripple-dark` | Dark ripple for light elements |
| `ease-ripple-primary` | Indigo ripple |
| `ease-ripple-success` | Green ripple |
| `ease-ripple-danger` | Red ripple |
| `ease-ripple-fast` | 250ms ripple |
| `ease-ripple-slow` | 900ms ripple |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-ripple-color` | `rgba(0,0,0,0.2)` | Ripple fill color |

## Submission

- **Author:** sudha09-git
- **Issue:** #3885
- **Files:** `style.css`, `demo.html`
