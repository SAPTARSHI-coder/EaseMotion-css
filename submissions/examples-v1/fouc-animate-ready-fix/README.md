# Fix: Entrance Animation FOUC in Conditionally Rendered Containers

**Issue:** [#5211](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5211)

## Problem

Entrance classes like `.ease-fade-in`, `.ease-slide-up`, `.ease-zoom-in`
use `animation-fill-mode: both`. But when they are inside a `display:none`
container that gets toggled visible, the browser renders **one frame at the
final (visible) state** before resetting to the `from` keyframe.

This causes a Flash of Unstyled Content (FOUC) — a brief flicker at full
opacity before the fade-in begins.

## Root Cause

CSS animations start on the **next paint frame** after the element becomes
visible. The `both` fill mode holds the `to` state — not the `from` state —
for that first frame.

## Fix

New utility class `.ease-animate-ready`:

```css
.ease-animate-ready {
  opacity: 0;           /* pre-set to animation start state */
  animation-delay: 16ms; /* one rAF frame — lets opacity:0 paint first */
}
```

### Usage

Add `.ease-animate-ready` alongside any entrance animation class when the
element is inside a conditionally shown container:

```html
<!-- inside a modal, tab, accordion, display:none parent -->
<div class="ease-fade-in ease-animate-ready">Content</div>
<div class="ease-slide-up ease-animate-ready">Content</div>
<div class="ease-zoom-in ease-animate-ready">Content</div>
```

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  .ease-animate-ready {
    opacity: 1;
    animation: none;
  }
}
```

## How to Verify

1. Open `demo.html` in Chrome
2. Click **Toggle ❌ Buggy** — watch the card flash at full opacity first
3. Click **Toggle ✅ Fixed** — card starts invisible, fades in cleanly

## Files
- `style.css` — the fix (`.ease-animate-ready` utility)
- `demo.html` — side-by-side buggy vs fixed toggle demo