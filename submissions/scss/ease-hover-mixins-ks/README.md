# SCSS Hover Mixins

## 1. What does this do?

Provides reusable SCSS mixins for hover-triggered visual effects, matching the `ease-hover-*` utility classes in the core framework but accessible via `@include` in SCSS stylesheets.

## 2. How is it used?

```scss
@use 'easemotion-css/scss/hover-mixins' as h;

.card {
  @include h.hover-lift;
  @include h.hover-shadow-elevate;
}

.cta-button {
  @include h.hover-grow($scale: 1.1);
  @include h.hover-glow($color: var(--ease-color-primary));
}

.nav-link {
  @include h.hover-underline;
}
```

## 3. Why is it useful?

The core CSS framework ships `ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`, etc. as utility classes, but the SCSS layer has no hover mixins. Developers using Sass must manually write `transition` and `:hover` blocks. These mixins let SCSS users compose hover effects inline with the existing token system.

### Mixin Reference

#### Transform Mixins

| Mixin | Parameters | Default |
|-------|-----------|---------|
| `hover-grow()` | `$scale, $duration` | `1.05, $duration-fast` |
| `hover-lift()` | `$distance, $duration` | `-4px, $duration-fast` |
| `hover-scale()` | `$scale, $duration` | `1.05, $duration-fast` |
| `hover-rotate()` | `$degrees, $duration` | `2deg, $duration-fast` |
| `hover-squish()` | `$scale, $duration` | `0.97, 100ms` |

#### Visual Effect Mixins

| Mixin | Parameters | Default |
|-------|-----------|---------|
| `hover-glow()` | `$color, $radius, $duration` | `var(--ease-color-primary), 16px, $duration-fast` |
| `hover-shadow-elevate()` | `$shadow, $duration` | `var(--ease-shadow-lg), $duration-fast` |
| `hover-brightness()` | `$amount, $duration` | `1.1, $duration-fast` |
| `hover-saturate()` | `$amount, $duration` | `1.5, $duration-fast` |

#### Interaction Mixins

| Mixin | Parameters | Default |
|-------|-----------|---------|
| `hover-underline()` | `$color, $thickness, $duration` | `var(--ease-color-primary), 2px, $duration-fast` |
| `hover-border-glow()` | `$color, $duration` | `var(--ease-color-primary), $duration-fast` |
