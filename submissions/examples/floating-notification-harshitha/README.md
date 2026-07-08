# Floating Notification Card (Toast) - CSS (Pure)

A reusable **Animated Floating Notification Card** built with **only HTML and CSS**.

## Features
- ✅ Icon (emoji)
- ✅ Title
- ✅ Short description
- ✅ Close button (visual only; **no JavaScript**)
- ✅ Rounded corners
- ✅ Soft shadow
- ✅ Responsive layout (flex + grid)
- ✅ Smooth entrance animation (slide in from the right + fade)
- ✅ Variants using CSS variables / class modifiers

## Folder
`submissions/examples/floating-notification-harshitha/`

## Demo
Open: `demo.html`

## HTML Usage
```html
<article class="ease-toast-harshitha ease-toast--success" role="status" aria-live="polite">
  <div class="ease-toast-harshitha__icon" aria-hidden="true">✅</div>

  <div class="ease-toast-harshitha__content">
    <h3 class="ease-toast-harshitha__title">Success</h3>
    <p class="ease-toast-harshitha__body">Your profile has been updated.</p>
  </div>

  <button
    class="ease-toast-harshitha__close"
    type="button"
    aria-label="Close notification"
    tabindex="-1"
  >
    ×
  </button>
</article>
```

## Variants
Use one modifier class:
- `ease-toast--success` (green)
- `ease-toast--error` (red)
- `ease-toast--warning` (orange)
- `ease-toast--info` (blue)

## Customization
You can tweak animation timing via CSS variables in `style.css`:
- `--ease-toast-duration` (default `0.65s`)
- `--ease-toast-ease` (default `cubic-bezier(0.22, 1, 0.36, 1)`)

## Accessibility
- Uses `role="status"` and `aria-live="polite"` for announcement.
- Close button is visual only, but still includes an accessible label.

## Browser Compatibility
Modern evergreen browsers (Chrome, Edge, Firefox, Safari) support the CSS used (flexbox, grid, keyframes, `color-mix`).

