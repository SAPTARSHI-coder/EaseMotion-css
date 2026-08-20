# Ripple Wave Click — SCSS Mixin

## What does this do?

Adds a smooth, outward-expanding ripple wave animation on any element when it is clicked (`:active` state), using only CSS — no JavaScript required.

## How is it used?

### Utility class (drop-in)

```html
<button class="ease-anim-ripple-wave-click">Click Me</button>
```

### SCSS mixin (configurable)

```scss
@import 'ripple-wave-click-ps';

.my-button {
  @include ease-ripple-wave-click-mixin;

  /* Optional overrides */
  --ease-duration: 0.8s;
  --ease-timing: ease-out;
}
```

## Parameters

| Variable | Default | Description |
|---|---|---|
| `--ease-duration` | `0.6s` | Duration of the ripple animation |
| `--ease-timing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function for the ripple |

## Why is it useful?

This mixin fits EaseMotion's animation-first philosophy by providing a tactile, material-style click feedback using only CSS custom properties and hardware-accelerated `transform` and `opacity`. It is accessible by default via a `prefers-reduced-motion` media query override.
