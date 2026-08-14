# Cinematic Liquid Mask Reveal via CSS @property

## Abstract

This module demonstrates a hardware-accelerated, zero-JavaScript liquid mask reveal animation using modern CSS `@property` features combined with CSS `mask-image` radial gradients. It allows complex smooth fluid transitions across layer boundaries without relying on heavy canvas libraries, SVG clipping paths, or JavaScript event loops.

## The @property Interpolation Engine

Historically, CSS engines were unable to smoothly transition complex functional values like `background-image` or `mask-image` radial gradients because CSS lacked type information for custom variables used within gradient stops. Standard CSS variables (`--var`) are treated as unparsed tokens, preventing the rendering engine from interpolating intermediate numerical values during a transition.

By registering `@property --splash-radius` with:
- `syntax: '<length-percentage>'`
- `initial-value: 0%`
- `inherits: false`

we explicitly instruct the browser's CSS parser and layout engine to treat `--splash-radius` as a typed, animatable `<length-percentage>`. When `:hover` modifies `--splash-radius` from `0%` to `150%`, the CSS transition engine mathematically calculates every intermediate percentage value frame-by-frame.

## Hardware-Accelerated Masking

The mask layer (`.ease-layer-reveal`) utilizes CSS `mask-image` (and `-webkit-mask-image`) with a radial gradient:
```css
mask-image: radial-gradient(circle at center, black var(--splash-radius), transparent calc(var(--splash-radius) + 10%));
transition: --splash-radius 0.8s cubic-bezier(0.25, 1, 0.3, 1);
```

As `--splash-radius` interpolates from `0%` to `150%`, the inner solid mask radius expands seamlessly from the center of the element outward. Because `@property` registration enables direct GPU composition for CSS custom properties in modern browser rendering pipelines, the liquid expansion runs smoothly at display refresh rates (60fps/120fps) with zero main-thread CPU overhead, zero JavaScript, and zero SVG overhead.
