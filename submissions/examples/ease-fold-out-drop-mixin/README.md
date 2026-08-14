# Fold Out Drop SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-fold-out-drop` animation mixin from the EaseMotion core library, featuring 3D perspective fold-out rotations, vertical gravity drop keyframes, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-fold-out-drop($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **3D Origami Fold Keyframes**: Interpolates X-axis 3D perspective rotation (`transform: perspective(800px) rotateX(-90deg) translateY(-40px)`) to smooth resting position at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-fold-card {
  @include ease-fold-out-drop($duration: 1.2s, $easing: ease-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-fold ease-anim-fold-out-drop">
  Unfold Drop 📖
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.2s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Rose origami theme accent | `#f43f5e` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-fold-out-drop-mixin/`
- **Issue Reference**: `#81857`
- **Files Included**: `demo.html`, `style.css`, `README.md`
