# Animated Search / Expand Input — Issue #14186

## What does this do?

A CSS-only animated search input with expand-on-focus behavior. The input collapses to a 40px circle by default and smoothly expands to 280px when focused, revealing the placeholder text and a fully faded-in search icon.

## How is it used?

```html
<div class="ease-search-wrapper">
  <svg class="ease-search-icon"><!-- search icon --></svg>
  <input class="ease-search-input" type="text" placeholder="Search..." />
</div>
```

## Classes

| Class                     | Description                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `.ease-search-wrapper`    | Container; controls width via `--ease-search-collapsed` / `--ease-search-expanded` |
| `.ease-search-input`      | The text input; inherits width, border-radius 20px                                 |
| `.ease-search-icon`       | SVG icon; positioned absolutely, fades on wrapper focus                            |
| `.ease-search-wrapper-sm` | Small variant: 34px / 220px                                                        |
| `.ease-search-wrapper-lg` | Large variant: 48px / 340px                                                        |

## CSS Custom Properties

| Property                  | Default                              | Description                                         |
| ------------------------- | ------------------------------------ | --------------------------------------------------- |
| `--ease-speed-medium`     | 300ms                                | Transition duration for width, icon opacity, border |
| `--ease-ease-out`         | cubic-bezier(0.25, 0.46, 0.45, 0.94) | Easing function                                     |
| `--ease-search-collapsed` | 40px                                 | Width when unfocused                                |
| `--ease-search-expanded`  | 280px                                | Width when focused                                  |

## Why is it useful for EaseMotion CSS?

Animated search inputs are a common UI pattern (navbars, header toolbars). This provides a drop-in component with accessible focus handling, dark mode, and size variants.
