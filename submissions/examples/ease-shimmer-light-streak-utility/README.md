# Shimmer Light Streak Keyframe Utility Class Component

A pure CSS showcase documenting the `.ease-anim-shimmer-light-streak` utility class from the EaseMotion core animation library, featuring sleek diagonal light reflection sweeps, 60 FPS GPU acceleration, and responsive glassmorphism components.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Utility Animation Class**: Applies `.ease-anim-shimmer-light-streak` directly to HTML elements.
- **Diagonal Reflection Keyframes**: Animates background linear-gradient positioning (`115deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%`) smoothly across surface geometry.
- **Configurable Custom Properties**: Accepts custom timing overrides via `--ease-duration` and `--ease-timing`.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Link `style.css` or `core/animations.css` and apply the class directly:

```html
<div class="shimmer-card-box ease-anim-shimmer-light-streak">
  Enterprise Tier Feature Card
</div>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 2s;
  --ease-timing: ease-in-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Keyframe animation duration | `2.5s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Theme accent color | `#38bdf8` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-shimmer-light-streak-utility/`
- **Issue Reference**: `#81872`
- **Files Included**: `demo.html`, `style.css`, `README.md`
