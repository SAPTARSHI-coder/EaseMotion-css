# ease-badge-pop

Badges that pop into view with a subtle overshoot — a reusable pop animation for New, Sale, Featured, Live, and notification counters.

## What does this do?

Adds a **badge-pop**: badges scale from `0.8` to `1` with a slight overshoot (`scale(1.08)` near the end) and fade in, creating a tactile "pop" whenever a badge appears. Variants cover common label semantics (New / Sale / Featured / Live) plus numeric notification counters. The Live badge includes an endlessly pulsing dot ring to signal "active." Hovering or focusing a badge replays the pop.

## How is it used?

1. Use a `<span class="badge">` and add a variant: `--new`, `--sale`, `--featured`, `--live`, or `--count`.
2. For numeric counters, put the number as the text and an `aria-label`.
3. The pop plays automatically on load; it replays on hover/focus.

```html
<link rel="stylesheet" href="style.css" />

<span class="badge badge--new">New</span>
<span class="badge badge--live"><span class="badge__pulse" aria-hidden="true"></span> Live</span>
<span class="badge badge--count" aria-label="3 unread notifications">3</span>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes bp-pop` scaling `0.8 → 1.08 → 1` with `opacity` and an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for the springy pop. The Live variant layers `@keyframes bp-ring` for an expanding dot halo. All via `transform`/`opacity`/`box-shadow`.
- **Glassmorphism aesthetic** — badges sit on the frosted dark background with gradient fills.
- **Accessible** — numeric counters carry `aria-label`s (e.g. "3 unread notifications") since a bare digit is ambiguous out of context. `:focus-visible` rings. Full `prefers-reduced-motion` support (badges appear at rest instantly; the Live pulse stops).
- **Reusable** — configurable via CSS custom properties (`--pop-duration`, `--pop-ease`, semantic color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a tiny optional script that re-triggers the pop on a button click.
- `style.css` — badge base, five variants, pop + ring keyframes, hover/focus replay, focus-visible ring, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
