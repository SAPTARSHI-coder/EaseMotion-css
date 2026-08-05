# CSS-Only Liquid Morphing Text Transition

## What does this do?

This component implements a typographic display banner where words morph fluidly into other words with a liquid/gooey transition effect. It is built strictly in pure CSS, combining staggered keyframe animations with inline SVG filters to achieve organic merging and melting.

## How is it used?

Apply the `.liquid-container` class to a wrapper containing your absolute-positioned `.word` children, and include the inline SVG gooey filter definition at the top of the body:

```html
<!-- SVG Gooey Filter -->
<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
  <defs>
    <filter id="liquid-gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
        result="gooey"
      />
    </filter>
  </defs>
</svg>

<!-- Layout Banner -->
<div class="liquid-banner">
  <div class="liquid-container">
    <span class="word word-1">Creative</span>
    <span class="word word-2">Performant</span>
    <span class="word word-3">Animations</span>
  </div>
</div>
```

## Why is it useful?

Typographic liquid morphing transitions usually require Canvas drawing loops or WebGL shaders to simulate fluid dynamics, which are heavy to load and run.

Key architectural advantages of this pure CSS approach:

- **SVG Contrast/Blur Matrix**: Uses `<feGaussianBlur>` to expand text boundaries and `<feColorMatrix>` to apply high contrast (alpha x 20, subtract 9). This sharpens the overlapping blurred boundaries, forcing text paths to fuse together organically.
- **Color-Preserved Fusions**: By defining the color matrix as an identity matrix for the RGB channels, we preserve the text colors. This allows contrasting colored words (e.g. Cyan and Purple) to merge, blending their colors at the overlapping junctions.
- **Staggered CSS Timeline Cycles**: Schedules word morphing loops using a single keyframe rule offset by staggered `animation-delay` increments (0s, 4s, 8s) on a 12s cycle.
- **Accessibility Friendly**: Detects system preferences via `prefers-reduced-motion: reduce`, dynamically bypassing SVG contrast filters, blurs, and letter-spacing shifts to crossfade words with a clean static transition.

## Tech Stack

- HTML5
- CSS3 (Gooey Filters, Contrast Matrices, Staggered cycles, Media Queries)

## Preview

Open `demo.html` directly in any modern web browser to view the morphing typography.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-liquid-container`, `.ease-morph-word`) and replace hardcoded colors with project theme variables on merge.
