# ease-blur-entrance-navbar

A navbar that enters on page load by fading in and unblurring — from blurred and shifted up to sharp and in place — a polished entrance for product catalog layouts.

## What does this do?

Adds a **blur-entrance-navbar**: a sticky, glassmorphism navigation bar. On load it animates from `opacity: 0`, `filter: blur(14px)`, and `translateY(-12px)` to its resting sharp, in-place state, so the navbar materializes from soft blur into focus. Includes brand, link list with an active state, icon buttons, and a CTA.

## How is it used?

1. Build a `.navbar` with a `.navbar__brand`, a `.navbar__links` list, and `.navbar__actions`.
2. Mark the current page link with `is-active` and `aria-current="page"`.
3. The entrance plays automatically on load.

```html
<link rel="stylesheet" href="style.css" />

<nav class="navbar" aria-label="Primary">
  <a class="navbar__brand" href="#home"><span class="navbar__logo" aria-hidden="true"></span><span>Lumio</span></a>
  <ul class="navbar__links">
    <li><a class="navbar__link is-active" href="#catalog" aria-current="page">Catalog</a></li>
    <li><a class="navbar__link" href="#collections">Collections</a></li>
    …
  </ul>
  <div class="navbar__actions">
    <button class="navbar__icon-btn" aria-label="Search">⌕</button>
    <a class="navbar__cta" href="#signin">Sign in</a>
  </div>
</nav>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes nb-enter` driving `opacity` (0 → 1), `filter: blur()` (14px → 0), and `transform: translateY()` (-12px → 0) together, so the navbar fades in while sharpening and settling into place. All via `opacity`/`filter`/`transform`.
- **Glassmorphism aesthetic** — the navbar is a frosted, sticky panel via `backdrop-filter: blur()`; the entrance blur layers naturally on top.
- **Accessible** — semantic `<nav aria-label>`, real links/buttons with `:focus-visible` rings, `aria-current="page"` on the active link, and `aria-label`s on icon-only buttons. Full `prefers-reduced-motion` support (navbar appears instantly, no blur/shift).
- **Reusable** — configurable via CSS custom properties (`--enter-duration`, `--enter-ease`, `--blur-start`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS entrance, no JS. Includes a small catalog preview for context.
- `style.css` — glassmorphism sticky navbar, blur-entrance keyframes, active link state, focus-visible states, responsive wrap on narrow screens, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
