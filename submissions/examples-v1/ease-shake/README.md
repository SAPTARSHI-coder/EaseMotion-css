# ease-shake — Shake / Error Vibration Animation Utility

**Implements:** Issue #8392  
**Type:** Feature — new animation utility  
**Label:** `animation` `good first issue` `type:feature`

---

## What this adds

A pure CSS `ease-shake` utility class that creates a horizontal
shake/vibration effect — perfect for error states, invalid form inputs,
wrong password alerts, and attention-grabbing UI moments.

Zero JavaScript. prefers-reduced-motion safe.

---

## Variants

| Class combination | Behavior |
|---|---|
| `ease-shake` | One-shot shake on load (default) |
| `ease-shake ease-shake-loop` | Loops infinitely |
| `ease-shake ease-shake-hover` | Triggers only on `:hover` |
| `ease-shake ease-shake-hard` | Larger shake distance (20px) |
| `ease-shake ease-shake-fast` | Duration 0.3s |
| `ease-shake ease-shake-slow` | Duration 1s |
| `ease-shake ease-delay-100` | Starts after 100ms |
| `ease-shake ease-delay-200` | Starts after 200ms |
| `ease-shake ease-delay-300` | Starts after 300ms |
| `ease-shake ease-delay-500` | Starts after 500ms |

All variants are composable — mix and match freely.

---

## Usage

```html
<!-- Error state on form input -->
<input class="ease-shake" type="text" placeholder="Wrong password" />

<!-- Shake on hover -->
<button class="ease-shake ease-shake-hover">❌ Delete</button>

<!-- Hard shake for alert -->
<div class="ease-shake ease-shake-hard">⚠️ Invalid credentials!</div>

<!-- Fast loop shake for notification bell -->
<span class="ease-shake ease-shake-loop ease-shake-fast">🔔</span>

<!-- Slow shake with delay -->
<p class="ease-shake ease-shake-slow ease-delay-300">Please fix errors above</p>
```

> **Important:** Apply `ease-shake` to `inline-block` or block elements.
> The utility sets `display: inline-block` automatically so `transform`
> works on inline elements like `<span>`.

---

## Keyframe Design

**`ease-kf-shake`** — alternates left/right `translateX` with
decreasing amplitude (8px → 6px → 4px), mimicking a physical
object settling after a knock.

**`ease-kf-shake-hard`** — same pattern but 20px max distance
for stronger, more urgent alerts.

```css
@keyframes ease-kf-shake {
  0%,  100% { transform: translateX(0);    }
  15%        { transform: translateX(-8px); }
  30%        { transform: translateX(8px);  }
  45%        { transform: translateX(-6px); }
  60%        { transform: translateX(6px);  }
  75%        { transform: translateX(-4px); }
  90%        { transform: translateX(4px);  }
}
```

---

## Accessibility

`@media (prefers-reduced-motion: reduce)` disables all shake
animations immediately:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-shake,
  .ease-shake.ease-shake-hover:hover {
    animation: none !important;
    transform: none !important;
  }
}
```

---

## Acceptance Criteria

- [x] `ease-kf-shake` and `ease-kf-shake-hard` keyframes added
- [x] Loop variant (`ease-shake-loop`)
- [x] Hover trigger variant (`ease-shake-hover`)
- [x] Fast variant (`ease-shake-fast` — 0.3s)
- [x] Slow variant (`ease-shake-slow` — 1s)
- [x] Hard shake variant (`ease-shake-hard` — 20px distance)
- [x] Works with `ease-delay-100/200/300/500` classes
- [x] `prefers-reduced-motion` fallback included
- [x] Demo in `demo.html` — form error, alerts, hover, loop, speed, hard
- [x] Documented in `README.md`
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified