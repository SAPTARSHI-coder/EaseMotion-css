# Ease Text Rendering Utilities

CSS utility classes for controlling the `text-rendering` property — letting developers choose between rendering speed, legibility, or geometric precision.

## What it does

- `.ease-render-auto` — browser chooses the best rendering strategy (default)
- `.ease-render-optimize-speed` — prioritizes speed, disables kerning/ligatures
- `.ease-render-optimize-legibility` — prioritizes legibility, enables kerning/ligatures
- `.ease-render-geometric-precision` — prioritizes geometric precision, useful when text is scaled/transformed

## Usage

```html
<p class="ease-render-optimize-legibility">Crisp, legible body text</p>
<h1 class="ease-render-geometric-precision">Scaled Logo Text</h1>
```

## Why it fits EaseMotion CSS

Fills a niche typography gap — performance-critical pages can opt into `optimize-speed`, while logo-heavy or scaled text can use `geometric-precision` to stay sharp at any size.

Closes #13837
