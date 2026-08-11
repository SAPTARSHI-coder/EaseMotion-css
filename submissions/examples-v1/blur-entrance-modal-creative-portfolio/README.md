# CSS Blur-Entrance Modal — Creative Portfolio Layout

A pure CSS modal with a cinematic blur-to-focus entrance and a gradient pink-to-violet accent, designed for creative portfolio and case-study reveals.

## CSS Custom Properties

| Property                     | Default   | Description                          |
|--------------------------------|-----------|------------------------------------------|
| `--ease-modal-blur-amount`     | `20px`    | Starting blur radius of the modal box       |
| `--ease-modal-blur-duration`   | `0.5s`    | Open/close transition duration              |
| `--ease-modal-blur-easing`     | `cubic-bezier(0.16, 1, 0.3, 1)` | Transition easing curve |
| `--ease-modal-bg`              | `#17131f` | Modal base background color                |
| `--ease-modal-accent`          | `#f472b6` | Accent color (close button, focus ring)     |
| `--ease-modal-radius`          | `18px`    | Modal corner radius                        |
| `--ease-modal-max-width`       | `460px`   | Maximum modal width                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">View Project</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open, focus returns to trigger on close.
- `Escape` key and backdrop click both close the modal.
- `prefers-reduced-motion: reduce` collapses transitions to near-instant.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for full blur/color/timing theming, consistent with the framework's zero-dependency philosophy. The gradient title (`background-clip: text`) and dark violet palette give this variant a distinct portfolio-appropriate identity from the Interactive Interface version, while sharing the same underlying blur-entrance technique.
