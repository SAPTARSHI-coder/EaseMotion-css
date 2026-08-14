# Holographic Flicker Tooltip

A pure-CSS tooltip styled as a flickering sci-fi **hologram projection**:
chromatic aberration (a cyan base + a magenta offset layer), CRT-style
scanlines, and an unstable stepped-opacity flicker. Zero JavaScript.

## Overview

This contribution implements the **Holographic Flicker** tooltip variation
(#231) for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Chromatic aberration**: `::before` is a magenta layer offset +2px on x;
  `::after` is the cyan base offset -2px on x; together they read as color
  fringing at the edges.
- **Scanlines**: `::after` carries a `repeating-linear-gradient` overlay that
  draws 1px-on / 2px-off horizontal scanlines over the message.
- **Stepped flicker**: a `steps(1, end)` keyframe abruptly cuts opacity at
  irregular intervals (8%, 22%, 40%, 60%, 75%) to mimic an unstable holo
  projection rather than a smooth pulse.
- **Four directions**: top, right, bottom, left modifiers; the chromatic
  offset is preserved on every side.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`.
- **Hardware-accelerated**: only `transform` / `opacity` animate.
- **Dark mode**: dark by default; the holo palette is driven by CSS custom
  properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts both the flicker
  animation and the reveal transition (tooltip appears instantly on reveal).
- **Zero JavaScript**.

## Usage

```html
<span
  class="holo-tip holo-tip--top"
  tabindex="0"
  data-tooltip="Your holographic message."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--holo-cyan: #5cf2ff;
--holo-magenta: #ff3df2;
--dur: 0.28s;       /* reveal transition */
--flicker: 2.8s;    /* flicker loop     */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` halts the flicker `animation` and collapses
  the reveal `transition` to `0.01ms`, so motion-sensitive users get an
  instant, static tooltip.
- The decorative chromatic `::before` carries the same text as `::after` but
  is offset by only 2px; screen readers read `data-tooltip` once via the
  `::after` content (the `::before` is purely a visual aberration layer).

## Related Issue

Addresses Issue #73479 in the EaseMotion CSS repository (CSS Tooltip:
Holographic Flicker Variation #231).
