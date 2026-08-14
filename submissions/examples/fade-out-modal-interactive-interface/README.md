# CSS Fade-Out Modal — Interactive Interface Layout

A pure CSS animated modal with a smooth fade-out transition on close, driven entirely by CSS custom properties. Zero animation library dependencies; the animation itself requires no JavaScript, only a class toggle.

## CSS Custom Properties

| Property                        | Default                     | Description                                  |
|----------------------------------|------------------------------|-------------------------------------------------|
| `--ease-modal-duration`          | `0.35s`                      | Fade/scale transition duration                   |
| `--ease-modal-easing`            | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve                        |
| `--ease-modal-scale-from`        | `1`                          | Initial scale value before the modal fades in     |
| `--ease-modal-backdrop-color`    | `rgba(17, 24, 39, 0.55)`     | Overlay backdrop color                            |
| `--ease-modal-bg`                | `#ffffff`                    | Modal background color                            |
| `--ease-modal-radius`            | `14px`                       | Modal corner radius                               |
| `--ease-modal-max-width`         | `420px`                      | Maximum modal width                               |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal">
    <!-- modal content -->
  </div>
</div>
```

Toggle the `ease-modal-overlay--open` class on the overlay element to open/close. All animation (opacity + scale) is handled by CSS transitions on that class change — no JS animation logic needed.

## Accessibility

- `role="dialog"` and `aria-modal="true"` on the overlay.
- Focus moves to the close button on open and returns to the trigger on close.
- `Escape` key closes the modal.
- Clicking the backdrop (outside the modal box) closes it.

## Why it fits EaseMotion CSS

Fully driven by `ease-` prefixed classes and CSS custom properties for easy theming, in line with the framework's zero-JS-overhead animation philosophy. The overlay uses a delayed `visibility` transition so the modal doesn't intercept clicks while invisible.
