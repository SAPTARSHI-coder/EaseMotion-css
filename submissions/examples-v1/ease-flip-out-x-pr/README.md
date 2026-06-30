# Animated Flip Out X (`ease-flip-out-x`)

A self-contained exit animation utility that flips elements away by rotating them around the horizontal (X) axis.

---

## 1. What does this do?
It provides an exit animation utility (`ease-flip-out-x`) that transitions elements from fully visible to completely hidden (`opacity: 1` to `opacity: 0`) while rotating them around the horizontal (X) axis from `rotateX(0deg)` to `rotateX(90deg)` using standard ease-in timing (`cubic-bezier(0.4, 0, 1, 1)`).

---

## 2. How is it used?

Apply the base class `.ease-flip-out-x` to the element you want to animate out:

> [!NOTE]
> 3D rotation animations require a perspective perspective context. You can apply the helper class `.ease-3d-parent` to the parent container.

```html
<div class="ease-3d-parent">
  <div class="widget-card ease-flip-out-x">
    Dashboard Widget Content
  </div>
</div>
```

### Configurable Modifiers

Combine the base class with speed, angle, and origin modifier classes:

- **Speed Modifiers**:
  - `.exit-fast`: Speeds up the exit transition to `0.25s`.
  - `.exit-slow`: Slows down the exit transition to `0.8s`.
  - *Default*: `0.4s`

- **Angle Modifiers**:
  - `.exit-angle-reverse`: Flips to `-90deg` instead of `90deg`.
  - `.exit-angle-shallow`: Flips to a shallow `45deg` angle.
  - *Default*: `90deg`

- **Transform Origin Modifiers**:
  - `.exit-origin-top`: Flips relative to the top hinge edge.
  - `.exit-origin-bottom`: Flips relative to the bottom hinge edge.
  - *Default*: `center`

```html
<!-- Example of a fast top-hinged flip exit -->
<div class="ease-3d-parent">
  <div class="warning-alert ease-flip-out-x exit-fast exit-origin-top">
    Warning Notice
  </div>
</div>
```

### Custom Styling with CSS Variables
Override the defaults dynamically via inline styles or custom selectors using the following CSS custom properties:

- `--ease-flip-angle` (Default: `90deg`)
- `--ease-flip-duration` (Default: `0.4s`)
- `--ease-flip-easing` (Default: `cubic-bezier(0.4, 0, 1, 1)`)

```html
<div class="custom-widget ease-flip-out-x" style="--ease-flip-angle: -60deg; --ease-flip-duration: 0.5s;">
  Customized exit widget.
</div>
```

---

## 3. Why is it useful?

- **Pairs with Entrance**: Serves as the natural exit animation counterpart for `.ease-flip-in-x`, completing the animation lifecycle of widgets and dialogs.
- **Zero JavaScript**: Pure CSS-driven 3D animation ensuring maximum performance and zero scripting overhead.
- **Highly Configurable**: Custom properties allow developers to tweak angles and speeds to fit any theme or system.
- **Accessibility Native**: Includes a media query check for `prefers-reduced-motion: reduce` to disable 3D rotation and instantly hide the element.
