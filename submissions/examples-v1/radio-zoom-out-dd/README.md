# Radio Zoom Out Animation

Adds a smooth, visually appealing zoom-out animation for radio components when they are selected or receive focus.

## Usage

Include the CSS and apply the `ease-zoom-out` class to your radio input elements. Make sure to reset the browser default appearance (this is handled by `appearance: none` in the CSS class).

```html
<label class="radio-container">
  <input type="radio" name="options" class="ease-zoom-out" value="option1">
  Option 1
</label>
```

## Why is it useful?

This provides a modern, engaging user experience for standard form controls without relying on heavy JavaScript libraries. It utilizes efficient CSS transforms (scale, opacity) for smooth, GPU-accelerated animations. It enhances accessibility by clearly indicating focus and selection states, while respecting system preferences for reduced motion.

## Accessibility Considerations

- Supports `@media (prefers-reduced-motion: reduce)` to disable animations for users with vestibular disorders.
- Uses `:focus-visible` to clearly indicate keyboard focus without disrupting mouse users.
- Relies on standard semantic HTML `<input type="radio">` nested within a `<label>` for full screen reader support.

## Customization Options

You can customize the colors and sizing by modifying the CSS variables or direct values in the `.ease-zoom-out` class.
- Active color: Change the `border-color` on `:checked` and the `background-color` in `::before`.
- Sizing: Change `width` and `height` properties on the `.ease-zoom-out` base class.
- Animation timing: Modify the cubic-bezier timing function used in the `transition` properties.
