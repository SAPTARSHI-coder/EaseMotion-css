 
# Hover Opacity Full

Elements start at reduced opacity and become fully opaque on hover — opacity: 0.6 → 1 with smooth 0.25s transition.

## Files

- demo.html - Interactive demo
- style.css - Opacity styles
- README.md - Documentation

## Classes

| Class | Starting Opacity | Speed |
|-------|------------------|-------|
| `ease-hover-opacity-full` | 0.6 | 0.25s |
| `ease-hover-opacity-80` | 0.8 | 0.25s |
| `ease-hover-opacity-40` | 0.4 | 0.25s |
| `ease-hover-opacity-20` | 0.2 | 0.25s |
| `ease-hover-opacity-fast` | 0.6 | 0.1s |
| `ease-hover-opacity-slow` | 0.6 | 0.5s |

## Usage

```html
<div class="ease-hover-opacity-full">
    <p>I become fully opaque on hover</p>
</div>

<!-- Different starting opacity -->
<div class="ease-hover-opacity-40">Start at 0.4</div>