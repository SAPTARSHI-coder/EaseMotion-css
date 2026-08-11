# ease-badge-pulse-keyframe

A working pulse badge that declares the missing `@keyframes ease-kf-ping`. Fixes the bug where `.ease-badge-pulse` referenced `animation: ease-kf-ping` but the keyframes rule was never declared, so the badge rendered without pulsing.

## What does this do?

- **Declares `@keyframes ease-kf-ping`** — the exact keyframes the original `.ease-badge-pulse` expected (an expanding ring that scales up `1 → 2.2` and fades `0.55 → 0`).
- **Complete pulse badge** — `.ease-badge-pulse::before` emits the ping ring (matching the badge color via `background: inherit`), plus a gentle `ease-breathe` scale on the badge itself.
- **Size variants** — `.ease-badge--sm` / `.ease-badge--lg`.
- **Color variants** — `.ease-badge--primary` / `--success` / `--warning` / `--danger`, each consuming theme tokens (`--ease-color-*`) with fallbacks.
- **Reduced-motion** — `prefers-reduced-motion` disables the pulse and hides the static ring.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-badge ease-badge-pulse">1</span>
<span class="ease-badge ease-badge-pulse ease-badge--success">12</span>
<span class="ease-badge ease-badge-pulse ease-badge--lg">lg</span>
```

## Why is this useful?

- **Directly fixes the issue** — the bug was a missing `@keyframes` declaration; this example provides it and demonstrates the pulse working.
- **Additive** — ships under `submissions/examples/` without modifying the core module, so it's a safe reference implementation.
- **Reusable** — configurable via `--ease-color-*`, `--ease-dur`, `--ease-radius` tokens; badge color flows into the ping ring automatically.

## Files

- `demo.html` — self-contained showcase (pulse badges, color + size variants, the fix snippet). No server/CDN/frameworks.
- `style.css` — badge base + variants, the declared `@keyframes ease-kf-ping` + `ease-breathe`, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
