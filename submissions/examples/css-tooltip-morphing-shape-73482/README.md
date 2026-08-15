# Morphing Shape Tooltip

A pure-CSS tooltip whose bubble **morphs** through organic blob shapes while
revealed, animating `border-radius` between four asymmetric corner values on a
5-second ease-in-out loop. The bubble looks alive. Zero JavaScript.

## Overview

This contribution implements the **Morphing Shape** tooltip variation (#234)
for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Organic morph**: the bubble's `border-radius` cycles between four
  hand-tuned asymmetric values (e.g. `42% 58% 63% 37% / 41% 44% 56% 59%`) so it
  reads as a living blob rather than a mechanical pulse.
- **Morph only while revealed**: the keyframe animation is applied only on
  `:hover` / `:focus-visible`, so idle triggers cost nothing.
- **Four directions**: top, right, bottom, left modifiers.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Dark mode**: dark by default; the palette is driven by CSS custom
  properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts the morph and
  collapses the reveal transition; the bubble becomes a stable squircle
  (`border-radius: 16px`).
- **Zero JavaScript**.

## Usage

```html
<span
  class="morph-tip morph-tip--top"
  tabindex="0"
  data-tooltip="The border-radius cycles through organic blobs."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--accent: #c084fc;
--accent2: #f0abfc;
--tip-bg: linear-gradient(135deg, #2a1a4a, #3b2a6b);
--dur: 0.3s;   /* reveal transition */
--morph: 5s;   /* border-radius loop */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` halts the morph `animation` and collapses
  the reveal `transition` to `0.01ms`; the bubble gets a fixed
  `border-radius: 16px` squircle so motion-sensitive users still get a clean,
  legible tooltip.
- The morph animates only `border-radius` (paint-only, no layout), and the
  reveal animates only `transform` / `opacity` (compositor-friendly), so the
  effect is inexpensive.

## Related Issue

Addresses Issue #73482 in the EaseMotion CSS repository (CSS Tooltip:
Morphing Shape Variation #234).
