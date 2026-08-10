# SVG Checkmark Draw Animation

A premium self-drawing SVG checkmark animation suitable for form submissions, success modal states, or payment verification screens. This effect uses native SVG path stroke-dasharray and stroke-dashoffset transitions combined with configurable CSS custom properties.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating how path-drawing animations can be implemented with native variables.

### Classes:
- `.ease-checkmark-draw`: Targets the SVG checkmark path to draw the stroke-by-stroke outline dynamically.
- Configurable variables:
  - `--ease-check-color`: Controls the checkmark stroke outline color (defaults to success green).
  - `--ease-check-speed`: Controls the checkmark animation drawing speed (defaults to `0.5s`).

### Usage in HTML:
```html
<svg class="ease-checkmark" viewBox="0 0 52 52">
  <circle class="ease-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
  <path class="ease-checkmark-draw" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
</svg>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
