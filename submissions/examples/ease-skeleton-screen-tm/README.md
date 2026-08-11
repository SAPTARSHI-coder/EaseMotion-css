# CSS Skeleton Screen Loading

**Issue:** [#64075](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64075)

Skeleton loading placeholders with shimmer and pulse animations
to indicate content is loading, improving perceived performance.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--skel-bg` | `#0f172a` | Page background |
| `--skel-base` | `#1e293b` | Skeleton base color |
| `--skel-highlight` | `#334155` | Shimmer highlight |
| `--skel-primary` | `#3b82f6` | Accent color |
| `--skel-anim-duration` | `1.6s` | Shimmer cycle duration |

## Variants

| Variant | Description |
|---------|-------------|
| `skel-shimmer` | Left-to-right shimmer sweep |
| `skel-pulse` | Opacity pulsing animation |
| `skel-dark` | Darker shimmer background |
| `skel-accent` | Blue-tinted shimmer |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="skel-shimmer skel-card">Loading...</div>
```

## Accessibility

- `prefers-reduced-motion`: Replaces animation with static muted color
- Skeletons communicate loading state to all users
