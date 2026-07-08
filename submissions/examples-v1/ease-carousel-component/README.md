# Ease Carousel Component

## What does this do?
A modern, responsive, and hardware-accelerated carousel component supporting touch swiping, autoplay sequences, fade/slide animations, dot indicator tracking, client reviews, card tracks, and hero banners.

---

## Why is it useful?
Carousels are crucial components in modern landing pages, product catalogs, and dashboard hubs. They allow displaying multiple content clusters in a constrained space, maximizing information density without visual clutter. This component is highly performance-optimized, zero-dependency, and fully customizable using standard CSS variables, integrating cleanly into the EaseMotion CSS ecosystem.

---

## How is it used?

### Basic HTML Structure

```html
<!-- Carousel container frame -->
<div class="ease-carousel" id="my-carousel">
  
  <!-- Slide track -->
  <div class="ease-carousel-track">
    
    <!-- Slide 1 -->
    <div class="ease-carousel-slide">
      <img src="slide1.jpg" alt="Slide 1" class="ease-carousel-image">
      <div class="ease-carousel-caption">
        <h3>Creative Designs</h3>
        <p>Build beautiful landing pages easily.</p>
      </div>
    </div>

    <!-- Slide 2 -->
    <div class="ease-carousel-slide">
      <img src="slide2.jpg" alt="Slide 2" class="ease-carousel-image">
    </div>

  </div>

  <!-- Navigation Prev/Next Arrow Buttons (Optional) -->
  <button class="ease-carousel-btn ease-carousel-btn--prev">
    <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
  </button>
  <button class="ease-carousel-btn ease-carousel-btn--next">
    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </button>

  <!-- Dot Indicators Container (Optional) -->
  <div class="ease-carousel-dots"></div>
</div>
```

---

### Basic Javascript Controller

Instantiate the class controller passing the container ID and optional parameter values:

```javascript
class EaseCarouselManager {
  // Container selectors, controls mapping, click listeners, and track transforms
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  new EaseCarouselManager('my-carousel', {
    autoplay: true,
    autoplayInterval: 3000,
    infinite: true
  });
});
```

---

## Features
- **Smooth Transition Presets**: Easily toggle between horizontal scroll slides (`transform: translate3d`) and opacity fade overlaps.
- **Card Track Layouts**: Supports displaying multi-card grids (Product grid columns, review blogs) side-by-side.
- **Mobile Touch Swipe**: Native support for finger dragging/swiping on touch viewports.
- **Dark Mode Refinement**: Automatic adjustment of borders, buttons, and text shades in dark mode via standard media query tokens.
- **Autoplay Control Hooks**: Simple autoplay manager with play/pause overrides on hover.

---

## Variants

1. **Basic Image Carousel** (`.ease-carousel--basic`): Clean aspect-ratio panel for photo sliders.
2. **Auto Sliding Carousel**: Scrolls automatically through slides at configurable intervals.
3. **Manual Navigation Carousel**: Static slider requiring prev/next buttons or dot clicks.
4. **Infinite Loop Carousel**: Seamlessly wraps back to slide 1 upon passing the boundary.
5. **Fade Transition Carousel** (`.ease-carousel--fade`): Slides fade in/out on top of each other.
6. **Slide Transition Carousel**: Default sliding horizontal track.
7. **Card Carousel** (`.ease-carousel--cards`): Showcases multiple cards side-by-side in a single flex track.
8. **Product Showcase Carousel**: Products showcase, complete with mock image containers, prices, and checkout actions.
9. **Testimonial Carousel** (`.ease-carousel--testimonial`): Centered block quotes, ratings, and authors for testimonials.
10. **Full-width Hero Carousel** (`.ease-carousel--hero`): Full width banner slides with dark linear-gradient shadows and absolute overlays.

---

## Controls & Elements

- **`.ease-carousel`**: Main container shell.
- **`.ease-carousel-track`**: Horizontal slides track.
- **`.ease-carousel-slide`**: Single slide pane.
- **`.ease-carousel-btn`**: Overlay navigation button triggers. Use `.ease-carousel-btn--prev` and `.ease-carousel-btn--next` to align.
- **`.ease-carousel-dots`**: Indicator dot row.
- **`.ease-carousel-dot`**: Individual page link dot. Uses `.active` to highlight.
- **`.ease-carousel-caption`**: Muted dark overlay block for captions.

---

## Customization

Override variables inside `:root` or wrap within specific styling sections:

```css
:root {
  --ec-color-primary: #10b981; /* Shift indicator dot highlights to emerald green */
  --ec-nav-size: 50px; /* Increase prev/next button sizes */
  
  --ease-radius-lg: 1.5rem; /* Increase corner rounds */
}
```
