# Aurora Glow Tooltip

A pure-CSS tooltip with a softly shifting **aurora-borealis glow** frame.
Hover or focus the trigger and a bubble appears, wrapped in an animated
gradient frame whose `background-position` drifts on a slow 6-second loop,
evoking polar light ribbons. Zero JavaScript.

## Overview

This contribution implements the **Aurora Glow** tooltip variation (#226) for
the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Aurora drift**: an animated 5-stop `linear-gradient` frame drifts via
  `background-position` on a 6s linear loop.
- **Readable surface**: the frame is a 2px gradient padding; the inner bubble
  sits on a translucent dark surface for guaranteed contrast.
- **Four directions**: top, right, bottom, left modifiers.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Hardware-accelerated**: only `transform` / `opacity` / `background-position`
  animate; no layout-triggering properties.
- **Dark mode**: the demo is dark by default; the palette is driven by CSS
  custom properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts both the reveal
  transition and the aurora drift.
- **Zero JavaScript**: pure HTML + vanilla CSS.

## Usage

```html
<span
  class="aurora-tip aurora-tip--top"
  tabindex="0"
  data-tooltip="Your message appears inside the aurora frame."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--aurora1: #00ffae; /* polar green  */
--aurora2: #4ad6ff; /* icy cyan    */
--aurora3: #8a5bff; /* violet       */
--aurora4: #00d4ff; /* electric blue */
--dur: 0.32s;       /* reveal transition */
--drift: 6s;        /* aurora drift loop  */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible` so keyboard users see the tooltip.
- `prefers-reduced-motion: reduce` sets `transition-duration: 0.01ms` and
  `animation: none` on the tooltip, so motion-sensitive users get an instant,
  static tooltip.
- The decorative animated frame carries no text; the readable message lives in
  the solid-surface `::after` element for contrast.

## Related Issue

Addresses Issue #73473 in the EaseMotion CSS repository (CSS Tooltip: Aurora
Glow Variation #226).
