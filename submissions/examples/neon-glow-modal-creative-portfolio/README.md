# CSS Neon Glow Modal — Creative Portfolio Layout

A pure CSS modal with a pulsing dual-tone neon glow (pink/violet) and a gradient text title, designed for creative portfolio and case-study showcases.

## CSS Custom Properties

| Property                            | Default   | Description                          |
|---------------------------------------|-----------|------------------------------------------|
| `--ease-modal-neon-color`             | `#ff3ec8` | Primary neon glow color (pink)             |
| `--ease-modal-neon-color-secondary`   | `#7c3aed` | Secondary glow color (violet)              |
| `--ease-modal-neon-duration`          | `0.45s`   | Open/close transition duration              |
| `--ease-modal-neon-easing`            | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-modal-bg`                     | `#150a1f` | Modal base background color                |
| `--ease-modal-radius`                 | `18px`    | Modal corner radius                        |
| `--ease-modal-max-width`              | `460px`   | Maximum modal width                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">View Project</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

Toggle `ease-modal-overlay--open` on the overlay to open/close. While open, the border glow pulses between pink and violet via the `ease-neon-pulse` keyframe.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open (Tab/Shift+Tab cycles within the modal).
- Focus moves to close button on open, returns to trigger on close.
- `Escape` and backdrop click both close the modal.
- `prefers-reduced-motion: reduce` disables the continuous pulse animation.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for full color/timing theming, consistent with the framework's zero-dependency animation philosophy. The gradient title uses `background-clip: text` for a portfolio-appropriate, design-forward aesthetic without images or icon fonts.
