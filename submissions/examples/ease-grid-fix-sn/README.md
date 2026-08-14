# Ease Grid Fix Sn

## What does this do?
A bug-fix demonstration that resolves the 768px responsive grid breakpoint overlap where `max-width: 768px` (mobile) and `min-width: 768px` (tablet) both target the exact same viewport width, causing layout inconsistencies.

## How is it used?

```css
/* ❌ BUGGY — Both target 768px */
@media (max-width: 768px) { /* Mobile: 0 to 768px */ }
@media (min-width: 768px) { /* Tablet: 768px+ */ }

/* ✅ FIXED — Mutually exclusive */
@media (max-width: 767px) { /* Mobile: 0 to 767px */ }
@media (min-width: 768px) { /* Tablet: 768px+ */ }
```

The fix uses these CSS classes:
- `.grid-fix-responsive` — a responsive grid with fixed breakpoints
- `.grid-fix-bug-grid` — demonstrates the buggy behavior (red)
- `.grid-fix-fixed-grid` — demonstrates the fixed behavior (green)

Customize via column classes:
- `.grid-fix-cols-1`, `.grid-fix-cols-2`, `.grid-fix-cols-3`, `.grid-fix-cols-4`
- `.grid-fix-cols-auto` — auto-fit with 250px minimum

## Why is it useful?
Breakpoint overlap at 768px is a common CSS bug that causes unpredictable column layouts on tablet devices. This fix ensures clean, non-overlapping breakpoints by switching mobile to `max-width: 767px`, making the system reliable across all viewport widths. The demo visually compares the buggy vs. fixed behavior side by side.