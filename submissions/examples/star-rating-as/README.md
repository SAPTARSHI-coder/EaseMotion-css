# Interactive Star Rating

### What does this do?

It is a five star rating control where hovering previews the rating by filling stars up to the pointer, and clicking sets it, using only CSS.

### How is it used?

```html
<div class="rating" role="radiogroup" aria-label="Rate this">
  <input type="radio" name="rate" id="r5" /><label for="r5" aria-label="5 stars">&#9733;</label>
  <input type="radio" name="rate" id="r4" /><label for="r4" aria-label="4 stars">&#9733;</label>
  <input type="radio" name="rate" id="r3" /><label for="r3" aria-label="3 stars">&#9733;</label>
  <input type="radio" name="rate" id="r2" /><label for="r2" aria-label="2 stars">&#9733;</label>
  <input type="radio" name="rate" id="r1" /><label for="r1" aria-label="1 star">&#9733;</label>
</div>
```

The stars are ordered from five down to one and laid out with `flex-direction: row-reverse`, so the sibling combinator can fill the hovered star and every star before it.

### Why is it useful?

Star ratings collect quick feedback on products and content. This builds the hover preview and the selected state from the sibling combinator and a transform, so it needs no JavaScript. Each star has an accessible label, the radios keep keyboard support with a focus ring, and the scale is disabled under `prefers-reduced-motion: reduce`.
