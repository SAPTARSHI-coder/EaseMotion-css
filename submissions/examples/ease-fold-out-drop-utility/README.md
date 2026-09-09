# Fold Out Drop Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-fold-out-drop` utility class from the EaseMotion core animation library, featuring 3D perspective fold-out rotations, vertical gravity drop keyframes, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-fold-out-drop` directly to HTML elements.
- **3D Origami Fold Keyframes**: Interpolates X-axis 3D perspective rotation (`transform: perspective(800px) rotateX(-90deg) translateY(-40px)`) to smooth resting position at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<button class="demo-btn btn-fold ease-anim-fold-out-drop">
  Unfold Drop 📖
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
| `--primary-accent` | Rose origami theme accent | `#f43f5e` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-fold-out-drop-utility/`
- **Issue Reference**: `#81856`
- **Files Included**: `demo.html`, `style.css`, `README.md`
