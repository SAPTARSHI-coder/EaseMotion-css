# Component: ease-swing-error-page

This submission implements the `ease-swing-error-page` component for GSSOC issue **#41502**.

## Description

An error page component with swing animation effect. Features a pendulum-like icon animation that draws attention to error states.

## Usage

```html
<div class="ease-swing-error-page">
  <div class="error-icon-container">
    <div class="swing-icon">
      <!-- Error icon SVG -->
    </div>
  </div>
  <div class="error-code">404</div>
  <div class="error-message">
    <h2>Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
  <div class="error-actions">
    <a href="#" class="error-btn error-btn-primary">Go Home</a>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-swing-error-page ease-swing-danger">Danger (Red)</div>
<div class="ease-swing-error-page ease-swing-warning">Warning (Yellow)</div>
<div class="ease-swing-error-page ease-swing-success">Success (Green)</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--error-accent` | `#3b82f6` | Error accent color |
| `--swing-duration` | `2s` | Swing animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Swing animation effect
- ✅ Error code with gradient styling
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
