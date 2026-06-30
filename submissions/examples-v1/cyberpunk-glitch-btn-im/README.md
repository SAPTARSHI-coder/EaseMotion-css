# Cyberpunk Glitch Button

## What does this do?

A futuristic, high-tech button that "glitches" on hover — red and cyan color channels split and shift via `clip-path` and `text-shadow`, mimicking a broken/hacked cyberpunk display interface. Includes a scanline texture overlay and a brief skew/shake. Pure CSS, zero JS.

## How to use it

```html
<!-- data-text must match the button's text content exactly -->
<button class="cyberpunk-glitch-btn" data-text="INITIATE SYSTEM">
  INITIATE SYSTEM
</button>

<!-- Color variants -->
<button
  class="cyberpunk-glitch-btn cyberpunk-glitch-btn--green"
  data-text="SYSTEM OK"
>
  SYSTEM OK
</button>
<button
  class="cyberpunk-glitch-btn cyberpunk-glitch-btn--amber"
  data-text="WARNING"
>
  WARNING
</button>
<button
  class="cyberpunk-glitch-btn cyberpunk-glitch-btn--purple"
  data-text="ENCRYPTED"
>
  ENCRYPTED
</button>

<!-- Always glitching, no hover needed -->
<button
  class="cyberpunk-glitch-btn cyberpunk-glitch-btn--loop"
  data-text="SIGNAL LOST"
>
  SIGNAL LOST
</button>

<!-- Sizes -->
<button class="cyberpunk-glitch-btn cyberpunk-glitch-btn--sm" data-text="SMALL">
  SMALL
</button>
<button class="cyberpunk-glitch-btn cyberpunk-glitch-btn--lg" data-text="LARGE">
  LARGE
</button>
```

## How it works

- `::after` duplicates the button text via `attr(data-text)`, displayed in red (`#ff2a4d`) and animated with `clip-path: inset()` steps to slice it into glitching horizontal bands
- `text-shadow` on the button itself adds a cyan (`#22d3ee`) offset layer, completing the RGB channel-split look without extra DOM nodes
- `::before` adds a subtle repeating-gradient scanline texture that animates on hover
- A `steps()` timing function on the shake/clip animations creates the jagged, digital "glitch" motion rather than smooth easing

## Variants

- `.cyberpunk-glitch-btn` — base, hover-triggered, primary color border/glow
- `.cyberpunk-glitch-btn--green/amber/purple` — color variants via `--glitch-color`
- `.cyberpunk-glitch-btn--loop` — continuously glitching, no hover needed
- `.cyberpunk-glitch-btn--sm/lg` — size variants

## Why it fits EaseMotion CSS

Cyberpunk and high-tech UI themes are extremely popular in gaming, crypto, and developer portfolios. This provides a complex, pure-CSS glitch animation that's notoriously difficult for beginners to build from scratch — `clip-path` channel-splitting, `steps()` timing, and layered pseudo-elements all in one reusable class. `prefers-reduced-motion` disables all glitch animations while preserving the neon border/glow styling.
