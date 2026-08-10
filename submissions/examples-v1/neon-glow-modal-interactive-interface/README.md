# CSS Neon Glow Modal — Interactive Interface Layout

A pure CSS modal with a pulsing neon glow border effect, built entirely with layered `box-shadow` and CSS keyframe animation.

## CSS Custom Properties

| Property                            | Default   | Description                          |
|---------------------------------------|-----------|------------------------------------------|
| `--ease-modal-neon-color`             | `#00f0ff` | Primary neon glow color                    |
| `--ease-modal-neon-color-secondary`   | `#ff00e0` | Secondary accent color (close button)      |
| `--ease-modal-neon-duration`          | `0.4s`    | Open/close transition duration              |
| `--ease-modal-neon-easing`            | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-modal-bg`                     | `#0f0f1a` | Modal background color                     |
| `--ease-modal-radius`                 | `14px`    | Modal corner radius                        |
| `--ease-modal-max-width`              | `440px`   | Maximum modal width                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

Toggle `ease-modal-overlay--open` on the overlay to open/close. While open, the modal continuously pulses via the `ease-neon-pulse` keyframe animation.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open (Tab/Shift+Tab cycles within the modal).
- Focus moves to close button on open, returns to trigger on close.
- `Escape` and backdrop click both close the modal.
- `prefers-reduced-motion: reduce` disables the continuous pulse animation.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for full glow-color/timing theming, consistent with the framework's zero-dependency animation philosophy. The pulsing glow is achieved purely through layered `box-shadow` values in a keyframe animation — no filters or external effects libraries.
