# Laser Ray Trace Tooltip

A pure-CSS tooltip that fires a **laser beam** line from the trigger to the
bubble, which then snaps open with a `clip-path` tracing sweep — like a ray
being traced and then a hologram panel powering on along it. Neon-green glow
throughout. Zero JavaScript.

## Overview

This contribution implements the **Laser Ray Trace** tooltip variation (#237)
for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Two-stage reveal**: a thin glowing beam (`::before`) scales out from the
  trigger toward the bubble over `0.16s`, then the bubble (`::after`) sweeps
  open via `clip-path: inset(...)` over `0.42s` with the start delayed by the
  beam duration. The eye reads it as: beam fires → panel powers open.
- **Directional beams**: the beam is a vertical bar for top/bottom
  (`scaleY` from the trigger edge) and a horizontal bar for left/right
  (`scaleX` from the trigger edge); `transform-origin` is anchored to the
  trigger side so the beam grows outward from the source.
- **Directional clip sweep**: top/bottom/left reveal with
  `clip-path: inset(0 100% 0 0)` → `inset(0)`, right reveals with
  `inset(0 0 0 100%)` → `inset(0)`, so the panel always opens along the beam
  direction.
- **Neon glow**: layered `box-shadow` (tight 8px + soft 16px) on both the beam
  and the bubble border, plus a `text-shadow` on the message for a coherent
  emissive look.
- **Four directions**: top, right, bottom, left modifiers.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Hardware-accelerated**: beam animates `transform` (`scaleX/Y`); bubble
  animates `clip-path` + `opacity` (paint-only, no layout).
- **Dark mode**: dark by default; the laser palette is driven by CSS custom
  properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts the beam-grow
  and the clip sweep; beam and bubble appear instantly at their resting
  transforms (beam fully scaled, bubble fully open with `clip-path: none`).
- **Zero JavaScript**.

## Usage

```html
<span
  class="laser-tip laser-tip--top"
  tabindex="0"
  data-tooltip="Beam fires first, then the bubble sweeps open."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--laser: #00ff9d;
--laser-soft: rgba(0, 255, 157, 0.5);
--dur: 0.42s;       /* bubble clip sweep */
--beam-dur: 0.16s;  /* beam grow + bubble start delay */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` removes the staged timing entirely:
  `transition-duration` collapses to `0.01ms`, `transition-delay` is zeroed,
  and the bubble's `clip-path` is set to `none` so it is fully visible. The
  beam and bubble are placed at their correct resting transforms immediately,
  so motion-sensitive users get a clean, static tooltip.
- The decorative beam carries no text; the readable message lives entirely in
  the bubble's `::after` content for unambiguous screen-reader access.

## Related Issue

Addresses Issue #73485 in the EaseMotion CSS repository (CSS Tooltip: Laser Ray
Trace Variation #237).
