# Dark Mode Star Rating (Theming Configuration Guide)

This guide explains how to customize the colors of the purely CSS-driven Dark Mode Star Rating. By utilizing CSS Custom Properties, we can effortlessly create new themes without duplicating complex hover/active logic.

## Theming Configuration via CSS Variables

The aesthetic of the star rating is driven by three core color variables (for the inactive, hovered, and active states) and one accessibility variable (for the keyboard focus ring).

### Required Variables
- `--star-color-inactive`: The base color of unselected stars.
- `--star-color-hover`: The color when the user hovers over the stars.
- `--star-color-active`: The color of the currently selected rating.
- `--focus-ring-color`: The color used for the `:focus-visible` outline to support keyboard navigation.

### CSS Implementation (Neon Purple Theme Example)

To create a new theme, define a modifier class that overrides these root variables:

```css
/* Base variables define the default Gold Theme */
:root {
    --star-color-inactive: #333333;
    --star-color-hover: #ffb400;
    --star-color-active: #ff9900;
    --focus-ring-color: #ffffff;
}

/* Neon Purple Theme Modifier */
.star-rating--neon-purple {
    --star-color-inactive: #2a1b38;
    --star-color-hover: #b05cff;
    --star-color-active: #8a2be2;
    --focus-ring-color: #d4a5ff;
}
```

## HTML Markup Example

To apply your custom theme, simply append the modifier class to the `<fieldset>` container. Note that you must still follow the strict accessibility markup rules for this component.

```html
<form action="#" class="rating-form">
    <!-- Applied the Neon Purple theme modifier -->
    <fieldset class="star-rating star-rating--neon-purple">
        <legend class="sr-only">Rate this product (Neon Purple)</legend>
        
        <div class="star-rating__group">
            <input type="radio" id="purple-5" name="rating-purple" value="5" class="sr-only">
            <label for="purple-5" aria-label="5 stars" class="star-label"></label>
            
            <input type="radio" id="purple-4" name="rating-purple" value="4" class="sr-only">
            <label for="purple-4" aria-label="4 stars" class="star-label"></label>
            
            <!-- ... remaining stars ... -->
        </div>
    </fieldset>
</form>
```

## Accessibility Requirements for Theming

When creating new themes, ensure you do not break the fundamental accessibility requirements:

1. **Contrast Ratio**: The `--star-color-active` and `--star-color-hover` must have sufficient contrast against the dark background (`#121212` by default) to be clearly visible to visually impaired users.
2. **Focus Visibility**: The `--focus-ring-color` must contrast sharply against the dark background. When the hidden radio input receives focus, the sibling `<label>` uses this variable to draw a highly visible outline:
   ```css
   .star-rating__group input:focus-visible + .star-label {
       outline: 3px solid var(--focus-ring-color);
       outline-offset: 4px;
   }
   ```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
