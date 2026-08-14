# BG Animate

Submission for EaseMotion CSS — resolves Issue #2741

---

## 1. What does this do?

Adds `ease-bg-animate` — animated shifting background gradients for hero
sections, cards, and banners. The gradient smoothly cycles through colors
using CSS `@keyframes` on `background-position` with an oversized
`background-size: 300% 300%`, creating a living, breathing background with
zero JavaScript.

---

## 2. How is it used?

```html
<!-- Default: purple → blue → cyan (6s cycle) -->
<section class="ease-bg-animate">
  <h1 style="color: white;">Animated Hero</h1>
</section>

<!-- Color variants (stack onto the base class) -->
<div class="ease-bg-animate ease-bg-animate-sunset">Sunset</div>
<div class="ease-bg-animate ease-bg-animate-ocean">Ocean</div>
<div class="ease-bg-animate ease-bg-animate-forest">Forest</div>
<div class="ease-bg-animate ease-bg-animate-dark">Dark</div>

<!-- Speed modifiers (stack onto any variant) -->
<div class="ease-bg-animate ease-bg-animate-fast">Fast (3s)</div>
<div class="ease-bg-animate ease-bg-animate-slow">Slow (12s)</div>
```

---

## 3. Why is it useful?

Animated gradient backgrounds are one of the most-requested visual effects
for hero sections and landing pages. Without a utility class, developers
must manually write the `@keyframes`, set `background-size: 300% 300%`,
and pick colors from scratch for every project.

`ease-bg-animate` gives EaseMotion users a complete, composable system:
- One class to activate the effect
- Color variant classes covering four common palettes
- Speed modifiers that stack freely onto any combination

The approach (animating `background-position` on an oversized linear-gradient)
is GPU-friendly and requires no JavaScript. `prefers-reduced-motion` is
respected — users who opt out see a static gradient instead.

---

## Files

| File        | Purpose                                                                       |
|-------------|-------------------------------------------------------------------------------|
| `style.css` | 1 keyframe, base class, 4 color variants, 2 speed modifiers, reduced-motion   |
| `demo.html` | Full-width hero, 4 variant cards, speed comparison, variant reference table   |
| `README.md` | This file                                                                     |

---

Proposed ease-* names (maintainer decides):
ease-bg-animate · ease-bg-animate-sunset · ease-bg-animate-ocean · ease-bg-animate-forest · ease-bg-animate-dark · ease-bg-animate-slow · ease-bg-animate-fast

Closes #2741
