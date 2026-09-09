# Skew Slide Reveal Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-skew-slide-reveal` utility class from the EaseMotion core animation library, featuring angular geometric skew entrance transitions, perspective clip-path reveals, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-skew-slide-reveal` directly to HTML elements.
- **Geometric Skew Keyframes**: Interpolates angular axis skewing (`transform: skewX(-15deg) translateX(-60px)` to `skewX(0deg) translateX(0)`) at 60 FPS.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<button class="demo-btn btn-skew ease-anim-skew-slide-reveal">
  Skew Reveal 📐
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
| `--ease-duration` | Keyframe animation duration | `1.1s` |
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Cyber teal theme accent | `#14b8a6` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-skew-slide-reveal-utility/`
- **Issue Reference**: `#81858`
- **Files Included**: `demo.html`, `style.css`, `README.md`
