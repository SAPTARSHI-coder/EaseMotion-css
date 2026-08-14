# Magnetic Audio Equalizer

A pure CSS animated audio equalizer with magnetically swaying bars that pulse on a rhythmic loop.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-mae" role="img" aria-label="Audio equalizer animation"><span class="ease-mae__bar" style="--i:0"></span><span class="ease-mae__bar" style="--i:1"></span><span class="ease-mae__bar" style="--i:2"></span><span class="ease-mae__bar" style="--i:3"></span><span class="ease-mae__bar" style="--i:4"></span></div>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #70020
