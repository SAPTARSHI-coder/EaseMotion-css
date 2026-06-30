# ease-delay-\* Fix

**Fixes:** Issue #6936  
**Type:** Bug Fix + Documentation

## What was broken

### Bug 1 — Silent no-op

`ease-delay-*` classes only set `animation-delay`. Used alone without
a base animation class (like `ease-fade-in`, `ease-slide-up`), they
do absolutely nothing — no error, no warning, no visual feedback.

### Bug 2 — Flash before animation (fill-mode missing)

Without `animation-fill-mode: both`, elements using `ease-fade-in ease-delay-300`
flash fully visible for 300ms BEFORE the animation runs — the opposite
of intended behaviour.

### Bug 3 — Transition conflict (undocumented)

`animation-delay` has no effect on CSS `transition`. If a user applies
`ease-delay-*` alongside a transition-based hover effect, nothing happens
and there's no documentation warning about this.

## The Fix

### CSS (`style.css`)

One key rule added:

```css
[class*="ease-delay-"] {
  animation-fill-mode: both;
}
```

This ensures the element holds its animation's starting state (e.g. `opacity: 0`)
during the delay period instead of flashing visible.

### Docs (this demo)

- Clearly shows `ease-delay-*` as a **modifier class** requiring a base animation
- Demonstrates the flash bug before/after fix
- Documents the transition vs animation conflict

## Correct usage

```html
<!-- ✅ Correct — delay modifier paired with animation class -->
<div class="ease-fade-in ease-delay-200">Fades in after 200ms</div>
<div class="ease-slide-up ease-delay-400">Slides up after 400ms</div>

<!-- ❌ Wrong — delay alone does nothing -->
<div class="ease-delay-300">Nothing happens</div>
```

## Files

| File        | Purpose                                   |
| ----------- | ----------------------------------------- |
| `style.css` | Delay utility classes with fill-mode fix  |
| `demo.html` | Visual demo of all 3 bugs and their fixes |
| `README.md` | This file                                 |
