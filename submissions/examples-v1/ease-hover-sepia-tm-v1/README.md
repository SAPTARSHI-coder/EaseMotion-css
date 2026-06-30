# ease-hover-sepia

**What does this do?**
Applies a warm, vintage sepia tone to elements on hover using CSS `filter: sepia()`. The transition is smooth and gives images a nostalgic, film-photography look.

**How is it used?**

```html
<div class="photo-card sepia-photo">
  <img src="photo.jpg" alt="Vintage photo" />
</div>
```

```css
/* Full sepia on hover */
.sepia-photo:hover {
  filter: sepia(1);
  transition: filter 0.4s ease;
}

/* Partial sepia (50%) */
.sepia-photo:hover {
  filter: sepia(0.5);
  transition: filter 0.4s ease;
}
```

**Why is it useful?**
Sepia filters are a popular design trend for creating vintage aesthetics in photo galleries, blog post images, and storytelling UI. This is a pure CSS solution that works without JavaScript or external libraries.

**Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). Uses the CSS `filter` property.
