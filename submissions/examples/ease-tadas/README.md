# ease-tada — Celebratory Scale + Rotate Animation Utility

**Implements:** Issue #3875  
**Type:** Feature — new animation utility  
**Label:** `animation` `type:feature`

---

## What this adds

A pure CSS `ease-tada` utility class that combines scale and rotation
keyframes for a playful celebratory "tada" effect — perfect for
success states, badges, buttons, and achievement moments.

Zero JavaScript. prefers-reduced-motion safe.

---

## Variants

| Class combination | Behavior |
|---|---|
| `ease-tada` | One-shot on load (default) |
| `ease-tada ease-tada-loop` | Loops infinitely |
| `ease-tada ease-tada-hover` | Triggers only on `:hover` |
| `ease-tada ease-tada-fast` | Duration 0.5s |
| `ease-tada ease-tada-slow` | Duration 2s |
| `ease-tada ease-delay-100` | 100ms start delay |
| `ease-tada ease-delay-200` | 200ms start delay |
| `ease-tada ease-delay-300` | 300ms start delay |
| `ease-tada ease-delay-500` | 500ms start delay |

All variants are composable — mix and match freely.

---

## Usage

```html
<!-- One-shot on load -->
<span class="ease-tada">🏆</span>

<!-- Infinite loop -->
<span class="ease-tada ease-tada-loop">🔔</span>

<!-- Hover trigger only -->
<button class="ease-tada ease-tada-hover">🎉 Submit</button>

<!-- Fast hover trigger -->
<span class="ease-tada ease-tada-hover ease-tada-fast">⚡</span>

<!-- Slow loop with delay -->
<span class="ease-tada ease-tada-loop ease-tada-slow ease-delay-300">⭐</span>
```

> **Important:** Apply `ease-tada` to `inline-block` or block elements.
> Inline elements (like bare `<span>`) need `display: inline-block`
> for `transform` to work — the utility sets this automatically.

---

## Keyframe Design

The `ease-kf-tada` keyframe sequence:

1. **Compress** — scale down to 0.9 with a slight tilt (`-3deg`)
2. **Burst** — scale up to 1.1, rapidly alternating `±3deg` rotation
3. **Settle** — return to `scale(1) rotate(0deg)`

This mimics the motion of a physical "tada!" gesture — a quick windup
followed by an energetic release and settle.

---

## Accessibility

`@media (prefers-reduced-motion: reduce)` disables all `ease-tada`
animations immediately — no motion for users who need it.

---

## Acceptance Criteria

- [x] Scale + rotate tada keyframes (`ease-kf-tada`)
- [x] Loop variant (`ease-tada-loop`)
- [x] Hover-trigger variant (`ease-tada-hover`)
- [x] Fast variant (`ease-tada-fast` — 0.5s)
- [x] Slow variant (`ease-tada-slow` — 2s)
- [x] Delay utilities (`ease-delay-100/200/300/500`)
- [x] `prefers-reduced-motion` fallback
- [x] `style.css`, `demo.html`, `README.md` present
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified