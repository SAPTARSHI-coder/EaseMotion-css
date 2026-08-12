# CSS Blur-Entrance Modal — Interactive Interface Layout

A pure CSS modal that enters with a blur-to-focus transition: the modal starts fully out-of-focus (via `filter: blur()`) and sharpens into place, while the backdrop simultaneously gains a frosted blur.

## CSS Custom Properties

| Property                     | Default   | Description                          |
|--------------------------------|-----------|------------------------------------------|
| `--ease-modal-blur-amount`     | `16px`    | Starting blur radius of the modal box       |
| `--ease-modal-blur-duration`   | `0.45s`   | Open/close transition duration              |
| `--ease-modal-blur-easing`     | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing curve |
| `--ease-modal-bg`              | `#ffffff` | Modal background color                     |
| `--ease-modal-radius`          | `14px`    | Modal corner radius                        |
| `--ease-modal-max-width`       | `440px`   | Maximum modal width                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

Toggle `ease-modal-overlay--open` on the overlay to open/close. Both the modal's own blur-to-focus and the overlay's backdrop blur animate together.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open (Tab/Shift+Tab cycles within the modal).
- Focus moves to close button on open, returns to trigger on close.
- `Escape` key and backdrop click both close the modal.
- `prefers-reduced-motion: reduce` collapses all transitions to near-instant.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for full blur/timing theming, consistent with the framework's zero-dependency, animation-first philosophy. Demonstrates a distinct animation technique (CSS `filter: blur()`) from opacity/transform-only entrance patterns already in the library.
