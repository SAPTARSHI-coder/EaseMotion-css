# Login Form Slide

Animated login form with slide-in fields, staggered entrance delays, a loading spinner state, error shake, and a success checkmark transition.

## Features

- Input fields slide in from the left with staggered delays
- Loading spinner state while processing
- Error shake animation on wrong credentials
- Success checkmark transition on correct login
- Customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lfs-duration` | `0.4s` | Transition and animation duration |
| `--lfs-input-bg` | `#1e293b` | Input field background |
| `--lfs-input-focus` | `#3b82f6` | Input focus border colour |
| `--lfs-btn-color` | `#3b82f6` | Button background colour |
| `--lfs-error-color` | `#ef4444` | Error message colour |
| `--lfs-radius` | `8px` | Border radius for inputs and button |

## Usage

Include `style.css`. The form in `demo.html` uses demo credentials (`demo@test.com` / `pass123`). Customise the `simulateLogin` function to add real authentication.
