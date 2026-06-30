# ease-float — Floating Animation Utility

**Fixes:** Issue #8394

## Overview

A pure CSS smooth up-and-down floating animation utility — perfect
for hero illustrations, product cards, icons, avatars, and clouds.
Loops infinitely by default. Zero JavaScript.
`prefers-reduced-motion` safe.

## Usage

```html
<!-- Hero illustration -->
<img class="ease-float" src="hero.png" alt="Hero" />

<!-- Product card subtle float on hover -->
<div class="ease-float ease-float-subtle ease-float-hover">
  <img src="product.png" alt="Product" />
</div>

<!-- Icon float on hover -->
<span class="ease-float ease-float-hover">🚀</span>

<!-- Fast high float -->
<div class="ease-float ease-float-fast ease-float-high">⬆️</div>

<!-- Staggered parallax clouds -->
<span class="ease-float ease-float-slow">☁️</span>
<span class="ease-float ease-float-slow ease-delay-300">☁️</span>
<span class="ease-float ease-float-slow ease-delay-700">☁️</span>
```

> **Note:** `.ease-float` loops **infinitely by default** — unlike
> other `ease-*` utilities that play once. Use `.ease-float-once`
> for a single play. Works best on `block` or `inline-block`
> elements with a defined size.

## Variants

| Class                | Description                          |
| -------------------- | ------------------------------------ |
| `.ease-float`        | Infinite float, 12px, 2.5s (default) |
| `.ease-float-once`   | Plays only once                      |
| `.ease-float-hover`  | Triggers only on `:hover`            |
| `.ease-float-fast`   | Duration `1s`                        |
| `.ease-float-slow`   | Duration `4s`                        |
| `.ease-float-high`   | Amplitude `20px`                     |
| `.ease-float-subtle` | Amplitude `4px`                      |

## Composability

All variants freely composable — mix and match:

| Combination                                     | Behaviour                   |
| ----------------------------------------------- | --------------------------- |
| `.ease-float.ease-float-fast.ease-float-high`   | Fast high float (1s, 20px)  |
| `.ease-float.ease-float-slow.ease-float-subtle` | Slow gentle float (4s, 4px) |
| `.ease-float.ease-float-hover.ease-float-high`  | High float on hover only    |
| `.ease-float.ease-float-slow.ease-delay-500`    | 500ms delay then floats     |
| `.ease-float.ease-float-once.ease-float-high`   | One-shot high float         |

## Keyframes

```css
/* Standard — 12px */
@keyframes ease-kf-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* High — 20px */
@keyframes ease-kf-float-high {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Subtle — 4px */
@keyframes ease-kf-float-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
```

`ease-in-out` timing creates a smooth sine-like motion — the element
accelerates and decelerates naturally at both ends.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-float,
  .ease-float.ease-float-hover:hover {
    animation: none !important;
    transform: none !important;
  }
}
```

All float animations are fully disabled for users who enable
"Reduce Motion" in OS accessibility settings.

`.ease-float-hover` is also guarded with
`@media (hover: hover) and (pointer: fine)` — no tap-flash on touch.

## Acceptance Criteria

- [x] `ease-kf-float` keyframe (12px)
- [x] `ease-kf-float-high` keyframe (20px)
- [x] `ease-kf-float-subtle` keyframe (4px)
- [x] `.ease-float-once` — plays once
- [x] `.ease-float-hover` — hover-triggered, pointer-guarded
- [x] `.ease-float-fast` — 1s duration
- [x] `.ease-float-slow` — 4s duration
- [x] `.ease-float-high` — 20px amplitude
- [x] `.ease-float-subtle` — 4px amplitude
- [x] Works with `ease-delay-*` classes
- [x] `prefers-reduced-motion` fallback
- [x] `display: inline-block` set automatically
- [x] Hero illustration use case in demo
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
