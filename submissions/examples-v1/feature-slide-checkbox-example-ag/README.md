# Slide Checkbox Example

## Description
This example demonstrates a custom sliding checkbox (often called a toggle switch) built using standard HTML and CSS. The animation smoothly translates the thumb element from left to right when the state changes from unchecked to checked, accompanied by a smooth background color transition.

## Files
- `demo.html`: The HTML structure for the custom checkbox.
- `style.css`: The styling and animation logic.

## Usage
Simply open `demo.html` in any modern web browser to view and interact with the slide checkbox.

The implementation uses a visually hidden standard `<input type="checkbox">` to maintain native semantics and behavior, wrapped in a `<label>` to make the text clickable.

```html
<label class="slide-checkbox-label-ag" for="notifications-toggle">
    <span class="label-text-ag">Enable Notifications</span>
    <input type="checkbox" id="notifications-toggle" class="slide-checkbox-input-ag" aria-checked="false">
    <span class="slide-checkbox-track-ag" aria-hidden="true">
        <span class="slide-checkbox-thumb-ag"></span>
    </span>
</label>
```

## Accessibility Considerations
- **Visually Hidden Input**: The actual checkbox input is not set to `display: none`, but visually hidden using CSS clipping. This ensures it remains accessible to screen readers and keyboard navigation.
- **Focus Indicators**: When focused via keyboard, the custom track receives a clear `outline` so users know where their focus is.
- **ARIA Attributes**: Uses `aria-checked` updated via JavaScript in `demo.html` to clearly announce the state change to assistive technologies. The visual track is hidden from screen readers using `aria-hidden="true"` as it is purely decorative.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by immediately toggling states without the sliding or fading transitions.
