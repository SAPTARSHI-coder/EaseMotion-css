# Ghost Button Appear (#36684)

Ghost button with a fade-scale entrance animation. Buttons fade in and scale up from 0.8 on page load.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--btn-border-color` | `#ffffff` | Border color of the ghost button |
| `--btn-text-color` | `#ffffff` | Text color of the ghost button |
| `--btn-hover-bg` | `#ffffff` | Background color on hover |
| `--appear-duration` | `0.6s` | Duration of the appear animation |

## Usage

```html
<a href="#" class="ghost-btn">Get Started</a>
```

The second button automatically has a staggered delay of `0.4 * appear-duration`.
