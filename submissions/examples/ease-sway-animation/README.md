# ease-sway — Organic Plant-Like Sway Animation

A gentle side-to-side sway animation — like a plant in a breeze, seaweed in water, or a flag in the wind. Combines `translateX` with a subtle `rotate` for an organic, alive-feeling motion.

## Difference from ease-hang

| | ease-hang | ease-sway |
|--|-----------|-----------|
| Motion | Pendulum rotation from top | Organic translateX + rotate |
| Origin | Top edge (pendant) | Center bottom (rooted) |
| Feel | Clock pendulum, hanging tag | Plant, flag, seaweed |

## Classes

| Class | Description |
|-------|-------------|
| `.ease-sway` | Default gentle organic sway (4s) |
| `.ease-sway-fast` | Quick nervous sway (1.5s) |
| `.ease-sway-slow` | Very slow meditative sway (8s) |
| `.ease-sway-wide` | Large dramatic sway (3s, 24px, 10°) |
| `.ease-sway-root` | Pure rotation from bottom — rooted stem |
| `.ease-sway-paused` | Pause animation on hover |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-sway-duration` | `4s` | Animation duration |
| `--ease-sway-distance` | `8px` | Horizontal travel distance |
| `--ease-sway-angle` | `4deg` | Rotation angle |
| `--ease-sway-origin` | `center bottom` | Transform origin |
| `--ease-sway-delay` | `0s` | Animation delay (for staggering) |

## Usage

```html
<!-- Basic -->
<span class="ease-sway">🌿</span>

<!-- Staggered group for wave effect -->
<span class="ease-sway" style="--ease-sway-delay: 0s">🌿</span>
<span class="ease-sway" style="--ease-sway-delay: 0.4s">🌿</span>
<span class="ease-sway" style="--ease-sway-delay: 0.8s">🌿</span>

<!-- Rooted plant (pure rotation from bottom) -->
<span class="ease-sway ease-sway-root">🎋</span>

<!-- Pause on hover -->
<div class="ease-sway ease-sway-paused">Hover to stop</div>
```

## Accessibility

Animation is disabled when `prefers-reduced-motion: reduce` is set.

## Why it fits EaseMotion CSS

Complements `ease-float` (vertical bob), `ease-hang` (pendulum), and `ease-shake` (urgent vibration) with an organic lateral sway — perfect for decorative plants, nature illustrations, loading states, and ambient UI motion.

Closes #11913
