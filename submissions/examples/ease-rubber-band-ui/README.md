# ease-rubber-band

## What does this do?

Elastic **stretch/distort animation** that scales X and Y axes non-uniformly, creating a rubbery squish effect. Uses `@keyframes ease-kf-rubber-band` — scales wide then tall, settling back to normal.

## How is it used?

```html
<div class="ease-rubber-band">💪</div>
```

### Variants

| Class | Duration | Use Case |
|-------|----------|----------|
| `.ease-rubber-band` | 1s | Default single play |
| `.ease-rubber-band.ease-rubber-band-fast` | 0.6s | Quick jiggle |
| `.ease-rubber-band.ease-rubber-band-slow` | 1.5s | Subtle stretch |
| `.ease-rubber-band.ease-rubber-band-infinite` | 1s | Continuous loop |

Customize with inline style: `style="--ease-rubber-band-duration:2s;"`.

### Keyframes

```
@keyframes ease-kf-rubber-band {
  0%   → scaleX(1)    scaleY(1)
  30%  → scaleX(1.25) scaleY(0.75)   (wide)
  40%  → scaleX(0.75) scaleY(1.25)   (tall)
  50%  → scaleX(1.15) scaleY(0.85)
  65%  → scaleX(0.95) scaleY(1.05)
  75%  → scaleX(1.05) scaleY(0.95)
  100% → scaleX(1)    scaleY(1)
}
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-rubber-band-duration` | `1s` | Animation duration |
| `--ease-animation-iterations` | `1` | Play count |

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` disables the animation entirely.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-ease` | cubic-bezier(...) | Animation timing |
| `--ease-animation-iterations` | `infinite` | Iteration count |

Fixes #25549
