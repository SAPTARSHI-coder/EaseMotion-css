# ease-gradient-border-spin

Animated gradient border that rotates around an element using conic-gradient.

## Issue
[#64937](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64937)

## Feature Overview
Spinning gradient border effect using CSS `conic-gradient` and `-webkit-mask-composite` to create transparent borders. The gradient rotates continuously creating a dynamic border animation. Supports multiple color schemes and speed variants.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--gbs-border-width` | `3px` | Border thickness |
| `--gbs-border-radius` | `12px` | Border radius |
| `--gbs-rotation-duration` | `2s` | Full rotation duration |
| `--gbs-bg` | `rgba(15,23,42,0.9)` | Inner background |

## Variants

| Class | Description |
|---|---|
| `.scheme-purple` | Purple gradient scheme |
| `.scheme-cyan` | Cyan gradient scheme |
| `.scheme-fire` | Red/amber gradient scheme |
| `.scheme-rainbow` | Full rainbow spectrum |
| `.thin` | 1px border |
| `.thick` | 4px border |
| `.heavy` | 6px border |
| `.size-sm` | Small (120px) |
| `.size-md` | Medium (200px) |
| `.size-lg` | Large (300px) |
| `.size-full` | Full width |
| `.radius-none` | No border radius |
| `.radius-pill` | Pill-shaped (999px) |
| `.speed-fast` | 0.8s rotation |
| `.speed-slow` | 5s rotation |
| `.reverse` | Counter-clockwise rotation |
| `.paused` | Animation paused |
| `.hover-start` | Starts on hover |
| `.glow` | Drop shadow glow |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="gb-container scheme-rainbow">
  <div class="gb-spin"></div>
  <div class="gb-content">
    <h3>Content</h3>
    <p>Your content here</p>
  </div>
</div>
```

## Accessibility
- Respects `prefers-reduced-motion` (rotation disabled, gradient shows static)
- Fallback gradient for browsers without conic-gradient animation support
