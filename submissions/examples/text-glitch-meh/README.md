# Cyberpunk Glitch Text Animation

A pure CSS cyberpunk-style glitch text effect using `::before` and `::after` pseudo-elements with `clip-path` animations. Creates distorted, corrupted text effects with chromatic aberration — zero JavaScript required.

## What It Does

Creates multiple glitch text effects:
- **Red/Blue chromatic aberration** (color channel separation)
- **Horizontal slice distortion** using `clip-path`
- **Random offset timing** for realistic glitch feel
- **Hover-triggered** and **continuous loop** variants
- **Multiple intensity levels** (subtle, normal, intense)
- **Full RGB split** variant (red, green, blue channels)

## How to Use

```html
<!-- Hover-triggered glitch -->
<h1 class="glitch-text" data-text="GLITCH">GLITCH</h1>

<!-- Continuous loop glitch -->
<h1 class="glitch-text glitch-loop" data-text="ERROR">ERROR</h1>

<!-- Intense variant -->
<h1 class="glitch-text glitch-intense glitch-loop" data-text="SYSTEM">SYSTEM</h1>

<!-- Subtle variant -->
<h1 class="glitch-text glitch-subtle glitch-loop" data-text="SUBTLE">SUBTLE</h1>

<!-- Chromatic aberration -->
<h1 class="glitch-text glitch-chromatic glitch-loop" data-text="CHROMA">CHROMA</h1>

<!-- Full RGB split -->
<h1 class="glitch-text glitch-rgb glitch-loop" data-text="RGB SPLIT">RGB SPLIT</h1>