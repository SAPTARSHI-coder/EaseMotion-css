# CSS Conic Gradient Progress Ring Example

This submission demonstrates the implementation of circular progress indicators and loader rings using pure CSS `conic-gradient` masks and CSS Custom Properties.

---

## Technical Overview

The circular ring is built using two overlaid elements:

1. **Outer Circle (`.conic-ring`)**: Styled with a `conic-gradient` background. The gradient's color boundary is tied to the `--progress` CSS custom variable.
2. **Inner Circle (`.conic-ring__inner`)**: A slightly smaller, solid-colored absolute circle nested inside the outer circle. This masks out the center, leaving a hollow ring.

---

## Smooth Animation with @property

Standard CSS does not support direct transition animations on gradient colors or angles. To make the progress fill animate smoothly on page load, we register `--progress` as a custom property:

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
```

This tells the browser's layout engine to treat `--progress` as a numeric percentage, enabling keyframe interpolation from `0%` to the target value (e.g. `75%`).

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Verify that two progress rings (Aurora Progress, Volcanic Alert) smoothly fill to their respective percentages (75% and 90%) upon loading.
3. Drag the range slider in the "Interactive Customizer" section.
4. Verify that the third ring updates its fill angle in real-time to match the slider value.
