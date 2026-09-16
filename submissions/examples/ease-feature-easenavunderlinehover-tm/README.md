# ease-feature-easenavunderlinehover

Animated accordion / collapsible component with smooth expand animations.

## Issue

- **Issue**: [#64201](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64201)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-feature-easenavunderlinehover-color` | `#6c63ff` | Primary accent color |
| `--ease-feature-easenavunderlinehover-color-light` | `#a09af8` | Hover/focus lighter variant |
| `--ease-feature-easenavunderlinehover-color-dark` | `#4b44cc` | Active/dark variant |
| `--ease-feature-easenavunderlinehover-accent` | `#f59e0b` | Secondary accent |
| `--ease-feature-easenavunderlinehover-bg` | `#f8fafc` | Container background |
| `--ease-feature-easenavunderlinehover-radius` | `0.5rem` | Border radius |
| `--ease-feature-easenavunderlinehover-speed` | `300ms` | Animation duration |
| `--ease-feature-easenavunderlinehover-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard accordion with primary color accent bar
- **size-sm**: Compact layout for dense UI
- **size-lg**: Larger layout with more padding
- **variant-success**: Green accent (#15803d)
- **variant-warning**: Amber accent (#b45309)
- **variant-danger**: Red accent (#b91c1c)
- **variant-info**: Blue accent (#3b82f6)

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="ease-feature-easenavunderlinehover-container">
  <div class="ease-feature-easenavunderlinehover-item" onclick="this.classList.toggle('active')">
    <div class="ease-feature-easenavunderlinehover-header">
      <span>Question text</span>
      <span class="ease-feature-easenavunderlinehover-icon"></span>
    </div>
    <div class="ease-feature-easenavunderlinehover-body">
      Answer content goes here.
    </div>
  </div>
</div>
```

## Accessibility

- Respects `prefers-reduced-motion` — animations disabled when requested
- Keyboard navigable with semantic HTML structure
- Sufficient color contrast on all variants

## Dark Mode

Automatically adapts to `prefers-color-scheme: dark` with adjusted background and text colors.
