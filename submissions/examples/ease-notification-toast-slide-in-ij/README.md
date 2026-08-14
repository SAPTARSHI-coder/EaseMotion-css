# Notification Toast Slide In

A CSS notification toast component with slide-in animation from the top-right corner. Toasts stack vertically and auto-dismiss after 3 seconds.

---

## Technical Overview

The component uses CSS `transition` on `transform` and `opacity` for smooth slide-in/slide-out animations. Each toast card is positioned inside a fixed container at the top-right of the viewport. The `@keyframes ntsi-slide-in` / `ntsi-slide-out` animations are provided as the canonical motion definition.

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ntsi-transition-duration` | `0.4s` | Duration of the slide animation |
| `--ntsi-bg-color` | `#1e293b` | Background of the toast card |
| `--ntsi-text-color` | `#f1f5f9` | Text color inside the toast |
| `--ntsi-shadow` | `0 12px 32px rgba(0,0,0,0.35)` | Shadow applied to each toast |
| `--ntsi-border-radius` | `12px` | Border radius of the toast card |

### Keyframes

```css
@keyframes ntsi-slide-in {
  0%   { opacity: 0; transform: translateX(120%); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes ntsi-slide-out {
  0%   { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(120%); }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the **Show Notification** button — a toast slides in from the top-right.
3. Select different toast types (Success / Info / Warning / Error) and verify the icon and accent colour changes.
4. Click the **Show Notification** multiple times — verify that toasts stack vertically.
5. Wait 3 seconds — verify the toast slides out and is removed from the DOM.
6. Click the **&times;** close button on any toast — verify it dismisses immediately.
