# ease-3d-flip-card

3D flip card component with front and back faces using CSS transforms.

## Issue
[#64939](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64939)

## Feature Overview
CSS 3D flip card using `perspective` and `rotateY` transforms. Cards flip on hover (or via `.flipped` class) revealing the back face. Supports multiple flip directions, speeds, and visual styles.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--flip-width` | `300px` | Card width |
| `--flip-height` | `200px` | Card height |
| `--flip-perspective` | `1000px` | 3D perspective depth |
| `--flip-duration` | `0.6s` | Flip animation duration |
| `--flip-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

| Class | Description |
|---|---|
| `.flip-up` | Flip on X-axis (forward/back) |
| `.flip-left` | Flip on Y-axis (left direction) |
| `.flip-right` | Flip on Y-axis (right direction, default) |
| `.speed-fast` | 0.3s flip duration |
| `.speed-slow` | 1.2s flip duration |
| `.size-sm` | Small card (180x120px) |
| `.size-lg` | Large card (400x280px) |
| `.flat` | No border-radius or shadow |
| `.glass` | Glassmorphism (backdrop blur) |
| `.depth` | Dynamic shadow on hover |
| `.glow` | Glowing border on back face |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Front</h3><p>Hover to flip</p>
    </div>
    <div class="flip-card-back">
      <h3>Back</h3><p>Flipped!</p>
    </div>
  </div>
</div>
```

## Accessibility
- Respects `prefers-reduced-motion` (flipping disabled)
- Back face content accessible via keyboard when focused
- `backface-visibility: hidden` ensures clean flip
