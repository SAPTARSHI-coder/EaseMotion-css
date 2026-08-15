# 3D Flip Modal for Creative Portfolio Layouts

A pure CSS animated modal utilizing a smooth 3D flip transition, designed to complement creative portfolio interfaces. Zero JavaScript, fully responsive, keyboard accessible, and exposes custom parameters via standard CSS custom properties.

---

## 1. What does this do?

It creates an interactive portfolio card that flips in 3D space to reveal detailed project information on the back face, using only pure HTML and CSS.

---

## 2. How is it used?

The component uses a hidden checkbox pattern to toggle the flip state without JavaScript. Wrap each portfolio item in a `.flip-card` container with a `<label>` triggering an `<input type="checkbox">`.

### Basic HTML structure:

```html
<div class="flip-card">
  <input type="checkbox" id="flip-1" class="flip-toggle" />
  <div class="flip-card-inner">

    <!-- Front Face -->
    <label for="flip-1" class="flip-face flip-front" role="button" tabindex="0">
      <div class="project-thumb project-thumb-1"></div>
      <h2>Project Title</h2>
      <span class="hint">Click to view details →</span>
    </label>

    <!-- Back Face -->
    <div class="flip-face flip-back">
      <h3>Project Title</h3>
      <p>Project description...</p>
      <label for="flip-1" class="close-btn">← Back</label>
    </div>

  </div>
</div>
```

### Customization via CSS Custom Properties:

You can override any of these variables on `:root` or on a specific `.flip-card` to fine-tune behavior:

| Custom Property         | Default                              | Description                       |
| ----------------------- | ------------------------------------ | --------------------------------- |
| `--flip-duration`       | `0.8s`                               | Duration of the flip animation    |
| `--flip-easing`         | `cubic-bezier(0.645,0.045,0.355,1)`  | Easing curve for the flip         |
| `--flip-scale-hover`    | `1.03`                               | Hover scale factor on front face  |
| `--flip-perspective`    | `1400px`                             | 3D perspective depth              |
| `--card-radius`         | `16px`                               | Border radius of cards            |
| `--card-min-height`     | `380px`                              | Minimum card height               |

### Example — Override for a faster flip:

```css
.flip-card {
  --flip-duration: 0.4s;
  --flip-scale-hover: 1.05;
}
```

---

## 3. Why is it useful?

This component fits **EaseMotion CSS's philosophy** in several important ways:

- **Zero JavaScript overhead** — pure CSS interaction using the checkbox-hack pattern keeps bundles lean.
- **Highly reusable** — creative portfolios, product showcases, team pages, feature grids, and pricing cards can all leverage the same primitive.
- **Fully accessible** — includes `role="button"`, `tabindex="0"`, `aria-label` attributes, visible focus outlines via `:focus-visible`, and honors `prefers-reduced-motion`.
- **Responsive by default** — uses `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` to adapt from mobile to desktop without breakpoints for the grid itself.
- **Extensible via custom properties** — designers can restyle timing, easing, and scale without touching the core CSS.
- **Modern aesthetic** — subtle glassmorphism, gradient thumbnails, and smooth cubic-bezier easing make it feel premium out of the box.

It fills a highly requested modern UI pattern in the EaseMotion examples library, giving contributors a proven starting point for animation-driven portfolio interfaces.

---

## Accessibility Notes

- Every interactive face includes `role="button"` and `tabindex="0"` so keyboard users can `Tab` to it.
- Focus states use `:focus-visible` so mouse users aren't distracted by outlines.
- The flip animation respects the user's `prefers-reduced-motion` preference and reduces to `0.01ms` when requested.
- Semantic headings (`h1`, `h2`, `h3`) preserve document outline for screen readers.

---

## Browser Support

Works in all modern browsers that support CSS 3D transforms and `:focus-visible`:
- Chrome / Edge 88+
- Firefox 85+
- Safari 15.4+

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) for issue [#33269](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/33269).
