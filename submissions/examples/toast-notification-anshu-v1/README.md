# Toast Notification Component

## 1. What does this do?

Provides a composable toast notification system with four semantic color variants (success, danger, warning, info), a fixed stack container with four placement modifiers, an animated auto-dismiss progress bar, and a clean JS dismiss helper — delegating all entrance and exit animation entirely to existing EaseMotion animation classes.

## 2. How is it used?

**HTML structure**

```html
<!-- Stack container — place once near </body> -->
<div class="toast-stack">

  <!-- Individual toast — add any EaseMotion entrance class -->
  <div class="toast toast-success ease-slide-in-right">
    <span class="toast-icon">✓</span>
    <span class="toast-message">Changes saved successfully.</span>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">✕</button>
  </div>

  <div class="toast toast-danger ease-slide-in-right">
    <span class="toast-icon">✕</span>
    <span class="toast-message">Something went wrong.</span>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">✕</button>
  </div>

</div>
```

**Optional stack placement modifiers**

```html
<div class="toast-stack toast-stack--top-right">…</div>
<div class="toast-stack toast-stack--top-left">…</div>
<div class="toast-stack toast-stack--bottom-left">…</div>
<!-- default is bottom-right, no modifier needed -->
```

**Optional two-line toast (title + body)**

```html
<div class="toast toast-warning ease-slide-in-right">
  <span class="toast-icon">⚠</span>
  <span class="toast-message">
    <span class="toast-title">Session expiring</span>
    <span class="toast-body">You will be logged out in 5 minutes.</span>
  </span>
  <button class="toast-close">✕</button>
</div>
```

**Minimal JS helper (copy-paste ready)**

```js
function dismissToast(toast) {
  if (!toast || toast.classList.contains('toast--dismissing')) return;
  toast.classList.add('toast--dismissing');
  setTimeout(() => toast.remove(), 350);
}

function fireToast(variant, message, duration = 4000) {
  const icons = { success: '✓', danger: '✕', warning: '⚠', info: 'ℹ' };
  const stack = document.querySelector('.toast-stack');
  const el = document.createElement('div');
  el.className = `toast toast-${variant} ease-slide-in-right`;
  el.style.setProperty('--toast-duration', `${duration}ms`);
  el.setAttribute('role', 'alert');
  el.innerHTML = `
    <span class="toast-icon">${icons[variant]}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">✕</button>
  `;
  stack.appendChild(el);
  setTimeout(() => dismissToast(el), duration);
}
```

## 3. Why is it useful?

Toasts are one of the most animation-heavy UI patterns in any product — every project needs them and every project currently builds them from scratch.

This submission fits EaseMotion's philosophy in two specific ways:

**Zero new keyframes.** Entrance animation is a single composable class (`ease-slide-in-right`, `ease-fade-in`, `ease-slide-up` — developer's choice). Exit animation is handled by the `.toast--dismissing` state, which reverses the same keyframes already in `animations.css`. The component itself is pure structure and color.

**Token-aware by default.** Every color value references a semantic alias (`--ease-color-surface`, `--ease-color-success`, `--ease-color-muted`, etc.), so toasts inherit the dark-mode overrides from `variables.css` automatically — no extra dark-mode CSS required.

The auto-dismiss progress bar uses a single `scaleX` keyframe driven by a CSS custom property (`--toast-duration`), making the dismiss duration controllable per-toast without JavaScript.
