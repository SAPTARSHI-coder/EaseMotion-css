# Loading Button Spinner Alignment (Issue #4725)

## What does this do?
Resolves an alignment bug where the button spinner is offset off-center due to a double translate override in keyframes.

## How is it used?
When a button gets the `.ease-btn-loading` class, the spinner is centered inside the button.

## Why is it useful?
It ensures that the loading spinner is visually centered, correcting a design misalignment.

## Affected File (maintainer will copy to `components/buttons.css`)
Modify the `@keyframes ease-kf-btn-spin` keyframes in `components/buttons.css`:
```css
@keyframes ease-kf-btn-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
