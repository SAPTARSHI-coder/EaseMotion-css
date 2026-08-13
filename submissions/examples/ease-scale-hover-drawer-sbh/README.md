# ease-scale-hover-drawer

A drawer that slides in from the side and, while open, scales up slightly on hover (or focus-within) for emphasis, with a deepened shadow. Pure CSS — open/close is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **scale-hover-drawer**: a glassmorphism panel that slides in from the right (or up from the bottom on mobile). When open and hovered (or focused within), it scales up (`scale(1) → scale(1.03)`) and its shadow deepens, drawing attention. A dimmed scrim fades in behind it. The close button and action buttons are `<label for="drawer-toggle">`, so they close the drawer with no JS.

## How is it used?

1. Place a hidden `<input type="checkbox" class="drawer-toggle">`, an `.opener` label, a `.scrim` label, and the `.drawer` as siblings (the CSS uses the `~` sibling combinator).
2. The close button and action buttons are also labels pointing at the checkbox.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="shd-toggle" class="drawer-toggle" aria-hidden="true" />
<label for="shd-toggle" class="opener" tabindex="0">Filters</label>
<label for="shd-toggle" class="scrim" aria-hidden="true"></label>
<aside class="drawer" role="region" aria-label="Filters">
  <div class="drawer__head">
    <h2 class="drawer__title">Filters</h2>
    <label for="shd-toggle" class="drawer__close" tabindex="0" aria-label="Close drawer">&times;</label>
  </div>
  <div class="drawer__body">…</div>
  <div class="drawer__actions">
    <label for="shd-toggle" class="drawer__btn drawer__btn--ghost" tabindex="0">Reset</label>
    <label for="shd-toggle" class="drawer__btn drawer__btn--primary" tabindex="0">Apply</label>
  </div>
</aside>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: the drawer slides in (`transform: translate(100%, -50%) → translate(0, -50%)`) with an `opacity` fade, and while open it scales up on hover/focus (`scale(1) → scale(1.03)`) with a deepened `box-shadow`. The scrim fades via `opacity` + `visibility` (deferred on close). All via `transform`/`opacity`/`box-shadow`.
- **Glassmorphism aesthetic** — the drawer is a frosted panel via `backdrop-filter: blur()`; the hover adds an accent-tinted ring.
- **Accessible** — `role="region"` + `aria-label`; the trigger, close, and action buttons are focusable labels with `:focus-visible` rings. The `:focus-within` variant ensures keyboard focus within the drawer also triggers the scale. Full `prefers-reduced-motion` support (drawer snaps without transition).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--scale-duration`, `--scale-ease`, `--hover-scale`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS required for the animation. Includes filter controls for context.
- `style.css` — glassmorphism drawer, slide-in + hover-scale via checkbox state, scrim, focus-visible states, mobile bottom-sheet variant, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
