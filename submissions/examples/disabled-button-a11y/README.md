# Accessible Disabled Buttons (The Inclusive Pattern)

This submission demonstrates how to implement an accessible "Disabled Button" that complies with WCAG 2.1 AA standards. Properly managing disabled states is critical for ensuring users understand why they cannot proceed with an action.

## The Problem: `disabled` and `pointer-events: none`

Developers typically use two methods to disable a button, both of which have severe accessibility flaws:

1. **The native `disabled` attribute (`<button disabled>`)**: This completely removes the button from the keyboard tab order. A keyboard-only or screen reader user tabbing through a form will completely skip over the button, leading to confusion ("Where did the submit button go?").
2. **The CSS trap (`pointer-events: none`)**: Developers often use this to make a button "unclickable". However, this CSS property ONLY blocks mouse and touch interactions. A keyboard user can still focus the button and press `Enter`, successfully firing the `click` or `submit` event!

## The Solution: The Inclusive `aria-disabled` Pattern

To build a truly accessible disabled button, the button must remain focusable so users can discover it, but it must be programmatically prevented from taking action.

### 1. Semantic State

Do not use the native `disabled` attribute. Instead, use `aria-disabled="true"`. This keeps the button in the tab order, but explicitly tells screen readers that the button is currently inactive.

```html
<button type="submit" id="submit-btn" aria-disabled="true">
    Complete Purchase
</button>
```

### 2. Manual Event Blocking

Because the button is not natively disabled, you must intercept its actions in JavaScript. 

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isDisabled = submitBtn.getAttribute('aria-disabled') === 'true';

    if (isDisabled) {
        // Provide feedback explaining WHY it is disabled
        errorMsg.textContent = 'You must agree to the terms...';
    } else {
        // Proceed with action
    }
});
```

### 3. Visual Styling

Style the disabled state directly off the ARIA attribute. Do **not** rely on `pointer-events: none` as a crutch, as it creates a false sense of security that the button is truly disabled.

```css
.submit-btn[aria-disabled="true"] {
    background-color: var(--btn-disabled-bg);
    color: var(--btn-disabled-text);
    cursor: not-allowed;
}
```

### 4. High Contrast (Forced Colors) Support

Windows High Contrast Mode provides a specific system color keyword named `GrayText` that is explicitly designed for disabled text and borders. We map our `aria-disabled` state to this color to guarantee clarity.

```css
@media (forced-colors: active) {
    .submit-btn[aria-disabled="true"] {
        border-color: GrayText;
        color: GrayText;
    }
}
```
