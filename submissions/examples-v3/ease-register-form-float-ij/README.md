# Register Form Float

A registration form with floating labels that animate above inputs on focus or when filled. Built with CSS custom properties and interactive JavaScript validation.

## Features

- Floating label animation with `translateY` + `scale` transition
- Input border color highlight on focus
- Password strength indicator
- Password confirm matching with live feedback
- Submit button with processing spinner state

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rff-duration` | `0.3s` | Transition duration for label and input animations |
| `--rff-input-bg` | `#f8fafc` | Default input background color |
| `--rff-input-focus` | `#e0f2fe` | Input background on focus |
| `--rff-label-color` | `#64748b` | Default label text color |
| `--rff-error-color` | `#ef4444` | Color used for error/validation messages |
| `--rff-radius` | `10px` | Border radius for inputs and button |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include the form markup from demo.html -->
```

The form uses the `placeholder=" "` (single space) trick combined with `:not(:placeholder-shown)` to detect filled state.
