# ease-tab-underline

A tab bar whose underline indicator glides beneath the active tab whenever you switch — adapting to each tab's width with no abrupt jumps.

## What does this do?

Adds a **tab-underline**: a glassmorphism tab list with an absolutely-positioned underline bar (`::after` on the list). When a tab is activated, the underline's `left` and `width` transition to that tab's position and width, so it glides smoothly between tabs of differing widths. A tiny included script measures the active tab and sets `--underline-left` / `--underline-width` custom properties on the list; the CSS does the animated glide.

## How is it used?

1. Build a `.tabs__list` (a `role="tablist"`) of `.tabs__tab` buttons, each `role="tab"` with `aria-selected`, `aria-controls`, and an `id`.
2. Pair each tab with a `.tabs__panel` (`role="tabpanel"`, `aria-labelledby`, `hidden` when inactive).
3. The included script sets the underline position on click, on load, and on resize, and implements the WAI-ARIA arrow-key pattern.

```html
<link rel="stylesheet" href="style.css" />

<div class="tabs__list" role="tablist">
  <button class="tabs__tab" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1" tabindex="0">General</button>
  <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab-panel-2" id="tab-2" tabindex="0">Appearance</button>
  …
</div>
<div class="tabs__panels">
  <div class="tabs__panel" role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1"><p>…</p></div>
  <div class="tabs__panel tabs__panel--hidden" role="tabpanel" id="tab-panel-2" aria-labelledby="tab-2" hidden><p>…</p></div>
  …
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the underline bar's `left` and `width` transitioning to the active tab's measured position (set via `--underline-left`/`--underline-width`), so it glides naturally between tabs of any width via `transform`-free `left`/`width` transitions with a springy ease.
- **Glassmorphism aesthetic** — the tab bar is a frosted panel via `backdrop-filter: blur()`; the underline is an accent gradient.
- **Accessible** — full WAI-ARIA tabs pattern: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, `aria-controls`/`aria-labelledby`, roving `tabindex`, and arrow-key navigation (Left/Right). `:focus-visible` rings. Hidden panels use the `hidden` attribute. Full `prefers-reduced-motion` support (underline snaps without transition).
- **Reusable** — configurable via CSS custom properties (`--underline-duration`, `--underline-ease`, `--underline-height`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a small script that measures the active tab to position the underline and implements the ARIA arrow-key pattern.
- `style.css` — glassmorphism tab list, gliding underline via `::after` + `--underline-left`/`--underline-width`, focus-visible states, responsive horizontal-scroll on narrow screens, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The underline glide requires the small JS in `demo.html` to measure tab positions; the maintainer may adapt this when curating into the framework.
