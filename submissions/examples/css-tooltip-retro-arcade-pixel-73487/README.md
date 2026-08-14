# Retro Arcade Pixel Tooltip

A pure-CSS tooltip styled like an **8-bit arcade HUD**: pixel font, chunky
step-edged bevel border, a CRT scanline overlay, and a top-to-bottom scanline
sweep reveal plus an arcade-style text blink. No JavaScript.

## Overview

This contribution implements the **Retro Arcade Pixel** tooltip variation
(#239) for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **8-bit arcade look**: `Press Start 2P` pixel font (with a monospace
  fallback), uppercase tracked text, and chunky stepped bevels built from
  layered `box-shadow` offsets (no `border-radius` anywhere) for that hard
  pixel edge.
- **CRT scanlines**: the bubble background is a `repeating-linear-gradient`
  scanline pattern layered over the HUD fill, giving a CRT-monitor texture.
- **Scanline sweep reveal**: the bubble enters via a `clip-path: inset(...)`
  animation from `inset(0 0 100% 0)` → `inset(0)`, stepped with
  `steps(8, end)`, reading as a top-to-bottom raster scan booting up the HUD.
- **Arcade text blink**: after the scan completes, a `steps(1)` blink
  animation toggles the text color to `transparent` on the final step in a
  looping 1.05s cycle, mimicking the classic "INSERT COIN" blink.
- **Hard pixel motion**: `steps()` timing functions throughout so the motion
  is visibly quantized (steppy) rather than smooth, selling the retro feel.
- **Four directions**: top, right, bottom, left modifiers with a small
  directional slide-in on reveal.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Dark mode**: dark by default; the HUD palette is driven by CSS custom
  properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` halts the scan sweep
  and the blink; the bubble is shown instantly, fully unclipped, with the
  text color held steady — no flicker for motion-sensitive users.
- **Zero JavaScript**.

## Usage

```html
<span
  class="pixel-tip pixel-tip--top"
  tabindex="0"
  data-tooltip="INSERT COIN  PLAYER 1 READY"
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--hud: #ffe14d;
--hud-dark: #b89b1a;
--hud-bg: #1a0f2a;
--tip-fg: #ffe14d;
--dur: 0.5s;     /* scanline sweep */
--blink: 1.05s;  /* text blink cycle */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` removes the scan sweep and the blink
  entirely (`animation: none`, `clip-path: none`, text color held at
  `--tip-fg`), so motion- and flicker-sensitive users get a stable, fully
  visible tooltip.
- The blink uses `steps(1, end)` with a single transparent beat, which keeps
  the on/off transitions hard and brief; combined with the reduced-motion
  override, users who are sensitive to flashing will not see it.
- The decorative CRT scanlines are pure background; the readable message
  lives entirely in the bubble's `::after` content for unambiguous
  screen-reader access.

## Related Issue

Addresses Issue #73487 in the EaseMotion CSS repository (CSS Tooltip: Retro
Arcade Pixel Variation #239).
