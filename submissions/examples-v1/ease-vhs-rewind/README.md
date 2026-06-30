# ease-vhs-rewind — VHS Rewind Color Distortion Utility

**Fixes:** Issue #11899

## Overview

A pure CSS animation that mimics the nostalgic, glitchy aesthetic of a VHS tape being rewound. It features horizontal "tracking bands" that jitter and distort the content, combined with an RGB color channel split (red/cyan) and optional scanline static.

## Usage

For the best effect, use the `data-text` attribute to allow the pseudo-elements to duplicate the text content for the color split.

```html
<!-- Retro Title — glitches on hover -->
<h1 class="ease-vhs-rewind" data-text="PLAYBACK">PLAYBACK</h1>

<!-- Infinite Loop Variant -->
<div class="ease-vhs-rewind ease-vhs-rewind-loop" data-text="REWINDING...">
  REWINDING...
</div>

<!-- With Static Effect -->
<button class="ease-vhs-rewind ease-vhs-rewind-static" data-text="SYSTEM HALT">
  SYSTEM HALT
</button>
```

## Variants

| Class                     | Description                              |
| ------------------------- | ---------------------------------------- |
| `.ease-vhs-rewind`        | Triggers jitter and color split on hover |
| `.ease-vhs-rewind-loop`   | Continuously looping effect              |
| `.ease-vhs-rewind-static` | Adds a moving scanline/noise texture     |
| `.ease-vhs-rewind-fast`   | Duration `0.2s` (more aggressive jitter) |
| `.ease-vhs-rewind-slow`   | Duration `1s` (dreamy, slow distortion)  |

## How it works

1. **Horizontal Jitter:** The `ease-kf-vhs-jitter` keyframe uses random `translateX` and `skewX` values with `steps(1)` to create a jagged, non-fluid motion characteristic of analog tape.
2. **Color Bands:** Two pseudo-elements (`::before` and `::after`) are clipped into horizontal strips using `clip-path: inset()`. These strips are offset in both position and color (red and cyan).
3. **RGB Split:** By using `mix-blend-mode: screen`, the red and cyan layers combine with the original content to create a vibrant color-bleed effect common in low-quality VHS players.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-vhs-rewind::before,
  .ease-vhs-rewind::after {
    animation: none !important;
    display: none !important;
  }
}
```

The high-frequency jitter and flashing are completely disabled for users who prefer reduced motion.

## Acceptance Criteria

- [x] Horizontal `translateX` jitter on pseudo-element bands
- [x] Color channel separation (Red/Cyan split)
- [x] Short duration (0.5s default)
- [x] Very retro/nostalgic aesthetic
- [x] `prefers-reduced-motion` fallback included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
