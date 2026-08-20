# ease-text-rendering — Text Rendering Utility Classes

Utility classes for the `text-rendering` property, hinting the browser to prioritize speed, legibility, or geometric precision when rendering glyphs. No `text-rendering` declarations currently exist anywhere in `core/` or `components/`.

## Classes

| Class | `text-rendering` |
|-------|-------------------|
| `.ease-text-rendering-auto` | `auto` |
| `.ease-text-rendering-optimize-speed` | `optimizeSpeed` |
| `.ease-text-rendering-optimize-legibility` | `optimizeLegibility` |
| `.ease-text-rendering-geometric-precision` | `geometricPrecision` |

## Usage

```html
<!-- Large dynamic/scrolling text -->
<ul class="ease-text-rendering-optimize-speed">...</ul>

<!-- Editorial heading with kerning + ligatures -->
<h1 class="ease-text-rendering-optimize-legibility">Article Title</h1>

<!-- SVG/data viz labels -->
<text class="ease-text-rendering-geometric-precision">42.5%</text>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-text-rendering-auto` | Default, no opinion needed |
| `.ease-text-rendering-optimize-speed` | Large scrolling lists, dynamic content |
| `.ease-text-rendering-optimize-legibility` | Headings, logotypes, editorial copy |
| `.ease-text-rendering-geometric-precision` | SVG text, data viz, precisely scaled UI |

## Notes

- No `text-rendering` declarations exist anywhere in `core/` or `components/` today
- Effect is subtle and font/engine dependent — most visible with ligature-rich fonts
- Supported in all modern browsers

## Why it fits EaseMotion CSS

EaseMotion CSS has no rendering-strategy control for text despite extensive typography utilities elsewhere. These classes complete the typography control system with a performance/legibility trade-off knob.

Closes #11602
