# CSS Spotlight Hover Effect

**Issue:** [#64134](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64134)

A spotlight hover effect where a radial gradient follows the cursor position
inside a card, creating a torch/flashlight illumination effect.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--spotlight-bg` | `#0a0a0f` | Page background |
| `--spotlight-surface` | `#12121a` | Card surface color |
| `--spotlight-primary` | `#a78bfa` | Primary gradient color |
| `--spotlight-secondary` | `#38bdf8` | Secondary gradient color |
| `--spotlight-accent` | `#f472b6` | Accent color |
| `--spotlight-text` | `#f1f5f9` | Text color |
| `--spotlight-radius` | `12px` | Border radius |
| `--spotlight-transition` | `0.4s cubic-bezier(...)` | Transition timing |

## Variants

| Variant | Description |
|---------|-------------|
| Default | Basic spotlight with radial gradient |
| `glow` | Adds gradient border on hover |
| `scale` | Subtle scale-up on hover |
| `theme-secondary` | Blue/cyan color theme |
| `theme-accent` | Pink/orange color theme |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Accessibility

- `prefers-reduced-motion`: Disables spotlight animation
- Semantic HTML with heading hierarchy
- Sufficient color contrast ratios
