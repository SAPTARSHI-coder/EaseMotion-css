# Particle Float Drift SCSS Mixin

A lightweight, hardware-accelerated SCSS animation mixin and utility class for drifting particle animations in EaseMotion CSS core library.

> Submission track: `submissions/scss/particle-float-drift-ps/`  
> Contributor suffix: `ps`  
> Resolves: Issue #81677

---

## What does this do?

`particle-float-drift` provides smooth 60 FPS floating particle motion with subtle rotations and opacity fades using GPU-accelerated `transform: translate3d()` and `opacity` properties. It includes configurable timing custom properties (`--ease-duration`, `--ease-timing`) and full `prefers-reduced-motion` accessibility support.

---

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | Time | `6s` | Animation cycle duration (`--ease-duration`) |
| `$timing` | Timing function | `ease-in-out` | Animation easing curve (`--ease-timing`) |
| `$delay` | Time | `0s` | Delay before animation starts (`--ease-delay`) |
| `$iteration` | Number / Keyword | `infinite` | Loop count or `infinite` (`--ease-iteration`) |

---

## How is it used?

### SCSS Mixin Usage

```scss
@use 'particle-float-drift' as *;

.floating-particle {
  @include ease-particle-float-drift(8s, ease-in-out, 0.5s);
}
```

### CSS Utility Class Usage

```html
<div class="ease-anim-particle-float-drift"></div>
```

### Customizing via CSS Custom Properties

```css
.custom-particle {
  --ease-duration: 4s;
  --ease-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Features

- **Hardware Accelerated:** Uses `transform: translate3d()` and `opacity` to run on GPU layers at 60 FPS.
- **Configurable:** Uses `--ease-duration` and `--ease-timing` CSS custom variables.
- **Accessible:** Respects `@media (prefers-reduced-motion: reduce)` accessibility settings.
- **Utility Class & SCSS Mixin:** Includes both `.ease-anim-particle-float-drift` and `@mixin ease-particle-float-drift`.
