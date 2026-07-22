# Swing Badge Mixin

## Description
The `ease-swing-badge-mixin-ag` is an SCSS mixin that applies a pendulum-like swing animation to badge elements. The element pivots from its top-center, swaying back and forth like a hanging tag. This is perfect for drawing attention to notification badges, sale labels, or new feature tags.

## Installation & Usage

```scss
@import 'path/to/feature-swing-badge-mixin-ag/swing-badge';

.notification-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #ef4444;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;

  @include ease-swing-badge-mixin-ag(0.8s, ease-in-out, 2);
}
```

## Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | Time | `0.8s` | Duration of one full swing cycle. |
| `$easing` | Timing-Function | `ease-in-out` | Timing function. |
| `$iterations` | Number | `1` | Number of iterations. Use `infinite` for continuous swinging. |

## How It Works
The keyframes rotate the element through decreasing angles (15° → -10° → 5° → -5° → 2° → 0°), creating a natural damped oscillation. Setting `transform-origin: top center` makes the element swing from its top edge, simulating a pendulum.

## Accessibility Considerations
- **Reduced Motion**: A `@media (prefers-reduced-motion: reduce)` block disables the animation entirely. The badge remains static — no swing, no rotation — ensuring a safe experience for users with vestibular sensitivities.
