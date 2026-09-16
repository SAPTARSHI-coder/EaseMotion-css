# CSS Float-Drift Drawer

A side drawer that slides in and then gently drifts in place with a slow floating motion.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-drawer-duration` | `0.45s` | Slide-in transition duration |
| `--ease-drawer-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Slide-in easing |
| `--ease-drawer-width` | `320px` | Drawer width |
| `--ease-drawer-bg` | `#ffffff` | Drawer background |

## Usage
```html
<button class="ease-drawer-trigger" id="openBtn">Open Drawer</button>
<div class="ease-drawer-overlay" id="overlay" role="dialog" aria-modal="true">
  <div class="ease-drawer" tabindex="-1">
    <button class="ease-drawer__close" id="closeBtn" aria-label="Close">✕</button>
    Content
  </div>
</div>
```

## Accessibility
`role="dialog"`, `aria-modal`, Escape-to-close, backdrop click, focus moves to close button on open. `prefers-reduced-motion` disables the drift loop.

## Why it fits EaseMotion CSS
Pure CSS slide + ambient drift animation, `ease-` prefixed classes, themeable, zero dependencies.
