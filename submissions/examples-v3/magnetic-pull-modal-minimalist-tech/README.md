# CSS Magnetic Pull Modal — Minimalist Tech Layout

A pure CSS modal that enters with a restrained magnetic-pull motion — drawn in and settling with a light elastic snap — styled with a clean, minimal aesthetic.

## CSS Custom Properties

| Property                     | Default                              | Description                                |
|-------------------------------|-----------------------------------------|--------------------------------------------|
| `--ease-modal-pull-duration`  | `0.45s`                                 | Duration of the pull-in entrance animation  |
| `--ease-modal-pull-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`    | Overshoot easing curve for the pull effect  |
| `--ease-modal-pull-distance`  | `32px`                                   | Distance the modal travels on entrance      |
| `--ease-modal-backdrop-color` | `rgba(20, 20, 22, 0.5)`                | Overlay backdrop color                      |
| `--ease-modal-bg`             | `#ffffff`                                | Modal background color                      |
| `--ease-modal-border-color`   | `#e5e5e7`                                | Modal border color                          |
| `--ease-modal-accent`         | `#111111`                                | Primary accent color (buttons, title)       |
| `--ease-modal-radius`         | `10px`                                   | Modal corner radius                         |
| `--ease-modal-max-width`      | `420px`                                  | Maximum modal width                         |
| `--ease-modal-focus-ring`     | `#111111`                                | Focus outline color                         |

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

Uses `ease-` prefixed classes and exposes timing, easing, and pull distance through CSS custom properties, matching the framework's zero-dependency, animation-first philosophy. Minimal JS handles only the class toggle and accessibility — not the animation itself.
