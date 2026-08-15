# Responsive Multi-Select Dropdown — Pastel

CSS-first responsive multi-select presentation using native checkbox controls.

## Markup

Use a labeled fieldset and real checkbox inputs so selections remain keyboard accessible.

```html
<fieldset class="multi-select"><legend>Choose categories</legend><label><input type="checkbox"> Design</label><label><input type="checkbox"> Development</label></fieldset>
```

## Design Tokens

Expose surface, accent, text, border, radius, and shadow through custom properties.

## Accessibility

Use `fieldset` and `legend` for grouped choices.

Keep each checkbox label associated with its input and preserve visible focus.

## Responsive

Allow options to wrap or stack on small screens.

## Motion

Decorative transitions must respect `prefers-reduced-motion`.

## Testing

Check keyboard selection, focus, zoom, narrow layouts, contrast, and reduced motion.

## Files

`README.md` documents the component.

`demo.html` is the standalone demo.

`style.css` contains the pure CSS styling.
