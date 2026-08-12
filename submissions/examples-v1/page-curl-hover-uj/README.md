# Page Curl Corner Hover

## What does this do?

It creates a paper curl effect on hover, simulating a folded corner lifting off the page using pseudo-elements and diagonal gradients.

## How is it used?

Apply the `card-page-curl-uj` class to your card, sticker note, or block element:

```html
<div class="card-page-curl-uj">
  <h3>Task Item</h3>
  <p>Description text goes here.</p>
</div>
```

Ensure the card has a background color and has absolute/relative bounds matching your page layout.

## Why is this useful?

This micro-interaction brings a lifelike, tactile physical layer to digital components like sticky notes, blog previews, and task cards. It runs entirely within GPU-accelerated CSS properties (`width` and `height` dimensions of the overlay flap) without requiring external JavaScript, and supports media queries for users who request reduced motion.
