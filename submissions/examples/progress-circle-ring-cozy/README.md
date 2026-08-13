# ease-progress-circle-ring-cozy

A clean, CSS-driven circular progress ring animation. It uses SVG for crisp, scalable rendering, but relies entirely on CSS custom properties and `stroke-dashoffset` for the animation logic.

## What does this do?

Displays a circular progress bar that smoothly animates to a given percentage. It also includes an indeterminate "loading spinner" state driven purely by CSS `@keyframes` when the exact progress is unknown.

## How to use it

Include the `style.css` file and use the following HTML structure. You can set the progress by changing the `--epr-progress` inline CSS variable on the outer container.

```html
<link rel="stylesheet" href="style.css">

<!-- The variable --epr-progress controls the fill amount (0-100) -->
<div class="ease-progress-ring" style="--epr-progress: 75;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  
  <svg class="ease-progress-ring__svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="ease-progress-ring__track" cx="50" cy="50" r="45"></circle>
    <circle class="ease-progress-ring__fill" cx="50" cy="50" r="45"></circle>
  </svg>
  
  <!-- Optional center text -->
  <span class="ease-progress-ring__label">75%</span>
  
</div>
```

### Changing progress dynamically via JavaScript
Because the logic is tied to a CSS custom property, you don't need complex animation libraries. Just update the inline style and CSS `transition` will handle the smooth interpolation:

```js
const ring = document.querySelector('.ease-progress-ring');
// Set to 90%
ring.style.setProperty('--epr-progress', 90);
ring.setAttribute('aria-valuenow', 90); // keep it accessible
```

### Indeterminate State (Loading Spinner)
If you are waiting for data and don't have a progress percentage yet, append the modifier class `--indeterminate` and update the ARIA attributes:

```html
<div class="ease-progress-ring ease-progress-ring--indeterminate" role="progressbar" aria-busy="true">
  <svg class="ease-progress-ring__svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="ease-progress-ring__track" cx="50" cy="50" r="45"></circle>
    <circle class="ease-progress-ring__fill" cx="50" cy="50" r="45"></circle>
  </svg>
</div>
```

## Customization

The component exposes several variables on `:root` that can be overridden globally or scoped to a specific ring component.

| Property | Default | Description |
|---|---|---|
| `--epr-size` | `120px` | Outer dimensions of the ring |
| `--epr-thickness` | `8px` | Stroke width of the SVG |
| `--epr-color-fill` | `#3b82f6` | Color of the progress stroke |
| `--epr-color-track` | `#e2e8f0` | Color of the background ring |
| `--epr-color-text` | `#0f172a` | Color of the inner label text |
| `--epr-font-size` | `1.5rem` | Font size of the inner label |
| `--epr-transition-duration` | `0.8s` | Speed of the progress animation |

### Built-in modifiers
- **Sizes**: `ease-progress-ring--sm`, `ease-progress-ring--lg`
- **Themes**: `ease-progress-ring--success`, `ease-progress-ring--warning`, `ease-progress-ring--error`
- **Gradient**: `ease-progress-ring--gradient` (requires an SVG `<linearGradient>` definition with `id="epr-gradient"`)

## Accessibility

- The `.ease-progress-ring` container uses `role="progressbar"` along with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- For the indeterminate state, use `aria-busy="true"`.
- `prefers-reduced-motion: reduce` completely disables the transitions and spinning animations. The ring will snap instantly to the target percentage, and the indeterminate state will show a static quarter-filled ring.
- The SVG itself has `aria-hidden="true"` so screen readers ignore the decorative graphics and focus on the text/ARIA attributes.

## Why it fits EaseMotion CSS

Progress rings are ubiquitous, but implementing them often requires heavy JavaScript libraries or hardcoded SVG offsets in JS. By utilizing CSS custom properties for math (`stroke-dashoffset: calc(...)`) and leveraging CSS `transition` for the motion, this component stays incredibly lightweight. It adheres strictly to the CSS-first philosophy, relying on simple declarative HTML and CSS variables to handle complex state changes seamlessly.

## Browser Support

Fully supported in all modern browsers (Chrome, Firefox, Safari, Edge). Uses standard SVG stroke properties and `calc()`.
