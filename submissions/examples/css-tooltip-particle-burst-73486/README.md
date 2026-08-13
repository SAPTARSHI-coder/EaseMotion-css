# Particle Burst Tooltip

A pure-CSS tooltip that **bursts a spray of particles** outward from the
trigger, then fades the message bubble in behind them. The particles are a
single `box-shadow` list on a `0x0` `::before` element, animated from
all-at-center to a spread ring — no JavaScript, no images, no DOM particles.

## Overview

This contribution implements the **Particle Burst** tooltip variation (#238)
for the EaseMotion CSS library, following the existing tooltip example
conventions (`demo.html` + `style.css` + `README.md`).

## Features

- **box-shadow particles**: the `::before` is a `0x0` box carrying an 8-entry
  `box-shadow` list (alternating `--particle` / `--particle2` colors). At rest
  every shadow is at `(0,0)`; the keyframe spreads them onto axes + diagonals
  at radius `--r`, reading as a burst.
- **Single-pass burst**: the particle keyframe runs once (`forwards`) over
  `0.6s ease-out`, fading out at the end so the field disappears cleanly.
- **Staged bubble**: the message bubble (`::after`) fades in with a
  `--burst`-long delay so it appears *after* the burst, layered behind the
  settling particles.
- **Four directions**: top, right, bottom, left modifiers; the `::before`
  origin is anchored to the trigger edge facing the bubble so the burst
  emanates from the correct side.
- **Keyboard accessible**: triggers carry `tabindex="0"` and reveal on
  `:focus-visible`, not just `:hover`.
- **Hardware-accelerated**: the burst animates `box-shadow` + `opacity`
  (paint-only, no layout); the bubble animates `opacity`.
- **Dark mode**: dark by default; the palette is driven by CSS custom
  properties so it can be re-themed.
- **Reduced motion**: `prefers-reduced-motion: reduce` hides the particle
  field entirely and shows the bubble instantly (no burst, no fade), so
  motion-sensitive users get a clean, static tooltip.
- **Zero JavaScript**.

## Usage

```html
<span
  class="burst-tip burst-tip--top"
  tabindex="0"
  data-tooltip="Particles spray outward, then the bubble appears."
  >Hover / focus</span
>
```

## CSS Custom Properties

```css
--particle: #ffd166;
--particle2: #ef476f;
--dur: 0.5s;    /* bubble fade in */
--burst: 0.6s;  /* particle burst + bubble delay */
--r: 26px;       /* particle spread radius */
```

## Accessibility Notes

- The trigger is a real focusable element (`tabindex="0"`) and reveals on
  `:focus-visible`.
- `prefers-reduced-motion: reduce` hides the `::before` particle field
  entirely (`opacity: 0`) and shows the bubble instantly, so there is no burst
  or fade for motion-sensitive users.
- The decorative `::before` carries no text; the readable message lives
  entirely in the bubble's `::after` content for unambiguous screen-reader
  access.
- The particle keyframe is single-pass (`forwards`, not `infinite`), so the
  burst plays once per reveal and stops — no continuous motion.

## Related Issue

Addresses Issue #73486 in the EaseMotion CSS repository (CSS Tooltip: Particle
Burst Variation #238).
