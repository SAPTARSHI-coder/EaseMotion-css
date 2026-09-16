# Animated Checkbox

## Summary

A pure CSS animated checkbox submitted for issue #86803 (Category:
Toggle). A custom checkbox with a draw-on checkmark and a springy
squash on select — no JS dependency.

## How it works

- A native `<input type="checkbox">` drives state, visually hidden
  but keyboard/screen-reader accessible.
- The checkmark is an inline SVG `<path>` with
  `stroke-dasharray: 20` and `stroke-dashoffset: 20`, which hides
  the stroke entirely. On `:checked`, `stroke-dashoffset` animates
  to `0`, "drawing" the check from tail to tip.
- The box itself plays a `ease-checkbox-squash` keyframe on check —
  a quick squash-then-settle using non-uniform `scaleX/scaleY`
  values and a `cubic-bezier` overshoot curve for the spring feel.
- `:focus-visible` on the input draws an outline on the box for
  keyboard users.
- `prefers-reduced-motion` disables both the squash animation and
  the checkmark draw transition.

## Classes

- `ease-checkbox` — wrapping `<label>`, makes the whole row clickable
- `ease-checkbox-box` — the square box containing the SVG checkmark
- `ease-checkbox-label` — optional text label

## Files

- `demo.html` — live demo with an unchecked and a pre-checked example
- `style.css` — original CSS, single component

Relates to issue #86803.
