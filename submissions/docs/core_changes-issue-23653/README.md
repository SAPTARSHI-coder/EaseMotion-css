# SCSS Animation Partials — Modular Imports for EaseMotion CSS

## 1. What does this do?

Adds per-category SCSS partial files (`_fade.scss`, `_slide.scss`, `_bounce.scss`, `_zoom.scss`, `_rotate.scss`, `_hover.scss`) that mirror the modular CSS architecture of EaseMotion. Each partial contains mixins relevant only to its animation category, allowing SCSS users to import selectively instead of importing the entire mixin set.

**New files in `scss/`:**

| File | Mixins |
|------|--------|
| `_fade.scss` | `fade-in`, `fade-out`, `fade-icon-exit`, `pulse-fade`, `blur-to-focus` |
| `_slide.scss` | `slide-up`, `slide-down`, `slide-in-from-*` (8 directional variants), `slide-image-exit` |
| `_bounce.scss` | `bounce`, `bounce-in`, `bounce-text`, `bounce-button-exit` |
| `_zoom.scss` | `zoom-in`, `zoom-out`, `reveal-scale`, `morph-card` |
| `_rotate.scss` | `rotate`, `rotate-image-exit`, `flip`, `gradient-rotation` |
| `_hover.scss` | `pulse`, `ping`, `shimmer`, `shimmer-sweep`, `shimmer-text`, `shake`, `wave`, `hover-pulse-glow`, `cursor-blink`, `typewriter-loop`, `count-up` |
| `_index.scss` | Forwards all partials and existing `variables`/`mixins` |

## 2. How is it used?

```scss
// Selective import — only the fade category
@use "easemotion-css/scss/fade" as fade;

.hero {
  @include fade.fade-in(0.6s, 0.2s);
}

// Import everything
@use "easemotion-css/scss" as ease;

.card {
  @include ease.zoom-in(0.4s);
}

// Namespace import for multiple categories
@use "easemotion-css/scss/slide" as slide;
@use "easemotion-css/scss/bounce" as *;

.drawer {
  @include slide.slide-in-from-right;
}
.badge {
  @include bounce-in;
}
```

## 3. Why is it useful?

- **Tree-shakeable** — only `@use` the categories you need
- **Matches CSS architecture** — mirrors `easemotion/fade.css`, `easemotion/slide.css`, etc.
- **Smaller bundles** — no need to import all 60+ keyframes when you only need fade
- **Backward compatible** — `_index.scss` still forwards all mixins via the old `_mixins.scss`
