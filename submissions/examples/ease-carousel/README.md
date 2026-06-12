# ease-carousel — CSS Scroll-Snap Image Carousel

## What does this do?

A horizontally scrollable image/content carousel with CSS `scroll-snap`, navigation dots, arrow buttons, progress bar, and multiple variants (slide, fade, peek, auto-play, multi-column).

## Variants

| Variant         | Class                   | Description                               |
| --------------- | ----------------------- | ----------------------------------------- |
| Slide (default) | `.ease-carousel--slide` | Scroll-snap horizontal scrolling          |
| Fade            | `.ease-carousel--fade`  | Cross-fade transition between slides      |
| Peek            | `.ease-carousel--peek`  | Shows edges of adjacent slides            |
| Auto-play       | `.ease-carousel--auto`  | Auto-advances on a timer, pauses on hover |

## How is it used?

Basic slide carousel:

```html
<div class="ease-carousel ease-carousel--slide">
  <div
    class="ease-carousel__track"
    role="region"
    aria-roledescription="carousel"
  >
    <div
      class="ease-carousel__slide"
      role="group"
      aria-roledescription="slide"
      aria-label="1 of 3"
    >
      <img src="image1.jpg" alt="Description" />
    </div>
    <div
      class="ease-carousel__slide"
      role="group"
      aria-roledescription="slide"
      aria-label="2 of 3"
    >
      <img src="image2.jpg" alt="Description" />
    </div>
    <div
      class="ease-carousel__slide"
      role="group"
      aria-roledescription="slide"
      aria-label="3 of 3"
    >
      <img src="image3.jpg" alt="Description" />
    </div>
  </div>

  <button
    class="ease-carousel__arrow ease-carousel__arrow--prev"
    aria-label="Previous slide"
  >
    &#8249;
  </button>
  <button
    class="ease-carousel__arrow ease-carousel__arrow--next"
    aria-label="Next slide"
  >
    &#8250;
  </button>

  <div class="ease-carousel__dots" role="tablist" aria-label="Slide navigation">
    <button
      class="ease-carousel__dot ease-carousel__dot--active"
      role="tab"
      aria-selected="true"
      aria-label="Slide 1"
    ></button>
    <button
      class="ease-carousel__dot"
      role="tab"
      aria-selected="false"
      aria-label="Slide 2"
    ></button>
    <button
      class="ease-carousel__dot"
      role="tab"
      aria-selected="false"
      aria-label="Slide 3"
    ></button>
  </div>

  <div class="ease-carousel__progress">
    <div class="ease-carousel__progress-bar"></div>
  </div>
</div>
```

Auto-play with custom interval:

```html
<div
  class="ease-carousel ease-carousel--slide ease-carousel--auto"
  data-ease-interval="3000"
>
  ...
</div>
```

Multi-column (2 per view):

```html
<div class="ease-carousel ease-carousel--slide" data-ease-slides-per-view="2">
  ...
</div>
```

## JavaScript dependency

Minimal JS handles: dot navigation, arrow navigation, auto-play timing, active slide tracking (`.ease-carousel__slide--active`), and progress bar width. CSS handles all visual rendering, scroll behavior, and transitions.

## States

- `.ease-carousel__slide--active` — currently visible slide
- `.ease-carousel__slide--prev` — previous slide
- `.ease-carousel__slide--next` — next slide

## Why is it useful?

Image carousels are a fundamental UI pattern missing from EaseMotion CSS. This implementation uses native CSS `scroll-snap` for smooth, hardware-accelerated scrolling with minimal JS overhead. Framework-agnostic — works with any tech stack.

## Tech Stack

- HTML
- CSS (scroll-snap, flexbox, transitions)
- JavaScript (minimal — navigation, auto-play, progress)

## Preview

Open `demo.html` directly in your browser to see all variants in action.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-carousel__*`)
- Maintainer may adjust naming before merging
- Images sourced from picsum.photos (placeholders)
