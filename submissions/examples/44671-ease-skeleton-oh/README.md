# Component: ease-skeleton

This submission implements the `ease-skeleton` component for GSSOC issue **#44671**.

## Description

Skeleton screen loader component for indicating loading content. Features a shimmer effect using `background: linear-gradient()` sliding left-to-right via `@keyframes`.

## Usage

### Text Skeleton

```html
<div class="ease-skeleton ease-skeleton--text"></div>
<div class="ease-skeleton ease-skeleton--text" style="width: 85%;"></div>
```

### Card Skeleton

```html
<div class="ease-skeleton ease-skeleton--card">
  <div class="card-content">
    <div class="ease-skeleton ease-skeleton--avatar"></div>
    <div class="ease-skeleton ease-skeleton--text"></div>
  </div>
</div>
```

### Avatar Skeleton

```html
<!-- Small (32px) -->
<div class="ease-skeleton ease-skeleton--avatar ease-skeleton--avatar-sm"></div>

<!-- Default (48px) -->
<div class="ease-skeleton ease-skeleton--avatar"></div>

<!-- Large (64px) -->
<div class="ease-skeleton ease-skeleton--avatar ease-skeleton--avatar-lg"></div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-skeleton-base` | `rgba(255, 255, 255, 0.08)` | Base background |
| `--ease-skeleton-shine` | `rgba(255, 255, 255, 0.15)` | Shimmer highlight |
| `--ease-skeleton-duration` | `1.5s` | Animation duration |
| `--ease-skeleton-radius` | `6px` | Border radius |

## Acceptance Criteria

- ✅ Classes: `.ease-skeleton`, `.ease-skeleton--text`, `.ease-skeleton--card`, `.ease-skeleton--avatar`
- ✅ Shimmer effect using `linear-gradient()` and `@keyframes`
- ✅ CSS variables for customization
- ✅ Dark mode compatible
- ✅ `prefers-reduced-motion` support
- ✅ No JavaScript required
