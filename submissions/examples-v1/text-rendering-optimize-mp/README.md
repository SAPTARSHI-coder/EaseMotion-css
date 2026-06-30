# text-rendering-optimize-mp

## What does this do?
A set of CSS utility classes that control browser text rendering quality — improving kerning, ligatures, font smoothing, and legibility for headings, body text, and UI labels.

## How is it used?

```html
<!-- Base: best legibility — improved kerning and font smoothing -->
<p class="text-rendering-optimize-mp">The quick brown fox jumps over the lazy dog.</p>

<!-- Speed: prioritize render performance (useful for large lists) -->
<p class="text-rendering-optimize-mp-speed">High-performance text rendering.</p>

<!-- Precise: geometric precision for UI labels, code, small text -->
<p class="text-rendering-optimize-mp-precise">Crisp UI label text.</p>

<!-- Full: legibility + OpenType features (kerning, ligatures, optical sizing) -->
<h1 class="text-rendering-optimize-mp-full">Typography Matters</h1>
```

### Classes

| Class | `text-rendering` value | Best for |
|---|---|---|
| `text-rendering-optimize-mp` | `optimizeLegibility` | Headings, body copy |
| `text-rendering-optimize-mp-speed` | `optimizeSpeed` | Large lists, data tables |
| `text-rendering-optimize-mp-precise` | `geometricPrecision` | UI labels, small text, code |
| `text-rendering-optimize-mp-full` | `optimizeLegibility` + OpenType | Hero sections, display text |

## Why is it useful?
Typography quality directly impacts perceived polish. These utilities give developers one-class access to browser text rendering hints and font smoothing — small changes that noticeably improve legibility across screen sizes and resolutions — fitting EaseMotion CSS's philosophy of expressive, utility-first enhancements that require zero JavaScript.
