# Fix: Tabs Layout Shift in `.ease-tabs-auto` — Issue #4783

## Problem

In the `.ease-tabs-auto` variant, the active tab indicator works by adding a
`border-bottom: 2px solid var(--ease-color-primary)` **only** to the currently checked label.

Since unchecked labels have **no** bottom border, switching tabs causes a **2-pixel vertical layout shift** —
the entire tab navigation row jumps in height whenever a tab is selected.

## Root Cause

```css
/* Current behaviour — border added only on active label */
.ease-tabs-auto .ease-tab-input:nth-of-type(1):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(1) {
  border-bottom: 2px solid var(--ease-color-primary); /* ← causes shift */
}
```

## Fix

Pre-reserve the 2px border space on **every** label using a transparent border.
When a tab is selected, only the `border-bottom-color` changes — no height change, no shift.

```css
/* Fix: pre-reserve border space on all auto-width labels */
.ease-tabs-auto .ease-tab-label {
  border-bottom: 2px solid transparent;
}

/* Active: only change the color, not the border width/presence */
.ease-tabs-auto .ease-tab-input:nth-of-type(1):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(1),
/* ... all 6 variants ... */ {
  border-bottom-color: var(--ease-color-primary);
}
```

## Files

| File | Purpose |
|------|---------|
| `style.css` | The CSS override fix (to be merged into `components/tabs.css`) |
| `demo.html` | Interactive before/after comparison |

## How to Test

1. Open `demo.html` in a browser.
2. Compare the **Before** section (shifts 2px) with the **After** section (no shift).
3. Click between tabs rapidly — the tab nav row height remains perfectly stable.

## References

- Issue: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/4783
- Root file: `components/tabs.css` — `.ease-tabs-auto` block
