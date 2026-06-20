# ease-toggle

## What does this do?

Provides a CSS-only Toggle Switch component for boolean settings, feature flags, and preference toggles. Built on a hidden checkbox for full accessibility. Supports three sizes, three color variants, disabled state, smooth animation, and dark mode.

## How is it used?

**Basic toggle with label:**

```html
<label class="ease-toggle">
  <input type="checkbox" checked />
  <span class="ease-toggle-track">
    <span class="ease-toggle-knob"></span>
  </span>
  <span class="ease-toggle-label">Dark Mode</span>
</label>
```

**With size and color:**

```html
<label class="ease-toggle ease-toggle-sm ease-toggle-success">
  <input type="checkbox" checked />
  ...
</label>
```

**Disabled state:**

```html
<label class="ease-toggle">
  <input type="checkbox" disabled />
  ...
</label>
```

### Variants

| Modifier | Effect |
|---|---|
| (none) | Default primary color, md size |
| `.ease-toggle-sm` | Smaller track and knob |
| `.ease-toggle-lg` | Larger track and knob |
| `.ease-toggle-success` | Green active color |
| `.ease-toggle-danger` | Red active color |
| `input:disabled` | Reduced opacity, no interaction |

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tw` | `2.75rem` | Track width |
| `--th` | `1.5rem` | Track height |
| `--kw` | `1.125rem` | Knob width |
| `--kh` | `1.125rem` | Knob height |
| `--koff` | `0.1875rem` | Knob offset from top/left |
| `--kshift` | `1.25rem` | Knob translate on checked |
| `--ton` | `#6c63ff` | Track color when checked |
| `--toff` | `#cbd5e1` | Track color when unchecked |

## Why is it useful?

Toggle switches are essential for settings panels, preferences, feature flags, and any boolean configuration UI. This component provides a consistent toggle pattern that integrates with EaseMotion's design language.

## Features

- CSS-only, no JavaScript required
- Built on a hidden checkbox for full accessibility
- Smooth knob sliding animation on toggle
- Three sizes: sm, md (default), lg
- Three color variants: primary (default), success, danger
- Disabled state with reduced opacity
- Visible focus ring for keyboard navigation
- Label element that triggers the toggle
- Respects `prefers-reduced-motion`
- Dark mode support via `prefers-color-scheme`
- CSS custom properties for easy customization
