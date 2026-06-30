# ease-spinner

## What does this do?

Provides a CSS-only Loading Spinner component for indicating ongoing processes. Includes two spinner styles (border spinner and dots spinner), three sizes, three color variants, a fast speed option, and an overlay variant for container loading states.

## How is it used?

**Border spinner (default):**

```html
<div class="ease-spinner"></div>
```

**Dots spinner:**

```html
<div class="ease-spinner-dots"><span></span></div>
```

**With label:**

```html
<div class="ease-spinner ease-spinner-sm"></div>
<span class="ease-spinner-label">Loading...</span>
```

**Overlay (container loading state):**

```html
<div style="position: relative;">
  <div class="ease-spinner-overlay">
    <div class="ease-spinner"></div>
  </div>
  <!-- content behind overlay -->
</div>
```

### Variants

| Modifier                | Effect                                               |
| ----------------------- | ---------------------------------------------------- |
| (none)                  | Border spinner, primary color, 1.5rem, 0.6s          |
| `.ease-spinner-dots`    | Three bouncing dots (requires `<span></span>` child) |
| `.ease-spinner-sm`      | 1rem size (border spinner) or 0.375rem dots          |
| `.ease-spinner-lg`      | 2.5rem size (border spinner) or 0.75rem dots         |
| `.ease-spinner-primary` | Primary accent color (default)                       |
| `.ease-spinner-white`   | White spinner (for dark backgrounds)                 |
| `.ease-spinner-muted`   | Muted gray spinner                                   |
| `.ease-spinner-fast`    | Faster animation (0.4s border, 1s dots)              |
| `.ease-spinner-overlay` | Full-container overlay with backdrop                 |

### CSS Custom Properties

| Property      | Default   | Description          |
| ------------- | --------- | -------------------- |
| `--ssize`     | `1.5rem`  | Spinner width/height |
| `--sborder`   | `3px`     | Border thickness     |
| `--scolor`    | `#6c63ff` | Active/top color     |
| `--strack`    | `#e2e8f0` | Track/border color   |
| `--sduration` | `0.6s`    | Animation duration   |

## Why is it useful?

Loading spinners are essential for async operations, form submissions, button loading states, and content loading. This component provides a consistent set of spinner styles that integrate with EaseMotion's design language.

## Features

- Two spinner styles: border spinner (default) and dots spinner
- Three sizes: sm, md (default), lg
- Three color themes: primary, white, muted
- Fast speed variant
- Overlay variant for container loading states
- Inline label support
- Dark mode support via `prefers-color-scheme`
- Respects `prefers-reduced-motion`
- CSS custom properties for easy customization
