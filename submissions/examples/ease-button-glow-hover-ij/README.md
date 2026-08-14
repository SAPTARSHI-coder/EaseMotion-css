# Button Glow Hover

A set of buttons that emit a glowing box-shadow outward on hover.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--btn-glow-duration` | `0.35s` | Transition duration for the glow |
| `--btn-glow-color` | `#3b82f6` | Glow color (override per instance) |
| `--btn-glow-bg` | `#1e1e2e` | Button background |
| `--btn-glow-text-color` | `#ffffff` | Button text color |
| `--btn-glow-spread` | `20px` | Box-shadow spread radius on hover |

## Usage

```html
<button class="glow-btn glow-btn--blue">Blue Glow</button>
```

Override the glow color by setting `--btn-glow-color` on the element or via a modifier class.
