# ease-aurora — Aurora Borealis Background Utility

**Fixes:** Issue #11901

## Overview

A pure CSS background animation that creates a soft, shifting "Northern Lights" (Aurora Borealis) effect. It uses multiple layered `radial-gradient` backgrounds that move slowly across the element while simultaneously performing a hue rotation, resulting in a dreamy and atmospheric visual experience.

## Usage

```html
<!-- Hero Section — dreamy background -->
<section class="ease-aurora">
  <h1>Welcome to the Future</h1>
</section>

<!-- Portfolio Card — purple variant -->
<div class="card ease-aurora ease-aurora-purple">
  <h3>Creative Portfolio</h3>
</div>

<!-- Fast Aurora -->
<div class="ease-aurora ease-aurora-fast">Energetic Lights</div>
```

## Variants

| Class                 | Description                                    |
| --------------------- | ---------------------------------------------- |
| `.ease-aurora`        | Default 10s cycle, green/blue/purple (default) |
| `.ease-aurora-slow`   | Duration `15s` for a very gentle drift         |
| `.ease-aurora-fast`   | Duration `6s` for more active motion           |
| `.ease-aurora-green`  | Green-dominant color palette                   |
| `.ease-aurora-purple` | Purple-dominant color palette                  |
| `.ease-aurora-blue`   | Blue-dominant color palette                    |

## Customization

You can fully customize the colors, background, and duration using CSS variables:

```css
.my-custom-aurora {
  --ease-aurora-bg: #000;
  --ease-aurora-color-1: rgba(255, 0, 0, 0.4);
  --ease-aurora-color-2: rgba(255, 255, 0, 0.3);
  --ease-aurora-color-3: rgba(0, 0, 255, 0.2);
  --ease-aurora-duration: 12s;
}
```

## Technical Implementation

The effect is achieved by layering three large `radial-gradient` blobs and animating their `background-position` and `filter: hue-rotate()`. The `background-size` is set to `200% 200%` to allow for smooth movement within the bounds of the element.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-aurora {
    animation: none !important;
    background-size: 100% 100%;
    filter: none !important;
  }
}
```

The animation and hue rotation are completely disabled for users who prefer reduced motion, falling back to a static gradient background.

## Acceptance Criteria

- [x] Multiple radial gradients moving slowly (3 layers included)
- [x] Hue rotation (`0deg` to `360deg`)
- [x] 8-12s cycle by default (`10s`)
- [x] Configurable colors via CSS variables
- [x] `prefers-reduced-motion` fallback included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
