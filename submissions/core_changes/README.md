# Button Click Ripple Animation

This submission implements a material-inspired click ripple effect for buttons (Issue **#14189**).

## What It Does

Adds a `.btn-ripple` modifier class that creates a circular ripple animation on click. The ripple starts at scale(0) with opacity 0.35 and scales up to scale(4) while fading to opacity 0 over 600ms.

## Variants

| Class | Description |
|-------|-------------|
| `.btn-ripple` | Modifier — enables ripple effect on any button |
| `.btn-primary` / `.btn-success` / `.btn-danger` | Color variants with ripple |
| `.btn-outline` / `.btn-ghost` | Borderless/transparent variants |
| `.btn-sm` / `.btn-lg` | Size variants |
| `.btn-pill` | Fully rounded pill shape |

## Usage

```html
<button class="btn btn-primary btn-ripple" onclick="createRipple(event)">
  Click Me
</button>
```

Include the `createRipple(event)` JavaScript function and the `@keyframes ripple` animation.

## Files

- `demo.html` — Interactive demo with 8 button variant + ripple combinations
- `style.css` — Button styles, ripple keyframes, variant classes, reduced-motion support
- `README.md` — This documentation

## Features

- Material ripple animation on click
- Works with all button variants (primary, success, danger, outline, ghost)
- Works with all sizes (sm, lg) and shapes (pill)
- Ripple originates at click coordinates
- Auto-cleans up after animation completes
- `prefers-reduced-motion` disables the ripple
