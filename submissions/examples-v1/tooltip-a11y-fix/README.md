# ease-tooltip — Keyboard & Touch Accessibility Fix

**Fixes:** Issue #4235

## Problem

`.ease-tooltip` only activated on `:hover` and `:focus-within`:
- **Keyboard users** — non-interactive triggers (`<span>`, `<div>`)
  are not natively focusable, so `:focus-within` never fires.
- **Touch users** — no hover event exists; tooltip is permanently
  inaccessible.

## Fix — Three parts

### 1. CSS: add `:focus` and `:focus-visible` activation

```css
/* Before — hover and focus-within only */
.ease-tooltip:hover::after,
.ease-tooltip:focus-within::after { … }

/* After — all activation states */
.ease-tooltip:hover::after,
.ease-tooltip:focus::after,
.ease-tooltip:focus-within::after,
.ease-tooltip:focus-visible::after,
.ease-tooltip.ease-tooltip-active::after { … }
```

### 2. HTML: add `tabindex="0"` to non-interactive triggers

```html
<!-- Before — not focusable -->
<span class="ease-tooltip" data-tip="Copy">📋</span>

<!-- After — focusable + accessible -->
<span
  class="ease-tooltip"
  data-tip="Copy to clipboard"
  tabindex="0"
  role="button"
  aria-describedby="tip-copy"
>
  📋
  <span id="tip-copy" role="tooltip" hidden>Copy to clipboard</span>
</span>
```

### 3. JS: tap-to-toggle for touch devices (`tooltip-touch.js`)

Adds `.ease-tooltip-active` on tap, removes on tap-outside or
Escape key. No hover required.

## ARIA Pattern

| Attribute | Where | Purpose |
|---|---|---|
| `tabindex="0"` | trigger | makes non-interactive element focusable |
| `role="button"` | trigger | correct semantics for interactive span |
| `aria-describedby` | trigger | links to the tooltip text element |
| `role="tooltip"` | `<span hidden>` | marks the tooltip text for screen readers |

## Acceptance Criteria

- [x] Tooltip visible when trigger receives keyboard focus
- [x] `role="tooltip"` + `aria-describedby` documented and used
- [x] `tabindex="0"` in demo HTML for non-interactive triggers
- [x] Touch tap-to-toggle via `tooltip-touch.js`
- [x] Escape key dismisses tooltip
- [x] `prefers-reduced-motion` disables transition