# Extended SCSS Animation Mixins

## 1. What does this SCSS package do?

Provides SCSS mixin helpers for EaseMotion keyframe animations including `@include ease-bounce()`, `@include ease-pulse()`, `@include ease-shake()`, `@include ease-ping()`, `@include ease-spin()`, `@include ease-wobble()`, `@include ease-rubber-band()`, `@include ease-flip-x()`, and `@include ease-flip-y()`.

## 2. Parameters Reference

| Mixin | Parameters | Default Values |
|---|---|---|
| `@mixin ease-bounce` | `$duration, $easing, $delay, $iteration` | `600ms, cubic-bezier(0.4, 0, 0.2, 1), 0s, infinite` |
| `@mixin ease-pulse` | `$duration, $easing, $delay, $iteration` | `1.5s, cubic-bezier(0.4, 0, 0.2, 1), 0s, infinite` |
| `@mixin ease-shake` | `$duration, $easing, $delay, $iteration` | `500ms, cubic-bezier(0.4, 0, 0.2, 1), 0s, 1` |
| `@mixin ease-spin` | `$duration, $easing, $delay, $iteration` | `1s, linear, 0s, infinite` |
| `@mixin ease-wobble` | `$duration, $easing, $delay, $iteration` | `1s, cubic-bezier(0.4, 0, 0.2, 1), 0s, 1` |
| `@mixin ease-flip-x` | `$duration, $easing, $delay, $fill` | `800ms, cubic-bezier(0.4, 0, 0.2, 1), 0s, both` |

## 3. Usage Example

```scss
@use 'extended-scss-mixins-ik' as *;

.badge-notification {
  @include ease-pulse(2s);
}

.loading-spinner {
  @include ease-spin(0.8s);
}

.alert-box {
  @include ease-shake(400ms);
}
```

## 4. Why does it fit EaseMotion CSS?

Expands EaseMotion's SCSS integration track by offering modular mixins for keyframe animations, enabling clean SCSS `@include` syntax in custom design systems.
