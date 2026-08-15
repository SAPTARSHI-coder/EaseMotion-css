# EaseMotion: Spring Knob Toggle

A checkbox-driven toggle whose knob travels with an overshoot spring curve and emits a status ripple when engaged.

## How is it used?
Use a native checkbox wrapped by `.spring-toggle`:
```html
<label class="spring-toggle">
  <input type="checkbox" checked>
  <span class="track"><span class="knob"></span><span class="ripple"></span></span>
  <span class="label-text">Notifications</span>
</label>
```
Add `.lg` for a larger variant.

## Why is it useful?
Native checkbox keeps it accessible and keyboard-operable; the spring easing (`cubic-bezier(.34,1.56,.64,1)`) gives the knob satisfying overshoot without JS, and `prefers-reduced-motion` flattens the curve.

## Tailoring Variable Hooks

| Variable | Baseline | Purpose |
| :--- | :--- | :--- |
| `--on` | `#34d399` | Engaged track / ripple color |
| `--spring` | `cubic-bezier(.34,1.56,.64,1)` | Knob overshoot easing |


---
_Self-contained, dependency-free HTML + CSS. Open `demo.html` directly in a browser._
