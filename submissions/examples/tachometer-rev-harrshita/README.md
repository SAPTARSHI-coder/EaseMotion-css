# Tachometer Rev Component

A sleek, CSS‑only tachometer that animates a needle sweeping from left to right, evoking a revving engine gauge.

## Features
- Pure CSS animation, zero JavaScript
- Gradient dial with a vivid red needle
- `prefers-reduced-motion` disables animation for accessibility
- Easy to embed – just add the HTML and CSS

## Usage
```html
<link rel="stylesheet" href="style.css" />
<div class="tachometer">
  <div class="dial"><div class="needle"></div></div>
  <div class="rpm-label">RPM 5,200</div>
</div>
```

## Customisation
- Change the needle colour in `.needle`.
- Adjust `@keyframes rev-rotate` to vary sweep range.
- Update the label text to reflect dynamic values.
