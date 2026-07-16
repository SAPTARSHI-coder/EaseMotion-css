# ease-rotate-in

Element rotates in from a skewed angle and settles at 0°, fading in at the same time.

## Usage

```html
<div class="ease-rotate-in">Your content</div>
```

## Customize the start angle

Override `--ease-rotate-start` (default `-200deg`) inline or in your own CSS:

```html
<div class="ease-rotate-in" style="--ease-rotate-start: -90deg;">Your content</div>
```

## How it works

The animation uses a CSS custom property, `--ease-rotate-start`, as the starting rotation angle.
On animation start, the element is rotated to that angle and fully transparent (`opacity: 0`).
As the keyframe progresses, the `ease-out` timing function rotates the element back to `0deg`
while fading it to `opacity: 1`. `ease-out` means the rotation moves fast at first and slows
down as it settles — so the element doesn't feel like it's snapping into place, it eases into it.
`forwards` keeps the final state (0deg, full opacity) after the animation ends, instead of
resetting back to the start.

## Why it's useful

- Adding entrance motion to icons, buttons, or decorative elements without writing custom JS.
- The `--ease-rotate-start` variable makes it reusable — different elements can rotate in from
  different angles just by overriding one CSS variable, no need to duplicate the keyframes.
- Combines rotation + fade in a single class, so you don't need to stack multiple animation
  utilities together.
- Drop-in: just add the `ease-rotate-in` class, no markup changes required.

## Behavior

- `rotate(-200deg)` + `opacity: 0` → `rotate(0deg)` + `opacity: 1`
- Easing: `ease-out`
- Duration: `0.6s`
- Good for icon animations and decorative elements.