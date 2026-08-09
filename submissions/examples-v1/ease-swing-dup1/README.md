# ease-swing

A pendulum-style swinging animation utility for EaseMotion CSS. Creates a playful, physics-inspired swing from the top of an element, ideal for notification bells, hanging badges, and decorative icons.

Resolves: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5726

## What it does

Rotates an element back and forth from its top-center pivot point with decaying amplitude, simulating the natural motion of a hanging or pivoting object.

## How to use it

```html
<!-- One-shot swing (fires once on load or when class is applied) -->
<span class="ease-swing">&#128276;</span>

<!-- Looping swing (continuous animation) -->
<span class="ease-swing-loop">&#128276;</span>

<!-- Hover-triggered swing -->
<span class="ease-hover-swing">Hover me</span>
```

## Classes

| Class | Role |
|---|---|
| `ease-swing` | Runs the swing animation once. |
| `ease-swing-loop` | Runs the swing animation in a continuous loop. |
| `ease-hover-swing` | Triggers the swing on hover or keyboard focus. |

## Implementation notes

All three variants set `transform-origin: top center` to simulate a natural pivot at the top of the element. `display: inline-block` is required for the transform to apply (inline elements do not transform).

## Why it fits EaseMotion CSS

- Swing/pendulum animations are a commonly requested micro-interaction for notification icons, hanging tags, and decorative UI elements.
- Three variants (one-shot, loop, hover) cover the most common use cases without extra configuration.
- Pure CSS — no JavaScript needed to trigger.
- Fully accessible: respects `prefers-reduced-motion`.

## Browser support

Works in all modern browsers (Chrome, Firefox, Edge, Safari).
