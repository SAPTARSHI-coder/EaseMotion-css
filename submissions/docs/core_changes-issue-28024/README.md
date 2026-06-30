# ease-neon — Neon Hover Effect Utility Classes

## What does this do?

Adds neon glow hover effects to buttons, cards, and interactive elements. Uses `text-shadow` and `box-shadow` animations for a pulsing neon sign aesthetic — pure CSS, no JS required.

## How is it used?

```html
<button class="ease-neon-pink">Neon Pink</button>
<a class="ease-neon-blue" href="#">Neon Blue</a>
<div class="ease-neon-purple">Glow Card</div>
```

### Classes

| Class                | Glow Color                |
| -------------------- | ------------------------- |
| `.ease-neon-blue`    | Cyan/blue glow (#00d4ff)  |
| `.ease-neon-pink`    | Hot pink glow (#ff00ff)   |
| `.ease-neon-green`   | Lime green glow (#39ff14) |
| `.ease-neon-purple`  | Purple glow (#b026ff)     |
| `.ease-neon-rainbow` | Cycling rainbow glow      |

## Custom Properties

| Property                | Default       | Description                |
| ----------------------- | ------------- | -------------------------- |
| `--ease-neon-color`     | _(per class)_ | Glow color                 |
| `--ease-neon-blur`      | `8px`         | Blur radius                |
| `--ease-neon-intensity` | `1`           | Multiplier for glow spread |
| `--ease-neon-duration`  | `1.5s`        | Pulse animation speed      |

## Accessibility

Respected via `prefers-reduced-motion: reduce` — disables the pulse animation.
