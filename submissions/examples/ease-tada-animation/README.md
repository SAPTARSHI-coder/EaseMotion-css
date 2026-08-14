# ease-tada

## What does this do?

Celebration **animation utility** combining scale and rotation for a "tada" effect. Uses `@keyframes ease-kf-tada` — scales down, then overshoots larger with alternating rotation, settling back to normal.

## How is it used?

```html
<div class="ease-tada">🎉</div>
```

### Variants

| Class | Duration | Use Case |
|-------|----------|----------|
| `.ease-tada` | 1s | Default single play |
| `.ease-tada.ease-tada-fast` | 0.6s | Quick pop |
| `.ease-tada.ease-tada-slow` | 1.5s | Subtle celebration |
| `.ease-tada.ease-tada-infinite` | 1s | Continuous loop |

Customize with inline style: `style="--ease-tada-duration:2s;"`.

### Keyframes

```
@keyframes ease-kf-tada {
  0%              → scale(1)   rotate(0deg)
  10%, 20%        → scale(0.9) rotate(-3deg)
  30%, 50%, 70%, 90% → scale(1.1) rotate(3deg)
  40%, 60%, 80%   → scale(1.1) rotate(-3deg)
  100%            → scale(1)   rotate(0deg)
}
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-tada-duration` | `1s` | Animation duration |
| `--ease-animation-iterations` | `1` | Play count (set to `infinite` for loop) |

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` disables the animation entirely.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-ease` | cubic-bezier(...) | Animation timing |
| `--ease-animation-iterations` | `infinite` | Iteration count |

Fixes #25550
