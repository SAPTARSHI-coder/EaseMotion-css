# Animated Flip In Y (`ease-flip-in-y`)

## What does this do?

The `ease-flip-in-y` utility provides a 3D entrance animation where an element flips into view by rotating around the vertical (Y) axis.

It matches the structure of `ease-flip-in-x`, but operates on the vertical axis.

## How is it used?

Apply the perspective helper class `.ease-3d-parent` on the parent container, and add the base class `.ease-flip-in-y` to the child element:

```html
<!-- Parent container with perspective -->
<div class="ease-3d-parent">
  <!-- Default 3D flip-in-y entrance -->
  <div class="ease-flip-in-y">Your card content here</div>
</div>
```

### Configurable CSS Custom Properties

You can override animation behaviors using inline CSS custom properties:

```html
<div
  class="ease-flip-in-y"
  style="--ease-flip-angle: -180deg; --ease-flip-duration: 1.2s;"
>
  Deep custom rotation
</div>
```

| Variable               | Default Value                   | Description                                               |
| :--------------------- | :------------------------------ | :-------------------------------------------------------- |
| `--ease-flip-angle`    | `90deg`                         | The starting rotation angle on the Y-axis.                |
| `--ease-flip-duration` | `0.6s`                          | The time it takes to complete the flip.                   |
| `--ease-flip-easing`   | `cubic-bezier(0.25, 1, 0.5, 1)` | Timing function (custom ease-out).                        |
| `--ease-perspective`   | `1000px`                        | The 3D perspective depth applied to the parent container. |

---

## Modifiers

You can combine the base class `.ease-flip-in-y` with any of the following modifiers:

### 1. Speed Modifiers

- `.flip-fast`: Shortens the animation duration to `0.35s`.
- `.flip-slow`: Lengthens the animation duration to `1s`.

### 2. Angle Modifiers

- `.flip-angle-reverse`: Flips from `-90deg` instead of `90deg` (reversing rotation direction).
- `.flip-angle-shallow`: Subtle entrance starting at `45deg`.

### 3. Transform Origin Modifiers

- `.flip-origin-left`: Flips open like a book page from the left edge.
- `.flip-origin-right`: Flips open from the right edge.

---

## Accessibility

Includes full compatibility for users with motion sensitivity. When `prefers-reduced-motion` is detected:

- The 3D rotation and translations are disabled.
- The element immediately renders fully visible (`opacity: 1`, `transform: none`) to prevent motion sickness.
