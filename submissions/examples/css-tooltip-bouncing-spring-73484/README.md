# Bouncing Spring Tooltip

A pure-CSS tooltip that pops in with an **overshoot spring**: the bubble
travels past its resting point and settles back, driven by a single-pass
keyframe animation using the overshoot easing
`cubic-bezier(0.34, 1.56, 0.64, 1)`. Like it is attached to the trigger by a
rubber band. Zero JavaScript.

## Overview

This contribution implements the **Bouncing Spring** tooltip variation (#236)
for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **Overshoot spring**: the reveal is a `forwards` keyframe animation using
  `cubic-bezier(0.34, 1.56, 0.64, 1)` — the y2 value `1.56` pushes the value
  past `1` then settles, producing the characteristic bounce-back.
- **Directional overshoot**: each direction (top/right/bottom/left) has its
  own keyframe so the overshoot always points *away* from the trigger, reading
  as the bubble springing out from its source.
- **Scale + slide + fade**: the bubble enters at `scale(0.6)` with low
  opacity, springs to full size and opacity in one pass — no layout cost.
- **Four directions**: top, right, bottom, left modifiers.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Hardware-accelerated**: only `transform` / `opacity` animate.
- **Dark mode**: dark by default; palette driven by CSS custom properties so
  it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts the spring
  animation; the bubble appears instantly at its resting position (with the
  correct per-direction centering transform applied).
- **Zero JavaScript**.

## Usage

```html
<span
  class="spring-tip spring-tip--top"
  tabindex="0"
  data-tooltip="Cubic-bezier overshoot mimics a spring release."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--accent: #fb7185;
--accent2: #f59e0b;
--dur: 0.55s;
--spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* overshoot easing */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` halts the spring `animation`; the bubble is
  shown instantly at rest with the correct per-direction centering transform
  (`translateX(-50%)` for top/bottom, `translateY(-50%)` for left/right) so it
  stays correctly positioned for motion-sensitive users.
- The overshoot uses a single-pass `forwards` animation (not an infinite loop),
  so it plays once per reveal and stops — no continuous motion to tax the
  vestibular system.

## Related Issue

Addresses Issue #73484 in the EaseMotion CSS repository (CSS Tooltip: Bouncing
Spring Variation #236).
