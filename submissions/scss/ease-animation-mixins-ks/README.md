# SCSS Animation Mixins — Complete Coverage

## 1. What does this do?

Extends the SCSS mixin layer from 6 to 22 named animation mixins, providing complete `@include` coverage for every `ease-kf-*` keyframe defined in `core/animations.css`.

## 2. How is it used?

```scss
@use 'easemotion-css/scss' as ease;
@use 'easemotion-css/scss/ease-animation-mixins-ks' as em;

// Entrance animations
.hero-title  { @include em.slide-in-left($delay: 100ms); }
.hero-desc   { @include em.slide-in-right($delay: 200ms); }
.hero-image  { @include em.blur-to-focus($delay: 300ms); }
.feature     { @include em.bounce-in($duration: $duration-slow); }

// Looping animations
.loader      { @include em.pulse($duration: 1500ms); }
.alert-dot   { @include em.ping($iteration: infinite); }
.avatar      { @include em.float(); }
.icon-emoji  { @include em.wave(); }

// Interaction animations
.error-input { @include em.shake(); }

// Text & reveal
.gradient-heading { @include em.shimmer-text(); }
.hero-section     { @include em.mask-reveal(); }
```

## 3. Why is it useful?

The EaseMotion CSS animation library ships 30+ CSS keyframe animations but only 6 SCSS mixins — leaving most animations inaccessible to SCSS users. This submission completes the surface area, matching the SCSS layer to the CSS layer so developers using Sass can `@include` every animation without writing raw `animation:` shorthands.

### Mixin Reference

#### Entrance Mixins (new)

| Mixin | Keyframe | Default easing |
|-------|----------|---------------|
| `slide-in-left()` | `ease-kf-slide-in-left` | `$ease-in-out-cubic` |
| `slide-in-right()` | `ease-kf-slide-in-right` | `$ease-in-out-cubic` |
| `slide-in-from-top()` | `ease-kf-slide-in-from-top` | `$ease-in-cubic` |
| `slide-in-from-bottom()` | `ease-kf-slide-in-from-bottom` | `$ease-out-cubic` |
| `slide-in-from-top-left()` | `ease-kf-slide-in-from-top-left` | `$ease-in-cubic` |
| `slide-in-from-top-right()` | `ease-kf-slide-in-from-top-right` | `$ease-in-cubic` |
| `slide-in-from-bottom-left()` | `ease-kf-slide-in-from-bottom-left` | `$ease-out-cubic` |
| `slide-in-from-bottom-right()` | `ease-kf-slide-in-from-bottom-right` | `$ease-out-cubic` |
| `blur-to-focus()` | `ease-kf-blur-to-focus` | `$ease-out-cubic` |
| `flip-entrance()` | `ease-kf-flip` | `$ease-ease` |
| `bounce-in()` | `ease-kf-bounce-in` | `$ease-bounce` |
| `contract-image-entrance()` | `ease-kf-contract-image-entrance` | `$ease-out-cubic` |

#### Looping Mixins (new)

| Mixin | Keyframe | Default iteration |
|-------|----------|-------------------|
| `bounce()` | `ease-kf-bounce` | `infinite` |
| `pulse()` | `ease-kf-pulse` | `infinite` |
| `ping()` | `ease-kf-ping` | `infinite` |
| `float()` | `ease-kf-float` | `infinite` |
| `wave()` | `ease-kf-wave` | `infinite` |

#### Interaction Mixins (new)

| Mixin | Keyframe | Default |
|-------|----------|---------|
| `shake()` | `ease-kf-shake` | 500ms |

#### Text & Reveal Mixins (new)

| Mixin | Keyframe | Default fill |
|-------|----------|-------------|
| `shimmer-text()` | `ease-kf-shimmer-text` | `$fill-both` |
| `mask-reveal()` | `ease-kf-mask-reveal` | `forwards` |
| `mask-reveal-y()` | `ease-kf-mask-reveal-y` | `forwards` |
| `mask-reveal-circle()` | `ease-kf-mask-reveal-circle` | `forwards` |

### Integration Notes

All new mixins use the existing SCSS token variables (`$duration-normal`, `$ease-in-out-cubic`, etc.) from `scss/_variables.scss`. Maintainer can merge this partial into `scss/_mixins.scss` and update `scss/_index.scss` to `@forward` it.

### Existing Mixins (unchanged, shown for complete reference)

| Mixin | Keyframe |
|-------|----------|
| `fade-in()` | `ease-kf-fade-in` |
| `fade-out()` | `ease-kf-fade-out` |
| `slide-up()` | `ease-kf-slide-up` |
| `slide-down()` | `ease-kf-slide-down` |
| `zoom-in()` | `ease-kf-zoom-in` |
| `zoom-out()` | `ease-kf-zoom-out` |
