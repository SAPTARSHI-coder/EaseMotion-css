# ease-badge

## What does this do?

Provides a CSS-only Badge component for labels, counts, status indicators, and notification dots. Includes five color themes, three sizes, outline and dot variants, and positioned badge modifiers for absolute placement on icons and avatars.

## How is it used?

**Default badge:**

```html
<span class="ease-badge">Badge</span>
```

**Colored badge:**

```html
<span class="ease-badge ease-badge-primary">New</span>
<span class="ease-badge ease-badge-success">Active</span>
```

**Outline badge:**

```html
<span class="ease-badge ease-badge-outline ease-badge-primary">v2.0</span>
```

**Dot indicator:**

```html
<span class="ease-badge ease-badge-dot ease-badge-danger"></span>
```

**Positioned on an icon:**

```html
<div style="position: relative; display: inline-block;">
  🔔
  <span class="ease-badge ease-badge-sm ease-badge-danger ease-badge-top-right"
    >3</span
  >
</div>
```

### Variants

| Modifier                   | Effect                  |
| -------------------------- | ----------------------- |
| (none)                     | Neutral pill badge      |
| `.ease-badge-primary`      | Indigo fill             |
| `.ease-badge-success`      | Green fill              |
| `.ease-badge-warning`      | Amber fill              |
| `.ease-badge-danger`       | Red fill                |
| `.ease-badge-info`         | Cyan fill               |
| `.ease-badge-sm`           | Smaller font & padding  |
| `.ease-badge-lg`           | Larger font & padding   |
| `.ease-badge-outline`      | Transparent bg + border |
| `.ease-badge-dot`          | 0.5rem colored circle   |
| `.ease-badge-top-right`    | Absolute top-right      |
| `.ease-badge-top-left`     | Absolute top-left       |
| `.ease-badge-bottom-right` | Absolute bottom-right   |
| `.ease-badge-bottom-left`  | Absolute bottom-left    |

### CSS Custom Properties

| Property    | Default    | Description        |
| ----------- | ---------- | ------------------ |
| `--bsize`   | `0.75rem`  | Font size          |
| `--bpadx`   | `0.625rem` | Horizontal padding |
| `--bpady`   | `0.125rem` | Vertical padding   |
| `--bradius` | `9999px`   | Border radius      |

## Why is it useful?

Badges are essential for product labels (New, Sale), notification counts on icons, status indicators (Online/Away/Offline), and tagging UI elements. This component provides a consistent set of badge styles that integrate with EaseMotion's design language.

## Features

- Five color themes: primary, success, warning, danger, info
- Three sizes: sm, md (default), lg
- Outline variant with transparent background
- Dot variant for status/notification indicators
- Positioned modifiers (top-right, top-left, bottom-right, bottom-left)
- Dark mode support via `prefers-color-scheme`
- CSS custom properties for easy customization
