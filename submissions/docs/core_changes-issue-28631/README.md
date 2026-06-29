# ease-pattern — CSS Background Pattern Utilities

## What does this do?

Adds animated and static CSS background patterns — grids, dots, stripes, waves, checkerboard, and polka dots — using pure CSS gradients. No images or JS required.

## How is it used?

```html
<div class="ease-pattern-dots">
  <!-- Content with dot pattern background -->
</div>
<div class="ease-pattern-grid">
  <!-- Content with grid background -->
</div>
```

### Classes

| Class | Pattern |
|---|---|
| `.ease-pattern-dots` | Polka dots |
| `.ease-pattern-grid` | Square grid |
| `.ease-pattern-stripes` | Diagonal stripes |
| `.ease-pattern-checker` | Checkerboard |
| `.ease-pattern-waves` | Wavy lines |
| `.ease-pattern-crosshatch` | Crosshatch |

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-pattern-color` | `currentColor` | Primary pattern color |
| `--ease-pattern-size` | `20px` | Pattern tile size |
| `--ease-pattern-opacity` | `0.1` | Pattern layer opacity |
