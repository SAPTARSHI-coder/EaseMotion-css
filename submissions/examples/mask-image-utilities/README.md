# Effect: Mask Image Utilities

CSS utilities for fading elements using linear and radial transparency mask gradients.

## What does this do?

It implements utility classes (`.mask-fade-top`, `.mask-fade-bottom`, `.mask-fade-left`, `.mask-fade-right`, and `.mask-fade-radial`) that dynamically fade the boundaries of elements using CSS mask gradients.

## How is it used?

Add any `.mask-fade-*` class directly to your target HTML element:

```html
<div class="hero-image mask-fade-bottom">
  <img src="banner.jpg" alt="Hero Banner" />
</div>
```

## Why is it useful?

It allows developer teams to blend container edges, overlay text legibly over images, or fade borders directly in HTML without editing original graphic assets. This aligns with EaseMotion CSS's focus on lightweight design workflows.

---

## Overview

CSS masking lets you specify an image or gradient to be used as a mask layer. The transparency level of the mask dictates the transparency of the target element: fully transparent sections of the mask hide the element completely, while solid sections reveal it.

## Utility Table

| Class               | Gradient Type     | Fade Direction / Effect                                          |
| :------------------ | :---------------- | :--------------------------------------------------------------- |
| `.mask-fade-top`    | `linear-gradient` | Fades the top edge (transparent top, solid bottom).              |
| `.mask-fade-bottom` | `linear-gradient` | Fades the bottom edge (solid top, transparent bottom).           |
| `.mask-fade-left`   | `linear-gradient` | Fades the left edge (transparent left, solid right).             |
| `.mask-fade-right`  | `linear-gradient` | Fades the right edge (solid left, transparent right).            |
| `.mask-fade-radial` | `radial-gradient` | Fades edges in all directions (solid center, transparent edges). |

## Usage Examples

### 1. Header Image Bleed

Fade the bottom of a banner image so it merges cleanly into a dark-themed page background:

```html
<div class="banner-box mask-fade-bottom"></div>
```

### 2. Radial Content Spotlight

Create a spotlight mask around a video player or decorative canvas background:

```html
<div class="visualizer mask-fade-radial"></div>
```

## Vendor Prefix Explanation

Historically, CSS masks were implemented under WebKit browsers using `-webkit-` prefixes. Although standard `mask-image` is widely accepted, many modern layout engines (such as Chromium-based browsers like Chrome, Edge, and Opera, as well as Safari) still require `-webkit-mask-image` for full rendering compatibility. These utility classes include both vendor-prefixed and standard declarations:

```css
.mask-fade-top {
  -webkit-mask-image: linear-gradient(to bottom, transparent, black);
  mask-image: linear-gradient(to bottom, transparent, black);
}
```

## Browser Support Notes

CSS masking has full support across all modern web browsers when using both prefixed and unprefixed properties. It is supported on Chrome, Safari, Firefox, Edge, and mobile iOS/Android viewports.

## Common Use Cases

- Blending slider/hero banner images into page backgrounds.
- Fading scrollable text lists at the bottom to indicate more content.
- Spotlighting product dashboard grids with radial overlays.
- Text overlay clarity on complex graphic grids.
