# Toast Notification Stacking & Positioning

**Fixes:** Issue #16393 — Toast notifications overlap when triggered simultaneously

## Problem

The original toast component had no stacking or positioning system.
Multiple toasts triggered at the same time would render on top of each
other instead of stacking vertically.

## Solution

A complete toast notification system with:

- **Stacking** — multiple toasts stack vertically, never overlapping
- **5 position variants** — top-right, top-left, top-center, bottom-right, bottom-left
- **4 types** — success, error, warning, info (colored left border + icon)
- **Auto-dismiss** with a visual progress bar countdown
- **Sticky toasts** — set `duration: 0` to disable auto-dismiss
- **Manual close** via × button (keyboard accessible)
- **Entrance / exit animations** — smooth slide + fade
- **`prefers-reduced-motion`** respected

## Files

| File | Purpose |
|------|---------|
| `style.css` | Container and toast card styles |
| `toast.js`  | `showToast()` function — zero dependencies |
| `demo.html` | Interactive demo |
| `README.md` | This file |

## Usage

```html
<script src="toast.js"></script>
<link rel="stylesheet" href="style.css" />
```

```js
showToast({
  title:    'Changes saved',
  message:  'Your work has been saved.',
  type:     'success',      // success | error | warning | info
  duration: 4000,           // ms; 0 = sticky
  position: 'top-right'     // top-right | top-left | top-center
                            // bottom-right | bottom-left
});
```

## No existing files modified

All files are new under `submissions/examples/toast-stacking-16393/`.
