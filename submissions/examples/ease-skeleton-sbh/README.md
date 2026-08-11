# ease-skeleton

Placeholder blocks (text lines, avatars, images) with an animated diagonal shimmer sweep across a gray base, signaling "content loading." Pure CSS `@keyframes` gradient animation — no JS required until real content swaps in.

## What does this do?

- Each `.skeleton` block is a gray base with a brighter linear-gradient "sheen" band laid on top.
- `@keyframes skeleton-sweep` animates `background-position` from `-200%` to `+200%`, so the bright band travels fully across the block and off the right edge, then loops — an infinite shimmer.
- The gradient is `200%` wide (twice the block) with the bright band in the middle (`transparent 20% → white 50% → transparent 80%`), so the sweep looks like a single diagonal sheen passing through.
- Presets for the common shapes: `.skeleton-line` (text), `.skeleton-avatar` (round), `.skeleton-image` (rectangle), plus size modifiers.

## How is it used?

1. Link the stylesheet.
2. Drop in `.skeleton` blocks with the right preset class. Set `width` inline to vary line lengths (mimicking real text).

```html
<link rel="stylesheet" href="style.css" />

<!-- text lines -->
<div class="skeleton skeleton-line" style="width: 80%"></div>
<div class="skeleton skeleton-line" style="width: 60%"></div>

<!-- avatar -->
<div class="skeleton skeleton-avatar"></div>

<!-- image / media -->
<div class="skeleton skeleton-image"></div>
```

## Why is this useful?

- **Foundational loading pattern** — skeleton screens are now the default loading affordance (replacing spinners) across modern apps, and they pair with almost every other component (cards, avatars, lists).
- **Single keyframe, fully CSS** — one `background-position` animation drives the whole effect; no JS, no assets, no libraries.
- **Composable shapes** — line/avatar/image presets cover the vast majority of loading layouts; width is set inline so lines look like real prose.
- **Accessible** — the blocks are decorative; reduced-motion users get a static gray block (the sweep is disabled via `prefers-reduced-motion`), which is the correct behavior since a shimmer is purely decorative.
- **Reusable** — configurable via CSS custom properties (`--sk-base`, `--sk-sheen`, `--sk-dur`, `--sk-radius`, `--sk-line-h`, `--sk-avatar-size`, `--sk-image-h`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Text lines, avatar+card, image, and a combined "loading post" composition.
- `style.css` — `.skeleton` base + shimmer `@keyframes`, line/avatar/image presets + size modifiers, demo layouts, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
