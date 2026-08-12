 
# Hover Border Color Shift

Border smoothly shifts to a different color on hover using `--ease-hover-border-to` color variable.

## Files

- demo.html - Interactive demo
- style.css - Border color styles
- README.md - Documentation

## Classes

| Class | Speed | Default Color |
|-------|-------|---------------|
| `ease-hover-border-color-shift` | 0.3s | #667eea |
| `ease-hover-border-color-fast` | 0.15s | #667eea |
| `ease-hover-border-color-slow` | 0.6s | #667eea |

## CSS Variable

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-hover-border-to` | #667eea | Color to shift to on hover |

## Usage

```html
<div class="ease-hover-border-color-shift">
    <p>Border shifts on hover</p>
</div>

<!-- Custom color -->
<div class="ease-hover-border-color-shift" 
     style="--ease-hover-border-to: #10b981;">
    <p>Border shifts to green</p>
</div>