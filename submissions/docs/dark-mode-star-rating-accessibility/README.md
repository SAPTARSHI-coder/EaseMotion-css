# Dark Mode Star Rating (Accessibility Setup Guide)

This guide documents the strict accessibility requirements necessary for implementing a purely CSS-driven Star Rating component. Since we rely on a CSS trick (`flex-direction: row-reverse` and the `~` sibling selector) to color the stars, the underlying markup must be perfectly semantic to compensate.

## Accessibility Requirements & Keyboard Navigation

### 1. Semantic Form Elements
A star rating is fundamentally a form input where a user selects one value from a set. The most accessible way to represent this is using a group of radio buttons.

- **Fieldset & Legend**: Wrap the radio group in a `<fieldset>` and provide a `<legend>`. If you don't want the legend visible, hide it using a visually hidden (`sr-only`) utility class. This ensures screen readers announce the purpose of the group when a user focuses on any of the radio inputs.
- **Labels**: Every radio `<input>` must have an associated `<label>`. Use `aria-label` on the label if the visual content is purely decorative (like our CSS clip-path stars).

### 2. Visually Hiding Inputs (The `sr-only` class)
**NEVER use `display: none` or `visibility: hidden` on the radio inputs.** 
Doing so removes them from the accessibility tree, making keyboard navigation impossible. Instead, use an `sr-only` class to clip them out of view while keeping them focusable.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

### 3. Focus States
Keyboard users navigating via the `Tab` key will focus on the hidden radio inputs. You must use the `:focus-visible` pseudo-class on the hidden input to apply a visible outline to its adjacent sibling `<label>`.

```css
.star-rating__group input:focus-visible + .star-label {
    outline: 3px solid #ffffff;
    outline-offset: 4px;
}
```

## HTML Markup Example

Here is the complete, accessible markup pattern:

```html
<form action="#" class="rating-form">
    <fieldset class="star-rating">
        <!-- The legend provides context for the radio group -->
        <legend class="sr-only">Rate this product from 1 to 5 stars</legend>
        
        <div class="star-rating__group">
            <!-- Inputs are visually hidden but remain in the tab order -->
            <input type="radio" id="star5" name="rating" value="5" class="sr-only">
            <!-- Labels provide the visible star shape and accessible name -->
            <label for="star5" aria-label="5 stars" class="star-label"></label>
            
            <input type="radio" id="star4" name="rating" value="4" class="sr-only">
            <label for="star4" aria-label="4 stars" class="star-label"></label>
            
            <!-- ... remaining stars ... -->
        </div>
    </fieldset>
</form>
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
