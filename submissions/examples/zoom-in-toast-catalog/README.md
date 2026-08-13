# Zoom-In Toast for Product Catalog Layouts

A lightweight, pure CSS/HTML toast notification designed for e-commerce and
product catalog pages — perfect for "Added to cart" style confirmations.
The toast **zooms in** with a subtle overshoot, then **zooms out** on
dismissal. No JS frameworks required; the demo uses a few lines of vanilla
JS purely to spawn/remove toast markup on click.

## ✨ Features

- Pure CSS animation (`scale` + `opacity`) — no animation libraries
- Smooth zoom-in entrance with a slight overshoot for a "pop" feel
- Zoom-out exit animation on manual dismiss or auto-timeout
- Dark mode support (via `data-theme="dark"` attribute or OS-level
  `prefers-color-scheme`)
- Fully responsive — stacks and centers on mobile viewports
- Respects `prefers-reduced-motion` (falls back to an opacity-only fade)
- BEM-style class naming, namespaced under `ease-*` to avoid collisions

## 📦 Files

| File          | Purpose                                                |
| ------------- | ------------------------------------------------------- |
| `demo.html`   | Showcase page — a small product catalog wired up to fire toasts |
| `style.css`   | The reusable component styles + demo page styles         |
| `README.md`   | This file                                                |

## 🚀 Usage

1. Add the container once per page (usually right before `</body>`):

   ```html
   <div class="ease-toast-container" aria-live="polite" aria-atomic="true"></div>
   ```

2. Append a toast into the container whenever you need to show one:

   ```html
   <div class="ease-toast" role="status">
     <div class="ease-toast__icon">✅</div>
     <div class="ease-toast__body">
       <span class="ease-toast__title">Wireless Headphones</span>
       <span class="ease-toast__meta">
         Added to cart · <span class="ease-toast__price">$79.99</span>
       </span>
     </div>
     <button class="ease-toast__close" type="button" aria-label="Dismiss notification">✕</button>
   </div>
   ```

3. To dismiss with the zoom-out animation, add the `ease-toast--leaving`
   modifier class, then remove the element from the DOM once the animation
   finishes (~260ms):

   ```js
   toastEl.classList.add("ease-toast--leaving");
   setTimeout(() => toastEl.remove(), 260);
   ```

   See `demo.html` for a complete working example, including auto-dismiss
   and hover-to-pause behavior.

## 🎨 Customization

All colors, spacing, and timing are exposed as CSS custom properties on
`:root`, so consuming projects can override them without touching the
component rules:

```css
:root {
  --ease-toast-bg: #ffffff;
  --ease-toast-text: #1a1a1a;
  --ease-toast-accent: #16a34a;
  --ease-toast-accent-bg: #dcfce7;
  --ease-toast-radius: 14px;
  --ease-toast-duration: 420ms;
  --ease-toast-easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Dark mode

Dark mode activates automatically based on `prefers-color-scheme: dark`,
or can be forced with:

```html
<html data-theme="dark">
```

## ♿ Accessibility

- The toast container uses `aria-live="polite"` + `aria-atomic="true"` so
  screen readers announce new toasts without interrupting the user.
- Each toast has `role="status"` and an accessible close button
  (`aria-label="Dismiss notification"`).
- Users with `prefers-reduced-motion: reduce` get a simple opacity fade
  instead of the scale/zoom animation.

## 📱 Responsive Behavior

- **Desktop/Tablet:** Toasts anchor to the bottom-right corner and zoom in
  from that corner.
- **Mobile (≤640px):** Toasts span the full width (minus side margins) and
  zoom in from the bottom-center for easier thumb reach.

## 🧪 Browser Support

Uses only standard CSS (custom properties, `@keyframes`, `@media` queries)
supported by all current major browsers — Chrome, Firefox, Safari, and Edge.