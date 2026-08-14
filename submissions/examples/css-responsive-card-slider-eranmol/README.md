# CSS Responsive Card Slider

A card slider that adapts columns on mobile and desktop using CSS scroll-snap, built entirely with pure CSS.

## What does this do?

It provides a horizontally scrollable card slider where cards snap into place as the user scrolls. On desktop, multiple cards are visible at once. On mobile, the layout switches to a single-column stack. The scroll-snap behavior is handled entirely by CSS — no JavaScript needed.

## How is it used?

Drop `demo.html` and `style.css` into your project. The slider uses a simple wrapper with cards inside:

```html
<div class="card-slider" role="region" aria-label="Card slider">
  <article class="card-slider__card">
    <div class="card-slider__image card-slider__image--1" aria-hidden="true"></div>
    <div class="card-slider__body">
      <span class="card-slider__tag">Category</span>
      <h3 class="card-slider__title">Card Title</h3>
      <p class="card-slider__text">Card description text.</p>
    </div>
  </article>
  <!-- more cards... -->
</div>
```

The key CSS properties are `scroll-snap-type: x mandatory` on the container and `scroll-snap-align: start` on each card.

## Why is it useful?

Card sliders are one of the most common patterns for showcasing features, products, or content on landing pages. This implementation uses native CSS scroll-snap for smooth, hardware-accelerated scrolling without any JavaScript library. It includes responsive breakpoints that switch from horizontal scroll to vertical stack on mobile, staggered entrance animations, CSS custom properties for theming, and dark mode support.
