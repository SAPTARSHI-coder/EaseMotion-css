# ease-slide-up-popover

A popover that slides up from beneath its trigger on hover or keyboard focus, with a small pointing arrow. Pure CSS reveal — no JavaScript required for the animation.

## What does this do?

Adds a **slide-up-popover**: a glassmorphism tooltip-style popover positioned above its trigger. On hover (or `:focus-within` of the host) it slides up into view (`transform: translate(-50%, 12px) → translate(-50%, 0)`) with an `opacity` fade and a deferred `visibility` toggle, and includes a small rotated-square arrow pointing down at the trigger.

## How is it used?

1. Wrap a `.trigger` button and a `.popover` (with `role="tooltip"`) inside a `.pop-host`.
2. The CSS reveals the popover on `:hover`/`:focus-within` of the host.

```html
<link rel="stylesheet" href="style.css" />

<div class="pop-host">
  <button type="button" class="trigger" aria-describedby="su-pop-1">Shipping</button>
  <div class="popover" id="su-pop-1" role="tooltip">
    <span class="popover__arrow" aria-hidden="true"></span>
    <p class="popover__title">Free over $50</p>
    <p class="popover__sub">…</p>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the popover sliding up (`transform: translate(-50%, 12px) → translate(-50%, 0)`) with an `opacity` fade and deferred `visibility` (so it doesn't trap clicks while hiding). All via `transform`/`opacity`/`visibility`.
- **Glassmorphism aesthetic** — the popover is a frosted panel via `backdrop-filter: blur()`; the arrow inherits the glass background and border.
- **Accessible** — `role="tooltip"` + `aria-describedby` linking trigger to popover; the arrow is `aria-hidden="true"`. The trigger is a real `<button>` with `:focus-visible` ring, so keyboard focus reveals the popover too. Full `prefers-reduced-motion` support (popover appears instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS reveal, no JS.
- `style.css` — glassmorphism popover, slide-up reveal via hover/focus-within, pointing arrow, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
