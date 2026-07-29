# CSS Magnetic Pull Modal — Cyberpunk Neon Layout

A pure CSS modal that snaps into view with a magnetic-pull entrance — drawn in from above and settling with an elastic overshoot — styled with a glowing neon cyberpunk aesthetic.

## CSS Custom Properties

| Property                     | Default                                   | Description                                |
|-------------------------------|---------------------------------------------|--------------------------------------------|
| `--ease-modal-pull-duration`  | `0.5s`                                       | Duration of the pull-in entrance animation  |
| `--ease-modal-pull-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`         | Overshoot easing curve for the pull effect  |
| `--ease-modal-pull-distance`  | `40px`                                        | Distance the modal travels on entrance      |
| `--ease-modal-backdrop-color` | `rgba(5, 0, 15, 0.75)`                       | Overlay backdrop color                      |
| `--ease-modal-bg`             | `#0d0b1e`                                     | Modal background color                      |
| `--ease-modal-border-glow`    | `#ff2ec4`                                     | Neon border/glow accent color               |
| `--ease-modal-accent`         | `#00eaff`                                     | Secondary neon accent color                 |
| `--ease-modal-radius`         | `12px`                                        | Modal corner radius                         |
| `--ease-modal-max-width`      | `440px`                                       | Maximum modal width                         |
| `--ease-modal-focus-ring`     | `#00eaff`                                     | Focus outline color                         |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

Toggle `ease-modal-overlay--open` on the overlay to open/close. The magnetic-pull entrance is driven purely by a CSS `transform`/`opacity` transition — no JS animation logic required.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to the title.
- Full focus trap while open (Tab/Shift+Tab cycle within the modal).
- Focus moves to the close button on open, returns to the trigger on close.
- `Escape` key and backdrop click both close the modal.
- Visible `:focus-visible` outlines on every interactive element.
- `prefers-reduced-motion: reduce` disables all transform/transition animations.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and exposes timing, easing, and distance through CSS custom properties, matching the framework's zero-dependency, animation-first philosophy. Minimal JS handles only the class toggle and accessibility — not the animation itself.
