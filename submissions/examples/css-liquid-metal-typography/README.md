# CSS Liquid Metal Typography

Metallic, highly reflective 3D text utilizing sweeping linear-gradient overlays, `-webkit-text-fill-color: transparent`, and severe contrast filters.

## What it does
A multi-stop metallic gradient is clipped to text and animated across its background position, with high contrast/saturation filters for a liquid chrome look.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS animation
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<h1 class="liquid-metal">LIQUID METAL</h1>
```

## Techniques
- `background-clip: text` + `-webkit-text-fill-color: transparent`.
- Animated `background-position` for the chrome sweep.
- `filter: contrast() saturate()` for reflectivity.

## Accessibility
- `prefers-reduced-motion` disables the sweep.

Closes #75228
