# Drop Bounce Shadow SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-drop-bounce-shadow` animation mixin from the EaseMotion core library, featuring elastic gravity drop bounce keyframes, ground shadow compression physics, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-drop-bounce-shadow($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Elastic Bounce Keyframe Physics**: Synchronizes gravity drop `transform: translateY(-50px)` to `translateY(0)` impact with expanding floor `box-shadow` compression.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-bounce-card {
  @include ease-drop-bounce-shadow($duration: 1.2s, $easing: ease-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-bounce ease-anim-drop-bounce-shadow">
  Drop Bounce 🏀
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.2s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.28, 0.84, 0.42, 1)` |
| `--primary-accent` | Elastic amber theme accent | `#f59e0b` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-drop-bounce-shadow-mixin/`
- **Issue Reference**: `#81861`
- **Files Included**: `demo.html`, `style.css`, `README.md`
