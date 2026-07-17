# 3D Parallax Hover Card with Moving Iridescent Foil Sheen

## What does this do?

This component implements a highly aesthetic, interactive collector's card that mimics physical iridescent foil-stamped trading cards. It combines 3D card tilt perspective with a cursor-reactive rainbow reflection sheen that moves across the card face on hover. The entire interaction (both rotation and reflection translation) is built in pure CSS, requiring no JavaScript.

## How is it used?

Wrap the collector card `.foil-card` inside a `.foil-card-container` alongside a 3x3 grid of empty sibling `.hover-zone` detectors placed on top of it:

```html
<div class="foil-card-container" tabindex="0">
  <!-- 3x3 Sibling Detector Grid -->
  <div class="hover-zone hz-1"></div>
  <div class="hover-zone hz-2"></div>
  <!-- ... hz-3 to hz-9 ... -->

  <!-- Card Body Sibling Target -->
  <div class="foil-card">
    <div class="card-bg"></div>
    <div class="foil-sheen"></div>
    <div class="foil-glitter"></div>
    <div class="card-container">
      <!-- Header, Illustration, Statistics content -->
    </div>
  </div>
</div>
```

## Why is it useful?

Measuring mouse coordinates relative to an element boundary to compute 3D tilts and shift backgrounds typically requires writing custom JavaScript event listeners (e.g. `element.addEventListener('mousemove', ...)`), causing performance overhead and frame drops on page scrolls.

Key architectural advantages of this pure CSS approach:

- **3x3 Sibling Trigger Matrix**: Splitting the card area into 9 equal absolute grid detectors allows CSS sibling selectors (`~`) to target the card underneath, shifting both its `rotateX/Y` transforms and the foil sheen `background-position` coordinate mapping.
- **Iridescent Reflection Overlay**: Uses a linear rainbow gradient with `mix-blend-mode: color-dodge` to blend colors directly onto the dark layout base, creating a highly realistic, vibrant foil metallic reflection.
- **Glitter Simulation**: Overlays repeating radial patterns with a translucent `mix-blend-mode: screen` setting to simulate holographic card sparkles.
- **Accessibility Friendly**: Focusable via keyboard tab indexing. Supports system configurations by detecting `prefers-reduced-motion: reduce` and bypassing tilts, sparkles, and coordinate translations, rendering a clean static slightly translucent foil style.

## Tech Stack

- HTML5
- CSS3 (Perspective transforms, Color Dodge blending, Sibling triggers, Radial repeats, Media Queries)

## Preview

Open `demo.html` directly in any modern web browser to view the interactive card.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-foil-card`, `.ease-foil-sheen`) and replace hardcoded colors with project theme variables on merge.
