# RTL Slide Animation Support Fix

**Fixes:** Issue #8390  
**Type:** Bug fix  
**Label:** `bug` `animation` `good first issue`

---

## Problem

`ease-slide-in-left` and `ease-slide-in-right` use hardcoded physical
`translateX` directions. On RTL pages (Arabic, Hebrew, Urdu — where
`dir="rtl"` is set on `<html>`), these animations feel reversed:

- A card "entering from the left" should enter from the **right** in RTL
- A card "entering from the right" should enter from the **left** in RTL

No `[dir="rtl"]` override existed — animations always used LTR logic.

---

## Fix

Added `[dir="rtl"]` attribute selectors that swap `animation-name`
between left and right keyframes:

```css
/* ease-slide-in-left → slides from RIGHT in RTL */
[dir="rtl"] .ease-slide-in-left {
  animation-name: ease-kf-slide-in-right;
}

/* ease-slide-in-right → slides from LEFT in RTL */
[dir="rtl"] .ease-slide-in-right {
  animation-name: ease-kf-slide-in-left;
}
```

Also supports `dir="rtl"` on `<body>` (used by some frameworks):

```css
body[dir="rtl"] .ease-slide-in-left  { animation-name: ease-kf-slide-in-right; }
body[dir="rtl"] .ease-slide-in-right { animation-name: ease-kf-slide-in-left;  }
```

Vertical animations (`ease-slide-in-up`, `ease-slide-in-down`) are
direction-neutral — no change needed.

---

## Before vs After

| Class | LTR | RTL Before | RTL After |
|---|---|---|---|
| `ease-slide-in-left` | ← slides from left | ← slides from left ❌ | → slides from right ✅ |
| `ease-slide-in-right` | → slides from right | → slides from right ❌ | ← slides from left ✅ |
| `ease-slide-in-up` | ↑ slides up | ↑ slides up ✅ | ↑ slides up ✅ |
| `ease-slide-in-down` | ↓ slides down | ↓ slides down ✅ | ↓ slides down ✅ |

---

## RTL Support — Usage

Simply set `dir="rtl"` on your `<html>` tag — no class changes needed:

```html
<!-- RTL page — animations auto-flip -->
<html dir="rtl" lang="ar">
  <div class="ease-slide-in-left">مرحبا</div>
  <!-- slides in from RIGHT automatically -->
</html>

<!-- LTR page — behavior unchanged -->
<html dir="ltr" lang="en">
  <div class="ease-slide-in-left">Hello</div>
  <!-- slides in from LEFT as always -->
</html>
```

---

## Acceptance Criteria

- [x] `[dir="rtl"]` overrides added for all directional slide animations
- [x] `ease-slide-in-left` and `ease-slide-in-right` auto-flip in RTL
- [x] LTR behavior unchanged — no regression
- [x] Works with `dir="rtl"` on both `<html>` and `<body>`
- [x] `prefers-reduced-motion` respected
- [x] Zero JavaScript in the fix itself
- [x] No breaking changes to existing class names
- [x] No `core/` or `components/` files modified