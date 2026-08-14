# PIN Input Code

Individual digit boxes for PIN / OTP entry with validation, auto-advance, and feedback animations.

## Features

- Auto-advance to next box on input
- Backspace returns to previous box
- Focus animation (lift + glow)
- Shake animation on invalid code
- Success / error visual states
- Configurable digit count
- Blurred expected code with toggle reveal

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--pic-duration` | `0.25s` | Transition duration |
| `--pic-input-bg` | `#f2f2f7` | Input background |
| `--pic-input-focus` | `#007aff` | Focus border color |
| `--pic-filled-color` | `#1c1c1e` | Filled digit color |
| `--pic-error-color` | `#dc2626` | Error color |
| `--pic-radius` | `10px` | Border radius |
