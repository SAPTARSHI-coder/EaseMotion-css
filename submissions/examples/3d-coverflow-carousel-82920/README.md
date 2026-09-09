# Pure CSS 3D Coverflow Carousel (`.ease-coverflow`)

## What does this do?

A dependency-free, scroll-snapped 3D Coverflow carousel where side cards angle inward and the centered card pops forward, built entirely with CSS 3D transforms — no JavaScript.

## How is it used?

Drop the carousel markup into your page and link `style.css`:

```html
<link rel="stylesheet" href="style.css">

<section class="ease-coverflow-viewport" tabindex="0" aria-label="Coverflow">
  <div class="ease-coverflow-track">
    <a class="ease-coverflow-card" id="cover-1" href="#cover-1">
      <span class="ease-coverflow-art"></span>
      <span class="ease-coverflow-card-label">
        <span class="ease-coverflow-card-index">01</span>
        <span class="ease-coverflow-card-title">Amber Pulse</span>
      </span>
    </a>
    <!-- repeat for every card -->
  </div>
</section>

<nav class="ease-coverflow-nav" aria-label="Quick navigation">
  <a class="ease-coverflow-dot" href="#cover-1" aria-label="Go to card 1"></a>
  <!-- one dot per card -->
</nav>
```

Interaction works three ways, all CSS-only:

- **Scroll snapping** — the viewport uses `scroll-snap-type: x mandatory` with `scroll-snap-align: center`, so dragging, trackpads, and arrow keys land each card dead-center.
- **`:target` anchors** — clicking a card or a navigation dot jumps/smooth-scrolls that card to the center.
- **`:hover` / `:focus-visible`** — hovering or focusing a card glows, brightens the artwork, and lifts it above its neighbors.

## The 3D engine

```css
.ease-coverflow-viewport { perspective: 1000px; }
.ease-coverflow-track     { transform-style: preserve-3d; }
.ease-coverflow-card      { backface-visibility: hidden; }
```

1. **Perspective stage** — `perspective: 1000px` on the viewport creates the vanishing point; `transform-style: preserve-3d` on the track keeps every card inside one shared 3D space.
2. **Position-driven transforms** — a scroll-driven animation (`animation-timeline: view(x)`) rotates each card from `rotateY(-45deg) scale(0.8)` (right side) through `rotateY(0deg) scale(1.12) translateZ(60px)` (center) to `rotateY(45deg) scale(0.8)` (left side). `backface-visibility: hidden` removes any mirrored back-edge artifacts.
3. **Floor reflections** — each artwork gets a realistic glossy floor echo via `-webkit-box-reflect: below 0px linear-gradient(rgba(0,0,0,0.4), transparent 42%)`, which fades out with distance like a real mirrored surface.
4. **Graceful fallbacks** — browsers without scroll-driven animations get a static coverflow via `@supports not` (`:nth-child` left/center/right placement + hover pop), and `prefers-reduced-motion` collapses everything to a still, centered layout.

## Why is it useful?

3D Coverflow is one of the most iconic media-browsing patterns in UI history, and this implementation proves it can ship with **zero JavaScript**. The demo leans entirely on EaseMotion's philosophy — readable, semantic classes, human-readable CSS, and buttery 3D motion driven by the browser's own rendering and scroll engine. It is a flagship showcase for CSS 3D transforms, scroll-driven animations, and `-webkit-box-reflect` working together.

## Browser support

- Scroll-driven animations: Chrome/Edge 115+, Firefox 130+, Safari 26+.
- Older browsers automatically fall back to a static, still-interactive coverflow.
