# ease-drawer

Submission for EaseMotion CSS — resolves [Issue #2739](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2739)

---

## 1. What does this do?

Adds a CSS-only animated slide-in side panel (drawer / off-canvas panel).
Uses the checkbox hack — a hidden `<input type="checkbox">` paired with
`<label>` elements — so the drawer opens and closes with zero JavaScript.

Supports four directions (left, right, top, bottom), three width sizes,
a backdrop overlay, a close button, and structured header/body/footer regions.

---

## 2. How is it used?

### Minimal example (left drawer)

```html
<!-- 1. Hidden toggle checkbox -->
<input type="checkbox" id="my-drawer" class="ease-drawer-toggle" />

<!-- 2. Click-outside overlay -->
<label for="my-drawer" class="ease-drawer-overlay"></label>

<!-- 3. Drawer panel -->
<div class="ease-drawer">
  <label for="my-drawer" class="ease-drawer-close">✕</label>
  <div class="ease-drawer-header">Menu</div>
  <div class="ease-drawer-body">
    <!-- your content here -->
  </div>
  <div class="ease-drawer-footer">Footer</div>
</div>

<!-- 4. Open button -->
<label for="my-drawer" class="ease-btn ease-btn-primary">☰ Open</label>
```

### Direction variants

```html
<!-- Slide from right -->
<div class="ease-drawer ease-drawer-right">...</div>

<!-- Slide from top -->
<div class="ease-drawer ease-drawer-top">...</div>

<!-- Slide from bottom -->
<div class="ease-drawer ease-drawer-bottom">...</div>
```

### Width modifiers (left/right drawers only)

```html
<div class="ease-drawer ease-drawer-sm">...</div>   <!-- 220px -->
<div class="ease-drawer">...</div>                   <!-- 300px default -->
<div class="ease-drawer ease-drawer-lg">...</div>   <!-- 420px -->
<div class="ease-drawer ease-drawer-full">...</div> <!-- 100vw -->
```

---

## 3. Why is it useful?

Drawers are one of the most common UI patterns — navigation menus, shopping
carts, filter panels, contact forms, announcement panels. Every major design
system ships one. EaseMotion CSS has no drawer component yet.

This implementation is:

- **Zero JavaScript** — pure CSS checkbox hack, works in all browsers
- **Composable** — direction and width modifiers stack freely
- **Accessible-friendly** — overlay click closes the drawer naturally
- **Token-aware** — uses `--ease-color-surface` and `--ease-color-text`
  so it inherits the project's existing dark mode variables
- **Animation-correct** — uses `cubic-bezier(0.4, 0, 0.2, 1)` (Material
  motion standard) for a smooth, non-linear slide
- **Reduced-motion safe** — transitions disabled when user prefers it

---

## Classes

| Class | Purpose |
|---|---|
| `.ease-drawer-toggle` | Hidden checkbox (the state controller) |
| `.ease-drawer-overlay` | Semi-transparent backdrop (label, click to close) |
| `.ease-drawer` | Panel — slides from left by default |
| `.ease-drawer-right` | Modifier — slides from right |
| `.ease-drawer-top` | Modifier — slides from top |
| `.ease-drawer-bottom` | Modifier — slides from bottom |
| `.ease-drawer-sm` | Width 220px |
| `.ease-drawer-lg` | Width 420px |
| `.ease-drawer-full` | Width 100vw |
| `.ease-drawer-close` | ✕ close button (label targeting the checkbox) |
| `.ease-drawer-header` | Titled top region |
| `.ease-drawer-body` | Scrollable content region |
| `.ease-drawer-footer` | Action region at bottom |

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Full drawer component — all classes + dark mode + reduced-motion |
| `demo.html` | 5 demos: nav menu, cart, filters, announcement, contact form |
| `README.md` | This file |

---

Proposed `ease-*` names (maintainer decides):
`ease-drawer`, `ease-drawer-right`, `ease-drawer-top`, `ease-drawer-bottom`,
`ease-drawer-sm`, `ease-drawer-lg`, `ease-drawer-full`, `ease-drawer-toggle`,
`ease-drawer-overlay`, `ease-drawer-close`, `ease-drawer-header`,
`ease-drawer-body`, `ease-drawer-footer`