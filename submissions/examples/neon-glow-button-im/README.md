# Neon Glow Button

## What does this do?
A button component with a glowing neon border that softly pulses via `box-shadow` animation. Fully customizable color through a single CSS variable, with filled, static (no pulse), and size variants.

## How to use it
```html
<!-- Basic neon button (cyan by default) -->
<button class="neon-btn">Click Me</button>

<!-- Color variants -->
<button class="neon-btn neon-btn--pink">Pink</button>
<button class="neon-btn neon-btn--green">Green</button>
<button class="neon-btn neon-btn--purple">Purple</button>
<button class="neon-btn neon-btn--orange">Orange</button>

<!-- Filled background variant -->
<button class="neon-btn neon-btn--filled">Get Started</button>

<!-- Static glow, no pulse animation -->
<button class="neon-btn neon-btn--static">Stable</button>

<!-- Custom color via CSS variable -->
<button class="neon-btn" style="--neon-color: #fbbf24">Amber</button>
```

## Variants
- `.neon-btn` — base, cyan, pulsing glow
- `.neon-btn--pink/green/purple/orange` — preset color variants
- `.neon-btn--filled` — solid background instead of outline
- `.neon-btn--static` — glow without the pulse animation
- `.neon-btn--sm/lg` — size variants
- `--neon-color` — set any custom color via inline style

## Why it fits EaseMotion CSS
Neon glow effects are popular in modern web design, especially for gaming, tech, and creative websites. This adds a composable, animation-first button style that enhances interactivity. Single CSS variable makes any color instantly available — `prefers-reduced-motion` keeps the glow but removes the pulse for accessibility.
