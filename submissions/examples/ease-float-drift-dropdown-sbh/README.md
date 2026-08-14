# ease-float-drift-dropdown

A glassmorphism dropdown menu whose panel floats open with a gentle upward drift and soft scale, paired with a chevron that flips.

## What does this do?

Adds a **float-drift dropdown**: a frosted-glass trigger button toggles a frosted-glass menu. When opened, the menu drifts up from below (`translateY(14px) → 0`) with a subtle scale-in (`scale(0.98) → 1`), fades in, and the trigger's chevron rotates 180°. When closed, the reverse plays. Open state is driven entirely by the trigger's `aria-expanded` attribute — pure CSS, no JS required for the visual transition.

> Note: this demo ships the styles and structure only. To make the trigger actually toggle `aria-expanded`, add a tiny click handler — but the CSS is written so any element that sets `aria-expanded="true"` on the trigger will reveal the menu.

## How is it used?

1. Build a `.menu` with a `.menu__trigger` (button) and a `.menu__list` (the menu).
2. The trigger carries `aria-haspopup="true"`, `aria-expanded`, and `aria-controls` pointing at the list's id.
3. Items use `role="menuitem"`; separators use `role="separator"`.

```html
<link rel="stylesheet" href="style.css" />

<nav class="menu" aria-label="Account">
  <button class="menu__trigger" aria-haspopup="true" aria-expanded="false" aria-controls="fd-menu">
    <span>Account</span>
    <span class="menu__chevron" aria-hidden="true">&#8964;</span>
  </button>
  <ul id="fd-menu" class="menu__list" role="menu">
    <li role="none"><a role="menuitem" href="#profile" class="menu__item">Profile</a></li>
    <li role="none"><a role="menuitem" href="#settings" class="menu__item">Settings</a></li>
    <li role="separator" class="menu__sep"></li>
    <li role="none"><a role="menuitem" href="#signout" class="menu__item menu__item--danger">Sign out</a></li>
  </ul>
</nav>
```

## Why is this useful?

- **Animation-first** — the signature motion is the menu's float-drift entrance: `opacity` + `translateY(14px → 0)` + `scale(0.98 → 1)` over `--fd-duration`, gated on `aria-expanded` via the sibling selector. The chevron rotates in sync. Visibility is deferred via a delayed `transition` so the menu doesn't trap focus while hidden.
- **Glassmorphism aesthetic** — frosted trigger + menu via `backdrop-filter: blur()`.
- **Accessible** — full ARIA menu roles (`menu`, `menuitem`, `separator`), `aria-expanded`/`aria-controls`/`aria-haspopup` on the trigger, `:focus-visible` rings, and full `prefers-reduced-motion` support (menu appears instantly with no drift/scale).
- **Reusable** — configurable via CSS custom properties (`--fd-duration`, `--fd-ease`, `--fd-drift`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism trigger + menu, float-drift open transition via `aria-expanded`, chevron flip, separator, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
