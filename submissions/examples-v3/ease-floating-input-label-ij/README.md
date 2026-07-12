# Floating Input Label

Form inputs with animated floating labels. The label moves up and scales down when the input is focused or contains a value.

## Features

- Smooth `transform: translateY` + `scale` transition
- Supports text, email, and password input types
- Handles prefilled values on page load
- Input border bottom expands with focus color
- Toggle and reset controls for demo

## Usage

```html
<div class="fl-group">
  <input type="text" class="fl-input" id="name" required>
  <label class="fl-label" for="name">Full Name</label>
</div>
```

## Custom Properties

| Property                    | Default     | Description                     |
|-----------------------------|-------------|---------------------------------|
| `--fl-label-duration`       | `0.25s`     | Label transition duration       |
| `--fl-input-border`         | `#334155`   | Default input border color       |
| `--fl-focus-color`          | `#6366f1`   | Focus border / label color      |
| `--fl-label-color`          | `#94a3b8`   | Default label color             |
| `--fl-label-active-color`   | `#a5b4fc`   | Active (floated) label color    |
| `--fl-radius`               | `8px`       | (Reserved) border-radius        |

## Behaviour

On focus or when the input has a value, the label transitions up (`translateY(-1.2rem)`) and scales to `0.8x`, changing color to the focus/active colour.
