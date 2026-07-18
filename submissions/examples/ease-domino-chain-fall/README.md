# ease-domino-chain-fall

A hover-triggered domino chain-fall animation. Each piece rotates from upright to fallen using `rotateZ(90deg)` with `transform-origin: center bottom` to simulate a physical pivot point. Staggered `animation-delay` on each `nth-child` creates the cascading chain effect. Pure CSS — no JavaScript.

## Usage

```html
<div class="domino-track">
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
  <div class="domino"></div>
</div>
```

## How it works

- Each `.domino` starts with `animation-play-state: paused`
- Hovering `.domino-track` switches all dominoes to `animation-play-state: running`
- Each domino's `animation-delay` is staggered by ~0.1s per piece
- `transform-origin: center bottom` makes each piece pivot at its base like a physical domino
- `animation-timing-function` switches from `ease-in` (falling) to `ease-out` (landing) within the keyframe
- `animation: forwards` freezes each piece in the fallen position

## Customization

| Property | Description |
|----------|-------------|
| `.domino` width / height | Domino proportions |
| `gap` on `.domino-track` | Spacing between pieces |
| `animation-delay` step | Time between each domino falling (default: ~0.1s) |
| Per-child `background` | Piece colors — adjust the `nth-child` rules |
| `animation` duration | Per-piece fall speed (default: `0.5s`) |

## Accessibility

Respects `prefers-reduced-motion`. When reduced motion is preferred, hover snaps all pieces to the fallen position instantly without animation.
