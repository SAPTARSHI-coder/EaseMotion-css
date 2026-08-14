# ease-morph-glow-drawer

A drawer that slides in from the side, morphs its corner radius as it settles, and pulses a soft accent glow while open. Pure CSS — open/close is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **morph-glow-drawer**: a glassmorphism panel that slides in from the right (or up from the bottom on mobile). As it opens, its corner radius morphs from a small (`0.6rem`) to a larger (`1.4rem`) value, and while open it pulses a soft accent glow via an infinite `box-shadow` animation. A dimmed scrim fades in behind it. The close button and action buttons are `<label for="drawer-toggle">`, so they close the drawer with no JS.

## How is it used?

1. Place a hidden `<input type="checkbox" class="drawer-toggle">`, an `.opener` label, a `.scrim` label, and the `.drawer` as siblings (the CSS uses the `~` sibling combinator).
2. The close button and action buttons are also labels pointing at the checkbox.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="drawer-toggle" class="drawer-toggle" aria-hidden="true" />
<label for="drawer-toggle" class="opener" tabindex="0">Filters</label>
<label for="drawer-toggle" class="scrim" aria-hidden="true"></label>
<aside class="drawer" role="region" aria-label="Filters">
  <div class="drawer__head">
    <h2 class="drawer__title">Filters</h2>
    <label for="drawer-toggle" class="drawer__close" tabindex="0" aria-label="Close drawer">&times;</label>
  </div>
  <div class="drawer__body">…</div>
  <div class="drawer__actions">
    <label for="drawer-toggle" class="drawer__btn drawer__btn--ghost" tabindex="0">Reset</label>
    <label for="drawer-toggle" class="drawer__btn drawer__btn--primary" tabindex="0">Apply</label>
  </div>
</aside>
```

## Why is this useful?

- **Animation-first** — the signature motion is the drawer sliding in (`transform: translate(100%, -50%) → translate(0, -50%)`) while its `border-radius` morphs from `--radius-closed` to `--radius-open`, and a pulsing `box-shadow` glow (`@keyframes drawer-glow`) plays while open. The scrim fades via `opacity` + `visibility` (deferred on close). All via `transform`/`border-radius`/`box-shadow`/`opacity`.
- **Glassmorphism aesthetic** — the drawer is a frosted panel via `backdrop-filter: blur()`; the glow is an accent gradient.
- **Accessible** — `role="region"` + `aria-label`; the trigger, close, and action buttons are focusable labels with `:focus-visible` rings. Full `prefers-reduced-motion` support (drawer snaps without transition or glow pulse).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--glow-duration`, `--radius-open`, `--radius-closed`, `--glow`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS required for the animation. Includes filter controls for context.
- `style.css` — glassmorphism drawer, slide-in + radius-morph + pulsing glow via checkbox state, scrim, focus-visible states, mobile bottom-sheet variant, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
