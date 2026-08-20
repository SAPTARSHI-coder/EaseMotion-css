# Accessible Star Rating Component

This submission demonstrates how to implement a fully accessible Star Rating widget that complies with WCAG 2.1 AA standards. Custom rating widgets built entirely out of `<div>` and `<svg>` elements are famously inaccessible. By building the component on top of native HTML radio buttons, we gain robust keyboard navigation and screen reader support for free.

## Core Accessibility Features

### 1. Semantic Foundation: Radio Buttons

A 5-star rating system is functionally identical to a group of 5 mutually exclusive radio buttons. 

```html
<input type="radio" id="star3" name="rating" value="3" class="sr-only rating-input">
<label for="star3" class="star-label" aria-label="3 stars">
    <svg class="star-icon">...</svg>
</label>
```

- We visually hide the `<input type="radio">` using an `.sr-only` class.
- The `<label>` acts as the clickable hit area for the mouse/touch.
- Screen readers will announce "3 stars, radio button, unchecked, 3 of 5".
- **Keyboard Navigation is automatic:** Users can tab into the widget and use the `ArrowLeft` and `ArrowRight` keys to change their rating, exactly as they expect.

### 2. Grouping with Fieldset & Legend

Because a rating system is a collection of related inputs, WCAG requires them to be grouped semantically using a `<fieldset>`. The `<legend>` acts as the accessible name for the entire group.

```html
<fieldset class="rating-group">
    <legend>Rate your experience</legend>
    <!-- Radio buttons here -->
</fieldset>
```
When a user focuses the first star, the screen reader announces: "Rate your experience, group. 1 star, radio button..."

### 3. Routing Focus Visibility

When a keyboard user tabs into the widget, the browser places focus on the visually hidden `<input>`. Because the input is invisible, the focus ring is invisible. We must route the focus ring to the visible `<label>`.

```css
/* When the hidden input is focused, draw a ring around its adjacent label */
.rating-input:focus-visible + .star-label {
    outline: 3px solid var(--focus-ring);
    outline-offset: 2px;
}
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, colored SVGs are often overridden or stripped, making the "filled" vs "empty" state of the stars completely indistinguishable. We use the `forced-colors` media query to explicitly map the selected state to the system's `Highlight` color.

```css
@media (forced-colors: active) {
    .star-label {
        /* Empty star */
        color: CanvasText; 
    }
    
    .star-wrapper.is-active .star-label {
        /* Filled star */
        color: Highlight; 
    }
}
```
