# Pure CSS Animated Toggle Switch Component

## What does this do?
A pure CSS animated toggle switch built using the standard
`<input type="checkbox">` element, hidden visually and styled using
adjacent sibling selectors to create a smooth, animated toggle pill.

## How is it used?

```html
<label class="ease-toggle-wrapper">
  <input type="checkbox" class="ease-toggle-input" />
  <span class="ease-toggle-slider ease-bg-primary"></span>
  Enable Feature
</label>
```

## Why is it useful?
- **Zero JavaScript:** Fully functional using pure CSS `:checked` state.
- **Accessible:** Relies on native form elements, so screen readers and
  keyboard navigation (Tab/Space) work out of the box.
- **Roadmap Alignment:** Fulfills the v1.1 goal for toggle form components.
- **Animation First:** Smooth transitions for the toggle thumb and
  background color, with full `prefers-reduced-motion` support.