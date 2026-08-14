# ease-fade-in-tabs

Tabs whose content panels fade and lift into view when switched, paired with a gliding underline indicator.

## What does this do?

Adds **fade-in-tabs**: a glassmorphism tab bar. When you switch tabs, the active panel fades in with a gentle upward lift (`@keyframes fi-fade`: `opacity 0 → 1` + `translateY(10px → 0)`), while an underline indicator glides beneath the active tab. A tiny included script re-triggers the fade on each switch and implements the WAI-ARIA arrow-key pattern; the motion itself is pure CSS.

## How is it used?

1. Build a `.tabs__list` (a `role="tablist"`) of `.tabs__tab` buttons, each `role="tab"` with `aria-selected`, `aria-controls`, and an `id`.
2. Pair each tab with a `.tabs__panel` (`role="tabpanel"`, `aria-labelledby`, `hidden` when inactive).
3. The included script adds `is-entering` to the activated panel to (re)play the fade and implements arrow-key navigation.

```html
<link rel="stylesheet" href="style.css" />

<div class="tabs__list" role="tablist">
  <button class="tabs__tab" role="tab" aria-selected="true" aria-controls="fi-panel-1" id="fi-tab-1" tabindex="0">Overview</button>
  <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="fi-panel-2" id="fi-tab-2" tabindex="0">Specs</button>
  …
</div>
<div class="tabs__panels">
  <div class="tabs__panel" role="tabpanel" id="fi-panel-1" aria-labelledby="fi-tab-1"><p>…</p></div>
  <div class="tabs__panel tabs__panel--hidden" role="tabpanel" id="fi-panel-2" aria-labelledby="fi-tab-2" hidden><p>…</p></div>
  …
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes fi-fade` driving `opacity` (`0 → 1`) and `transform: translateY()` (`10px → 0`) so the panel fades in with a gentle lift. The underline glides via `left`/`width` transitions to `--underline-left`/`--underline-width`. All via `opacity`/`transform`/`left`/`width`.
- **Glassmorphism aesthetic** — the tab bar is a frosted panel via `backdrop-filter: blur()`; the underline is an accent gradient.
- **Accessible** — full WAI-ARIA tabs pattern: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, `aria-controls`/`aria-labelledby`, roving `tabindex`, and arrow-key navigation (Left/Right). `:focus-visible` rings. Hidden panels use the `hidden` attribute. Full `prefers-reduced-motion` support (panel appears instantly; underline snaps).
- **Reusable** — configurable via CSS custom properties (`--fade-duration`, `--fade-ease`, `--underline-duration`, `--underline-ease`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a small script that re-triggers the fade on tab switch and implements the ARIA arrow-key pattern.
- `style.css` — glassmorphism tabs, fade-in + lift keyframes, gliding underline, focus-visible states, responsive horizontal-scroll on narrow screens, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The fade replay requires the small JS in `demo.html`; the maintainer may adapt this when curating into the framework.
