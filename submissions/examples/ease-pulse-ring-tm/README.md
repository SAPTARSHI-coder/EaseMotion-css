# CSS Pulse Ring Animation Utility

**Issue:** [#64031](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64031)

Scalable pulse ring animation with expanding wave effect and multiple
color/size/speed variants. Pure CSS, no JavaScript required.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--pulse-primary` | `#22d3ee` | Pulse ring color |
| `--pulse-bg` | `#060a14` | Page background |
| `--pulse-surface` | `#0f172a` | Badge surface |
| `--pulse-size` | `80px` | Default ring size |

## Color Variants

| Variant | Color |
|---------|-------|
| `cyan` | Cyan (default) |
| `blue` | Blue |
| `purple` | Purple |
| `green` | Green |
| `red` | Red |

## Size Variants

| Variant | Size |
|---------|------|
| `sm` | 48px |
| `md` | 80px (default) |
| `lg` | 120px |

## Style Variants

| Variant | Description |
|---------|-------------|
| Default | Expanding ring wave |
| `solid` | Box-shadow pulse on dot |
| `fast` | 1.2s animation cycle |
| `slow` | 3s animation cycle |
| `badge` | Notification badge with count |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="pulse-ring cyan md">
  <div class="pulse-dot"></div>
</div>
```

## Accessibility

- `prefers-reduced-motion`: Replaces animation with static ring
- Pure CSS, no JavaScript required
- Color variants maintain sufficient contrast
