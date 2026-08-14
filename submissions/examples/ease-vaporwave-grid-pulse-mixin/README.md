# Vaporwave Grid Pulse SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-vaporwave-grid-pulse` animation mixin from the EaseMotion core library, featuring retro-futuristic synthwave perspective grid pulses, neon box-shadow bloom keyframes, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-vaporwave-grid-pulse($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Synthwave Pulse Keyframes**: Interpolates magenta (`#ec4899`) and cyan (`#06b6d4`) neon box-shadow bloom reflections at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-cyber-card {
  @include ease-vaporwave-grid-pulse($duration: 3s, $easing: ease-in-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-synthwave ease-anim-vaporwave-grid-pulse">
  SYNTHWAVE RUN
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `3s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Neon magenta theme accent | `#ec4899` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-vaporwave-grid-pulse-mixin/`
- **Issue Reference**: `#81871`
- **Files Included**: `demo.html`, `style.css`, `README.md`
