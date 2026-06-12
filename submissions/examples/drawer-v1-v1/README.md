# ease-drawer

Submission for EaseMotion CSS — resolves Issue #2739

---

## 1. What does this do?

Adds a CSS-only animated slide-in side panel (drawer / off-canvas panel).
Uses the checkbox hack — a hidden input[type=checkbox] paired with label
elements — so the drawer opens and closes with zero JavaScript.

Supports four directions (left, right, top, bottom), three width sizes,
a backdrop overlay, a close button, and structured header/body/footer regions.

---

## 2. How is it used?

```html
<!-- 1. Hidden toggle checkbox -->
<input type="checkbox" id="my-drawer" class="ease-drawer-toggle" />

<!-- 2. Click-outside overlay -->
<label for="my-drawer" class="ease-drawer-overlay"></label>

<!-- 3. Drawer panel -->
<div class="ease-drawer">
  <label for="my-drawer" class="ease-drawer-close">X</label>
  <div class="ease-drawer-header">Menu</div>
  <div class="ease-drawer-body">content here</div>
  <div class="ease-drawer-footer">Footer</div>
</div>

<!-- 4. Open button -->
<label for="my-drawer">Open</label>
```

Direction variants:
.ease-drawer — left (default)
.ease-drawer ease-drawer-right — right
.ease-drawer ease-drawer-top — top
.ease-drawer ease-drawer-bottom — bottom

Width modifiers (left/right only):
.ease-drawer-sm 220px
.ease-drawer 300px default
.ease-drawer-lg 420px
.ease-drawer-full 100vw

---

## 3. Why is it useful?

Drawers are one of the most common UI patterns: nav menus, shopping carts,
filter panels, contact forms. EaseMotion CSS has no drawer component yet.

Zero JavaScript — pure CSS checkbox hack, works in all browsers.
Composable — direction and width modifiers stack freely.
Token-aware — uses --ease-color-surface and --ease-color-text.
Reduced-motion safe — transitions disabled when user prefers it.

---

## Classes

ease-drawer-toggle — hidden checkbox (state controller)
ease-drawer-overlay — backdrop label, click to close
ease-drawer — panel, slides from left by default
ease-drawer-right — slides from right
ease-drawer-top — slides from top
ease-drawer-bottom — slides from bottom
ease-drawer-sm — 220px width
ease-drawer-lg — 420px width
ease-drawer-full — 100vw width
ease-drawer-close — X close button label
ease-drawer-header — titled top region
ease-drawer-body — scrollable content region
ease-drawer-footer — action region at bottom

---

## Files

style.css — full component, dark mode, reduced-motion
demo.html — 5 demos: nav, cart, filters, announcement, contact form
README.md — this file

Proposed ease-\* names (maintainer decides):
ease-drawer, ease-drawer-right, ease-drawer-top, ease-drawer-bottom,
ease-drawer-sm, ease-drawer-lg, ease-drawer-full, ease-drawer-toggle,
ease-drawer-overlay, ease-drawer-close, ease-drawer-header,
ease-drawer-body, ease-drawer-footer
