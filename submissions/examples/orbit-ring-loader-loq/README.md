# Orbit Ring Loader

## What does this do?
A pure CSS loading indicator featuring three concentric orbiting rings and a glowing center core.

## How is it used?
Add the following HTML structure to your page:

```html
<div class="orbit-loader">
  <div class="core"></div>
  <div class="ring ring-inner"></div>
  <div class="ring ring-mid"></div>
  <div class="ring ring-outer"></div>
</div>
```

On the demo page, we showcase three distinct variations of this loader layout:
1. **Classic Orbit**: Smooth spin, continuous solid rings.
2. **Cyber Dash**: Dashed & dotted styling for a faster, cyberpunk feel.
3. **Eclipse Pulse**: Single-edge fade style with ease-in-out glow animations.

## Why is it useful?
This component aligns with EaseMotion CSS's philosophy by providing a zero-dependency, pure CSS, and animation-focused feedback indicator. It rotates rings in alternating directions with different speeds and styles, supports full theme responsiveness (automatically adjusts visual styling for light and dark modes), and is fully responsive across all device sizes (mobile, tablet, and desktop) with fluid layout wrapping to provide an elegant, premium loading experience.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
