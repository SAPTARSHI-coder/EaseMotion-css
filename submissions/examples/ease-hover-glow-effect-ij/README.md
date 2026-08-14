# hover-glow-effect (#36734)

Hover glow effect with a soft radial glow behind the element plus a matching box-shadow.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--glow-color` | `#48dbfb` | Color of the glow |
| `--glow-size` | `80px` | Radius of the radial gradient |
| `--bg-color` | `#1a1a1a` | Background color of the card |
| `--glow-duration` | `0.4s` | Transition duration |

## Usage

```html
<div class="card" style="--glow-color: #f093fb; --glow-size: 100px; --glow-duration: 0.6s;">
  <h2>Glow</h2>
</div>
```

The `::before` pseudo-element renders the radial gradient glow behind the card.
