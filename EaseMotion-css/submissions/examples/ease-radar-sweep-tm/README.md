# CSS Radar Sweep Animation

**Issue:** [#64129](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64129)

A radar/scan display with rotating sweep line, concentric rings, and
animated blip dots using CSS `conic-gradient` and keyframe animations.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--radar-bg` | `#060a12` | Page background |
| `--radar-surface` | `#0c1424` | Radar disc fill |
| `--radar-ring` | `rgba(16,185,129,0.2)` | Ring color |
| `--radar-sweep` | `#10b981` | Sweep beam color |
| `--radar-dot` | `#34d399` | Blip dot color |
| `--radar-size` | `300px` | Radar disc diameter |

## Variants

| Variant | Description |
|---------|-------------|
| `green` | Green sweep (default) |
| `blue` | Blue sweep variant |
| `purple` | Purple sweep variant |
| `slow` | 8s sweep cycle |
| `fast` | 2s sweep cycle |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Accessibility

- `prefers-reduced-motion`: Disables spin and blip animations
- Pure CSS animation, no JavaScript required
