# Vaporwave Grid Pulse Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-vaporwave-grid-pulse` utility class from the EaseMotion core animation library, featuring retro-futuristic synthwave perspective grid pulses, neon box-shadow bloom keyframes, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-vaporwave-grid-pulse` directly to HTML elements.
- **Synthwave Pulse Keyframes**: Interpolates magenta (`#ec4899`) and cyan (`#06b6d4`) neon box-shadow bloom reflections at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` or `core/animations.css` and apply the class directly:

```html
<button class="demo-btn btn-synthwave ease-anim-vaporwave-grid-pulse">
  SYNTHWAVE RUN
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 2.5s;
  --ease-timing: ease-in-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `3s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Neon magenta theme accent | `#ec4899` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-vaporwave-grid-pulse-utility/`
- **Issue Reference**: `#81870`
- **Files Included**: `demo.html`, `style.css`, `README.md`
