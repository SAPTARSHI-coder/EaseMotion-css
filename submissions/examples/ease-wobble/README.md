# ease-wobble

## What does this do?

**Wobble animation** combining horizontal translation (`translateX`) with rotation for a natural wobbly effect. Useful for error states, invalid form inputs, or playful hover emphasis.

## How is it used?

```html
<div class="ease-wobble">⚠️</div>
```

### Variants

| Class | Duration | Use Case |
|-------|----------|----------|
| `.ease-wobble` | 1s | Default single play |
| `.ease-wobble.ease-wobble-fast` | 0.6s | Quick wiggle |
| `.ease-wobble.ease-wobble-slow` | 1.5s | Gentle sway |
| `.ease-wobble.ease-wobble-infinite` | 1s | Continuous loop |

Customize with inline style: `style="--ease-wobble-duration:2s;"`.

### Keyframes

```
@keyframes ease-kf-wobble {
  0%   → translateX(0%)   rotate(0deg)
  15%  → translateX(-25%) rotate(-5deg)
  30%  → translateX(20%)  rotate(3deg)
  45%  → translateX(-15%) rotate(-3deg)
  60%  → translateX(10%)  rotate(2deg)
  75%  → translateX(-5%)  rotate(-1deg)
  100% → translateX(0%)   rotate(0deg)
}
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-wobble-duration` | `1s` | Animation duration |
| `--ease-animation-iterations` | `1` | Play count |

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` disables the animation entirely.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-ease` | cubic-bezier(...) | Animation timing |
| `--ease-animation-iterations` | `infinite` | Iteration count |

Fixes #25543
