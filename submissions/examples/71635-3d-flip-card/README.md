# 3D Flip Card Component (`ease-flip-wrapper`)

A pure HTML + Vanilla CSS 3D perspective flip card component featuring 180-degree Y-axis rotation (`rotateY(180deg)`), `perspective: 1000px`, `transform-style: preserve-3d`, `backface-visibility: hidden`, focus-within keyboard support, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive 3D flip card interaction without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **True 3D Perspective Matrix**: Combines `perspective: 1000px` on `.ease-flip-wrapper` with `transform-style: preserve-3d` on `.ease-flip-card` to deliver realistic 3D depth.
- **Dual-Face `backface-visibility` Engine**: Both `.ease-flip-front` and `.ease-flip-back` faces utilize `backface-visibility: hidden` so non-active card faces remain invisible when rotated away.
- **100% Accessible**: Full support for `:focus` / `:focus-within` keyboard navigation and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; transform: none !important;`).
- **Theme Adaptability & Motion Controls**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-flip-wrapper" tabindex="0">
  <div class="ease-flip-card">
    <!-- Front Face -->
    <div class="ease-flip-face ease-flip-front">
      <h3>Card Front</h3>
      <p>Hover or focus to reveal the back face.</p>
    </div>

    <!-- Back Face -->
    <div class="ease-flip-face ease-flip-back">
      <h3>Card Back</h3>
      <p>180-degree Y-axis rotated content.</p>
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-flip-wrapper {
  --flip-perspective: 1000px;
  --flip-duration: 0.6s;
  --flip-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --flip-primary: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71635-3d-flip-card/demo.html) directly in any modern web browser to interact with the 3D flip card component offline.
