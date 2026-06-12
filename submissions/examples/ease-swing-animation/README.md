# ease-swing animation

Pendulum swing animation that oscillates an element around a top-center anchor point, like a hanging badge or ringing bell.

## Class reference

| Class | Rotation Range | Duration | Trigger |
|-------|----------------|----------|---------|
| `.ease-swing` | ±15° | 1.2s | Continuous loop |
| `.ease-swing-small` | ±6° | 1.0s | Continuous loop |
| `.ease-swing-large` | ±30° | 1.5s | Continuous loop |
| `.ease-swing-hover` | ±15° | 0.8s × 3 | On `:hover` only |

## Usage

```html
<div class="bell-mount"></div>
<div class="bell-string"></div>
<div class="bell ease-swing" aria-hidden="true"></div>
```

```html
<span class="badge ease-swing-small">New</span>
```

## Transform origin

Each class sets `transform-origin: top center` automatically, so the element swings from its top edge like a pendulum. You do not need to set transform-origin on a parent — the utility handles it on the animated element itself.

## Reduced motion

All swing animations are disabled inside `@media (prefers-reduced-motion: reduce)`. Users who enable Reduce Motion in their OS accessibility settings will see static elements with no swing animation.
