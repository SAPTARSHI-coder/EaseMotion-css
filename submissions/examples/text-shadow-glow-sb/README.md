# EaseMotion: Text Shadow Glow Headline

Breathing headline typography built from layered `text-shadow` halos plus a diagonal shimmer sweep clipped to the glyphs.

## How is it used?
Wrap any headline in `.glow-headline` and set `data-text` to the same string so the shimmer pseudo-element overlays the glyphs:
```html
<h1 class="glow-headline" data-text="Luminate">Luminate</h1>
```
Tone presets: `.soft`, `.neon`, `.ember`.

## Why is it useful?
Fits EaseMotion's philosophy of motion you can feel without JavaScript: the breath + shimmer are pure CSS keyframes, GPU-friendly (opacity/color only), and respect `prefers-reduced-motion`.

## Tailoring Variable Hooks

| Variable | Baseline | Purpose |
| :--- | :--- | :--- |
| `--glow-1` | `#7cf6ff` | Inner halo color |
| `--breath` | `3.6s` | Breath in/out period |
| `--drift` | `6s` | Shimmer sweep duration |
| `--shimmer` | `#ffffff` | Shimmer highlight color |


---
_Self-contained, dependency-free HTML + CSS. Open `demo.html` directly in a browser._
