# Corrected SCSS Easing Tokens

## 1. What does this do?

Provides corrected SCSS easing-curve tokens that match all five distinct curves exposed by the CSS framework, replacing the current `scss/_variables.scss` which collapses them into only two unique values.

## 2. How is it used?

```scss
@use 'easemotion-css/scss' as ease;
@use 'ease-corrected-easing-tokens-ks' as et;

// Now each easing variable produces a genuinely different curve:
// $ease-ease    → cubic-bezier(0.4,  0,   0.2, 1)  (smooth)
// $ease-out     → cubic-bezier(0,    0,   0.2, 1)  (decelerated)
// $ease-in      → cubic-bezier(0.4,  0,   1,   1)  (accelerated)
// $ease-bounce  → cubic-bezier(0.34, 1.56, 0.64, 1)  (overshoot)
// $ease-linear  → linear

// Mixins with semantically appropriate easing defaults:
.card       { @include et.slide-up(); }        // smooth ease
.hero-title { @include et.slide-in-left($delay: 100ms); }  // decelerated
.notification { @include et.bounce-in(); }      // bouncy overshoot
.loader     { @include et.pulse(); }           // looping
```

### Mixin reference

| Mixin | Keyframe | Default easing |
|---|---|---|
| `fade-in()` | `ease-kf-fade-in` | `$ease-ease` |
| `slide-up()` | `ease-kf-slide-up` | `$ease-ease` |
| `slide-down()` | `ease-kf-slide-down` | `$ease-ease` |
| `slide-in-left()` | `ease-kf-slide-in-left` | `$ease-out` |
| `slide-in-right()` | `ease-kf-slide-in-right` | `$ease-out` |
| `slide-in-from-top()` | `ease-kf-slide-in-from-top` | `$ease-in` |
| `slide-in-from-bottom()` | `ease-kf-slide-in-from-bottom` | `$ease-out` |
| `bounce-in()` | `ease-kf-bounce-in` | `$ease-bounce` |
| `zoom-in()` | `ease-kf-zoom-in` | `$ease-out` |
| `blur-to-focus()` | `ease-kf-blur-to-focus` | `$ease-out` |
| `flip-entrance()` | `ease-kf-flip` | `$ease-ease` |
| `fade-out()` | `ease-kf-fade-out` | `$ease-in` |
| `zoom-out()` | `ease-kf-zoom-out` | `$ease-in` |
| `bounce()` | `ease-kf-bounce` | `$ease-bounce` (infinite) |
| `pulse()` | `ease-kf-pulse` | `$ease-ease` (infinite) |
| `ping()` | `ease-kf-ping` | `$ease-out` (infinite) |
| `float()` | `ease-kf-float` | `$ease-ease` |
| `wave()` | `ease-kf-wave` | `$ease-ease` |
| `shake()` | `ease-kf-shake` | `$ease-ease` |
| `shimmer-text()` | `ease-kf-shimmer-text` | `$ease-linear` |
| `mask-reveal()` | `ease-kf-mask-reveal` | `$ease-ease` |
| `mask-reveal-y()` | `ease-kf-mask-reveal-y` | `$ease-ease` |
| `mask-reveal-circle()` | `ease-kf-mask-reveal-circle` | `$ease-ease` |

Includes `*-safe()` variants of `fade-in` and `slide-up` that automatically add `prefers-reduced-motion: reduce` guards.

## 3. Why is it useful?

**The problem:** The current `scss/_variables.scss` defines `$ease-in-cubic`, `$ease-out-cubic`, and `$ease-in-out-cubic` — three names that imply three different easing curves — but all three resolve to `$ease-ease` which is just `cubic-bezier(0.4, 0, 0.2, 1)`. Developers using `@include ease.slide-in-left($easing: $ease-in-cubic)` get the same result as `$ease-out-cubic`, which is incorrect.

**The fix:** This partial provides five genuinely distinct easing tokens that match the CSS framework's own palette (`--ease-ease`, `--ease-ease-out`, `--ease-ease-in`, `--ease-ease-bounce`, `--ease-ease-linear`), plus 22 semantically-typed animation mixins that use the most appropriate curve as their default.

Backward-compatible aliases (`$ease-in-cubic`, `$ease-out-cubic`, etc.) are provided so existing code can drop-in replace without renaming references.
