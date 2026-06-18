# ease-card-glass — Dark Mode Text Color Fix

**Fixes:** Issue #2611  
**Type:** Bug fix  
**Label:** `bug` `component` `good first issue`

---

## Problem

`.ease-card-glass` sets a hardcoded dark text color in all modes:

```css
.ease-card-glass {
  color: var(--ease-color-text, #1e293b); /* always dark */
}
```

In the `@media (prefers-color-scheme: dark)` block, the background
correctly switches to a dark glass tone:

```css
@media (prefers-color-scheme: dark) {
  .ease-card-glass {
    background: rgba(30, 41, 59, 0.5); /* dark background */
    /* ❌ color was NEVER updated here */
  }
}
```

**Result:** `#1e293b` dark text on `rgba(30,41,59,0.5)` dark
background — contrast ratio of ~1.06:1. The text is essentially
invisible. Fails WCAG AA (4.5:1) and WCAG AAA (7:1) by a huge margin.

---

## Fix

Add `color: var(--ease-color-text-dark, #f8fafc)` inside the
existing dark mode block — exactly as suggested in the issue:

```css
@media (prefers-color-scheme: dark) {
  .ease-card-glass {
    --ease-glass-bg: color-mix(
      in srgb,
      var(--ease-color-surface, #1e293b) 50%,
      transparent
    );
    background: var(--ease-glass-bg, rgba(30, 41, 59, 0.5));
    border-color: rgba(255, 255, 255, 0.1);

    /* ✅ THE FIX — this single line was missing */
    color: var(--ease-color-text-dark, #f8fafc);
  }
}
```

---

## Contrast Verification

| Mode | Text | Background | Ratio | WCAG AA (4.5:1) |
|---|---|---|---|---|
| Light | `#1e293b` | `rgba(255,255,255,0.15)` | ~10.7:1 | ✅ Pass |
| Dark — Before | `#1e293b` | `rgba(30,41,59,0.5)` | ~1.06:1 | ❌ Fail |
| Dark — After | `#f8fafc` | `rgba(30,41,59,0.5)` | ~15.8:1 | ✅ Pass (AAA) |

---

## Acceptance Criteria

- [x] `.ease-card-glass` text readable in dark mode
- [x] `color: var(--ease-color-text-dark, #f8fafc)` added to dark block
- [x] Light mode text color unchanged — no regression
- [x] `@supports not (backdrop-filter)` fallback also gets the fix
- [x] WCAG AA contrast ratio verified in both modes
- [x] Demo shows before/after comparison with contrast ratios
- [x] No `core/` or `components/` files modified