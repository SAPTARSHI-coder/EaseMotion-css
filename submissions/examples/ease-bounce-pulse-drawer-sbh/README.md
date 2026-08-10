# ease-bounce-pulse-drawer

A drawer that bounces in on open (overshoot easing) and pulses a gentle scale breathing while open. Pure CSS — open/close is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **bounce-pulse-drawer**: a glassmorphism panel that slides in from the right (or up from the bottom on mobile). On open it uses an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so the drawer springs past its rest point and settles, then `@keyframes bpd-pulse` gently breathes its scale (`1 → 1.012 → 1`) while open. A dimmed scrim fades in behind it. The close button and action buttons are `<label for="drawer-toggle">`, so they close the drawer with no JS.

## How is it used?

1. Place a hidden `<input type="checkbox" class="drawer-toggle">`, an `.opener` label, a `.scrim` label, and the `.drawer` as siblings (the CSS uses the `~` sibling combinator).
2. The close button and action buttons are also labels pointing at the checkbox.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="bpd-toggle" class="drawer-toggle" aria-hidden="true" />
<label for="bpd-toggle" class="opener" tabindex="0">Filters</label>
<label for="bpd-toggle" class="scrim" aria-hidden="true"></label>
<aside class="drawer" role="region" aria-label="Filters">
  <div class="drawer__head">
    <h2 class="drawer__title">Filters</h2>
    <label for="bpd-toggle" class="drawer__close" tabindex="0" aria-label="Close drawer">&times;</label>
  </div>
  <div class="drawer__body">…</div>
  <div class="drawer__actions">
    <label for="bpd-toggle" class="drawer__btn drawer__btn--ghost" tabindex="0">Reset</label>
    <label for="bpd-toggle" class="drawer__btn drawer__btn--primary" tabindex="0">Apply</label>
  </div>
</aside>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: the drawer slides in (`transform: translate(100%, -50%) → translate(0, -50%)`) with an overshoot easing so it bounces past rest and settles, then `@keyframes bpd-pulse` gently breathes its `scale` while open (delayed until the slide finishes). The scrim fades via `opacity` + `visibility` (deferred on close). All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the drawer is a frosted panel via `backdrop-filter: blur()`; the pulse is a subtle scale breathing.
- **Accessible** — `role="region"` + `aria-label`; the trigger, close, and action buttons are focusable labels with `:focus-visible` rings. Full `prefers-reduced-motion` support (drawer snaps without transition or pulse).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--bounce-ease`, `--pulse-duration`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS required for the animation. Includes filter controls for context.
- `style.css` — glassmorphism drawer, bounce-in + pulse via checkbox state, scrim, focus-visible states, mobile bottom-sheet variant, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
