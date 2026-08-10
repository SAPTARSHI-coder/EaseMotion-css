# Animation Composition API — EaseMotion CSS

**Issue:** [#30317 — Add animation composition API — combine multiple animations on one element](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30317)

A CSS variable-driven animation composition system that allows combining animations, controlling duration, easing, delay, direction, and iteration count.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-animation-compose` | Single animation builder (use with `--ease-ac-*` vars) |
| `.ease-animation-compose-multi` | Combine two animations (fade-in + slide-up) |
| `.ease-animation-infinite` | Loop animation |
| `.ease-animation-once` | Play once |
| `.ease-animation-reverse` | Reverse direction |
| `.ease-animation-alternate` | Alternate direction |
| `.ease-animation-slow` | 0.6s duration |
| `.ease-animation-fast` | 0.15s duration |
| `.ease-animation-delay-short/med/long` | 0.15s / 0.3s / 0.6s delay |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-ac-anim` | `ease-kf-fade-in` | Keyframe name |
| `--ease-ac-duration` | 0.3s | Animation duration |
| `--ease-ac-easing` | ease-out | Timing function |
| `--ease-ac-delay` | 0s | Animation delay |
| `--ease-ac-direction` | normal | Direction |
| `--ease-ac-fill` | forwards | Fill mode |
| `--ease-ac-iteration` | 1 | Iteration count |
