# Animated Notification Toast Stack

Pure CSS animated toast notification stack with slide-in entrance, dismiss-on-click, and four severity variants. Zero JavaScript.

## Features

- **4 toast variants**: success (green), error (red), warning (amber), info (blue)
- **Slide-in from right** via `@keyframes toastIn` with `cubic-bezier` easing
- **Staggered entrance** — each toast appears with increasing `animation-delay`
- **Dismiss on click** — checkbox hack slides the toast out via `@keyframes toastOut`
- **Icon per type** with colored circular background
- **Stacked layout** with vertical gap between toasts
- **Responsive** — max 420px on desktop, full-width on mobile
- **Pure CSS, zero JavaScript**
- **`prefers-reduced-motion`** support — disables all animations

## Files

| File        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `demo.html` | 4 stacked toasts with hidden checkbox controls                    |
| `style.css` | All styles, animations, dismiss logic, responsive, reduced-motion |
| `README.md` | This documentation                                                |

## How It Works

Each toast has a hidden checkbox sibling. The close button is a `<label>` that toggles the checkbox. When checked, CSS sibling selectors (`#dismiss-N:checked ~ .toast-stack .toast[data-toast="N"]`) trigger the `toastOut` animation, which slides the toast right and collapses its height.

## Usage

```html
<input type="checkbox" id="dismiss-1" hidden />
<div class="toast-stack">
  <div class="toast toast-success" data-toast="1">
    <span class="toast-icon">✓</span>
    <div class="toast-body">
      <strong>Success</strong>
      <p>Your changes have been saved.</p>
    </div>
    <label class="toast-close" for="dismiss-1">×</label>
  </div>
</div>
```

## Keyframes

| Keyframe   | Purpose                                             |
| ---------- | --------------------------------------------------- |
| `toastIn`  | Slides toast in from right with opacity fade        |
| `toastOut` | Slides toast out to right, collapses height to zero |

Fixes #19286
