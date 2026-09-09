# Elevation Float Shadow Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-elevation-float-shadow` utility class from the EaseMotion core animation library, featuring continuous levitating elevation keyframes, synchronized ambient shadow diffusion, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-elevation-float-shadow` directly to HTML elements.
- **Levitating Keyframe Physics**: Synchronizes `transform: translateY(-12px)` vertical translation with expanding ground `box-shadow` diffusion.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<div class="float-card-box ease-anim-elevation-float-shadow">
  Elevated Container Card
</div>
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
| `--primary-accent` | Theme accent color | `#6366f1` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-elevation-float-shadow-utility/`
- **Issue Reference**: `#81862`
- **Files Included**: `demo.html`, `style.css`, `README.md`
