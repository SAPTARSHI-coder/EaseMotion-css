# Component: ease-firefly-avatar

This submission implements the `ease-firefly-avatar` component for GSSOC issue **#41504**.

## Description

An avatar component with animated firefly particles floating around it. Features glowing particle effects that create a magical firefly ambiance.

## Usage

```html
<div class="ease-firefly-avatar">
  <img src="avatar.jpg" alt="User avatar">
  <div class="firefly firefly-1"></div>
  <div class="firefly firefly-2"></div>
  <div class="firefly firefly-3"></div>
  <div class="firefly firefly-4"></div>
</div>
```

### Color Variants

```html
<div class="ease-firefly-avatar ease-firefly-primary">Primary</div>
<div class="ease-firefly-avatar ease-firefly-success">Success (Green)</div>
<div class="ease-firefly-avatar ease-firefly-warning">Warning (Yellow)</div>
<div class="ease-firefly-avatar ease-firefly-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-firefly-avatar ease-firefly-sm">Small</div>
<div class="ease-firefly-avatar ease-firefly-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--firefly-color` | `#3b82f6` | Firefly particle color |
| `--avatar-size` | `100px` | Avatar diameter |
| `--firefly-size` | `6px` | Particle size |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Firefly particle animation
- ✅ Glowing ambient effect
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
