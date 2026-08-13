# Ease Circular Progress Ring

## Description
A circular SVG progress ring with animated `stroke-dashoffset`, a percentage label centered inside, and a CSS custom property (`--progress`) to control fill amount.

## Usage
1. Include `style.css`.
2. Add the markup structure from `demo.html` (SVG with `.ring-track` and `.ring-fill` circles + a label span).
3. Set progress via JS: `element.style.setProperty('--progress', 65)` (0–100).
4. Update the label text separately (kept in JS, not pure CSS, since CSS can't render arbitrary numeric content).

## Customization (CSS variables)
- `--ring-size`: overall diameter (default `140px`)
- `--ring-stroke`: stroke width (default `10px`)
- `--ring-color`: fill color (default `#38bdf8`)
- `--ring-track`: background track color
- `--ring-duration`: animation speed

## Files
- `demo.html` — live working example
- `style.css` — component styles
- `README.md` — this file