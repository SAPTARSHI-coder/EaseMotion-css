# Backdrop Filter Saturate

A submission demonstrating CSS `filter: saturate()` and `backdrop-filter: saturate()` for vibrant, muted, and desaturated UI patterns: image galleries with 12 saturation levels, overlay panels, color swatches, and comparison rows using EaseMotion design tokens.

## Features

- 12 filter saturation variants: `sat-0` (0%), `sat-10`, `sat-25`, `sat-50`, `sat-75`, `sat-100`, `sat-125`, `sat-150`, `sat-175`, `sat-200`, `sat-250`, `sat-300`
- 6 backdrop-saturate overlay panels: desaturate (0%), muted (50%), normalize (100%), enhanced (150%), vibrant (200%), hyper (350%)
- Saturation scale bar with 8 interactive steps
- Color swatch row showing 100% vs 50% vs 200% on red, blue, green, purple
- Image gallery with 12 saturation levels
- Side-by-side comparison row
- `-webkit-backdrop-filter` prefix for Safari compatibility
- Uses `--ease-radius-*`, `--ease-space-*`, `--ease-shadow-*` tokens
- Dark mode via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Usage

```css
/* Image desaturation */
.desaturated-img { filter: saturate(0%); }

/* Vibrant image enhancement */
.vibrant-img { filter: saturate(200%); }

/* Glass panel with saturation */
.glass-panel {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: var(--ease-radius-lg);
}
```

## Why is it useful?

The `saturate()` function in `filter` and `backdrop-filter` controls color intensity without changing brightness or hue. Below 100% creates desaturated, muted, vintage-feeling imagery; above 100% produces vibrant, high-energy visuals. This is essential for glass-morphism UI where backdrop imagery needs adjustment to maintain legibility of overlaid text. The 12-step scale covers every use case from grayscale to hyper-vivid, and the backdrop-saturate panels show how saturation works in glass overlays.
