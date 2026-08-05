# CSS Stacking Notification Toasts (`ease-stacking-toasts-skg`)

> Submission for [Issue #61265](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61265)

---

## What does this do?

A **CSS-only** notification toast system with two distinct stacking styles — zero JavaScript. All interactivity is driven by hidden `<input type="checkbox">` elements and the `:checked` pseudo-class.

### Demo 1 — Fan Stack (bottom-right corner)

Toasts are absolutely stacked on top of each other. The newest toast is full-size on top; older toasts are scaled down and offset downward, creating a visible "fanned deck" peek effect. Each toast has its own dismiss button (`<label>` pointing at its paired `<input type="checkbox">`). When dismissed:

- The toast slides out to the right (`translateX(110%)`) and fades to `opacity: 0`
- All remaining toasts animate to the next position using `transform: scale() translateY()`
- No JavaScript — the `:checked` sibling combinator (`~`) does all the work

### Demo 2 — Flat List Stack (top-center)

Toasts are laid out in a simple vertical list. Dismissing one collapses its `max-height` from `120px` to `0` while simultaneously fading `opacity` to `0` and zeroing `margin-bottom`. Items below it slide up naturally as a result of the height collapse — no JS, no layout reflow tricks.

---

## How to use it

### Fan Stack HTML structure

```html
<!-- State holders (hidden, before the stack) -->
<input type="checkbox" class="dismiss-check" id="toast-1" />
<input type="checkbox" class="dismiss-check" id="toast-2" />
<input type="checkbox" class="dismiss-check" id="toast-3" />

<div class="toast-stack">
  <!-- pos-1 = newest / top of stack -->
  <div class="toast toast--pos-1 toast--success">
    <span class="toast__icon">✅</span>
    <div class="toast__body">
      <strong class="toast__title">Changes saved</strong>
      <p class="toast__msg">Your profile was updated.</p>
    </div>
    <!-- label targets the matching checkbox -->
    <label class="toast__close" for="toast-1">&times;</label>
  </div>

  <div class="toast toast--pos-2 toast--info">…</div>
  <div class="toast toast--pos-3 toast--warning">…</div>
</div>
```

### Flat List HTML structure

```html
<input type="checkbox" class="dismiss-check" id="item-1" />
<input type="checkbox" class="dismiss-check" id="item-2" />

<div class="toast-list">
  <div class="toast-item toast-item--error">
    <span class="toast-item__icon">❌</span>
    <div class="toast-item__body">
      <strong>Payment declined</strong>
      <p>Card ending in 4242 was declined.</p>
    </div>
    <label class="toast-item__close" for="item-1">&times;</label>
  </div>

  <div class="toast-item toast-item--success">…</div>
</div>
```

---

## Why is this useful?

Tab-based dashboards, admin panels, and SaaS apps all need notification toasts. Existing CSS-only implementations either lack the stacking visual or require JavaScript for the dismiss/collapse behaviour. This submission shows:

1. **The fan-stack illusion** is achievable with nothing but `z-index`, `transform: scale()`, and `translateY()` — no DOM manipulation needed.
2. **Smooth height collapse** on dismiss works reliably using `max-height` + `margin` transition, a well-supported CSS-only pattern.
3. Both techniques use only `transform` and `opacity` for the actual animation, keeping everything on the **GPU compositor thread** — smooth on mobile without battery drain.
4. The `prefers-reduced-motion` media query is respected — animations are stripped for users who need it.

This fits EaseMotion's philosophy of composable, lightweight CSS utilities that handle common UI patterns without JavaScript overhead.
