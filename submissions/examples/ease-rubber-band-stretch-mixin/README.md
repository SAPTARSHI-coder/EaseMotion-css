# Rubber Band Stretch SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-rubber-band-stretch` animation mixin from the EaseMotion core library, featuring elastic scale distortion keyframes, 60 FPS GPU hardware acceleration, and responsive UI components.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-rubber-band-stretch($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Elastic Distortion Keyframes**: Uses hardware-accelerated `transform: scale3d()` scaling vectors (`1.25, 0.75, 1`) transitioning back to equilibrium.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-button {
  @include ease-rubber-band-stretch($duration: 1s, $easing: cubic-bezier(0.34, 1.56, 0.64, 1));
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn ease-anim-rubber-band-stretch">
  Click Me
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1s` |
| `--ease-timing` | Spring physics cubic-bezier timing function | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--primary-accent` | Theme accent color | `#f59e0b` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-rubber-band-stretch-mixin/`
- **Issue Reference**: `#81875`
- **Files Included**: `demo.html`, `style.css`, `README.md`
