# Rubber Band Stretch Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-rubber-band-stretch` utility class from the EaseMotion core animation library, featuring elastic scaling keyframes, GPU hardware acceleration, and responsive UI components.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-rubber-band-stretch` directly to HTML elements.
- **Elastic Distortion Keyframes**: Uses hardware-accelerated `transform: scale3d()` scaling vectors (`1.25, 0.75, 1`) transitioning back to equilibrium.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` or `core/animations.css` and apply the class directly:

```html
<button class="demo-btn ease-anim-rubber-band-stretch">
  Trigger Animation
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 0.8s;
  --ease-timing: ease-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1s` |
| `--ease-timing` | Spring physics cubic-bezier timing function | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--primary-accent` | Theme accent color | `#f59e0b` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-rubber-band-stretch-utility/`
- **Issue Reference**: `#81874`
- **Files Included**: `demo.html`, `style.css`, `README.md`
