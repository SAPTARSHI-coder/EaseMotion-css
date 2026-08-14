# CSS 3D Perspective Tilt Hover Component (`ease-3d-perspective-tilt`)

A pure HTML + Vanilla CSS 3D Perspective Tilt hover effect component featuring `perspective(1000px)`, `rotateX()` and `rotateY()` 3D inclination mechanics, child `translateZ()` parallax layer separation, hardware-accelerated GPU transitions, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive 3D perspective tilt hover interaction without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Genuine 3D Perspective & Depth**: Combines `perspective(1000px)` with `rotateX(8deg) rotateY(-12deg)` and `translateZ(20px)` to create realistic 3D spatial rotation on hover/focus.
- **Inner Parallax Layering**: Applies distinct `translateZ()` depths (`40px`, `25px`, `30px`) to inner badges, headings, and buttons to produce a 3D parallax separation effect.
- **100% Accessible**: Uses semantic `<a class="ease-3d-perspective-tilt" href="...">` or `<button>` elements with high-contrast text, explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`transform: none !important;`).
- **Theme Adaptability & Multi-Angle Modifiers**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), Top-Left Tilt (default), Top-Right Tilt (`.ease-tilt-top-right`), and Bottom-Left Tilt (`.ease-tilt-bottom-left`).

## Usage

Include `style.css` and use semantic HTML:

```html
<article class="tilt-card-wrapper">
  <a href="#" class="ease-3d-perspective-tilt">
    <span class="ease-tilt-layer-badge">PERSPECTIVE TILT</span>
    <h2 class="ease-tilt-layer-title">Cybernetic Node Matrix</h2>
    <p class="ease-tilt-layer-desc">
      Experience smooth 3D rotation with hardware-accelerated GPU transforms.
    </p>
    <div class="ease-tilt-layer-btn">Explore Matrix &rarr;</div>
  </a>
</article>

<!-- Top-Right Perspective Tilt Variation -->
<article class="tilt-card-wrapper">
  <a href="#" class="ease-3d-perspective-tilt ease-tilt-top-right">
    <h2 class="ease-tilt-layer-title">Quantum Core Engine</h2>
  </a>
</article>
```

### Customization Variables

```css
.ease-3d-perspective-tilt {
  --tilt-perspective: 1000px;
  --tilt-rx: 8deg;
  --tilt-ry: -12deg;
  --tilt-tz: 20px;
  --tilt-speed: 0.5s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/73372-3d-perspective-tilt/demo.html) directly in any modern web browser to interact with the 3D perspective tilt hover component offline.
