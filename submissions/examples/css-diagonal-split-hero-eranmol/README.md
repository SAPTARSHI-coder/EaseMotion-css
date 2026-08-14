# CSS Diagonal Split Hero

A hero section split diagonally with an image on one side and text on the other, built entirely with pure CSS.

## What does this do?

It creates a hero section where the image area is clipped at a diagonal angle using `clip-path: polygon()`, creating a dynamic split layout. One half holds text content and the other holds a visual. A reversed variant flips the layout.

## How is it used?

Drop `demo.html` and `style.css` into your project. The hero uses a simple grid layout with a clip-path on the image:

```html
<section class="diagonal-hero" role="banner" aria-label="Hero section">
  <div class="diagonal-hero__content">
    <span class="diagonal-hero__badge">New</span>
    <h1 class="diagonal-hero__title">Your headline</h1>
    <p class="diagonal-hero__text">Description text.</p>
    <div class="diagonal-hero__actions">
      <a class="diagonal-hero__button diagonal-hero__button--primary">CTA</a>
    </div>
  </div>
  <div class="diagonal-hero__image" aria-hidden="true"></div>
</section>
```

Add `diagonal-hero--reversed` to flip the layout (image left, text right).

## Why is it useful?

Hero sections are the first thing visitors see on a landing page. A diagonal split creates visual interest and breaks the monotony of rectangular layouts. This implementation uses CSS `clip-path` for the diagonal edge, CSS Grid for layout, staggered entrance animations, CSS custom properties for theming, and automatic dark mode support, all without any JavaScript.
