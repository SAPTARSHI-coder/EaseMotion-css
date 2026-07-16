# Micro-Interaction Button Ripple Effect Mixins (SR)

Reusable SCSS mixins for creating modern button ripple interaction effects.

---

# Features

- Reusable ripple animation
- Custom ripple color
- Adjustable animation duration
- Filled button variant
- Outline button variant
- Configurable animation names
- Lightweight and reusable

---

# Installation

Import the partial.

```scss
@use "micro-interaction-button-ripple-effect-mixins-sr" as ripple;
```

Generate keyframes.

```scss
@include ripple.ripple-keyframes();
```

Apply ripple effect.

```scss
.button {

  @include ripple.filled-ripple(
    $background: #4f46e5
  );

  @include ripple.button-ripple-effect(
    $color: rgba(255,255,255,.4),
    $duration: .6s
  );

}
```

---

# Parameters

## ripple-keyframes

| Parameter | Default |
|-----------|---------|
| `$name` | `ripple-effect-sr` |

---

## button-ripple-effect

| Parameter | Default |
|-----------|---------|
| `$color` | `rgba(255,255,255,.45)` |
| `$duration` | `0.6s` |
| `$timing` | `ease-out` |
| `$animation-name` | `ripple-effect-sr` |
| `$radius` | `999px` |

---

## filled-ripple

| Parameter | Default |
|-----------|---------|
| `$background` | `#4f46e5` |
| `$text` | `#ffffff` |

---

## outline-ripple

| Parameter | Default |
|-----------|---------|
| `$color` | `#4f46e5` |

---

# CSS Compilation Result

Compiles into:

- `@keyframes ripple-effect-sr`
- CSS pseudo-element based ripple animation
- Configurable button styles
- No JavaScript dependency

---

# Browser Support

Supported in all modern browsers supporting:

- CSS Animations
- CSS Transforms
- Pseudo Elements
- Overflow Hidden ...