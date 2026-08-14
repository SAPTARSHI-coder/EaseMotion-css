# Dark Mode Star Rating (Responsive Breakpoints Layout)

This guide documents how to create a fluid, responsive layout for the Dark Mode Star Rating component. Using media queries, we dynamically adjust the size and spacing of the stars to ensure an optimal touch target size on mobile and a prominent display on desktop.

## Responsive Configuration via CSS Variables

The most maintainable approach to responsive design in EaseMotion is updating CSS Custom Properties at different breakpoints, rather than redeclaring complex styling rules.

### CSS Implementation

```css
:root {
    /* Base Variables (Mobile First - ensures safe touch target) */
    --star-size: 2rem;
    --star-gap: 0.25rem;
}

/* 
 * RESPONSIVE BREAKPOINTS MODIFIER
 */
.star-rating--responsive {
    
    /* Tablet Breakpoint */
    @media (min-width: 768px) {
        --star-size: 3rem;
        --star-gap: 0.5rem;
    }

    /* Desktop Breakpoint */
    @media (min-width: 1024px) {
        --star-size: 4rem;
        --star-gap: 0.75rem;
    }
}
```

## HTML Markup Example

Apply the `.star-rating--responsive` class to the main `<fieldset>` container. Note the use of `<fieldset>` and radio inputs, which is the standard accessible pattern for star ratings.

```html
<form action="#" class="rating-form">
    <!-- Applied responsive modifier class -->
    <fieldset class="star-rating star-rating--responsive">
        <legend class="sr-only">Rate this product from 1 to 5 stars</legend>
        
        <!-- Note: We use flex-direction: row-reverse in CSS, so the DOM order is 5 to 1 -->
        <div class="star-rating__group">
            <input type="radio" id="star5" name="rating" value="5" class="sr-only">
            <label for="star5" aria-label="5 stars" class="star-label"></label>
            
            <input type="radio" id="star4" name="rating" value="4" class="sr-only">
            <label for="star4" aria-label="4 stars" class="star-label"></label>
            
            <!-- ... Stars 3, 2, 1 ... -->
        </div>
    </fieldset>
</form>
```

## Accessibility & Keyboard Navigation

The star rating must be fully accessible via keyboard.

### Keyboard Interaction
Because the underlying markup uses native `<input type="radio">` elements:
- Users can navigate to the rating component using `Tab`.
- Once focused, users can cycle through the star ratings using the `Arrow Left` and `Arrow Right` keys.
- `Space` or `Enter` is not strictly necessary for selection as native radio groups update their checked state on arrow navigation, but ensure your form submission logic handles this correctly.

### Focus States
When a user tabs to a radio input, its associated `<label>` must show a clear focus state:
```css
.star-rating__group input:focus-visible + .star-label {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
