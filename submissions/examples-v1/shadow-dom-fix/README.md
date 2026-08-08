# ease-* Shadow DOM / Web Components CSS Variable Tunnel

**Fixes:** Issue #8408  
**Type:** Bug fix + Enhancement  
**Label:** `bug` `animation` `good first issue`

---

## Problem

`ease-*` animation classes completely fail inside Web Components with
Shadow DOM. External stylesheets cannot pierce the shadow boundary —
only CSS Custom Properties (variables) and `@keyframes` tunnel through.

```js
// ❌ BROKEN — .ease-fade-in blocked at shadow boundary
this.shadowRoot.innerHTML = `
  <div class="ease-fade-in">No animation</div>
`;
```

---

## Root Cause

| CSS Feature | Pierces Shadow DOM? |
|---|---|
| Class-based rules (`.ease-fade-in`) | ❌ No |
| `@keyframes` definitions | ✅ Yes |
| CSS Custom Properties (`var(--x)`) | ✅ Yes |

---

## Fix — Two Approaches

### Method 1 — CSS Variable Tunnel (Recommended)

All animation values are now exposed as CSS Custom Properties on `:root`.
Use `var(--ease-*)` inside your component's `<style>` block:

```js
// ✅ WORKS — variables tunnel through shadow boundary
this.shadowRoot.innerHTML = `
  <style>
    .fade-in { animation: var(--ease-fade-in); }
    .bounce  { animation: var(--ease-bounce);  }
    .shake   { animation: var(--ease-shake);   }
  </style>
  <div class="fade-in">✅ Fades in!</div>
  <div class="bounce">✅ Bounces!</div>
`;
```

### Method 2 — Inject `<link>` into Shadow Root

```js
// ✅ Full class support inside shadow root
this.shadowRoot.innerHTML = `
  <link href="easemotion.css" rel="stylesheet"/>
  <div class="ease-fade-in">✅ Works!</div>
`;
```

Use Method 1 for better performance (no duplicate stylesheet load).
Use Method 2 when you want full `.ease-*` class support without changes.

---

## All CSS Variables Available

```css
/* Animations */
var(--ease-fade-in)
var(--ease-fade-out)
var(--ease-bounce)
var(--ease-shake)
var(--ease-float)
var(--ease-pulse)
var(--ease-spin)
var(--ease-tada)
var(--ease-zoom-in)
var(--ease-slide-in-left)
var(--ease-slide-in-right)
var(--ease-slide-in-up)
var(--ease-slide-in-down)

/* Duration tokens */
var(--ease-duration-fast)    /* 0.2s */
var(--ease-duration-normal)  /* 0.4s */
var(--ease-duration-slow)    /* 0.8s */

/* Easing tokens */
var(--ease-timing-smooth)  /* ease-in-out */
var(--ease-timing-spring)  /* cubic-bezier(0.34, 1.56, 0.64, 1) */
var(--ease-timing-linear)  /* linear */
```

---

## Accessibility

`prefers-reduced-motion` sets all variables to `none` on `:root` —
the override tunnels into shadow roots automatically:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --ease-fade-in: none;
    --ease-bounce:  none;
    /* ... all others set to none */
  }
}
```

---

## Zero Breaking Changes

Traditional `.ease-*` classes are **unchanged** — they now internally
use `animation: var(--ease-*)` which produces identical results for all
non-Shadow DOM usage.

---

## Acceptance Criteria

- [x] All `@keyframes` confirmed to pierce Shadow DOM automatically
- [x] All animation values exposed as CSS custom properties in `:root`
- [x] `--ease-fade-in`, `--ease-bounce`, `--ease-shake`, `--ease-float` added
- [x] Duration and easing tokens added
- [x] `prefers-reduced-motion` disables all variables correctly
- [x] Tested inside native Web Component with `attachShadow({ mode: 'open' })`
- [x] `<link>` injection method documented as alternative approach
- [x] Demo shows 4 live Web Components using CSS variable tunnel
- [x] Zero breaking changes to existing `.ease-*` HTML class usage
- [x] No `core/` or `components/` files modified