# ease-typewriter — Typewriter Text Animation Utility

**Implements:** Issue #8391  
**Type:** Feature — new animation utility  
**Label:** `animation` `good first issue` `type:feature`

---

## What this adds

A pure CSS `ease-typewriter` utility class that creates a classic
typewriter effect — characters appear one by one with a blinking cursor.
Uses `steps()` timing for crisp character-by-character reveal.

Zero JavaScript. prefers-reduced-motion safe.

---

## Variants

| Class combination | Behavior |
|---|---|
| `ease-typewriter` | Default typewriter on load |
| `ease-typewriter ease-typewriter-loop` | Loops infinitely |
| `ease-typewriter ease-typewriter-no-cursor` | No blinking cursor |
| `ease-typewriter ease-typewriter-fast` | Duration 1s |
| `ease-typewriter ease-typewriter-slow` | Duration 5s |
| `ease-typewriter ease-delay-100` | Starts after 100ms |
| `ease-typewriter ease-delay-200` | Starts after 200ms |
| `ease-typewriter ease-delay-300` | Starts after 300ms |
| `ease-typewriter ease-delay-500` | Starts after 500ms |

All variants are composable — mix and match freely.

---

## Usage

```html
<!-- Default typewriter on load -->
<h1 class="ease-typewriter">Hello World</h1>

<!-- Infinite loop -->
<p class="ease-typewriter ease-typewriter-loop">Loading...</p>

<!-- No cursor -->
<h2 class="ease-typewriter ease-typewriter-no-cursor">Welcome Back</h2>

<!-- Fast with delay -->
<span class="ease-typewriter ease-typewriter-fast ease-delay-300">
  Building the future.
</span>

<!-- Slow loop with cursor -->
<h1 class="ease-typewriter ease-typewriter-slow ease-typewriter-loop">
  EaseMotion CSS ✨
</h1>
```

> **Important:** `ease-typewriter` works best on single-line text
> elements. Apply to `<h1>`, `<h2>`, `<p>`, or `<span>` with
> `display: inline-block`. The utility sets this automatically.

---

## Keyframe Design

Two keyframes work together:

**`ease-kf-typewriter`** — animates `width` from `0` to `100%` using
`steps(30, end)`. The `steps()` function creates discrete jumps instead
of a smooth transition, mimicking characters appearing one at a time.

**`ease-kf-cursor-blink`** — toggles `border-color` between
`transparent` and `currentColor` using `step-end` for a sharp
on/off blink (not a smooth fade).

```css
@keyframes ease-kf-typewriter {
  from { width: 0; }
  to   { width: 100%; }
}

@keyframes ease-kf-cursor-blink {
  0%, 100% { border-color: transparent; }
  50%       { border-color: currentColor; }
}
```

---

## Accessibility

`@media (prefers-reduced-motion: reduce)` disables all animation
immediately and shows full text — no characters hidden, no cursor:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-typewriter {
    animation: none !important;
    width: 100% !important;
    border-right: none !important;
  }
}
```

---

## Acceptance Criteria

- [x] Typewriter keyframes (`ease-kf-typewriter`, `ease-kf-cursor-blink`)
- [x] Loop variant (`ease-typewriter-loop`)
- [x] No cursor variant (`ease-typewriter-no-cursor`)
- [x] Fast variant (`ease-typewriter-fast` — 1s)
- [x] Slow variant (`ease-typewriter-slow` — 5s)
- [x] Works with `ease-delay-100/200/300/500` classes
- [x] `prefers-reduced-motion` fallback — shows full text instantly
- [x] Demo in `demo.html` with heading, terminal, stagger examples
- [x] Documented in `README.md`
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified