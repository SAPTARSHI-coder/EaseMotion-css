# ease-slide-up-dropdown

A SaaS showcase dropdown menu whose panel slides up into view from below the trigger when opened. Pure CSS — open state is driven by the native `<details>`/`<summary>` element, so no JavaScript is required for the animation.

## What does this do?

Adds a **slide-up dropdown**: a glassmorphism dropdown menu. When opened (via click or keyboard on the `<summary>` trigger), the panel slides up into view (`opacity 0 → 1` + `translateY(12px → 0)`) from below the trigger (anchored above it). The trigger chevron rotates 180° on open. Items include a styled "Leave workspace" danger item.

## How is it used?

1. Use a `<details class="dropdown">` with a `<summary class="dropdown__trigger">` and a `.dropdown__panel` (anchored above via `bottom: 100%`) containing `.dropdown__item` links.
2. The CSS uses `[open]` to animate the panel's `opacity`/`transform`.

```html
<link rel="stylesheet" href="style.css" />

<details class="dropdown">
  <summary class="dropdown__trigger" tabindex="0" aria-label="Open workspace menu">
    <span>Workspace</span>
    <span class="dropdown__chevron" aria-hidden="true"></span>
  </summary>
  <div class="dropdown__panel" role="menu">
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Projects</a>
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Members</a>
    <a class="dropdown__item" role="menuitem" href="#" tabindex="0">Settings</a>
    <a class="dropdown__item dropdown__item--danger" role="menuitem" href="#" tabindex="0">Leave workspace</a>
  </div>
</details>
```

## Why is this useful?

- **Animation-first** — the signature motion is the slide-up: the panel transitions `opacity` (`0 → 1`) and `transform: translateY()` (`12px → 0`) from below the trigger; the chevron rotates on open. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — the trigger and panel are frosted via `backdrop-filter: blur()`.
- **Accessible** — uses native `<details>`/`<summary>` (keyboard-operable out of the box); the trigger and items are focusable with `:focus-visible` rings; the panel uses `role="menu"` and items `role="menuitem"`; the chevron is `aria-hidden`. Full `prefers-reduced-motion` support (panel appears instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--open-duration`, `--open-ease`, `--travel`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation via native `<details>`, no JS. SaaS-themed workspace menu content.
- `style.css` — glassmorphism dropdown, slide-up panel via `[open]`, rotating chevron, item hover/focus states, danger item, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
