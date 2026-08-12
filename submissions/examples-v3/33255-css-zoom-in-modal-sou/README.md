# CSS Zoom-In Modal — Creative Portfolio

> Closes issue [#33255](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/33255)

## What does this do?

A pure CSS animated modal that opens with a smooth **zoom-in** transition, styled to complement a **Creative Portfolio** interface — with zero JavaScript.

## How is it used?

The modal is triggered by native anchor links using the `:target` pseudo-class. Each portfolio card links to a modal by its `id`, and clicking either the background overlay or the close button navigates back to `#`, closing the modal.

```html
<!-- Trigger -->
<a href="#project-1" class="portfolio-card">
  <div class="card-thumb thumb-gradient-1"></div>
  <div class="card-info">
    <h3>Aurora Dreams</h3>
    <span>Brand Identity</span>
  </div>
</a>

<!-- Modal -->
<div id="project-1" class="modal-overlay" role="dialog" aria-modal="true">
  <a href="#" class="modal-close-bg" aria-label="Close modal"></a>
  <div class="modal-box">
    <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
    <div class="modal-visual thumb-gradient-1"></div>
    <div class="modal-content">
      <h2>Aurora Dreams</h2>
      <p>Project description here...</p>
    </div>
  </div>
</div>
```

### Customization via CSS Custom Properties

All animation parameters are exposed as CSS variables on `:root` — override them to fit your design:

| Variable | Default | Purpose |
|---|---|---|
| `--modal-zoom-duration` | `0.45s` | Length of the zoom-in transition |
| `--modal-zoom-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (soft overshoot by default) |
| `--modal-zoom-start-scale` | `0.75` | Initial scale before opening |
| `--modal-zoom-end-scale` | `1` | Final scale when open |
| `--modal-overlay-color` | `rgba(10, 12, 24, 0.75)` | Background overlay tint |
| `--modal-radius` | `20px` | Modal corner radius |
| `--modal-max-width` | `720px` | Max width of the modal box |

Example override:

```css
:root {
  --modal-zoom-duration: 0.6s;
  --modal-zoom-easing: ease-out;
  --modal-zoom-start-scale: 0.5;
}
```

## Why is it useful?

This component embodies the **EaseMotion philosophy** of expressive, performant motion with **zero JavaScript overhead**:

- **Pure CSS** — uses the `:target` pseudo-class, so it works in any environment (static sites, SSR, no-JS setups).
- **Fully responsive** — grid adapts from desktop to mobile via `auto-fit`.
- **Keyboard accessible** — cards are focusable via `Tab`, focus rings are visible, and modals are announced with `role="dialog"` and `aria-modal="true"`.
- **Respects user preferences** — honors `prefers-reduced-motion` by disabling transitions and scale animation.
- **Customizable** — every timing, easing, and scale factor is exposed as a CSS custom property.
- **Creative-Portfolio ready** — the visual design (gradient thumbs, glassmorphic overlay, soft overshoot easing) is tailored for showcase-style layouts.

It adds a modern, requested aesthetic pattern to the EaseMotion examples library — proving that rich, interactive modals don't need a single line of JavaScript.
