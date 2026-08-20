# Glitch Text Effect

Text displays a sporadic glitch/distortion effect using layered pseudo-elements with offset translate and skew animations.

## Features

- Multi-layer color-shifted glitch effect
- `steps(1)` easing for choppy, digital feel
- Trigger via `.gte-active` class
- Replay button to re-trigger the effect
- Fully customizable colors and duration

## Usage

Structure the `.gte-glitch` container with a `.gte-main` span and two `.gte-layer` spans. Add `.gte-active` to the container to start the animation.

```html
<div class="gte-glitch" data-text="EaseMotion">
  <span class="gte-main">EaseMotion</span>
  <span class="gte-layer gte-layer-1" aria-hidden="true">EaseMotion</span>
  <span class="gte-layer gte-layer-2" aria-hidden="true">EaseMotion</span>
</div>
```
