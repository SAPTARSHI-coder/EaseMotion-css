# 3D Carousel Transition Component (`ease-carousel-3d`)

A pure HTML + Vanilla CSS 3D carousel component featuring perspective depth (`perspective: 1000px`), `preserve-3d` transformations (`rotateY()`, `translateZ()`, `scale()`), radio-input state controls (`:checked ~ .carousel-stage`), keyboard-accessible label controls, and responsive depth scaling.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Genuine 3D Perspective**: Built using CSS `perspective: 1000px` and `transform-style: preserve-3d`. Prominent center card (`translateZ(120px) scale(1)`) with angled side card depth rotation (`rotateY(25deg) translateZ(-40px) scale(0.85)`).
- **Pure CSS State Engine**: State transitions driven by accessible radio controls (`<input type="radio" name="carousel-3d">`) mapped to keyboard-navigable pagination dot labels (`<label for="slide-N">`).
- **100% Accessible**: Full keyboard navigation support (`Tab`, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Responsive depth transforms adjust translate distances and card scales cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<section class="carousel-3d" aria-labelledby="carousel-title">
  <input
    type="radio"
    id="slide-1"
    name="carousel-3d"
    class="carousel-radio"
    checked
  />
  <input type="radio" id="slide-2" name="carousel-3d" class="carousel-radio" />

  <div class="carousel-stage">
    <article class="carousel-card card-1">Slide 1</article>
    <article class="carousel-card card-2">Slide 2</article>
  </div>

  <nav class="carousel-nav" aria-label="Carousel pagination">
    <label for="slide-1" class="nav-dot dot-1"
      ><span class="sr-only">Slide 1</span></label
    >
    <label for="slide-2" class="nav-dot dot-2"
      ><span class="sr-only">Slide 2</span></label
    >
  </nav>
</section>
```

### Customization Variables

```css
:root {
  --carousel-bg: #f8fafc;
  --carousel-card-bg: #ffffff;
  --carousel-accent: #6366f1;
  --carousel-focus: #06b6d4;
  --carousel-duration: 600ms;
}
```
