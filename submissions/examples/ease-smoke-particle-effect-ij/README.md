# Smoke Particle Effect

Particles rise and fade like smoke on hover. Each particle has randomized size, drift, rise distance, and duration for a natural look.

## Features

- Hover-triggered particle emission
- Randomized particle properties via JS
- Pure CSS `@keyframes speRise` animation
- Particles self-remove after animation end
- Customizable colors and timings via `:root` variables

## Usage

The `.spe-container` element emits `.spe-particle` spans on hover. Each particle is styled with inline `--spe-drift`, `--spe-rise`, and `animationDuration` for organic variation.

```css
.spe-particle {
  animation: speRise 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
@keyframes speRise {
  0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(var(--spe-rise)) translateX(var(--spe-drift)) scale(0.3); opacity: 0; }
}
```
