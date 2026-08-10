# Tada Checkbox Example

## Description
This example provides a custom, accessible checkbox that performs a celebratory "tada" animation when it is checked. The animation scales and wiggles the checkbox, adding a micro-interaction that rewards the user for completing an action (like subscribing to a newsletter or finishing a to-do list item).

## Files
- `demo.html`: The HTML structure for the custom checkbox with an embedded SVG checkmark.
- `style.css`: The CSS styling and the `@keyframes` for the tada animation.

## Usage
Simply open `demo.html` in any modern web browser.

The setup relies on a visually hidden standard `<input type="checkbox">` connected to a `<label>`. 

```html
<label class="tada-checkbox-label-ag" for="subscribe-checkbox">
    <input type="checkbox" id="subscribe-checkbox" class="tada-checkbox-input-ag" aria-checked="false">
    <span class="tada-checkbox-box-ag" aria-hidden="true">
        <!-- SVG Checkmark -->
        ...
    </span>
    <span class="label-text-ag">Subscribe to Newsletter</span>
</label>
```

When the hidden input's state becomes `:checked`, CSS sibling selectors (`+`) trigger the animation on the custom box.

## Accessibility Considerations
- **Visually Hidden Input**: The native checkbox is hidden visually but remains accessible to assistive technologies and keyboard focus via CSS clipping.
- **Keyboard Navigation**: Native focus states are preserved and styled using `:focus-visible` with an `outline` to ensure clear keyboard navigation.
- **ARIA Attributes**: `aria-checked` is synchronized with the input's state via JavaScript to properly announce state changes to screen readers.
- **Reduced Motion**: The "tada" animation is disabled for users who prefer reduced motion using a `@media (prefers-reduced-motion: reduce)` query. The checkmark simply appears without any movement, maintaining a comfortable user experience.
