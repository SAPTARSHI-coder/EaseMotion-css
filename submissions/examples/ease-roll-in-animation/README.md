# ease-roll-in animation

Roll entrance and exit animations that combine horizontal translation with rotation for avatar chips, badges, and playful UI reveals.

## Class reference

| Class | Direction | Fill Mode | Typical Use |
|-------|-----------|-----------|-------------|
| `.ease-roll-in` | From left | `both` | Staggered avatar chips, sidebar items |
| `.ease-roll-in-right` | From right | `both` | Right-aligned notifications, trailing elements |
| `.ease-roll-out` | Exit to left | `both` | Dismissing chips, removing list items |

All three classes set `animation-fill-mode: both` automatically, so elements retain their final visible state after entrance animations complete.

## Stagger example

```html
<div class="chip ease-roll-in ease-delay-100">Alex</div>
<div class="chip ease-roll-in ease-delay-200">Chris</div>
<div class="chip ease-roll-in ease-delay-300">Dana</div>
<div class="chip ease-roll-in ease-delay-400">Ella</div>
<div class="chip ease-roll-in ease-delay-500">Finn</div>
```

Delay helpers included in this submission: `.ease-delay-100` through `.ease-delay-500` (100ms increments).

## Reduced motion

Inside `@media (prefers-reduced-motion: reduce)`, all roll animations are disabled, `opacity` is set to `1`, and `transform` is reset. Users who enable Reduce Motion in their OS accessibility settings will see elements appear instantly without rolling motion.
