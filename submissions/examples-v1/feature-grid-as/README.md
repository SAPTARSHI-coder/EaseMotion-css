# Feature Grid With Icons

### What does this do?

It lays out a responsive grid of feature cards, each with an inline SVG icon badge, a title, and a short description. The cards lift slightly on hover, and the columns auto fit to the screen width.

### How is it used?

```html
<section class="features">
  <article class="feature">
    <div class="feature-icon"><svg>...</svg></div>
    <h3>Fast</h3>
    <p>Loads in a blink.</p>
  </article>
</section>
```

The grid uses `repeat(auto-fit, minmax(200px, 1fr))`, so cards wrap to fewer columns as space shrinks. Icons are inline SVG, so there are no external assets.

### Why is it useful?

Feature grids are a staple of landing pages. This lays out a clean, responsive feature section with auto fitting columns and a subtle hover lift, using only CSS. The hover lift is removed under reduced motion.
