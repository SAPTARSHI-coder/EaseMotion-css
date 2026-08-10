# Float Enter Effect

A simple, elegant CSS "float enter" animation. Elements gently float into place with a subtle translate + fade + micro-scale, giving pages a calm, weightless feel as content appears.

---

## Files

- demo.html
- style.css
- README.md

---

## What Does This Do?

Provides a self-contained entrance animation built with pure CSS keyframes — no JavaScript, no external dependencies. Ships with:

- **1 default variant** — floats up from below (most common use case).
- **3 directional variants** — down, left, right.
- **1 slow variant** — 1.1s dramatic entrance for hero elements.
- **5 delay modifiers** — for staggered animations across grids and lists.

The default animation uses a small overshoot at 60% (translateY(-4px) + scale(1.005)) to make the entrance feel weightless — like the element "settles" into place rather than snapping.

---

## How Is It Used?

Just add the class to any element. The animation plays automatically on page load:

    <!-- Default: floats up from below -->
    <div class="card float-enter">Hello!</div>

    <!-- Staggered grid (delays cascade) -->
    <div class="card float-enter">Card 1</div>
    <div class="card float-enter float-enter--delay-1">Card 2</div>
    <div class="card float-enter float-enter--delay-2">Card 3</div>
    <div class="card float-enter float-enter--delay-3">Card 4</div>

    <!-- Directional variants -->
    <span class="float-enter--down">Comes from above</span>
    <span class="float-enter--left">Comes from the left</span>
    <span class="float-enter--right">Comes from the right</span>

    <!-- Slow variant for hero elements -->
    <h1 class="float-enter--slow">Welcome</h1>
    <p class="float-enter--slow float-enter--delay-2">Subtitle appears second</p>

---

## Class Reference

| Class                    | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `.float-enter`           | Default — element floats up from below (0.7s).                 |
| `.float-enter--down`     | Element floats down from above.                                |
| `.float-enter--left`     | Element floats in from the left.                               |
| `.float-enter--right`    | Element floats in from the right.                              |
| `.float-enter--slow`     | Slower 1.1s entrance for hero titles / landing sections.       |
| `.float-enter--delay-1`  | Adds 0.1s animation-delay.                                     |
| `.float-enter--delay-2`  | Adds 0.2s animation-delay.                                     |
| `.float-enter--delay-3`  | Adds 0.3s animation-delay.                                     |
| `.float-enter--delay-4`  | Adds 0.4s animation-delay.                                     |
| `.float-enter--delay-5`  | Adds 0.5s animation-delay.                                     |

---

## Animation Details

- **Duration:** 0.7s (default) or 1.1s (slow variant).
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — a smooth "ease-out expo" curve that decelerates naturally.
- **Fill mode:** `forwards` — the element stays in its final state after the animation completes.
- **Properties animated:** `transform` (translate + scale) and `opacity` — both GPU-accelerated.
- **Micro-overshoot:** The animation crosses the resting position at 60% and settles back at 100%, giving a light "hover-in" feel without being bouncy.
- **`will-change`:** Set on transform + opacity so the browser preps GPU compositing before the animation runs.

---

## Accessibility

Respects the user's motion preferences via `@media (prefers-reduced-motion: reduce)`. When reduced motion is preferred, the translate/scale is disabled and the element simply fades in over 0.4s — preserving the "reveal" feedback without vestibular discomfort.

---

## Why Does This Fit EaseMotion CSS?

- **Self-contained:** No JavaScript, no external assets, no CDN — opens directly in a browser.
- **Composable:** The 5 delay modifiers combine with any directional variant to create staggered sequences without writing new keyframes.
- **Human-readable class names:** `.float-enter`, `.float-enter--down`, `.float-enter--delay-2` describe intent, not implementation.
- **Animation-first:** Pure CSS keyframes drive the effect — zero runtime overhead.
- **Accessible by default:** Ships with a `prefers-reduced-motion` fallback out of the box.
- **Framework-friendly:** Class names are easy for the maintainer to standardize to `ease-*` naming (e.g. `ease-float-enter`, `ease-float-enter-down`, `ease-delay-2`).
- **GPU-friendly:** Only animates `transform` and `opacity` — no layout thrash.

---

## Browser Support

Uses only standard CSS properties (`transform`, `opacity`, `@keyframes`, `animation-delay`, `will-change`, `prefers-reduced-motion`) supported by all modern browsers — Chrome, Firefox, Edge, Safari.

---

## Author

**soumyasekharshee265-ux**
