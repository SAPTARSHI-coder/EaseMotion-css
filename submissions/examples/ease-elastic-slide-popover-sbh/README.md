# ease-elastic-slide-popover

A popover that slides into view with an elastic overshoot on hover/focus and slides back when the pointer leaves or the trigger blurs. Minimalist dark aesthetic for tech layouts.

## What does this do?

Adds an **elastic-slide popover**: hovering or focusing a trigger button reveals a small panel that slides in with a spring overshoot (scale + translate), then slides back out when dismissed. Pure CSS — no JavaScript framework required (a one-line script only wires `Escape` to blur).

## How is it used?

1. Wrap a `.trig` button and a `.pop` panel inside a `.pop-wrap` container.
2. Choose direction with `pop--down` (below the trigger) or `pop--up` (above).
3. Link semantics with `aria-describedby` on the trigger pointing to the popover's `id`.

```html
<link rel="stylesheet" href="style.css" />

<div class="pop-wrap pop-wrap--down">
  <button type="button" class="trig" aria-describedby="pop-share">Share</button>
  <div id="pop-share" class="pop pop--down" role="tooltip">
    <p class="pop__text">Copy link, send via email, or broadcast to your team.</p>
  </div>
</div>
```

The reveal is driven entirely by `:hover` and `:focus-within` on the wrapper, so it works with mouse, touch, and keyboard without JS.

## Why is this useful?

- **Animation-first** — the elastic overshoot is the signature motion, using a spring `cubic-bezier(0.34, 1.56, 0.64, 1)` on `transform` (translate + scale) for a lively entrance and exit.
- **Minimalist tech aesthetic** — dark, low-chrome tooltip suited to dashboards and developer tooling.
- **Accessible** — `role="tooltip"`, `aria-describedby`, keyboard focus reveal, and full `prefers-reduced-motion` support (motion disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--slide-bg`, `--slide-accent`, `--slide-radius`, `--slide-shadow`).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — elastic slide popover styles, direction variants, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
