# ease-btn-ripple

A Material-style ripple button effect — pure CSS. A circular ripple expands outward from the button center on press (`:active`) and keyboard focus (`:focus-visible`), providing tactile, recognized interaction feedback.

## What does this do?

Adds a **btn-ripple** button: each button carries a `::after` pseudo-element positioned at its center as a tiny circle. On `:active` or `:focus-visible`, that circle scales up (`scale(4)`) and fades out, reading as a ripple expanding across the button surface. The button is `overflow: hidden` so the ripple stays clipped to the button bounds.

## How is it used?

1. Use the `.btn-ripple` class on any `<button>`.
2. Pick a variant: `--primary`, `--ghost`, `--accent`, or `--danger`.
3. Tune the ripple size via the `--ripple-scale` custom property.

```html
<link rel="stylesheet" href="style.css" />

<button class="btn-ripple btn-ripple--primary">Submit</button>
<button class="btn-ripple btn-ripple--ghost">Cancel</button>
```

## Why is this useful?

- **Animation-first** — the signature motion is the `::after` pseudo-element's `transform: scale()` + `opacity` transition on `:active`/`:focus-visible`, expanding a radial highlight across the button. Pure `transform`/`opacity`, GPU-friendly.
- **Glassmorphism aesthetic** — the ghost variant is a frosted button via `backdrop-filter: blur()`; the solid variants use gradient fills.
- **Accessible** — the ripple fires on `:focus-visible` (not just `:active`), so keyboard users get the same feedback. `:focus-visible` also adds a visible ring. Full `prefers-reduced-motion` support (ripple still appears instantly without a transition).
- **Reusable** — configurable via CSS custom properties (`--ripple-duration`, `--ripple-ease`, `--ripple-scale`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — ripple button base + four variants, `::after` ripple transition, focus-visible ring, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
