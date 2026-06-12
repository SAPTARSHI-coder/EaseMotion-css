# 3D Animation Suite — `ease-3d-sap`

## 1. What does this do?

Adds five GPU-accelerated 3D CSS utilities — `ease-rise-3d`, `ease-flip-3d`, `ease-tilt-in`, `ease-depth-fade`, and `ease-hover-3d-lift` — that give elements depth, perspective, and spatial presence with a single class.

---

## 2. How is it used?

```html
<!-- Entrance animations -->
<h1 class="ease-rise-3d">Rises from behind the screen</h1>
<p class="ease-flip-3d ease-delay-200">Flips in on the X axis</p>
<div class="ease-tilt-in ease-delay-300">Swings in from the side</div>
<section class="ease-depth-fade">Zooms in from deep Z space</section>

<!-- Hover effect -->
<div class="ease-card ease-hover-3d-lift">Tilts toward the cursor on hover</div>
```

Fully composable with existing `ease-delay-*` and `ease-duration-*` utilities. No extra configuration needed.

---

## 3. Why is it useful for EaseMotion CSS?

EaseMotion CSS is animation-first and human-readable. Currently, all animation utilities operate in 2D — `ease-fade-in`, `ease-slide-up`, etc. 3D transforms are a natural next layer, but writing raw `perspective()`, `rotateX()`, and `translateZ()` chains by hand is verbose and hard to remember.

This suite:

- **Fills a gap** — no existing `ease-*` class touches the Z axis
- **Stays human-readable** — `ease-rise-3d` describes exactly what it does
- **Is composable** — works with all existing delay/duration/reveal utilities
- **Is accessible** — ships with `prefers-reduced-motion` support baked in
- **Is zero-dependency** — pure CSS, no JavaScript required (except the optional cursor parallax in the demo)

---

## Files

| File        | Purpose                                                     |
| ----------- | ----------------------------------------------------------- |
| `demo.html` | Self-contained landing page demo (open directly in browser) |
| `style.css` | Raw CSS for all 5 animation utilities + demo layout styles  |
| `README.md` | This file                                                   |

---

## Checklist

- [x] This feature does not duplicate an existing EaseMotion CSS class
- [x] I understand my naming will be standardized by the maintainer
- [x] I will submit code inside `submissions/examples/` only — not in `core/` or `components/`
