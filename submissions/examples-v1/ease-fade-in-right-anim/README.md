# ease-fade-in-right — Fade In While Sliding from Left

Enter animation: element fades in while sliding from the left to its natural position. Enter counterpart to `ease-fade-out-left`.

## Classes

| Class | Distance | Description |
|-------|----------|-------------|
| `.ease-fade-in-right` | 32px | Default entry from left |
| `+ .ease-fade-in-right-sm` | 16px | Subtle entry |
| `+ .ease-fade-in-right-lg` | 64px | Dramatic entry |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-fade-in-right-distance` | `32px` | Start offset from left |
| `--ease-fade-in-right-duration` | `--ease-speed-medium` | Duration |
| `--ease-fade-in-right-easing` | `--ease-ease` | Timing function |

## Direction family (complete)

| Direction | Enter | Exit |
|-----------|-------|------|
| → Right (from left) | `.ease-fade-in-right` ← this | `.ease-fade-out-left` |
| ← Left (from right) | `.ease-fade-in-left` | `.ease-fade-out-right` |

## Usage

```html
<div class="ease-fade-in-right">Slides in from left</div>

<!-- Stagger -->
<div class="ease-fade-in-right" style="animation-delay: 0s">Item 1</div>
<div class="ease-fade-in-right" style="animation-delay: 0.1s">Item 2</div>

<!-- Custom -->
<div class="ease-fade-in-right" style="--ease-fade-in-right-distance: 80px;">
  Slides in from further left
</div>
```

## Use cases

- Back navigation (page slides in from left)
- Sidebar content entry
- Left-to-right list reveal
- Undo action feedback

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11829
