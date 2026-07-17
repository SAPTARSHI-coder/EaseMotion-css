# Micro Shake Popover for Product Catalog Layouts

A responsive, zero-JavaScript **pure CSS Popover** featuring a refined **Micro Shake** interaction transition tailored for modern **Product Catalog** interfaces.

## 🌟 What does this do?

Provides a lightweight, accessible popover component that displays supplementary product metadata (such as shipping details, stock availability, or specs) with a tactile Micro Shake animation when hovered or focused via keyboard.

## 🎨 Features

- **Pure CSS**: Requires zero JavaScript dependencies.
- **Refined Micro Shake Animation**: Subtle sub-pixel displacement and rotation that provides interactive feedback without overwhelming the user.
- **Fully Configurable**: Easily customized using CSS custom properties (`--ease-popover-*`).
- **Accessible**: Keyboard navigation support (`:focus-within` & `:focus-visible`), WAI-ARIA `role="tooltip"`, forced-colors mode support, and `prefers-reduced-motion` compliance.
- **Responsive**: Adapts gracefully across mobile, tablet, and desktop displays without layout shifts or clipping.

## 📁 File Structure

```
submissions/examples/micro-shake-popover-product-catalog-ag/
├── demo.html
├── style.css
└── README.md
```

## 🚀 How is it used?

Include `style.css` and wrap your trigger element and popover panel inside `.popover-wrapper`:

```html
<link rel="stylesheet" href="style.css">

<div class="popover-wrapper">
  <button type="button" class="popover-trigger" aria-describedby="shipping-info">
    Shipping Specs
  </button>

  <div id="shipping-info" class="popover-panel" role="tooltip">
    <div class="popover-header">🚚 Free Express Shipping</div>
    <p class="popover-body">Delivered in 2-3 business days with package tracking.</p>
  </div>
</div>
```

## 🎛️ Custom CSS Variables

| Variable | Default Value | Description |
|---|---|---|
| `--ease-popover-bg` | `#1e293b` | Background color of the popover panel |
| `--ease-popover-text` | `#f8fafc` | Primary text color |
| `--ease-popover-muted` | `#94a3b8` | Secondary/body text color |
| `--ease-popover-border` | `#334155` | Border color of the panel |
| `--ease-popover-accent` | `#6c63ff` | Primary button trigger accent color |
| `--ease-popover-duration` | `300ms` | Animation & transition speed |
| `--ease-popover-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Timing function curve |
| `--ease-popover-shake-intensity` | `3px` | Maximum displacement for the Micro Shake |
| `--ease-popover-scale-start` | `0.96` | Initial scale factor before opening |
| `--ease-popover-offset` | `12px` | Distance between trigger and popover panel |
| `--ease-popover-width` | `280px` | Max panel width |

## ♿ Accessibility Considerations

- **Keyboard Focus**: Native `<button>` trigger ensures full accessibility via `Tab` key. Focus state triggers the popover via `:focus-within` and shows a high-contrast focus ring (`:focus-visible`).
- **Reduced Motion**: Disables `@keyframes ease-micro-shake` when `prefers-reduced-motion: reduce` is detected, defaulting to a instant or standard opacity transition.
- **High Contrast**: Compatible with Windows High Contrast Mode / CSS `forced-colors: active`.
- **Screen Readers**: Includes `role="tooltip"` and `aria-describedby` linkage.

## 💡 Why it fits EaseMotion CSS

EaseMotion CSS emphasizes human-readable, lightweight, CSS-driven motion utilities. This component offers a high-precision micro-interaction that improves perceived responsiveness and user feedback while maintaining strict zero-JS simplicity and production-grade accessibility.
