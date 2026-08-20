# Skew Slide Reveal SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-skew-slide-reveal` animation mixin from the EaseMotion core library, featuring angular geometric skew entrance transitions, perspective clip-path reveals, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-skew-slide-reveal($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Geometric Skew Keyframes**: Interpolates angular axis skewing (`transform: skewX(-15deg) translateX(-60px)` to `skewX(0deg) translateX(0)`) at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-skew-card {
  @include ease-skew-slide-reveal($duration: 1.1s, $easing: ease-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-skew ease-anim-skew-slide-reveal">
  Skew Reveal 📐
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.1s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Cyber teal theme accent | `#14b8a6` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-skew-slide-reveal-mixin/`
- **Issue Reference**: `#81859`
- **Files Included**: `demo.html`, `style.css`, `README.md`
