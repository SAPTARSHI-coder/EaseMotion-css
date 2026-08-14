# Bug Fix #79231: ease-slide-left/right reversed in RTL (dir=rtl) layouts

## What does this do?
Fixes `.ease-slide-left` and `.ease-slide-right` sliding from the wrong side when `dir="rtl"` is set on `<html>`, which broke animations for Arabic, Hebrew, and Urdu users.

## Root cause
The slide keyframes use physical `translate3d(-32px,0,0)` / `translate3d(32px,0,0)`, which are not mirrored in RTL. The physical x-axis is invariant to writing direction, so the slide direction never flips.

## Fix
- Add logical, direction-aware keyframes (`ease-kf-slide-in-inline-start` / `-inline-end`) using `translate` (inline-axis) offsets.
- Add a `[dir="rtl"]` override that swaps the physical offsets so the slide respects writing direction.
- Provide `.ease-slide-inline-start` / `.ease-slide-inline-end` logical aliases.
- Redefine the existing `.ease-slide-left` / `.ease-slide-right` utilities to delegate to the logical keyframes, fixing existing markup in RTL with no markup changes.

## How is it used?
No HTML changes required. Apply the CSS patch from `core-patch/slide.css` to `core/animations.css` (or include it after the EaseMotion bundle).

```html
<html dir="rtl" lang="ar">
  <link rel="stylesheet" href="easemotion.min.css" />
  <link rel="stylesheet" href="./core-patch/slide.css" />
  <div class="ease-slide-left">...slides from inline-start (right in RTL)...</div>
</html>
```

## Expected behavior
Slide animations now respect the document writing direction. In LTR `.ease-slide-left` slides from the left; in RTL `.ease-slide-left` slides from the right (the inline-start edge).

## Accessibility
- `prefers-reduced-motion` disables the slide animations.
- Motion remains under 300ms (medium token) to avoid vestibular discomfort.

## Files
- `core-patch/slide.css` — the patch
- `demo.html` — RTL repro/verification
- `README.md` — this guide

Closes #79231
