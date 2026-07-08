# Digital Rain Effect

Matrix-style digital rain column animation using CSS keyframes.

## CSS Custom Properties

| Variable       | Default    | Description                |
|----------------|------------|----------------------------|
| `--rain-color` | `#00ff41`  | Color of falling characters|
| `--bg-color`   | `#0a0a0a`  | Card background color      |
| `--drop-speed` | `1.2s`     | Duration of a full drop    |
| `--char-size`  | `20px`     | Character font size        |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="card">
  <div class="rain-container">
    <!-- columns of .rain-char elements with --c (column) and --d (delay) -->
  </div>
</div>
```

Each character uses `--c` for column stagger and `--d` for random delay offset. The `.head` class marks the brightest leading character. Randomise character content via JS for a true matrix effect.
