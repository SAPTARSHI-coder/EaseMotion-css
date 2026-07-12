# ease-btn-tilt — Tilt Hover Button

Submission for issue **#38564**: *"Add CSS Tilt Hover Button for Accessible Web Layouts"*

## What it is

A pure-CSS button with a smooth 3D tilt-on-hover interaction. No JavaScript,
no dependencies. Built to match EaseMotion CSS's naming conventions and
design-token approach.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<button class="ease-btn-tilt">Hover me</button>
```

Size variants:

```html
<button class="ease-btn-tilt ease-btn-sm">Small</button>
<button class="ease-btn-tilt ease-btn-lg">Large</button>
```

## Customization

All motion and transform values are exposed as CSS custom properties:

| Variable | Default | Description |
| --- | --- | --- |
| `--tilt-duration` | `250ms` | Transition duration |
| `--tilt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Transition easing curve |
| `--tilt-angle` | `8deg` | Rotation angle on hover/focus |
| `--tilt-scale` | `1.05` | Scale factor on hover/focus |
| `--tilt-perspective` | `400px` | 3D perspective depth |
| `--tilt-bg` | `var(--ease-color-primary, #6c63ff)` | Background color |
| `--tilt-color` | `#ffffff` | Text color |
| `--tilt-radius` | `var(--ease-radius-md, 0.5rem)` | Border radius |
| `--tilt-shadow` | `0 10px 20px rgba(0,0,0,0.18)` | Hover shadow |

Example override:

```html
<button class="ease-btn-tilt" style="--tilt-angle: 14deg; --tilt-bg: #f97316;">
  Custom tilt
</button>
```

## Accessibility

- Uses `:focus-visible` alongside `:hover`, so keyboard users (Tab + Enter)
  get the identical tilt effect and a visible focus ring — not just mouse
  users.
- Respects `prefers-reduced-motion`: transitions and transforms are disabled
  entirely for users who have that OS-level preference set.
- Uses semantic `<button>` markup, no custom ARIA needed.

## Files

- `demo.html` — standalone interactive demo
- `style.css` — the component styles
- `README.md` — this file