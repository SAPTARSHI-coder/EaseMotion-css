# Dynamic Search Bar Input — Claymorphism

This example implements a CSS-only claymorphism search input with smooth state transitions.

## Features

- Pure CSS presentation.
- EaseMotion-friendly custom properties.
- Responsive sizing.
- Focus and hover states.
- Reduced-motion support.
- No JavaScript dependency.

## Markup

Use a real `<label>` and native `<input type="search">`.

```html
<label class="search-field">
  <span>Search</span>
  <input type="search" placeholder="Search components">
</label>
```

## Customization

Override surface, accent, radius, shadow, and spacing variables on `.search-field`.

## Accessibility

Keep the label available to assistive technology.

Do not rely on placeholder text as the only label.

Maintain a visible focus state.

## Responsive Behavior

Use fluid width with a sensible maximum size.

## Motion

Transitions are decorative and must respect `prefers-reduced-motion`.

## Testing

Test keyboard input, focus visibility, zoom, mobile widths, and reduced motion.

## Files

`README.md` explains the component.

`demo.html` is the complete example.

`style.css` contains the CSS-only implementation.
