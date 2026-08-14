# Animated Rating Stars (ease-rating-nishu)

## What does this do?
A purely CSS-driven 5-star rating component that uses radio buttons for accessibility and a smart `row-reverse` flex layout to trigger satisfying scale and fill animations on hover and selection.

## How is it used?
```html
<div class="ease-rating">
    <input type="radio" id="star5" name="rating" class="ease-rating-input">
    <label for="star5" class="ease-rating-label"><svg>...</svg></label>
    <!-- ... star4, star3, star2, star1 ... -->
</div>
```
The HTML is structured in reverse order (5 to 1) while rendered left-to-right using `flex-direction: row-reverse;`. This allows the CSS general sibling selector (`~`) to style all preceding stars when a specific star is hovered or checked. No JavaScript is needed.

## Why is it useful?
Star ratings are notorious for needing complex JavaScript event listeners to manage the "fill up to this star" logic. By utilizing a clever CSS layout trick combined with bouncy `cubic-bezier` transform animations on the SVGs, this component provides a highly tactile, app-like micro-interaction entirely through CSS.
