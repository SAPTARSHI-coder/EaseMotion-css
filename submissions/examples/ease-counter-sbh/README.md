# ease-counter

A pure-CSS animated number counter / odometer that counts up from 0 to a target value on load — with thousands separators, optional decimals (0, 1, or 2 places), and a suffix. No JavaScript, no tweening library; the browser itself interpolates the integer via a registered `@property` custom property.

## What does this do?

Animates a number counting up by registering two `<integer>`-typed custom properties — `--int` (whole part) and `--frac` (fractional part) — with `@property`, then driving them from `0` to `--int-to` / `--frac-to` with a single `@keyframes` rule. The running integers are rendered with `counter-reset` + `content: counter()`, using custom `@counter-style` definitions for thousands separators (`group-separator`/`group-size`) and zero-padded fractional digits (`pad`). Each stat is staggered by index via `--i`.

## How is it used?

1. Link the stylesheet.
2. Add a `.stat__value` span and set `--int-to` (and `--frac-to` for decimals), `data-decimals` (0/1/2), and `data-suffix` on it.

```html
<link rel="stylesheet" href="style.css" />

<span class="stat__value" data-decimals="0" data-suffix=""  style="--int-to: 48213;   --frac-to: 0"></span>
<span class="stat__value" data-decimals="0" data-suffix="+" style="--int-to: 1900000; --frac-to: 0"></span>
<span class="stat__value" data-decimals="2" data-suffix="%" style="--int-to: 99;      --frac-to: 98"></span>
<span class="stat__value" data-decimals="1" data-suffix="/5" style="--int-to: 4;       --frac-to: 9"></span>
```

## Why is this useful?

- **Animation-first** — the signature motion is the count-up: a registered `<integer>` custom property is interpolated by `@keyframes`, and `counter()` turns the running integer into visible digits. The browser handles every frame; there is no per-frame JS number-crunching.
- **Grouped + padded** — a custom `@counter-style` (`ec-grouped`) inserts thousands separators; `ec-pad1`/`ec-pad2` zero-pad the fractional part so `99.9` shows as `99.90`.
- **Accessible** — each stat card exposes the final value in its `aria-label` (so screen readers read "48,213" rather than counting), and full `prefers-reduced-motion` support renders the final value instantly with no animation.
- **Reusable** — configurable via CSS custom properties (`--count-duration`, `--count-ease`, `--stagger`, accent colors, glass blur).

## Files

- `demo.html` — self-contained SaaS stats showcase (open directly in a browser; no server, CDNs, or frameworks). Reload to replay the count-up.
- `style.css` — `@property` integer registration, count-up `@keyframes`, `counter()` rendering with custom `@counter-style` separators/padding, glassmorphism stat cards, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
