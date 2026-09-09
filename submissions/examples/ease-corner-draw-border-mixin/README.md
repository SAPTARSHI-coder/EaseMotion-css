# Corner Draw Border SCSS Mixin Demo Component

A pure CSS showcase documenting the `@mixin ease-corner-draw-border` animation mixin from the EaseMotion core library, featuring animated corner border stroke drawing keyframes, perimeter path physics, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **SCSS Animation Mixin**: Integrates `@mixin ease-corner-draw-border($duration, $easing, $delay, $fill)` into the EaseMotion SCSS architecture.
- **Corner Border Drawing Keyframes**: Animates pseudo-element perimeter width/height stroke extension (`0%` to `100%`) clockwise along element boundaries at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ SCSS Mixin Usage

Include `_mixins.scss` in your project and apply the mixin to any selector:

```scss
@use 'scss/mixins' as *;

.my-drawn-card {
  @include ease-corner-draw-border($duration: 1.5s, $easing: ease-in-out);
}
```

Or apply the utility class directly in HTML:

```html
<button class="demo-btn btn-draw ease-anim-corner-draw-border">
  Draw Border ✏️
</button>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.5s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Emerald drawn theme accent | `#10b981` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-corner-draw-border-mixin/`
- **Issue Reference**: `#81853`
- **Files Included**: `demo.html`, `style.css`, `README.md`
