# ease-float-label — Floating Label Input Component

## What does this do?

Creates an input where the placeholder/label smoothly transitions to a floating position above the input when focused or when a value is present. Pure CSS — no JS required for basic functionality.

## How is it used?

```html
<div class="ease-float-label">
  <input type="text" class="ease-float-label-input" placeholder=" " />
  <label class="ease-float-label-text">Email address</label>
</div>
```

_Note: The `placeholder=" "` (a space) is required for the CSS `:not(:placeholder-shown)` selector to detect a filled value._

### Classes

| Class                     | Description                    |
| ------------------------- | ------------------------------ |
| `.ease-float-label`       | Container (position: relative) |
| `.ease-float-label-input` | The input element              |
| `.ease-float-label-text`  | The floating label             |

## Custom Properties

| Property                          | Default   | Description               |
| --------------------------------- | --------- | ------------------------- |
| `--ease-float-label-duration`     | `0.2s`    | Transition duration       |
| `--ease-float-label-active-color` | `#6c63ff` | Label color when focused  |
| `--ease-float-label-scale`        | `0.85`    | Label scale when floating |
