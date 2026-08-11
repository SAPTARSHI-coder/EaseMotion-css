# CSS Blur-Entrance Modal — Accessible Web Layout

A pure CSS modal with a gentle, low-intensity blur-to-focus entrance, calibrated for high-contrast, accessibility-conscious interfaces.

## CSS Custom Properties

| Property                     | Default   | Description                          |
|--------------------------------|-----------|------------------------------------------|
| `--ease-modal-blur-amount`     | `10px`    | Starting blur radius (kept subtle for reduced visual disorientation) |
| `--ease-modal-blur-duration`   | `0.4s`    | Open/close transition duration              |
| `--ease-modal-blur-easing`     | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing curve |
| `--ease-modal-bg`              | `#ffffff` | Modal background color                     |
| `--ease-modal-radius`          | `14px`    | Modal corner radius                        |
| `--ease-modal-max-width`       | `440px`   | Maximum modal width                        |
| `--ease-modal-focus-ring`      | `#0ea5e9` | Focus outline color                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

## Accessibility

- **Reduced blur intensity** (10px vs. the 16-20px used in other variants) — heavy blur transitions can be disorienting for users with vestibular or visual processing sensitivities.
- High-contrast light theme with dark text on white.
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open, focus returns to trigger on close.
- `Escape` key and backdrop click both close the modal.
- Visible `:focus-visible` outlines on all interactive elements.
- `prefers-reduced-motion: reduce` collapses all transitions to near-instant.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for theming, consistent with the framework's philosophy, while showing how the blur-entrance pattern can be tuned for accessibility without losing its visual identity.
