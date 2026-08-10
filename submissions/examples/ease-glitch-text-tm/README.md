# ease-glitch-text

Glitch effect text animation with RGB channel splitting and distortion.

## Issue
[#64941](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64941)

## Feature Overview
Text glitch effect using layered pseudo-elements with clip-path slicing. Each layer uses a different color and offset, creating the classic RGB split effect. Supports multiple intensity levels, color themes, and trigger modes.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--glitch-color` | `#f8fafc` | Base text color |
| `--glitch-primary` | `#f472b6` | Primary glitch color (pink) |
| `--glitch-secondary` | `#38bdf8` | Secondary glitch color (cyan) |
| `--glitch-bg` | `#0a0a1a` | Background color |
| `--glitch-font-size` | `2.5rem` | Text size |
| `--glitch-duration` | `3s` | Animation cycle duration |

## Variants

| Class | Description |
|---|---|
| `.scanlines` | Adds horizontal scanline overlay |
| `.intensity-low` | Slower glitch (5s cycle) |
| `.intensity-high` | Faster glitch (1.5s cycle) |
| `.intensity-max` | Very fast glitch (0.8s cycle) |
| `.theme-cyan` | Cyan/purple color scheme |
| `.theme-green` | Green/amber color scheme |
| `.theme-fire` | Red/amber color scheme |
| `.hover-trigger` | Only glitches on hover |
| `.skew` | Adds skew distortion |
| `.rgb-split` | Static RGB channel split |
| `.size-sm` | Small text (1.2rem) |
| `.size-lg` | Large text (4rem) |
| `.size-xl` | Extra large (6rem) |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="glitch-text" data-text="GLITCH">GLITCH</div>
<div class="glitch-text theme-cyan size-lg hover-trigger" data-text="HOVER ME">HOVER ME</div>
```

## Accessibility
- Respects `prefers-reduced-motion` (animation disabled)
- Decorative effect — does not interfere with text readability when still
