# ease-rotate-y

## What does this do?
A utility class that applies a smooth CSS `rotateY` transform with a transition — letting developers rotate elements around the Y-axis for 3D effects with a single class. Includes hover-triggered, preset-angle, and continuous-spin variants.

## How to use it
```html
<!-- Rotates 60deg on hover by default -->
<div class="ease-rotate-y">
  Hover me
</div>

<!-- Preset angle classes — zero JS -->
<div class="ease-rotate-y ease-rotate-y-90">90° on hover</div>
<div class="ease-rotate-y ease-rotate-y-180">180° flip on hover</div>
<div class="ease-rotate-y ease-rotate-y-neg-180">Reverse 180°</div>

<!-- Continuous spin, no hover needed -->
<div class="ease-rotate-y-spin">⬡</div>
<div class="ease-rotate-y-spin ease-rotate-y-spin--slow">◈</div>
<div class="ease-rotate-y-spin ease-rotate-y-spin--fast">✦</div>
```

## Customization
```css
.ease-rotate-y {
  --rotate-y-angle: 60deg;       /* rotation angle on hover */
  --rotate-y-duration: 0.6s;     /* transition duration */
  --rotate-y-perspective: 800px; /* 3D perspective depth */
}
```

## Preset classes
| Class | Angle |
|---|---|
| `.ease-rotate-y-15/30/45/90/180` | Positive rotation presets |
| `.ease-rotate-y-neg-90/neg-180` | Negative (reverse) rotation presets |
| `.ease-rotate-y-spin` | Continuous 360° spin, 3s |
| `.ease-rotate-y-spin--slow/fast` | 6s / 1.2s spin speed |

## Why it fits EaseMotion CSS
Introduces a reusable Y-axis rotation utility with smooth transitions, letting developers easily add 3D rotation effects without writing custom CSS. Composable with existing `ease-*` classes, supports `transform-style: preserve-3d` for nested 3D content (e.g. card flips), and fully respects `prefers-reduced-motion`.
