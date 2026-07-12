# ease-glitch-text-animation

## What does this do?
Provides four distinct CSS-only glitch text animation variants — scanline burst,
RGB channel-split on hover, neon sign flicker, and rapid static/noise — each
targeting a different aesthetic and trigger model.

## How is it used?

### Variant 1 — Scanline Glitch (auto-plays)
Periodic horizontal scan-bars sweep across two colour-shifted duplicate layers.

```html
<h2 class="glitch-scanline" data-text="GLITCH" aria-label="GLITCH">
  GLITCH
</h2>
```

### Variant 2 — RGB Channel Split (hover / focus)
Red and blue colour channels separate on `:hover` / `:focus-visible`,
simulating a broken CRT. Clean at rest — no visual noise for resting users.

```html
<h2 class="glitch-rgb-hover" data-text="HOVER ME" aria-label="HOVER ME" tabindex="0">
  HOVER ME
</h2>
```

### Variant 3 — Neon Flicker (auto-plays)
Mimics a buzzing neon sign. The glow and colour drop in and out at irregular
step-function intervals. No `data-text` attribute required.

```html
<h2 class="glitch-neon" aria-label="NEON">NEON</h2>
```

### Variant 4 — Static Noise (auto-plays)
Rapid micro-jitter across many randomised `clip-path` windows gives the feeling
of analogue noise or broadcast interference.

```html
<h2 class="glitch-noise" data-text="STATIC" aria-label="STATIC">
  STATIC
</h2>
```

> **Note:** For variants that use `::before` / `::after` pseudo-elements,
> the `data-text` attribute must match the visible text content exactly
> so the duplicated layers align perfectly.

## Why is it useful?
EaseMotion CSS already has a `ease-glitch-title` (periodic burst) and
`ease-glitch-terminal-text` (micro-vibration). This submission fills the gap with:

| Variant | Differentiation |
|---|---|
| `glitch-scanline` | Wider, more dramatic scan-bar sweep; strong for hero headings |
| `glitch-rgb-hover` | Interaction-gated — only activates on hover/focus, keeping idle UI clean |
| `glitch-neon` | Single-element (no pseudo-elements); works on inline text or badges |
| `glitch-noise` | Dense, rapid jitter — ideal for "loading" or "corrupted data" states |

Together they give designers a full spectrum of glitch intensity and trigger
patterns with zero JavaScript.

## Accessibility
- All animations respect `prefers-reduced-motion: reduce` — they are fully
  disabled when the user has requested less motion.
- `aria-label` is used on every demo element so screen readers read the actual
  text rather than the `data-text` attribute.
- The RGB-split variant is interaction-gated, so resting users never see
  colour flicker.

## Tech Stack
- HTML5
- CSS3 — `clip-path`, `mix-blend-mode`, `text-shadow`, `@keyframes`
- No JavaScript, no external frameworks, no CDN links

## Preview
Open `demo.html` directly in any modern browser to see all four variants.

## Contribution Notes
- Class names (`glitch-scanline`, `glitch-rgb-hover`, `glitch-neon`, `glitch-noise`)
  are contributor-style; the maintainer will rename to `ease-*` convention before merging.
- Unique suffix `-ksg` appended per the contribution policy to avoid naming conflicts.
