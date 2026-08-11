# ease-blur-entrance-dropdown

A SaaS showcase dropdown menu whose panel blurs into focus when opened — starting faded, shifted up, and blurred, then resolving to sharp, opaque, and in-place. Pure CSS — open state is driven by the native `<details>`/`<summary>` element, so no JavaScript is required for the animation.

## What does this do?

Adds a **blur-entrance dropdown**: a glassmorphism dropdown menu. When opened (via click or keyboard on the `<summary>` trigger), the panel fades in (`opacity 0 → 1`), lifts into place (`translateY(-6px → 0)`), and un-blurs (`filter: blur(8px → 0)`) — i.e. it blurs into focus. The trigger chevron rotates 180° on open. Items include a styled "Sign out" danger item.

## How is it used?

1. Use a `<details class="dropdown">` with a `<summary class="dropdown__trigger">` and a `.dropdown__panel` containing `.dropdown__item` links.
2. The CSS uses `[open]` to animate the panel's `opacity`/`transform`/`filter`.

```html
<link rel="stylesheet" href="style.css" />

<details class="dropdown">
  <summary class="dropdown__trigger" tabindex="0" aria-label="Open account menu">
    <span>Account</span>
    <span class="dropdown__chevron" aria-hidden="true"></span>
  </summary>
  <div class="dropdown__panel" role="menu">
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Profile</a>
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Billing</a>
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Team</a>
    <a class="dropdown__item dropdown__item--danger" role="menuitem" href="#" tabindex="0">Sign out</a>
  </div>
</details>
```

## Why is this useful?

- **Animation-first** — the signature motion is the blur-entrance: the panel transitions `opacity` (`0 → 1`), `transform: translateY()` (`-6px → 0`), and `filter: blur()` (`8px → 0`) so it blurs into focus; the chevron rotates on open. All via `opacity`/`transform`/`filter`.
- **Glassmorphism aesthetic** — the trigger and panel are frosted via `backdrop-filter: blur()`; the open animation's `filter: blur()` is an additional entrance blur on top.
- **Accessible** — uses native `<details>`/`<summary>` (keyboard-operable out of the box); the trigger and items are focusable with `:focus-visible` rings; the panel uses `role="menu"` and items `role="menuitem"`; the chevron is `aria-hidden`. Full `prefers-reduced-motion` support (panel appears instantly with no blur/shift).
- **Reusable** — configurable via CSS custom properties (`--open-duration`, `--open-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation via native `<details>`, no JS. SaaS-themed account menu content.
- `style.css` — glassmorphism dropdown, blur-entrance panel via `[open]`, rotating chevron, item hover/focus states, danger item, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
