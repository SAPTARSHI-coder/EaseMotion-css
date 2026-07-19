# Gradient Text Utility with Preset Color Variants

## What does this do?
A utility class that applies a linear gradient to text using CSS
`background-clip: text`, with token-based color stops and several
preset color variants.

## How is it used?

```html
<h1 class="ease-text-gradient">Build Beautiful UIs</h1>
<h2 class="ease-text-gradient ease-text-gradient-sunset">Sale Ends Soon</h2>
<h2 class="ease-text-gradient ease-text-gradient-ocean">Dive Into the Ocean</h2>
<h2 class="ease-text-gradient ease-text-gradient-forest">Fresh Forest Vibes</h2>
<h2 class="ease-text-gradient ease-text-gradient-candy">Sweet Candy Theme</h2>
```

Customize via CSS tokens:

```css
.my-heading {
  --ease-gradient-text-from: #14b8a6;
  --ease-gradient-text-to: #6366f1;
}
```

## Why is it useful?
Gradient text on headings is extremely popular for marketing pages and
hero sections. This utility provides ready-to-use presets plus
token-based customization, with a `forced-colors` fallback for
accessibility. Pure CSS, no JS required.