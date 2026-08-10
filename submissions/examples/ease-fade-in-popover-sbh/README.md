# ease-fade-in-popover

A minimal popover that fades and lifts into view when triggered, and fades out on dismiss. Built for clean, minimalist tech layouts.

## What does this do?

Adds a **fade-in popover** component: clicking a trigger button reveals a small floating panel that smoothly fades in (opacity + subtle upward lift) and fades out when dismissed via the close button, an outside click, or the `Escape` key.

## How is it used?

1. Wrap a trigger button and a `.popover` panel inside a `.popover-wrap` container.
2. Link them with `data-popover="pop-id"` on the button and `id="pop-id"` on the panel.
3. Include a `[data-close]` button inside the popover for an explicit dismiss control.

```html
<link rel="stylesheet" href="style.css" />

<div class="popover-wrap">
  <button type="button" class="trigger" data-popover="pop-info" aria-expanded="false" aria-controls="pop-info">Show details</button>
  <div id="pop-info" class="popover" role="dialog" hidden>
    <p class="popover__title">Title</p>
    <p class="popover__text">Your popover content here.</p>
    <button type="button" class="popover__close" data-close aria-label="Close popover">&times;</button>
  </div>
</div>
```

A tiny inline script toggles the `is-open` class and the `hidden` attribute, handles outside-click + `Esc` dismissal, and keeps `aria-expanded` in sync for screen readers.

## Why is this useful?

- **Animation-first** — the fade + lift is the defining interaction, using CSS transitions on `opacity` and `transform` for GPU-friendly motion.
- **Minimalist tech aesthetic** — dark, low-chrome panel that fits developer-tool / dashboard layouts.
- **Accessible** — proper `role="dialog"`, `aria-expanded`, `aria-controls`, keyboard (`Esc`) dismiss, `:focus-visible` outlines, and full `prefers-reduced-motion` support (motion disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--pop-fade-duration`, `--pop-fade-ease`, `--pop-bg`, `--pop-radius`, `--pop-shadow`).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — popover styles, trigger variants, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
