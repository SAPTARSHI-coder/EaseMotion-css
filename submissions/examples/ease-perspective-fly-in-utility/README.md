# Perspective Fly In Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-perspective-fly-in` utility class from the EaseMotion core animation library, featuring 3D Z-axis depth fly-in entrance keyframes, perspective scaling physics, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-perspective-fly-in` directly to HTML elements.
- **3D Z-Axis Depth Keyframes**: Interpolates deep Z-axis 3D translation (`transform: perspective(1000px) translateZ(-400px) scale(0.6)`) to full focus at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<button class="demo-btn btn-fly ease-anim-perspective-fly-in">
  Perspective Fly 🚀
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
| `--primary-accent` | Deep space indigo accent | `#6366f1` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-perspective-fly-in-utility/`
- **Issue Reference**: `#81854`
- **Files Included**: `demo.html`, `style.css`, `README.md`
