# Elevation Float Shadow SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-elevation-float-shadow` animation mixin from the EaseMotion core library, featuring continuous levitating elevation keyframes, synchronized ambient shadow diffusion, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-elevation-float-shadow($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Levitating Keyframe Physics**: Synchronizes `transform: translateY(-12px)` vertical translation with expanding ground `box-shadow` diffusion.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-floating-card {
  @include ease-elevation-float-shadow($duration: 3s, $easing: ease-in-out);
}
```

Or apply the utility class directly in HTML:

```html
<div class="float-card-box ease-anim-elevation-float-shadow">
  Elevated Container Card
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `3s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Theme accent color | `#6366f1` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-elevation-float-shadow-mixin/`
- **Issue Reference**: `#81863`
- **Files Included**: `demo.html`, `style.css`, `README.md`
