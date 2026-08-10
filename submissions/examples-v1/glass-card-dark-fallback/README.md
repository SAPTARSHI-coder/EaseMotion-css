# ease-card-glass — @supports not Dark Mode Fallback Fix

**Fixes:** Issue #4239  
**Severity:** Medium  
**Label:** `bug` `browser-compat`

---

## Problem

`.ease-card-glass` in `components/cards.css` uses a
`@supports not (backdrop-filter)` block to provide a solid-color fallback
for browsers that don't support `backdrop-filter` (e.g. Firefox 102 ESR).

However, that fallback block only contained **light-mode values**:

```css
/* Existing code — missing dark mode */
@supports not ((backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))) {
  .ease-card-glass {
    background: rgba(255, 255, 255, 0.92); /* always white */
    border-color: rgba(15, 23, 42, 0.12);
  }
  /* no @media (prefers-color-scheme: dark) here */
}
```

**Result in Firefox 102 ESR with dark mode ON:**
A bright white card (`rgba(255,255,255,0.92)`) renders on a dark page
background — high-contrast, jarring, completely wrong.

---

## Root Cause

The `@supports not` block and the `@media (prefers-color-scheme: dark)`
block were never nested together. CSS `@supports` and `@media` queries
are independent — one being present doesn't imply the other.

---

## Fix

Nest a `@media (prefers-color-scheme: dark)` block **inside** the
`@supports not` block, exactly as the issue's proposed fix suggests:

```css
@supports not ((backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))) {

  /* Light mode — unchanged */
  .ease-card-glass {
    background: rgba(255, 255, 255, 0.92);
    border-color: rgba(15, 23, 42, 0.12);
  }

  /* Dark mode — THIS WAS MISSING */
  @media (prefers-color-scheme: dark) {
    .ease-card-glass {
      background: rgba(15, 23, 42, 0.92);
      border-color: rgba(255, 255, 255, 0.12);
      color: #cdd6f4;
    }
  }
}
```

---

## Before vs After

| Condition | Before | After |
|---|---|---|
| Modern browser, light mode | ✅ Correct glass | ✅ Correct glass |
| Modern browser, dark mode | ✅ Correct dark glass | ✅ Correct dark glass |
| No backdrop-filter, light mode | ✅ White solid card | ✅ White solid card |
| No backdrop-filter, dark mode | ❌ White card on dark bg | ✅ Dark solid card |

---

## Acceptance Criteria

- [x] Glass card fallback is dark-themed when system is in dark mode
- [x] Light mode fallback unchanged (`rgba(255,255,255,0.92)`)
- [x] Tested in Firefox without `backdrop-filter`
- [x] No `core/` or `components/` files modified directly