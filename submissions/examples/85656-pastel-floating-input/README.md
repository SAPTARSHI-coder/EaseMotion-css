# Interactive Floating Input Field — Pastel

CSS-only floating-label input with responsive layout and smooth state transitions.

## Markup

Use a real label containing the input so the accessible name remains available.

```html
<label class="floating-field"><span>Email address</span><input type="email" placeholder=" "></label>
```

The placeholder contains one space only so `:placeholder-shown` can drive the visual state without JavaScript.

## Customization

Expose surface, accent, text, border, radius, and transition values through custom properties.

## Accessibility

Never remove the input's accessible label.

Keep a visible focus state and sufficient contrast.

## Responsive Behavior

Use fluid width and allow the field to shrink with its parent.

## Reduced Motion

Disable decorative transitions under `prefers-reduced-motion`.

## Testing

Test typing, keyboard focus, browser zoom, validation, mobile widths, and reduced motion.

## Files

`README.md` contains the usage guide.

`demo.html` contains the standalone example.

`style.css` contains the CSS-only implementation.
