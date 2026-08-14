# CSS Rotate-Fade Drawer

A side drawer that swings into view with a 3D `rotateY` on its hinge edge, combined with a fade-in.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-drawer-duration` | `0.45s` | Transition duration |
| `--ease-drawer-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing |
| `--ease-drawer-width` | `320px` | Drawer width |

## Usage
```html
<button class="ease-drawer-trigger" id="openBtn">Open Drawer</button>
<div class="ease-drawer-overlay" id="overlay" role="dialog" aria-modal="true">
  <div class="ease-drawer" tabindex="-1">Content</div>
</div>
```

## Accessibility
`role="dialog"`, `aria-modal`, Escape-to-close, backdrop click, focus management on open/close. `prefers-reduced-motion` shortens the transition duration.

## Why it fits EaseMotion CSS
Pure CSS 3D `rotateY` + opacity transition, `ease-` prefixed classes, themeable.
