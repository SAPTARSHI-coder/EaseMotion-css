# Button Hover Scale

Buttons that gently scale up on hover with a smooth `transform` transition.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--btn-scale-duration` | `0.2s` | Transition duration for the scale |
| `--btn-scale-factor` | `1.08` | Scale multiplier on hover |
| `--btn-scale-bg` | `#3b82f6` | Button background |
| `--btn-scale-text-color` | `#ffffff` | Button text color |
| `--btn-scale-radius` | `8px` | Button border-radius |

## Usage

```html
<button class="scale-btn">Default</button>
<button class="scale-btn scale-btn--pill">Pill</button>
<button class="scale-btn scale-btn--ghost">Ghost</button>
```

Add modifier classes for preset variants (`--sm`, `--lg`, `--pill`, `--ghost`).
