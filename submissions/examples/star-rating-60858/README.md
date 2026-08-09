# Star Rating Widget

A zero-JS, pure-CSS 5-star rating input using radio buttons, the `:checked ~` sibling combinator, and `flex-direction: row-reverse`.

## What it does
Provides a fully accessible, interactive star rating widget. Hovering over a star highlights it and all stars to its left, previewing the rating. Clicking commits the score. 

## How to use it
Include the CSS from `style.css` and use the following HTML markup:

```html
<div class="rating" role="radiogroup" aria-label="Star Rating">
  <input type="radio" id="star5" name="rating" value="5"><label for="star5" aria-label="5 stars">★</label>
  <input type="radio" id="star4" name="rating" value="4"><label for="star4" aria-label="4 stars">★</label>
  <input type="radio" id="star3" name="rating" value="3"><label for="star3" aria-label="3 stars">★</label>
  <input type="radio" id="star2" name="rating" value="2"><label for="star2" aria-label="2 stars">★</label>
  <input type="radio" id="star1" name="rating" value="1"><label for="star1" aria-label="1 star">★</label>
</div>
```

## Why it fits EaseMotion CSS
Star ratings are ubiquitous across the web. This implementation completely eliminates the need for JavaScript by leveraging modern CSS combinators and flexbox tricks. It provides an immediate, smooth, and interactive user experience (with scaling animations) that perfectly aligns with EaseMotion's "human-readable, composable, and animation-first" philosophy.
