# ease-float-drift-tabs

Tabs that gently float and drift into place on load (staggered), with a floating active indicator that glides between tabs and idles with a subtle bob.

## What does this do?

Adds a **float-drift-tabs**: a glassmorphism tab bar. On load, each tab drifts down and fades in, staggered by index. A floating active indicator (a translucent accent pill) glides to the active tab's position when you switch, and idles with a gentle vertical bob. A tiny included script measures the active tab and sets `--float-left` / `--float-width`; the CSS does the glide.

## How is it used?

1. Build a `.tabs__list` (a `role="tablist"`) of `.tabs__tab` buttons, each with `style="--i:n"` for the stagger, `role="tab"`, `aria-selected`, `aria-controls`, and an `id`.
2. Pair each tab with a `.tabs__panel` (`role="tabpanel"`, `aria-labelledby`, `hidden` when inactive).
3. The included script positions the floating indicator on click/load/resize and implements the WAI-ARIA arrow-key pattern.

```html
<link rel="stylesheet" href="style.css" />

<div class="tabs__list" role="tablist">
  <button class="tabs__tab" role="tab" aria-selected="true" aria-controls="fd-panel-1" id="fd-tab-1" tabindex="0" style="--i:0">Overview</button>
  <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="fd-panel-2" id="fd-tab-2" tabindex="0" style="--i:1">Specs</button>
  …
</div>
<div class="tabs__panels">
  <div class="tabs__panel" role="tabpanel" id="fd-panel-1" aria-labelledby="fd-tab-1"><p>…</p></div>
  <div class="tabs__panel tabs__panel--hidden" role="tabpanel" id="fd-panel-2" aria-labelledby="fd-tab-2" hidden><p>…</p></div>
  …
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: `@keyframes fd-drift` floats each tab down (`translateY(-10px) → 3px → 0`) and fades it in, staggered by `--i` (`calc(var(--i) * 0.08s)`); and `@keyframes fd-idle` gives the active indicator a gentle 3.6s vertical bob. The indicator glides between tabs via `left`/`width` transitions to `--float-left`/`--float-width`. All via `transform`/`opacity`/`left`/`width`.
- **Glassmorphism aesthetic** — the tab bar is a frosted panel via `backdrop-filter: blur()`; the indicator is a translucent accent pill.
- **Accessible** — full WAI-ARIA tabs pattern: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, `aria-controls`/`aria-labelledby`, roving `tabindex`, and arrow-key navigation (Left/Right). `:focus-visible` rings. Hidden panels use the `hidden` attribute. Full `prefers-reduced-motion` support (tabs appear instantly; indicator snaps without glide or idle bob).
- **Reusable** — configurable via CSS custom properties (`--drift-duration`, `--drift-ease`, `--indicator-duration`, `--indicator-ease`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a small script that measures the active tab to position the indicator and implements the ARIA arrow-key pattern.
- `style.css` — glassmorphism tab list, staggered drift-in keyframes, floating gliding indicator with idle bob, focus-visible states, responsive horizontal-scroll on narrow screens, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The indicator glide requires the small JS in `demo.html` to measure tab positions; the maintainer may adapt this when curating into the framework.
