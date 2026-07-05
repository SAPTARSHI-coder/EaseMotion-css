# SCSS Utility: Card Hover Lift & Perspective Tilt Utility

A reusable SCSS mixin that lifts a card on hover and applies a subtle 3D perspective tilt, combined with a soft elevated shadow for a sense of depth.

---

## Features

- Lift effect on hover (`translateY`)
- 3D perspective tilt (`rotateX` / `rotateY`)
- Elevated box-shadow on hover
- Fully configurable parameters
- Utility classes included

---

## Usage

```scss
.card {
  @include card-hover-lift-tilt();
}
```

```scss
.featured-card {
  @include card-hover-lift-tilt($lift: 12px, $tilt-x: 6deg, $tilt-y: 6deg);
}
```

---

## Parameters

| Parameter | Default | Description |
|---|---|---|
| `$lift` | `8px` | Vertical lift distance on hover |
| `$tilt-x` | `4deg` | Rotation around the X-axis |
| `$tilt-y` | `4deg` | Rotation around the Y-axis |
| `$duration` | `0.3s` | Transition duration |
| `$shadow-color` | `rgba(0,0,0,0.2)` | Shadow color on hover |

---

## Utility Classes

```scss
.card-hover-lift
.card-hover-lift-strong
.card-hover-lift-subtle
```

---

## Compilation Result

On hover, the element lifts upward, tilts slightly in 3D space via `perspective` and `rotateX`/`rotateY`, and gains a soft elevated shadow — creating a tactile, floating card effect.