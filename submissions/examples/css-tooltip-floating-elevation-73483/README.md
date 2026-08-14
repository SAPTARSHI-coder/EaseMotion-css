# Floating Elevation Tooltip

A pure-CSS tooltip that rises into view on a soft **elevation arc**: the bubble
slides up with a `translateY`, its drop-shadow deepens as if it lifts off the
surface, and a gentle vertical bob continues while it stays revealed. Zero
JavaScript.

## Overview

This contribution implements the **Floating Elevation** tooltip variation
(#235) for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Elevation arc on reveal**: the bubble starts offset toward the trigger and
  animates to its resting position while `box-shadow` grows from a tight
  `0 2px 6px` to a deep `0 18px 40px` shadow, reading as the bubble lifting off
  the surface.
- **Gentle bob loop**: while revealed, a `float-bob` keyframe nudges the bubble
  up ~6px and back on a 3.2s ease-in-out loop using the `translate` property
  (so it composites cleanly with the reveal `transform`).
- **Four directions**: top, right, bottom, left modifiers.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Hardware-accelerated**: reveal animates `transform` / `opacity` /
  `box-shadow` (paint-friendly, no layout); bob uses the standalone `translate`
  property to avoid clobbering the reveal `transform`.
- **Dark mode**: the demo page is dark; the bubble itself is a light surface
  for contrast, driven by CSS custom properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts the bob loop and
  collapses the reveal transition so the bubble appears instantly, static.
- **Zero JavaScript**.

## Usage

```html
<span
  class="float-tip float-tip--top"
  tabindex="0"
  data-tooltip="Rises with a translateY arc and a deepening shadow."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--accent: #7dd3fc;
--tip-bg: #ffffff;
--tip-fg: #1a1f2e;
--dur: 0.45s;  /* reveal transition */
--bob: 3.2s;    /* idle bob loop    */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` halts the bob `animation` and collapses
  the reveal `transition` to `0.01ms`, so motion-sensitive users get an
  instant, static tooltip.
- The bob uses the standalone `translate` property (not `transform`), so it
  composites independently from the directional reveal `transform` and does not
  fight the entrance arc.

## Related Issue

Addresses Issue #73483 in the EaseMotion CSS repository (CSS Tooltip: Floating
Elevation Variation #235).
