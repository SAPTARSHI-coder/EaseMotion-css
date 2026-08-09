# ease-confetti-burst

A CSS-only confetti burst animation component that triggers on user interaction.

## Issue
[#64950](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64950)

## Feature Overview
Celebratory particle burst animation with multiple colors, shapes, and sizes. Pure CSS keyframe animation using custom properties for theming and `--dx`/`--dy` variables for directional spread.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--confetti-primary` | `#6c5ce7` | Primary particle color (purple) |
| `--confetti-secondary` | `#00cec9` | Secondary particle color (teal) |
| `--confetti-accent` | `#fd79a8` | Accent particle color (pink) |
| `--confetti-warning` | `#fdcb6e` | Warning particle color (yellow) |
| `--confetti-success` | `#00b894` | Success particle color (green) |
| `--confetti-bg` | `#1a1a2e` | Background color |
| `--confetti-text` | `#dfe6e9` | Text color |
| `--confetti-size` | `10px` | Base particle size |
| `--confetti-duration` | `2s` | Animation duration |
| `--confetti-easing` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |

## Variants

| Class | Description |
|---|---|
| `.color-primary` | Purple particles |
| `.color-secondary` | Teal particles |
| `.color-accent` | Pink particles |
| `.color-warning` | Yellow particles |
| `.color-success` | Green particles |
| `.size-sm` | Small (6px) particles |
| `.size-md` | Medium (10px) particles |
| `.size-lg` | Large (14px) particles |
| `.shape-circle` | Circular particles |
| `.shape-rect` | Rectangular particles |
| `.dense` | 20+ particle density |
| `.trail` | Blur trail effect |
| `.wide` | Extended spread radius |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="confetti-container">
  <button class="confetti-trigger" onclick="triggerBurst()">Celebrate!</button>
  <div class="confetti-particle color-primary"></div>
  <div class="confetti-particle color-secondary"></div>
  <!-- add more particles as needed -->
</div>
```

## Accessibility
- Respects `prefers-reduced-motion` — particles are hidden when reduced motion is preferred
- Interactive trigger uses semantic `<button>` element
- Color variants use sufficient contrast ratios
