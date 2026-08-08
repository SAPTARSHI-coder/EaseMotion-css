
# Card Flip (3D)

## What does this do?

A CSS-only card that rotates 180° on the Y-axis to reveal its back face using a genuine 3D transform.

## How is it used?

Add the required classes to the card structure:

```html
<label class="flip-card">
  <input type="checkbox" class="flip-card-toggle">

  <div class="flip-card-inner">
    <div class="flip-card-front">Front</div>
    <div class="flip-card-back">Back content</div>
  </div>
</label>
````

The card flips on hover for desktop devices and on tap for touch devices using the CSS checkbox hack.

## Why is it useful?

Flip cards are useful for product showcases, team profiles, and reveal-more interactions. This demonstrates EaseMotion's animation-first, CSS-only philosophy using `perspective`, `rotateY()`, and `backface-visibility`.
