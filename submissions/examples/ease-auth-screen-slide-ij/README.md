# Auth Screen Slide

A login/signup screen with a sliding panel toggle. Forms fade in with staggered inputs.

## Features

- Sliding panel between login and signup
- Staggered input fade-in animation
- Social login buttons
- Panel color accent

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ass-duration` | `0.5s` | Slide animation duration |
| `--ass-panel-bg` | `#f59e0b` | Toggle panel background |
| `--ass-btn-color` | `#f59e0b` | Submit button color |
| `--ass-input-bg` | `#1e293b` | Input background |
| `--ass-radius` | `12px` | Border radius |

## Usage

```html
<div class="ass-container">
  <div class="ass-forms">...</div>
  <div class="ass-panel">...</div>
</div>
```

Toggle `.show-login` / `.show-signup` on the container.
