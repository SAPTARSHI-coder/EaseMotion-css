# CSS Aurora Gradient Hero Card with Hover Spotlight

> A modern hero card component featuring fluid CSS background aurora mesh gradients, subtle glowing borders, crisp high-legibility typography, and an interactive mouse-following radial spotlight glow.

## Features

- **Fluid Aurora Motion** — Pure CSS `@keyframes aurora-flow` animating mesh radial gradients smoothly without canvas overhead.
- **Mouse-Following Spotlight** — Interactive radial spotlight glow layer tracking cursor coordinates (`--mouse-x`, `--mouse-y`) with `requestAnimationFrame` performance optimization.
- **Glassmorphic Elevation** — Subtle glowing border overlay using CSS `mask-composite` and backdrop blur effects.
- **High Legibility** — Carefully tuned color contrast ratios ensuring compliant text legibility over animated background overlays.
- **Reduced Motion Support** — Freezes ambient keyframe animations when `@media (prefers-reduced-motion: reduce)` is enabled.
- **High Contrast Support** — Provides visible border outlines in Windows `@media (forced-colors: active)` mode.

## Files

```
submissions/examples/aurora-gradient-card-em/
├── demo.html    — Interactive demo page showcasing the hero card
├── style.css    — Design tokens, aurora keyframes, spotlight overlays & responsive rules
├── script.js    — Throttled mouse tracking updating CSS custom properties
└── README.md    — Component documentation
```

## Design Tokens (CSS Variables)

| Variable | Default Value | Purpose |
|---|---|---|
| `--aurora-1` | `#6366f1` | Aurora mesh color layer 1 |
| `--aurora-2` | `#a855f7` | Aurora mesh color layer 2 |
| `--aurora-3` | `#ec4899` | Aurora mesh color layer 3 |
| `--aurora-4` | `#06b6d4` | Aurora mesh color layer 4 |
| `--spotlight-color` | `rgba(168, 85, 247, 0.22)` | Hover radial spotlight tint |
| `--spotlight-radius` | `350px` | Hover spotlight radius |
| `--mouse-x` | `50%` | Interactive X coordinate (set by JS) |
| `--mouse-y` | `50%` | Interactive Y coordinate (set by JS) |

## Usage

```html
<article class="aurora-card" id="auroraCard">
  <div class="aurora-card__mesh" aria-hidden="true"></div>
  <div class="aurora-card__spotlight" aria-hidden="true"></div>
  <div class="aurora-card__border" aria-hidden="true"></div>

  <div class="aurora-card__content">
    <h2 class="aurora-card__title">Your Hero Title</h2>
    <p class="aurora-card__description">Your description text...</p>
    <button type="button" class="btn btn--primary">Get Started</button>
  </div>
</article>

<script src="script.js"></script>
```

## Acceptance Criteria ✅

- [x] Aurora gradient background animates fluidly without layout repaint thrashing.
- [x] Hovering over card updates spotlight glow position smoothly.
- [x] Respects `prefers-reduced-motion` media query by freezing ambient animation.
- [x] Text content remains highly legible with compliant contrast ratios against animated background.
- [x] Correct CI file names (`demo.html`, `style.css`, `script.js`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
