# ease-feature-pure-css-animated-tabs-component

Animated accordion / collapsible component with smooth expand animations.

## Issue

- **Issue**: [#64250](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64250)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-feature-pure-css-animated-tabs-component-color` | `#6c63ff` | Primary accent color |
| `--ease-feature-pure-css-animated-tabs-component-color-light` | `#a09af8` | Hover/focus lighter variant |
| `--ease-feature-pure-css-animated-tabs-component-color-dark` | `#4b44cc` | Active/dark variant |
| `--ease-feature-pure-css-animated-tabs-component-accent` | `#f59e0b` | Secondary accent |
| `--ease-feature-pure-css-animated-tabs-component-bg` | `#f8fafc` | Container background |
| `--ease-feature-pure-css-animated-tabs-component-radius` | `0.5rem` | Border radius |
| `--ease-feature-pure-css-animated-tabs-component-speed` | `300ms` | Animation duration |
| `--ease-feature-pure-css-animated-tabs-component-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

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

<div class="ease-feature-pure-css-animated-tabs-component-container">
  <div class="ease-feature-pure-css-animated-tabs-component-item" onclick="this.classList.toggle('active')">
    <div class="ease-feature-pure-css-animated-tabs-component-header">
      <span>Question text</span>
      <span class="ease-feature-pure-css-animated-tabs-component-icon"></span>
    </div>
    <div class="ease-feature-pure-css-animated-tabs-component-body">
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
