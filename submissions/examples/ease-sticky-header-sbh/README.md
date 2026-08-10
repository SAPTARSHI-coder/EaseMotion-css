# ease-sticky-header

A page header pinned to the top with `position: sticky` that shrinks in height and gains a shadow once the user scrolls past a threshold — signaling "you've moved away from the top of the page." CSS handles the pinning, the shrink, and the shadow transition; a single scroll listener toggles one boolean class.

## What does this do?

Uses `position: sticky` (zero layout JS) to keep the header pinned at the top. A tiny scroll listener toggles a `.scrolled` class on the header once `window.scrollY > 40`. That class drives the entire visual change via CSS transitions: the header bar height shrinks (`--sh-height` → `--sh-height-scrolled`), the logo mark/text scale down, the call-to-action padding tightens, a bottom border fades in, and a soft drop-shadow appears. Everything is transitioned with a single easing for a cohesive feel.

## How is it used?

1. Link the stylesheet.
2. Mark up a `.sticky-header` with a `.sticky-header__inner` row containing your logo, nav, and actions.
3. Add the one-line scroll listener that toggles `.scrolled`.

```html
<link rel="stylesheet" href="style.css" />

<header class="sticky-header" id="siteHeader">
  <div class="sticky-header__inner">
    <a class="sticky-header__logo" href="#top">
      <span class="sticky-header__logo-mark" aria-hidden="true">◢</span>
      <span class="sticky-header__logo-text">Nimbus</span>
    </a>
    <nav class="sticky-header__nav" aria-label="Primary">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
    </nav>
    <div class="sticky-header__actions">
      <a class="sticky-header__link" href="#signin">Sign in</a>
      <a class="sticky-header__cta" href="#start">Get started</a>
    </div>
  </div>
</header>

<script>
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
</script>
```

## Why is this useful?

- **Sticky without JS layout** — `position: sticky` does the pinning natively; the only script is one `scroll` listener flipping a class, wrapped in `requestAnimationFrame` and `{ passive: true }` for smoothness.
- **Cohesive shrink** — height, logo scale, CTA padding, border, and shadow all transition together with a single easing (`--sh-ease`) and duration (`--sh-dur`), so the header feels like one object compacting.
- **Glassmorphism** — frosted `backdrop-filter: blur()` background that intensifies slightly on scroll for legibility over content.
- **Accessible** — semantic `<header>`/`<nav>` with `aria-label`s, visible focus states, hover underlines; full `prefers-reduced-motion` support disables transitions and the bobbing scroll hint.
- **Responsive** — nav collapses on small screens; fluid type and spacing via `clamp()`.
- **Reusable** — configurable via CSS custom properties (heights, duration, easing, colors, blur, max width).

## Files

- `demo.html` — self-contained marketing-shell demo (open directly in a browser; no server, CDNs, or frameworks). Scroll to see the header shrink and shadow appear.
- `style.css` — sticky header, `.scrolled` shrink/shadow transitions, glassmorphism, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. A minimal inline scroll listener is included per the issue's own HTML snippet (the one place EaseMotion accepts a single boolean JS toggle).
