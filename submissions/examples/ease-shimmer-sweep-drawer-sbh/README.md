# ease-shimmer-sweep-drawer

A drawer that slides in from the side with a continuous shimmering light sweep traveling diagonally across its surface while open. Pure CSS — open/close is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **shimmer-sweep-drawer**: a glassmorphism panel that slides in from the right (or up from the bottom on mobile). While open, a translucent diagonal light band (`::before`) sweeps across the drawer surface via `background-position`, giving a subtle "loading glass" sheen. A dimmed scrim fades in behind it. The close button and action buttons are `<label for="drawer-toggle">`, so they close the drawer with no JS.

## How is it used?

1. Place a hidden `<input type="checkbox" class="drawer-toggle">`, an `.opener` label, a `.scrim` label, and the `.drawer` as siblings (the CSS uses the `~` sibling combinator).
2. The close button and action buttons are also labels pointing at the checkbox.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="ssd-toggle" class="drawer-toggle" aria-hidden="true" />
<label for="ssd-toggle" class="opener" tabindex="0">Open cart</label>
<label for="ssd-toggle" class="scrim" aria-hidden="true"></label>
<aside class="drawer" role="region" aria-label="Shopping cart">
  <div class="drawer__head">
    <h2 class="drawer__title">Your cart</h2>
    <label for="ssd-toggle" class="drawer__close" tabindex="0" aria-label="Close drawer">&times;</label>
  </div>
  <div class="drawer__body">…</div>
  <div class="drawer__foot">
    <label for="ssd-toggle" class="drawer__btn drawer__btn--primary" tabindex="0">Checkout</label>
  </div>
</aside>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: the drawer slides in (`transform: translate(100%, -50%) → translate(0, -50%)`) with an `opacity` fade, and while open `@keyframes ssd-sweep` drives a translucent diagonal gradient band across the surface via `background-position` (`180% → -80%`) on a loop. The scrim fades via `opacity` + `visibility` (deferred on close). All via `transform`/`opacity`/`background-position`.
- **Glassmorphism aesthetic** — the drawer is a frosted panel via `backdrop-filter: blur()`; the shimmer is a translucent sheen layered on top.
- **Accessible** — `role="region"` + `aria-label`; the trigger, close, and action buttons are focusable labels with `:focus-visible` rings. Full `prefers-reduced-motion` support (drawer snaps without transition; shimmer is stationary).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--shimmer-duration`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS required for the animation. Includes a cart preview for context.
- `style.css` — glassmorphism drawer, slide-in + shimmer-sweep via checkbox state, scrim, focus-visible states, mobile bottom-sheet variant, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
