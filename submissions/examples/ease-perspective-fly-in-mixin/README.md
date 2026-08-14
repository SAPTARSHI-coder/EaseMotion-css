# Perspective Fly In SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-perspective-fly-in` animation mixin from the EaseMotion core library, featuring 3D Z-axis depth fly-in entrance keyframes, perspective scaling physics, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-perspective-fly-in($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **3D Z-Axis Depth Keyframes**: Interpolates deep Z-axis 3D translation (`transform: perspective(1000px) translateZ(-400px) scale(0.6)`) to full focus at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-fly-card {
  @include ease-perspective-fly-in($duration: 1.2s, $easing: ease-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-fly ease-anim-perspective-fly-in">
  Perspective Fly 🚀
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.2s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Deep space indigo accent | `#6366f1` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-perspective-fly-in-mixin/`
- **Issue Reference**: `#81855`
- **Files Included**: `demo.html`, `style.css`, `README.md`
