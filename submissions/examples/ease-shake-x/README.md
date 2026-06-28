# ease-shake-x

A horizontal shake animation utility for EaseMotion CSS. Designed for form validation feedback — shake an input field when the user submits invalid data.

Resolves: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5725

## What it does

Applies a rapid left-right shake on the X axis to any element. The animation decays in amplitude to feel natural and give the impression of a field "protesting" invalid input.

## How to use it

```html
<!-- Apply the class directly in HTML -->
<input class="ease-shake-x" type="text">

<!-- Or toggle it via JavaScript on form submit -->
<script>
  function showError(element) {
    element.classList.remove('ease-shake-x');
    void element.offsetWidth; // force reflow to replay animation
    element.classList.add('ease-shake-x');
  }
</script>
```

## Classes

| Class | Role |
|---|---|
| `ease-shake-x` | Triggers a horizontal shake animation (runs once, 0.5s). |

## Why it fits EaseMotion CSS

- Horizontal shake on invalid input is a universal UX pattern used in login forms, search bars, and validation flows.
- The decaying amplitude (8px → 6px → 3px) feels natural and professional.
- Pure CSS keyframe — no JavaScript needed to trigger; JS is only needed to re-run it.
- Fully accessible: respects `prefers-reduced-motion`.

## Browser support

Works in all modern browsers (Chrome, Firefox, Edge, Safari).
