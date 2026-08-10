# ease-divider-draw

Dividers that draw themselves across the page on load — solid, gradient, dashed, and centered variants. Each line animates into place rather than appearing instantly.

## What does this do?

Adds a **divider-draw**: `<hr>` elements that animate their width into view on load. Four variants: a solid line that scales in from the left, a gradient line whose sheen sweeps as it draws, a dashed line that marches in, and a centered line that grows outward symmetrically from the middle.

## How is it used?

1. Use an `<hr class="divider">` and add a variant: `--solid`, `--gradient`, `--dashed`, or `--center`.
2. Tune the draw speed via the `--draw-duration` custom property.

```html
<link rel="stylesheet" href="style.css" />

<hr class="divider divider--solid" />
<hr class="divider divider--gradient" />
<hr class="divider divider--dashed" />
<hr class="divider divider--center" />
```

## Why is this useful?

- **Animation-first** — the signature motion draws each divider into view on load: `@keyframes dd-draw-x` scales the line's `transform: scaleX(0 → 1)` with a `transform-origin` that sets the direction (left for solid/gradient/dashed, center for the symmetric variant). The gradient variant layers `@keyframes dd-sweep` to travel its `background-position` so the sheen glides along as the line draws. All via `transform`/`background-position`.
- **Glassmorphism aesthetic** — dividers use translucent line colors that sit naturally on the frosted dark background.
- **Accessible** — `<hr>` is a semantic section break that screen readers announce; the animation is purely decorative. Full `prefers-reduced-motion` support (lines appear fully drawn instantly).
- **Reusable** — configurable via CSS custom properties (`--draw-duration`, `--draw-ease`, `--line`, `--accent`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — four divider variants, draw/sweep keyframes, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
