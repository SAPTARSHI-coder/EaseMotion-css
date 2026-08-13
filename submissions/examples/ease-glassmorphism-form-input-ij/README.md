# Glassmorphism Form Input (#36687)

Glassmorphism-styled form inputs with a glowing focus ring. Uses backdrop blur for the frosted glass effect.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--input-bg` | `rgba(255,255,255,0.06)` | Background color of the input |
| `--glass-blur` | `8px` | Backdrop blur radius |
| `--focus-glow` | `#667eea` | Glow color when the input is focused |
| `--transition-speed` | `0.3s` | Transition duration for border/glow changes |

## Usage

```html
<input type="text" class="glass-input" placeholder="…">
```

Focus the input to see the glow effect.
