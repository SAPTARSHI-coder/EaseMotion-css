# Ease Text Rendering Utilities

CSS utility classes for controlling the `text-rendering` property.

## What it does
- `.ease-render-auto` — browser default
- `.ease-render-optimize-speed` — prioritizes speed
- `.ease-render-optimize-legibility` — prioritizes legibility
- `.ease-render-geometric-precision` — prioritizes precision for scaled text

## Usage
```html
<p class="ease-render-optimize-legibility">Crisp, legible body text</p>
<h1 class="ease-render-geometric-precision">Scaled Logo Text</h1>
```

Closes #13837
