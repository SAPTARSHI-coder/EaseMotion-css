# ease-text-scramble

Text scramble animation that reveals characters with random noise replacement.

## Issue
[#64936](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64936)

## Feature Overview
Character-by-character text reveal animation. Each character slot scrambles through random characters before settling on the final character. Supports multiple color themes, sizes, and reveal effects.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--scramble-color` | `#f8fafc` | Text color |
| `--scramble-bg` | `transparent` | Background |
| `--scramble-font-size` | `1.5rem` | Font size |
| `--scramble-duration` | `1.2s` | Total scramble duration |

## Variants

| Class | Description |
|---|---|
| `.theme-primary` | Purple color |
| `.theme-cyan` | Cyan color |
| `.theme-green` | Green color |
| `.theme-fire` | Orange color |
| `.theme-rose` | Rose color |
| `.size-sm` | Small (1rem) |
| `.size-md` | Medium (1.5rem) |
| `.size-lg` | Large (2.5rem) |
| `.size-xl` | Extra large (4rem) |
| `.speed-fast` | 0.5s duration |
| `.speed-slow` | 2.5s duration |
| `.underline-reveal` | Underline grows as text reveals |
| `.with-bg` | Background pill container |
| `.glow-complete` | Glow effect after reveal |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="scramble-text theme-primary" id="el">PYTHON</div>
<script>
  // JS for scramble effect
  function scramble(el, finalText) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    // ... implementation
  }
</script>
```

## Accessibility
- Respects `prefers-reduced-motion`
- Text remains readable at all times
- Semantic markup with appropriate heading levels
