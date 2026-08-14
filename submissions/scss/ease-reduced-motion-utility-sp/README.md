# Ease Reduced Motion Utility

A CSS custom-property–driven SCSS mixin that handles `prefers-reduced-motion` accessibility **without** `!important`.

## The Problem

Most SCSS mixins in this repository use `!important` to disable animations for users who prefer reduced motion:

```scss
// Anti-pattern — don't do this
@media (prefers-reduced-motion: reduce) {
  animation: none !important;
  transition: none !important;
}
```

This creates specificity wars, makes styles harder to override, and violates CSS cascade principles. Issue [#62616](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62616) flagged 118 instances of this across SCSS submissions.

## The Solution

Use CSS custom properties as a layer of indirection. The mixin sets animation values through variables, and the reduced-motion media query simply overrides those variables:

```scss
@mixin wrap($name, $duration: 0.4s, ...) {
  --motion-duration: #{$duration};
  animation-duration: var(--motion-duration);

  @media (prefers-reduced-motion: reduce) {
    --motion-duration: 0.01ms;  // no !important needed
  }
}
```

Because the media query overrides the **custom property** (not the `animation` shorthand), normal cascade rules apply — no `!important` required.

## Installation

```bash
cp _motion-safe.scss your-project/scss/
```

Or import directly:

```scss
@use 'path/to/motion-safe' as motion;
```

## API

### `@mixin wrap()`

Wraps any animation with an automatic reduced-motion fallback.

```scss
.hero-title {
  @include motion.wrap('ease-kf-fade-in', 0.5s, ease-out, 0.1s);
}
```

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$name` | *(required)* | Keyframe name |
| `$duration` | `0.4s` | Animation duration |
| `$easing` | `ease` | Timing function |
| `$delay` | `0s` | Start delay |
| `$fill` | `both` | Fill mode |
| `$iterations` | `1` | Iteration count |

### `@mixin transition()`

Transition shorthand with built-in reduced-motion support.

```scss
.card {
  @include motion.transition(transform, 0.3s, ease);
  &:hover { transform: translateY(-4px); }
}
```

### `@mixin disable-all()`

Nukes all animations and transitions inside a container.

```scss
.static-section {
  @include motion.disable-all();
}
```

### `@mixin stagger()`

Applies calculated delays to child elements.

```scss
.grid {
  @include motion.wrap('ease-kf-slide-up');
  @include motion.stagger(6, 0.1s, 0.08s);
}
```

## How It Works

1. Animation values are stored in CSS custom properties (`--motion-*`)
2. The `animation` shorthand reads from those variables
3. Inside `@media (prefers-reduced-motion: reduce)`, the variables are overridden to near-zero values
4. Normal CSS specificity handles the rest — no `!important` needed

## Browser Support

All browsers that support CSS custom properties (Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+).

## License

MIT — free to use in any EaseMotion CSS submission.
