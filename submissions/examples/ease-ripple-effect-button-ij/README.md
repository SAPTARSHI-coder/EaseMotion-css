# Ripple Effect Button

## What does this do?

Creates a Material-style ripple animation on any button when clicked. The ripple originates from the exact click position and expands outward in a circular wave before fading out.

## How is it used?

Add the `reb-btn` class to any `<button>` element and optionally a variant class (`primary`, `secondary`, `outline`, `danger`) or size class (`small`, `large`):

```html
<button class="reb-btn primary">Click Me</button>
```

The JavaScript automatically creates a `<span class="reb-ripple">` element at the click coordinates and removes it after the animation ends.

## Customization via CSS variables

| Variable | Default | Description |
|---|---|---|
| `--reb-ripple-color` | `rgba(255, 255, 255, 0.5)` | Color and opacity of the ripple |
| `--reb-ripple-duration` | `0.6s` | Duration of the ripple animation |
| `--reb-border-radius` | `6px` | Border radius of the button |
| `--reb-font-size` | `1rem` | Base font size for button text |

## Keyframe

The `reb-ripple` keyframe scales the ripple from `0` to `4×` its starting size while fading from `0.6` opacity to `0`.

## Accessibility

Respects `prefers-reduced-motion: reduce` — the ripple element is hidden entirely when the user requests reduced motion.
