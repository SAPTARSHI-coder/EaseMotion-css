# Tooltip Color Variants — Issue #14165

## What does this do?

Adds semantic color variant classes to the tooltip component: `.ease-tooltip-success`, `.ease-tooltip-warning`, `.ease-tooltip-danger`, and `.ease-tooltip-info`. Each variant overrides `--ease-tooltip-bg` and `--ease-tooltip-border` via CSS custom properties, so the arrow pseudo-element inherits the variant color automatically.

## How is it used?

```html
<span class="ease-tooltip-wrapper">
  <button>Save</button>
  <span class="ease-tooltip ease-tooltip-success">Changes saved</span>
</span>
```

## Variants

| Class                   | Background                         | Use case     |
| ----------------------- | ---------------------------------- | ------------ |
| `.ease-tooltip-default` | Grey (`#1f2937`)                   | Neutral info |
| `.ease-tooltip-success` | Green (`--ease-color-success-600`) | Confirmation |
| `.ease-tooltip-warning` | Amber (`--ease-color-warning-600`) | Caution      |
| `.ease-tooltip-danger`  | Red (`--ease-color-danger-600`)    | Errors       |
| `.ease-tooltip-info`    | Blue (`--ease-color-primary-600`)  | General info |

## Positions

| Class                  | Placement                               |
| ---------------------- | --------------------------------------- |
| _(none)_               | Top-center (above, arrow down)          |
| `.ease-tooltip-bottom` | Bottom-center (below, arrow up)         |
| `.ease-tooltip-right`  | Right-center (to the right, arrow left) |

## Why is it useful for EaseMotion CSS?

Semantic tooltips are essential for form validation, notification toasts, and status indicators. Color variants let developers communicate meaning at a glance without overriding styles manually.
