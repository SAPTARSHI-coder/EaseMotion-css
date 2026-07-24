# CSS Scroll Snap Stop Utilities

Relates to feature request **#41290**.

## 1. What does this do?

Introduces helper utilities around the CSS `scroll-snap-stop` property, allowing developers to create carousels and paginated scrolling experiences with configurable snap behavior and accessibility-friendly defaults — with zero JavaScript.

## 2. Why is this useful for EaseMotion CSS?

Scroll snapping is increasingly used for galleries, onboarding flows, and presentations. Dedicated utilities simplify implementation while encouraging native browser behavior over JavaScript solutions.

## 3. Utilities Provided

| Class | Description | scroll-snap-stop |
|---|---|---|
| `.ease-snap-gallery` | Full-width horizontal carousel | `always` — never skips a slide |
| `.ease-snap-cards` | Peek-style card carousel | `normal` — allows fast swipe |
| `.ease-snap-pages` | Vertical paginated scroll | `always` — visits each page |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<div class="ease-snap-gallery">
  <section>Slide 1</section>
  <section>Slide 2</section>
  <section>Slide 3</section>
</div>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-snap-gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.ease-snap-gallery > * {
  flex: 0 0 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

## 5. Key Property: `scroll-snap-stop`

| Value | Behaviour |
|---|---|
| `normal` | A fast scroll/swipe **can skip** multiple snap points |
| `always` | A fast scroll/swipe **must stop** at every single snap point |

> **Rule of thumb**: Use `always` for step-by-step onboarding or slideshows (every slide matters). Use `normal` for browsable galleries where fast skipping is fine.
