# ease-bounce — Bounce Animation Utility

**Fixes:** Issue #8393

## Overview

A pure CSS vertical bounce effect utility class with variants for
looping, hover-trigger, speed, and amplitude. Zero JavaScript.
`prefers-reduced-motion` safe.

## Usage

```html
<!-- Scroll indicator — loops infinitely -->
<span class="ease-bounce ease-bounce-loop">⬇️</span>

<!-- CTA button — bounces only on hover -->
<button class="ease-bounce ease-bounce-hover">Download Now</button>

<!-- Notification dot — high infinite bounce -->
<span class="ease-bounce ease-bounce-high ease-bounce-loop">🔴</span>

<!-- Staggered loading dots -->
<div class="ease-bounce ease-bounce-loop"></div>
<div class="ease-bounce ease-bounce-loop ease-delay-200"></div>
<div class="ease-bounce ease-bounce-loop ease-delay-500"></div>

<!-- Fast bounce with delay -->
<div class="ease-bounce ease-bounce-fast ease-delay-300">New Message!</div>
```

> **Note:** `.ease-bounce` sets `display: inline-block` automatically
> so `transform` works on inline elements like `<span>` and `<a>`.

## Variants

| Class                | Description                                        |
| -------------------- | -------------------------------------------------- |
| `.ease-bounce`       | One-shot bounce on load (default)                  |
| `.ease-bounce-loop`  | Infinite loop                                      |
| `.ease-bounce-hover` | Triggers only on `:hover` (pointer guard included) |
| `.ease-bounce-fast`  | Duration `0.4s`                                    |
| `.ease-bounce-slow`  | Duration `1.5s`                                    |
| `.ease-bounce-high`  | Larger amplitude (`30px` instead of `15px`)        |

## Composability

All variants are freely composable — mix and match:

| Combination                                       | Behaviour              |
| ------------------------------------------------- | ---------------------- |
| `.ease-bounce.ease-bounce-loop.ease-bounce-fast`  | Fast infinite loop     |
| `.ease-bounce.ease-bounce-high.ease-bounce-loop`  | High infinite loop     |
| `.ease-bounce.ease-bounce-hover.ease-bounce-high` | High bounce on hover   |
| `.ease-bounce.ease-bounce-loop.ease-delay-500`    | 500ms delay then loops |

## Keyframe Design

```css
@keyframes ease-kf-bounce {
  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  40% {
    transform: translateY(-15px);
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(-10px);
    animation-timing-function: ease-in;
  }
  80% {
    transform: translateY(-5px);
    animation-timing-function: ease-out;
  }
}
```

Per-step `animation-timing-function` overrides create a realistic
physics feel — the element accelerates downward and decelerates
upward, mimicking real-world bounce behaviour.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-bounce,
  .ease-bounce.ease-bounce-hover:hover {
    animation: none !important;
    transform: none !important;
  }
}
```

All bounce animations are disabled for users who have enabled
"Reduce Motion" in OS accessibility settings.

The `.ease-bounce-hover` variant is also guarded with
`@media (hover: hover) and (pointer: fine)` so it never
fires on touch devices (no tap-flash).

## Acceptance Criteria

- [x] `ease-kf-bounce` keyframe added (15px, multi-step easing)
- [x] `ease-kf-bounce-high` keyframe added (30px)
- [x] `.ease-bounce` base class — one-shot on load
- [x] `.ease-bounce-loop` — infinite iteration
- [x] `.ease-bounce-hover` — hover-triggered, pointer-guarded
- [x] `.ease-bounce-fast` — 0.4s duration
- [x] `.ease-bounce-slow` — 1.5s duration
- [x] `.ease-bounce-high` — 30px amplitude
- [x] Works with existing `ease-delay-*` classes
- [x] `prefers-reduced-motion` fallback included
- [x] `display: inline-block` set automatically
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
