# neon-button-pg365

Glowing neon-outline button with animated text/border glow and a hover pulse.

Resolves: #42317

## Overview

A pure-CSS button styled like a neon sign: a transparent fill, a colored
outline, and matching text glow via `text-shadow`. On hover/focus the button
fills solid with the neon color and the outer glow pulses smoothly via a
`box-shadow` keyframe animation. An optional `--flicker` modifier plays a
neon "power-on" flicker once when the button mounts.

## Markup

```html
<button class="neon-button-pg365">Click Me</button>
```

Override the color, corner radius, or pulse speed inline:

```html
<button
  class="neon-button-pg365"
  style="--nb-color: #22d3ee; --nb-radius: 999px; --nb-pulse: 1s;"
>
  Cyan Pill
</button>
```

Add the flicker entrance modifier for a neon "power-on" effect on load:

```html
<button class="neon-button-pg365 neon-button-pg365--flicker">Power On</button>
```

## CSS Variables

| Variable      | Default   | Description                                |
| ------------- | --------- | ------------------------------------------- |
| `--nb-color`  | `#39ff88` | Neon tube / text / glow color               |
| `--nb-radius` | `8px`     | Corner radius of the button                 |
| `--nb-pulse`  | `1.6s`    | Duration of one hover glow-pulse cycle       |

## How It Works

- The base state uses a transparent background with a colored border and a
  `text-shadow` glow, giving the "unlit neon tube" look.
- On `:hover` / `:focus-visible`, the button fills solid with `--nb-color`
  and an infinite `box-shadow` keyframe animation (`neon-btn-pulse-pg365`)
  breathes the outer glow larger and smaller — the "pulse".
- The `--flicker` modifier plays a one-shot `steps`-like opacity/shadow
  flicker (`neon-btn-flicker-pg365`) on mount, mimicking a neon sign
  powering on.
- `disabled` buttons drop the glow, outline color remains for legibility,
  and no hover/pulse animation runs.

## Accessibility

- Built on a native `<button>` element — fully keyboard operable and
  reachable via Tab by default.
- `:focus-visible` gets the same fill + pulse treatment as `:hover`, plus a
  visible `outline`, so keyboard users get equivalent feedback to mouse
  users.
- Respects `prefers-reduced-motion: reduce`: the hover pulse and the
  power-on flicker are both disabled, while a static intensified glow is
  still shown on hover/focus so the interaction remains perceivable.
- Color contrast: default green/cyan/amber variants keep white/near-black
  text against the filled hover background at a readable contrast ratio.

## Files

- `demo.html` — color variants, the flicker entrance variant, CSS-variable
  customization (radius, pulse speed), and a disabled-state example.
- `style.css` — component styles, hover-pulse keyframes, flicker keyframes,
  disabled state, and reduced-motion handling.
- `README.md` — this file.
