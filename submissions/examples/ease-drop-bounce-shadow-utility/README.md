# Drop Bounce Shadow Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-drop-bounce-shadow` utility class from the EaseMotion core animation library, featuring elastic gravity drop bounce keyframes, ground shadow compression physics, and 60 FPS GPU acceleration.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-drop-bounce-shadow` directly to HTML elements.
- **Elastic Bounce Keyframe Physics**: Synchronizes gravity drop `transform: translateY(-50px)` to `translateY(0)` impact with expanding floor `box-shadow` compression.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` and apply the class directly to any HTML element:

```html
<button class="demo-btn btn-bounce ease-anim-drop-bounce-shadow">
  Drop Bounce 🏀
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
| `--ease-timing` | Cubic-bezier transition timing function | `cubic-bezier(0.28, 0.84, 0.42, 1)` |
| `--primary-accent` | Elastic amber theme accent | `#f59e0b` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-drop-bounce-shadow-utility/`
- **Issue Reference**: `#81860`
- **Files Included**: `demo.html`, `style.css`, `README.md`
