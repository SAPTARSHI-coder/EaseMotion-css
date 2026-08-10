# ease-accordion-expand

An animated accordion that smoothly expands and collapses content panels using a `grid-template-rows: 0fr → 1fr` height transition — no JavaScript height measurement required.

## What does this do?

Adds an **accordion-expand**: a stack of glassmorphism items. Each item has a trigger button and a panel. Toggling the trigger's `aria-expanded` animates the panel's `grid-template-rows` from `0fr` to `1fr`, so the panel grows to its natural content height smoothly. A `+`/`×`-style icon morphs in sync.

## How is it used?

1. Build `.accordion__item` blocks, each with an `.accordion__trigger` (button) and an `.accordion__panel` containing an `.accordion__inner`.
2. The trigger carries `aria-expanded` and `aria-controls`; the panel has a matching `id` and `role="region"` with `aria-labelledby`.
3. Toggling `aria-expanded` (via click handler) is all the CSS needs.

```html
<link rel="stylesheet" href="style.css" />

<div class="accordion__item">
  <h3 class="accordion__heading">
    <button class="accordion__trigger" aria-expanded="false" aria-controls="acc-panel-1" id="acc-trigger-1">
      <span>Question?</span>
      <span class="accordion__icon" aria-hidden="true"></span>
    </button>
  </h3>
  <div class="accordion__panel" id="acc-panel-1" role="region" aria-labelledby="acc-trigger-1">
    <div class="accordion__inner"><p>Answer…</p></div>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is animating `grid-template-rows` from `0fr` to `1fr` on the panel (a modern technique that transitions to "natural content height" without measuring pixels in JS). The inner wrapper's padding also transitions so content doesn't clip during the grow. The `+` icon morphs to a rotated/hidden state via `transform`.
- **Glassmorphism aesthetic** — accordion items are frosted panels via `backdrop-filter: blur()`; the active item's border tints accent.
- **Accessible** — full ARIA accordion pattern: `aria-expanded`/`aria-controls` on triggers, `role="region"` + `aria-labelledby` on panels, `:focus-visible` rings, and `:has()` to highlight the open item. Full `prefers-reduced-motion` support (panels appear instantly; icon snaps).
- **Reusable** — configurable via CSS custom properties (`--acc-duration`, `--acc-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a tiny optional script that toggles `aria-expanded` on click.
- `style.css` — glassmorphism accordion, `grid-template-rows` height transition, morphing `+` icon, focus-visible states, `:has()` active highlight, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
