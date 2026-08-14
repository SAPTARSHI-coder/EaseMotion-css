# Sub-Pixel Anti-Aliasing & Shadow Wobble Performance Patch

## What does this do?

This utility resolves hardware sub-pixel text blurring, fuzzy font weights, and shadow wobbling inside animated composite filter cards (e.g. elements with `filter: drop-shadow` that undergo scale hover transitions).

## How is it used?

Attach the sub-pixel shield utility class to any card or text block containing drop-shadows or fine typography undergoing scale/zoom interactions:

```html
<div class="your-card-element ease-subpixel-shield">
  <h4>Card Header</h4>
  <p>Card content here...</p>
</div>
```

## Why is it useful?

- **Anti-Aliasing Lock**: Forces WebKit/Safari and Blink browser engines to keep text antialiasing active (`-webkit-font-smoothing: antialiased`) instead of switching to sub-pixel rendering.
- **Hardware-Compositor Promotion**: Promotes layers to the GPU texture pipeline using `transform: translateZ(0)`.
- **Perspective Anchor**: Implements `perspective: 1px` to enforce sub-pixel boundary coordinates, stopping scale/hover transitions from creating a vibrating or blurry border effect.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to inspect the side-by-side diagnostic cards and computed layout properties.
