# Neumorphic Buttons

### What does this do?

It shows soft UI buttons that look raised from the surface using paired light and dark shadows, and press inward with inset shadows when clicked.

### How is it used?

```html
<button class="neu-btn" type="button">Save</button>
<button class="neu-btn is-accent" type="button">Continue</button>
```

The buttons and the page share the same background color, which is what gives the extruded look. Add `is-accent` to tint a button, or `neu-icon` for a round icon button.

### Why is it useful?

The soft neumorphic style suits calm dashboards and settings panels. This builds the raised and pressed states from paired box shadows and switches them on `:active`, so it needs no JavaScript. The buttons show a focus ring, and the shadow transition is kept minimal under `prefers-reduced-motion: reduce`.
