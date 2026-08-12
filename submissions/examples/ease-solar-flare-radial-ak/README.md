# Solar Flare Radial HUD

## What does this do?
A pure-CSS, sci-fi/cyberpunk radial HUD panel that mimics a solar-flare readout — layered spinning dashed rings, a tick-mark ring, eight radiating flare rays that pulse outward in sequence, and a glowing pulsing core.

## How is it used?
Drop the markup and stylesheet in and it runs on its own — no JS required:

```html
<div class="flare-hud" role="img" aria-label="Sci-fi solar flare radial HUD display">
  <div class="flare-glow"></div>
  <div class="flare-ring flare-ring--outer"></div>
  <div class="flare-ring flare-ring--mid"></div>
  <div class="flare-ring flare-ring--inner"></div>
  <div class="flare-ticks"></div>
  <div class="flare-rays">
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
  </div>
  <div class="flare-core">
    <span class="flare-core__pulse"></span>
    <span class="flare-core__label">SOL-7</span>
  </div>
</div>
```

## Why is it useful?
It's a self-contained, hardware-accelerated (`transform`/`opacity`-only animations) HUD element for sci-fi dashboards, loading states, or landing-page hero decoration — fitting EaseMotion's focus on smooth, dependency-free CSS motion. It respects `prefers-reduced-motion` (animations disabled) and `prefers-color-scheme: light` (inverted palette), matching the issue's accessibility and dark-mode-compatible requirements.