# Dark Mode Star Rating (Quickstart Guide)

This guide explains how to implement a purely CSS-driven Star Rating component optimized for dark mode interfaces. By utilizing CSS `clip-path` and the flex-direction reverse trick, we can create an interactive rating system without a single line of JavaScript.

## HTML Markup Example

The Star Rating relies on a `<fieldset>` containing a group of radio buttons. This is the most accessible way to construct a rating form. 

Because we use `flex-direction: row-reverse` in the CSS to make the sibling selector (`~`) work, the DOM order of the inputs must go from highest (5) to lowest (1).

```html
<form action="#" class="rating-form">
    <fieldset class="star-rating">
        <legend class="sr-only">Rate this product from 1 to 5 stars</legend>
        
        <div class="star-rating__group">
            <!-- 5 Star -->
            <input type="radio" id="star5" name="rating" value="5" class="sr-only">
            <label for="star5" aria-label="5 stars" class="star-label"></label>
            
            <!-- 4 Star -->
            <input type="radio" id="star4" name="rating" value="4" class="sr-only">
            <label for="star4" aria-label="4 stars" class="star-label"></label>
            
            <!-- 3 Star -->
            <input type="radio" id="star3" name="rating" value="3" class="sr-only">
            <label for="star3" aria-label="3 stars" class="star-label"></label>
            
            <!-- 2 Star -->
            <input type="radio" id="star2" name="rating" value="2" class="sr-only">
            <label for="star2" aria-label="2 stars" class="star-label"></label>
            
            <!-- 1 Star -->
            <input type="radio" id="star1" name="rating" value="1" class="sr-only">
            <label for="star1" aria-label="1 star" class="star-label"></label>
        </div>
    </fieldset>
</form>
```

## CSS Architecture & Variables

The component uses a CSS `clip-path` polygon to draw the stars, which makes it incredibly easy to resize and recolor them.

### Variables

```css
:root {
    --star-size: 3rem;
    --star-gap: 0.5rem;
    
    --star-color-inactive: #333333;
    --star-color-hover: #ffb400;
    --star-color-active: #ff9900;
}
```

### The CSS Trick

To color all stars to the "left" of the hovered or checked star, we use `flex-direction: row-reverse` to flip the visual order of the elements. Then, we use the general sibling combinator `~` to target all siblings that come *after* the hovered element in the DOM (which appear *before* it visually).

```css
.star-rating__group {
    display: inline-flex;
    flex-direction: row-reverse;
}

/* Color hovered star and all stars visually before it */
.star-label:hover,
.star-label:hover ~ .star-label {
    background-color: var(--star-color-hover);
}

/* Color checked star and all stars visually before it */
.star-rating__group input:checked ~ .star-label {
    background-color: var(--star-color-active);
}
```

## Accessibility Setup

Because we are hiding the native radio inputs to show our custom `clip-path` stars, we must hide them carefully:

1. **Visually Hidden (`sr-only`)**: Never use `display: none`. Use a visually hidden class so the inputs remain focusable by the keyboard and readable by screen readers.
2. **Focus Rings**: Ensure that when the hidden input receives focus via the `Tab` key, its sibling `<label>` displays a clear outline.

```css
.star-rating__group input:focus-visible + .star-label {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
