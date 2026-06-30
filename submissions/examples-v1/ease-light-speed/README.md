# ease-light-speed

Fast skewed slide-in entrance animation using translateX + skewX keyframes. Zero JavaScript required.

## Usage

```html
<!-- Slide in from right (default) -->
<div class="ease-light-speed">Zooms in from right</div>

<!-- Slide in from left -->
<div class="ease-light-speed-left">Zooms in from left</div>
```

## Variants

| Class                       | Description                |
| --------------------------- | -------------------------- |
| `ease-light-speed`          | Slide + skew in from right |
| `ease-light-speed-left`     | Slide + skew in from left  |
| `ease-light-speed-out`      | Slide + skew out to right  |
| `ease-light-speed-out-left` | Slide + skew out to left   |
| `ease-light-speed-fast`     | 0.25s duration             |
| `ease-light-speed-slow`     | 0.9s duration              |

## Delay Variants (staggered groups)

| Class            | Delay |
| ---------------- | ----- |
| `ease-delay-100` | 100ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-400` | 400ms |
| `ease-delay-500` | 500ms |

## Staggered Example

```html
<div class="ease-light-speed">First</div>
<div class="ease-light-speed ease-delay-200">Second</div>
<div class="ease-light-speed ease-delay-400">Third</div>
```

## How It Works

The animation moves from `translateX(100%) skewX(-30deg)` — fully off-screen and tilted — overshoots slightly past center, corrects, then settles at `translateX(0) skewX(0)`. The overshoot gives it a natural deceleration feel, like something arriving at high speed and stopping.

## Submission

- **Author:** sudha09-git
- **Issue:** #3879
- **Files:** `style.css`, `demo.html`
