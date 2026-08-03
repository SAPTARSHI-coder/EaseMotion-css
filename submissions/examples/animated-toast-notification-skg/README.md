# Animated Toast Notification Component

**Implements feature [#56634](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56634)**

---

## 1. What does this do?

A pure CSS toast notification component that delegates all entrance animations to EaseMotion's built-in utility classes (`.ease-slide-in-right`, `.ease-fade-in`, `.ease-slide-up`, etc.). The component CSS covers only visual styles — shape, colours, variants, and a CSS-only progress bar. Swap a single class to change the entrance with no CSS edits required.

---

## 2. How is it used?

### Basic toast (requires EaseMotion CDN)

```html
<!-- Link EaseMotion CSS first -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.css" />

<!-- Success toast — entrance via EaseMotion's .ease-slide-in-right -->
<div class="toast toast-success ease-slide-in-right" role="alert" aria-live="polite">
  <span class="toast-icon" style="color:#16a34a">✓</span>
  <div class="toast-body">
    <strong class="toast-title">Upload complete</strong>
    <span class="toast-msg">Your file has been saved successfully.</span>
  </div>
  <button class="toast-close" aria-label="Dismiss">✕</button>
</div>
```

### All four variants

| Class | Accent colour | Use for |
|---|---|---|
| `toast-success` | Green `#16a34a` | Completed actions |
| `toast-error` | Red `#dc2626` | Failures, form errors |
| `toast-warning` | Amber `#d97706` | Advisory states |
| `toast-info` | Blue `#2563eb` | Neutral info / updates |
| `toast-default` | Indigo `#6c63ff` | General notifications |
| `toast-dark` | Dark surface `#1e293b` | Dark-background pages |

### Entrance animation — swap one class

```html
<!-- Slide from right (default) -->
<div class="toast toast-success ease-slide-in-right"> … </div>

<!-- Slide up from below -->
<div class="toast toast-info ease-slide-up"> … </div>

<!-- Gentle fade + scale -->
<div class="toast toast-success ease-fade-in"> … </div>

<!-- Slide from bottom-right corner -->
<div class="toast toast-warning ease-slide-in-from-bottom-right"> … </div>

<!-- Drop from above (for top-positioned stacks) -->
<div class="toast toast-info ease-slide-down"> … </div>
```

All entrance class names are standard EaseMotion utilities defined in `core/animations.css`. No component CSS changes are needed to switch entrance style.

### Exit animation

```js
// Swap entrance class for EaseMotion's fade-out exit
el.classList.remove('ease-slide-in-right');
el.classList.add('ease-fade-out');
el.addEventListener('animationend', () => el.remove(), { once: true });
```

### With progress bar (auto-dismiss indicator)

```html
<div class="toast toast-success ease-slide-in-right"
     style="--toast-duration: 5s;">
  <!-- … toast content … -->
  <div class="toast-progress" aria-hidden="true"></div>
</div>
```

Set `--toast-duration` (default `5s`) to control drain speed.

### Fixed stack container (bottom-right)

```html
<div class="toast-stack" aria-live="polite" aria-label="Notifications">
  <!-- toasts appended here by JS -->
</div>
```

### JavaScript pattern (minimal)

```js
function showToast(type, title, msg) {
  const stack = document.querySelector('.toast-stack');
  const el = document.createElement('div');

  el.className = `toast toast-${type} ease-slide-in-right`;
  el.setAttribute('role', type === 'error' ? 'alert' : 'status');
  el.innerHTML = `
    <div class="toast-body">
      <strong class="toast-title">${title}</strong>
      <span class="toast-msg">${msg}</span>
    </div>
    <button class="toast-close" aria-label="Dismiss">✕</button>
    <div class="toast-progress" aria-hidden="true"></div>
  `;

  el.querySelector('.toast-close').addEventListener('click', () => {
    el.classList.replace('ease-slide-in-right', 'ease-fade-out');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  });

  stack.appendChild(el);
  setTimeout(() => el.remove(), 5000); // auto-dismiss
}
```

---

## 3. Why is it useful?

### Task checklist from the issue

| Task | Status |
|---|---|
| Design Toast UI (success, error, info) | ✅ 6 variants: success, error, warning, info, default, dark |
| Apply default EaseMotion entrance classes | ✅ `.ease-slide-in-right` is the default; 4 others shown |

### How animation delegation works

The component CSS contains **no** `animation` property. Instead it applies EaseMotion classes directly in HTML:

```html
<div class="toast ease-slide-in-right"> … </div>
```

`ease-slide-in-right` is already defined in `core/animations.css`:
```css
.ease-slide-in-right {
  animation: ease-kf-slide-in-right var(--ease-speed-medium) var(--ease-ease) both;
}
```

This means:
- Users get all EaseMotion animation customisation for free (`--ease-speed-*`, `--ease-ease-*`)
- Switching entrance style = changing one class in HTML
- No duplication of animation keyframes in the component

### Responsive behaviour

- Fixed stack: `width: min(22rem, calc(100vw - 3rem))` — never overflows on narrow screens
- Mobile ≤ 480 px: stack pins `left: 0.75rem; right: 0.75rem; width: auto` (full-width)
- iOS safe-area: `env(safe-area-inset-bottom/right)` so toasts clear the home indicator

### Accessibility

- `role="alert"` + `aria-live="assertive"` for errors
- `role="status"` + `aria-live="polite"` for non-critical toasts
- Close button has `aria-label="Dismiss"` and `:focus-visible` ring
- `prefers-reduced-motion`: all animations disabled; toast appears instantly
