# Zoom Text Mixin

## Description
The `ease-zoom-text-mixin-ag` is an SCSS mixin that applies a zoom-out exit animation to text elements. The text scales up dramatically while fading out and blurring, creating a cinematic "exploding away" dismissal effect ideal for toast messages, alerts, or transitional headings.

## Installation & Usage

```scss
@import 'path/to/feature-zoom-text-mixin-ag/zoom-text';

.toast-message-dismissing {
  @include ease-zoom-text-mixin-ag(0.5s, ease-in);
  @include ease-zoom-text-reduced-motion-ag();
}
```

## Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | Time | `0.5s` | Duration of the exit animation. |
| `$easing` | Timing-Function | `ease-in` | Timing function for the animation curve. |

## How It Works
The keyframes animate three properties simultaneously:
- `transform: scale(1) → scale(2.5)` — the text zooms outward.
- `opacity: 1 → 0` — the text fades out.
- `filter: blur(0) → blur(4px)` — the text softens as it disappears.

The result is a text element that appears to "zoom past" the viewer and vanish.

## Accessibility Considerations
- **Reduced Motion**: The `ease-zoom-text-reduced-motion-ag` companion mixin provides a `prefers-reduced-motion` fallback. When active, the scaling and blur are completely disabled. The text simply fades out with a shorter duration, preventing any vestibular discomfort.
- Always call both mixins together to ensure full accessibility coverage.
