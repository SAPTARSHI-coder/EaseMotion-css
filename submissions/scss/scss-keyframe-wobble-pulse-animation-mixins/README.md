# SCSS Keyframe Wobble & Pulse Animation Mixins

A reusable SCSS utility providing configurable **Wobble** and **Pulse** animation mixins for EaseMotion CSS.

## Features

- Reusable SCSS mixins
- Built-in `ease-wobble` keyframes
- Built-in `ease-pulse` keyframes
- Customizable duration
- Configurable timing function
- Configurable iteration count
- Lightweight and dependency-free

## Usage

Import the partial:

```scss
@use "keyframe-wobble-pulse-animation-mixins";
```

Apply the mixins:

```scss
.button {
  @include ease-wobble();
}

.badge {
  @include ease-pulse();
}
```

Customize animation values:

```scss
.card {
  @include ease-wobble(
    $duration: 1s,
    $timing: ease-in-out,
    $count: infinite
  );
}
```

```scss
.icon {
  @include ease-pulse(
    $duration: 0.6s,
    $timing: linear,
    $count: 3
  );
}
```

## Parameters

### ease-wobble

| Parameter | Default |
|-----------|---------|
| `$duration` | `0.8s` |
| `$timing` | `ease` |
| `$count` | `1` |

### ease-pulse

| Parameter | Default |
|-----------|---------|
| `$duration` | `1s` |
| `$timing` | `ease-in-out` |
| `$count` | `infinite` |

## Compilation Result

The SCSS generates reusable `@keyframes` definitions together with configurable animation mixins that can be applied to any selector.

## Files

- `_keyframe-wobble-pulse-animation-mixins.scss`
- `README.md`