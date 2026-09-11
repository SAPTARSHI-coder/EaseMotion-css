# Blur Prism Fade Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-blur-prism-fade` utility class from the EaseMotion core animation library, featuring chromatic dispersion blur keyframes, GPU hardware acceleration, and glassmorphism UI components.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-blur-prism-fade` directly to HTML elements.
- **Chromatic Prism Fade Keyframes**: Interpolates `filter: blur()`, `hue-rotate()`, and `transform: scale3d()` at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<button class="demo-btn btn-prism ease-anim-blur-prism-fade">
  Prism Launch
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 1.5s;
  --ease-timing: ease-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `1.2s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Neon magenta theme accent | `#ec4899` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-blur-prism-fade-utility/`
- **Issue Reference**: `#81864`
- **Files Included**: `demo.html`, `style.css`, `README.md`
