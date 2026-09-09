# Shimmer Light Streak SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-shimmer-light-streak` animation mixin from the EaseMotion core library, featuring sleek diagonal light reflection sweeps, 60 FPS GPU acceleration, and responsive glassmorphism components.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-shimmer-light-streak($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Diagonal Reflection Keyframes**: Animates background linear-gradient positioning (`115deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%`) smoothly across surface geometry.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-card {
  @include ease-shimmer-light-streak($duration: 2.5s, $easing: ease-in-out);
}
```

Or apply the utility class directly in HTML:

```html
<div class="shimmer-card-box ease-anim-shimmer-light-streak">
  Enterprise Tier Feature Card
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `2.5s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Theme accent color | `#38bdf8` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-shimmer-light-streak-mixin/`
- **Issue Reference**: `#81873`
- **Files Included**: `demo.html`, `style.css`, `README.md`
