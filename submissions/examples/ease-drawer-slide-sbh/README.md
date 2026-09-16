# ease-drawer-slide

An off-canvas side drawer that slides into view from the left while a backdrop overlay fades in. Pure CSS — open/close state is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **drawer-slide**: a frosted-glass side panel anchored to the viewport. Toggling a hidden checkbox (via the "Open menu" label) slides the drawer in from the left (`translateX(-100%) → 0`) and fades in a dimmed, slightly blurred backdrop that covers the page. Clicking the backdrop or the close button closes the drawer.

## How is it used?

1. Place a hidden `<input type="checkbox" class="drawer-toggle">`, an `.opener` label, a `.backdrop` label, and the `.drawer` aside as siblings (the CSS uses the `~` sibling combinator).
2. The `.opener`, `.backdrop`, and `.drawer__close` are all `<label for="drawer-toggle">`, so they toggle state with no JS.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="drawer-toggle" class="drawer-toggle" aria-hidden="true" />
<label for="drawer-toggle" class="opener" tabindex="0">Open menu</label>
<label for="drawer-toggle" class="backdrop" aria-hidden="true"></label>
<aside class="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
  <div class="drawer__head">
    <span class="drawer__title">Menu</span>
    <label for="drawer-toggle" class="drawer__close" tabindex="0" aria-label="Close menu">&times;</label>
  </div>
  <nav class="drawer__nav">…</nav>
</aside>
```

## Why is this useful?

- **Animation-first** — the signature motion is the drawer's `transform: translateX(-100%) → 0` slide on `--drawer-duration`, paired with the backdrop's `opacity` + `visibility` fade. Visibility is deferred on close so the backdrop doesn't trap clicks while hiding. All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the drawer is a frosted panel via `backdrop-filter: blur()`; the backdrop adds a light blur over the page.
- **Accessible** — `role="dialog"` + `aria-modal="true"` + `aria-label` on the drawer; the trigger and close are focusable labels with `:focus-visible` rings; `tabindex="0"` on interactive labels so keyboard users can open/close. Full `prefers-reduced-motion` support (drawer and backdrop snap without transition).
- **Reusable** — configurable via CSS custom properties (`--drawer-duration`, `--drawer-ease`, `--drawer-width`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks, and no JS required for the animation).
- `style.css` — glassmorphism drawer, slide + backdrop-fade transitions via checkbox state, focus-visible states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
