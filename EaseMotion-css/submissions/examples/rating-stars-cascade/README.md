# Animated Rating Stars

An interactive star rating component with hover fill effects, selection states, and multiple size and color variants using pure CSS.

## What does this do?

This creates star rating components with hover effects that fill stars on hover using CSS sibling selectors (`~`) and radio input states for selection, with animated pop effects on hover.

## How is it used?

```html
<div class="rating-stars">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3" />
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" />
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1" />
  <label for="star1"></label>
</div>

<!-- Size variants -->
<div class="rating-stars rating-sm">...</div>
<div class="rating-stars rating-md">...</div>
<div class="rating-stars rating-lg">...</div>
<div class="rating-stars rating-xl">...</div>

<!-- Color variants -->
<div class="rating-stars rating-cyan">...</div>
<div class="rating-stars rating-green">...</div>
<div class="rating-stars rating-pink">...</div>
<div class="rating-stars rating-purple">...</div>

<!-- Read-only variant -->
<div class="rating-stars read-only">...</div>
```

The hover effect uses CSS sibling selectors:

```css
.rating-stars label:hover,
.rating-stars label:hover ~ label,
.rating-stars input:checked ~ label {
  color: #fbbf24;
}
```

## Why is it useful?

This demonstrates a pure CSS approach to interactive rating systems without JavaScript for basic functionality. The component uses CSS sibling selectors and radio input states to create hover fill effects and selection states, making it accessible and performant. Animated stars with hover effects provide better user experience and visual feedback for rating systems in e-commerce, review platforms, and feedback forms. The multiple size and color variants make it versatile for different design contexts while keeping the implementation lightweight and self-contained.
