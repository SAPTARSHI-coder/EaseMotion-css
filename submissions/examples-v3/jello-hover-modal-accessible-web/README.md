# CSS Jello-Hover Modal — Accessible Web Layout

A pure CSS modal that enters with a playful jello/bounce effect and applies a jello wiggle on the close button hover, built with an accessibility-first approach.

## CSS Custom Properties

| Property                     | Default                              | Description                          |
|-------------------------------|----------------------------------------|------------------------------------------|
| `--ease-modal-jello-duration` | `0.7s`                                 | Duration of the jello entrance animation   |
| `--ease-modal-jello-easing`   | `cubic-bezier(0.68, -0.6, 0.32, 1.6)`  | Overshoot easing curve for the jello effect |
| `--ease-modal-backdrop-color` | `rgba(17, 24, 39, 0.55)`               | Overlay backdrop color                     |
| `--ease-modal-bg`             | `#ffffff`                              | Modal background color                     |
| `--ease-modal-radius`         | `14px`                                 | Modal corner radius                        |
| `--ease-modal-max-width`      | `440px`                                | Maximum modal width                        |
| `--ease-modal-focus-ring`     | `#2563eb`                              | Focus outline color for all interactive elements |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

Toggle `ease-modal-overlay--open` on the overlay to open/close. The jello entrance animation runs automatically via the `ease-jello-in` keyframe.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the title.
- Full focus trap while open (Tab/Shift+Tab cycle within the modal).
- Focus moves to the close button on open, returns to the trigger on close.
- `Escape` key and backdrop click both close the modal.
- Visible `:focus-visible` outlines on every interactive element.
- **`prefers-reduced-motion: reduce` fully disables the jello animation** — this is the core accessibility consideration for this component, since bounce/overshoot effects can trigger discomfort for motion-sensitive users.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for easing/timing theming, in line with the framework's zero-dependency animation philosophy. The reduced-motion fallback demonstrates how EaseMotion CSS components can stay playful without sacrificing accessibility.
