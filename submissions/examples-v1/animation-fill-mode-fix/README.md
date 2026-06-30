# animation-fill-mode: both — Flash Fix

**Fixes:** Issue #8386

## Problem

Entry animation classes (`ease-fade-in`, `ease-slide-up`, etc.) were
missing `animation-fill-mode: both`. This caused a visible flash:

1. Page loads → element appears at **full opacity / final position**
2. Animation starts → element **jumps back** to invisible start state
3. Animation plays → element fades/slides in

This flash is especially pronounced on hard refresh (`Ctrl+Shift+R`)
and becomes a **double flash** when `animation-delay` is used — the
element is visible during the delay, disappears, then animates in.

## Root Cause

```css
/* ❌ Before — no fill-mode */
.ease-fade-in {
  animation: ease-kf-fade-in 0.4s ease-in-out;
}
```

Without `animation-fill-mode`, the default is `none` — the browser
renders the element in its normal (non-animated) state both before
and after the animation. For a fade-in that starts at `opacity: 0`,
this means the element renders at `opacity: 1` (its default) before
the animation begins.

## Fix

Add `both` to every entry animation shorthand:

```css
/* ✅ After — fill-mode: both */
.ease-fade-in {
  animation: ease-kf-fade-in 0.4s ease-in-out both;
}
```

`both` = `backwards` + `forwards`:

- **backwards** → holds `from` keyframe state before animation starts
- **forwards** → holds `to` keyframe state after animation ends

## Classes Fixed

| Class                  | Before          | After     |
| ---------------------- | --------------- | --------- |
| `.ease-fade-in`        | ❌ no fill-mode | ✅ `both` |
| `.ease-fade-out`       | ❌ no fill-mode | ✅ `both` |
| `.ease-slide-up`       | ❌ no fill-mode | ✅ `both` |
| `.ease-slide-down`     | ❌ no fill-mode | ✅ `both` |
| `.ease-slide-in-left`  | ❌ no fill-mode | ✅ `both` |
| `.ease-slide-in-right` | ❌ no fill-mode | ✅ `both` |
| `.ease-zoom-in`        | ❌ no fill-mode | ✅ `both` |
| `.ease-zoom-out`       | ❌ no fill-mode | ✅ `both` |
| `.ease-bounce-in`      | ❌ no fill-mode | ✅ `both` |
| `.ease-flip-in`        | ❌ no fill-mode | ✅ `both` |

## Why `both` and not `forwards`?

| Value            | Before animation | After animation |
| ---------------- | ---------------- | --------------- |
| `none` (default) | Normal state     | Normal state    |
| `backwards`      | `from` state     | Normal state    |
| `forwards`       | Normal state     | `to` state      |
| `both` ✅        | `from` state     | `to` state      |

For entry animations, `both` is always correct — it prevents the
flash before AND ensures the element stays visible after.

## Delay Interaction

`animation-fill-mode: both` is **critical** with delay classes:

```html
<!-- Without both: visible → invisible → animates in (double flash) -->
<!-- With both:    invisible during delay → animates in (correct) -->
<div class="ease-fade-in ease-delay-500">Content</div>
```

## Acceptance Criteria

- [x] All entry animation classes have `animation-fill-mode: both`
- [x] No flash visible on hard refresh
- [x] Works correctly with `animation-delay` — no double flash
- [x] No breaking changes to existing class names
- [x] Replay button in demo proves consistent behavior
