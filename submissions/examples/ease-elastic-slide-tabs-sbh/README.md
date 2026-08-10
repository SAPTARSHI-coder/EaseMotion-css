# ease-elastic-slide-tabs

Tabs whose content panels slide in with an elastic overshoot when switched, paired with a gliding underline indicator.

## What does this do?

Adds **elastic-slide-tabs**: a glassmorphism tab bar. When you switch tabs, the active panel enters from the right with a springy overshoot (`@keyframes es-slide`: `translateX(28px → -4px → 0)` with an overshoot easing), while an underline indicator glides beneath the active tab. A tiny included script re-triggers the slide animation on each switch and implements the WAI-ARIA arrow-key pattern; the motion itself is pure CSS.

## How is it used?

1. Build a `.tabs__list` (a `role="tablist"`) of `.tabs__tab` buttons, each `role="tab"` with `aria-selected`, `aria-controls`, and an `id`.
2. Pair each tab with a `.tabs__panel` (`role="tabpanel"`, `aria-labelledby`, `hidden` when inactive).
3. The included script adds `is-entering` to the activated panel to (re)play the slide and implements arrow-key navigation.

```html
<link rel="stylesheet" href="style.css" />

<div class="tabs__list" role="tablist">
  <button class="tabs__tab" role="tab" aria-selected="true" aria-controls="es-panel-1" id="es-tab-1" tabindex="0">Overview</button>
  <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="es-panel-2" id="es-tab-2" tabindex="0">Specs</button>
  …
</div>
<div class="tabs__panels">
  <div class="tabs__panel" role="tabpanel" id="es-panel-1" aria-labelledby="es-tab-1"><p>…</p></div>
  <div class="tabs__panel tabs__panel--hidden" role="tabpanel" id="es-panel-2" aria-labelledby="es-tab-2" hidden><p>…</p></div>
  …
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes es-slide` driving `transform: translateX()` (`28px → -4px → 0`) and `opacity` with an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so the panel springs past its rest point and settles. The underline glides via `left`/`width` transitions to `--underline-left`/`--underline-width`. All via `transform`/`opacity`/`left`/`width`.
- **Glassmorphism aesthetic** — the tab bar is a frosted panel via `backdrop-filter: blur()`; the underline is an accent gradient.
- **Accessible** — full WAI-ARIA tabs pattern: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, `aria-controls`/`aria-labelledby`, roving `tabindex`, and arrow-key navigation (Left/Right). `:focus-visible` rings. Hidden panels use the `hidden` attribute. Full `prefers-reduced-motion` support (panel appears instantly; underline snaps).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--underline-duration`, `--underline-ease`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a small script that re-triggers the elastic slide on tab switch and implements the ARIA arrow-key pattern.
- `style.css` — glassmorphism tabs, elastic slide-in keyframes, gliding underline, focus-visible states, responsive horizontal-scroll on narrow screens, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The elastic slide replay requires the small JS in `demo.html`; the maintainer may adapt this when curating into the framework.
