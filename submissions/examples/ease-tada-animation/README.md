# ease-tada animation

A celebratory scale-and-rotate wobble animation for success toasts, badge emphasis, and playful UI feedback.

## Class reference

| Class | Trigger | Loop | Use Case |
|-------|---------|------|----------|
| `.ease-tada` | On class add / page load | No | Success toast, one-shot confirmation |
| `.ease-tada-hover` | `:hover` | No | Interactive badge or button emphasis |
| `.ease-tada-loop` | Automatic | Yes | Notification count, live status badge |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tada-duration` | `0.8s` | Total duration of the tada keyframe animation |

```css
.success-toast {
  --ease-tada-duration: 1s;
}
```

## Usage

```html
<div class="toast ease-tada" role="status">
  <span aria-hidden="true">✓</span>
  <span>Payment successful!</span>
</div>
```

```html
<span class="badge ease-tada-loop">3</span>
<button class="ease-tada-hover">Celebrate</button>
```

## Reduced motion

Inside `@media (prefers-reduced-motion: reduce)`, all tada animations are disabled and `transform` is reset. Users who enable Reduce Motion in their OS accessibility settings will see static elements with no celebratory motion.
