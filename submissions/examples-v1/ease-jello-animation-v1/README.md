# ease-jello — Jelly Deformation Effect

A satisfying jelly/gel deformation using `skewX`/`skewY` oscillations that decay geometrically — simulates an elastic material hit by an impulse. Distinct from `ease-wobble-horizontal` (translateX only) and `ease-tada` (scale + rotate).

## How it works

The keyframes use a geometric decay series based on the classic CSS jello animation:
`12.5° → -6.25° → 3.125° → -1.5625° → ...` converging to 0. This mirrors the damped oscillation of a real elastic material.

## Classes

| Class                                | Duration | Intensity |
| ------------------------------------ | -------- | --------- |
| `.ease-jello`                        | 0.9s     | 1×        |
| `.ease-jello` + `.ease-jello-fast`   | 0.5s     | 1×        |
| `.ease-jello` + `.ease-jello-slow`   | 1.4s     | 1×        |
| `.ease-jello` + `.ease-jello-strong` | 0.9s     | 1.8×      |

## CSS Custom Properties

| Token                    | Default | Description               |
| ------------------------ | ------- | ------------------------- |
| `--ease-jello-duration`  | `0.9s`  | Animation duration        |
| `--ease-jello-intensity` | `1`     | Skew amplitude multiplier |

## Usage

```html
<!-- Trigger on click -->
<button
  id="like-btn"
  onclick="
  const el = document.getElementById('like-btn');
  el.classList.remove('ease-jello');
  void el.offsetWidth;
  el.classList.add('ease-jello');
"
>
  Like
</button>

<!-- Strong jello for emphasis -->
<div class="ease-jello ease-jello-strong">🍮</div>

<!-- Custom intensity -->
<div
  class="ease-jello"
  style="--ease-jello-intensity: 2; --ease-jello-duration: 1s;"
>
  Extra wobbly
</div>
```

## Important: display: inline-block

`skew` transforms work best on `inline-block` or block elements. `.ease-jello` sets `display: inline-block` automatically.

## Use cases

- Like / reaction button feedback
- Success state confirmation
- Playful UI interactions
- Emoji and icon click feedback
- Game UI elements

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11853
