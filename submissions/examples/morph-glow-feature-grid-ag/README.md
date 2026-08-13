# Morph-Glow Feature Grid

A responsive, pure CSS dashboard tile grid. Each tile represents a live
system module: on hover or keyboard focus, a rotating conic-gradient glow
ring appears around its edge and its border-radius morphs into a soft,
organic blob shape, then settles back — a lightweight way to signal "this
module is active" without any JavaScript.

## Files

- `demo.html` — standalone showcase page with six example tiles
- `style.css` — the component styles (grid + tile + glow ring + morph animation)
- `README.md` — this file

## Usage

Include `style.css` and drop the markup structure into your page:

\`\`\`html
<div class="mg-grid">
  <article class="mg-tile" tabindex="0" style="--mg-glow-a:#00d4b8; --mg-glow-b:#7c5cfc;">
    <div class="mg-tile__inner">
      <div class="mg-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><!-- icon path --></svg>
      </div>
      <h2 class="mg-tile__title">Analytics Engine</h2>
      <p class="mg-tile__desc">Real-time metrics pipeline with sub-second query latency.</p>
      <span class="mg-tile__status">Live</span>
    </div>
  </article>
</div>
\`\`\`

`tabindex="0"` on each tile lets the glow/morph effect trigger on keyboard
focus (`:focus-within`), not just mouse hover — keep it.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mg-bg` | `#0b0e14` | Grid background |
| `--mg-surface` | `#12151d` | Tile background |
| `--mg-surface-2` | `#171b26` | Icon badge background |
| `--mg-border` | `#232838` | Default border color |
| `--mg-text` | `#e7e9f0` | Primary text color |
| `--mg-text-dim` | `#8b90a3` | Secondary text color |
| `--mg-glow-a` | `#00d4b8` | First glow ring color |
| `--mg-glow-b` | `#7c5cfc` | Second glow ring color |
| `--mg-morph-duration` | `6s` | Length of one full shape-morph cycle |
| `--mg-spin-duration` | `3.2s` | Length of one full glow-ring rotation |
| `--mg-radius-rest` | `18px` | Border radius when not hovered/focused |
| `--mg-ring-width` | `2px` | Thickness of the glow ring |

## Features

- Pure CSS/HTML — no JavaScript, no build step, no external libraries.
- Responsive — `auto-fit`/`minmax()` grid reflows to a single column on mobile.
- Morphing glow ring via masked `conic-gradient`, rotated on hover/focus.
- Organic shape morph via animated asymmetric `border-radius` values.
- Keyboard accessible via `:focus-within` on focusable tiles.

## Accessibility: reduced motion

Fully respects `prefers-reduced-motion: reduce` — all animations are
disabled and the hover/focus state falls back to a static rounded
rectangle instead of the organic morph.

## Browser notes

`mask-composite: exclude` (with `-webkit-mask-composite: xor` fallback)
and `color-mix()` are supported in all current evergreen browsers.