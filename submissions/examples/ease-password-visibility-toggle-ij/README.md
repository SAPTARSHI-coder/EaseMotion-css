# Password Visibility Toggle

A smooth animated password visibility toggle component with eye icon morphing, strength indication, and multiple demo states.

## Features

- Eye icon morphs between open and slash states
- Password input smoothly transitions between dots and visible text
- Real-time password strength indicator
- Multiple examples: default, weak password, disabled state
- Accessible with proper ARIA labels and keyboard support

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pvt-duration` | `0.3s` | Transition duration |
| `--pvt-input-bg` | `#ffffff` | Input background color |
| `--pvt-icon-color` | `#6b7280` | Default icon color |
| `--pvt-active-color` | `#3b82f6` | Active/focus color |
| `--pvt-radius` | `8px` | Input border radius |

## Usage

```html
<div class="pvt-field">
  <label for="mypass">Password</label>
  <div class="pvt-wrapper">
    <input type="password" id="mypass" class="pvt-input">
    <button class="pvt-toggle" data-target="mypass">
      <!-- eye SVG -->
    </button>
  </div>
</div>
```

## Browser Support

Works in all modern browsers supporting CSS custom properties and SVG.
