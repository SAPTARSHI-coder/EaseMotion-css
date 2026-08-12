# CSS Magnetic Pull Modal — SaaS Showcase Layout

A pure CSS modal that's pulled up into view with a confident elastic snap, styled with a polished purple gradient suited to SaaS product pages.

## CSS Custom Properties

| Property                     | Default                              | Description                                |
|-------------------------------|-----------------------------------------|--------------------------------------------|
| `--ease-modal-pull-duration`  | `0.5s`                                  | Duration of the pull-in entrance animation  |
| `--ease-modal-pull-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`    | Overshoot easing curve for the pull effect  |
| `--ease-modal-pull-distance`  | `36px`                                   | Distance the modal travels on entrance      |
| `--ease-modal-backdrop-color` | `rgba(15, 23, 42, 0.55)`               | Overlay backdrop color                      |
| `--ease-modal-bg`             | `#ffffff`                                | Modal background color                      |
| `--ease-modal-accent`         | `#6d28d9`                                | Primary accent color (buttons, close icon)  |
| `--ease-modal-accent-soft`    | `#ede9fe`                                | Soft accent background (close button)       |
| `--ease-modal-radius`         | `16px`                                   | Modal corner radius                         |
| `--ease-modal-max-width`      | `460px`                                  | Maximum modal width                         |
| `--ease-modal-focus-ring`     | `#6d28d9`                                | Focus outline color                         |

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
