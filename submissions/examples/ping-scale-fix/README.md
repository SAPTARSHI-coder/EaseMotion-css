# ease-ping Scale Fix

**Fixes:** [#5180](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5180)  
**File affected:** `core/animations.css`

---

## Problem

The `ease-kf-ping` keyframe uses `transform: scale(2)` hardcoded.

For tiny elements like 8px notification dots, 2× scale looks fine.
But for larger elements like 48px badges or buttons, the ping ring
doubles their size and visually overlaps surrounding content.

There is no CSS variable to control the scale, so developers are
forced to override the entire `@keyframes` block — a major DX problem.

---

## Fix

Replace the hardcoded `scale(2)` with `scale(var(--ease-ping-scale, 2))`
so developers can tune it per element without any keyframe override.

**Before (buggy):**
```css
@keyframes ease-kf-ping {
  75%, 100% {
    transform: scale(2);   /* hardcoded */
    opacity: 0;
  }
}
```

**After (fixed):**
```css
@keyframes ease-kf-ping {
  75%, 100% {
    transform: scale(var(--ease-ping-scale, 2)); /* customizable */
    opacity: 0;
  }
}
```

---

## Usage

```html
<!-- Default scale 2 — unchanged behaviour -->
<span class="ease-ping"></span>

<!-- Smaller ring for large badge -->
<span class="badge ease-ping" style="--ease-ping-scale: 1.5"></span>

<!-- Tighter ring for button -->
<button class="ease-ping" style="--ease-ping-scale: 1.2">Live</button>

<!-- Wider ring for tiny dot -->
<span class="dot ease-ping" style="--ease-ping-scale: 2.5"></span>
```

---

## Scale guide

| Value | Best for |
|---|---|
| `1.2 – 1.5` | Large elements (badges, buttons 40px+) |
| `1.6 – 2.0` | Medium elements (default, avatars) |
| `2.0 – 2.5` | Small elements (10–16px dots) |
| `2.5 – 3.0` | Tiny elements (6–8px indicators) |

---

## Demo

Open `demo.html` to see the before/after comparison across
different element sizes and the scale playground.

---

## Checklist

- [x] Default value `2` — no breaking changes to existing usage
- [x] CSS variable follows existing EaseMotion naming convention
- [x] One-line change to the keyframe in `core/animations.css`
- [x] Includes `demo.html`, `style.css`, `README.md`