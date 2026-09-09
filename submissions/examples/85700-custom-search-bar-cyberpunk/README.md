# Custom Search Bar Input — Cyberpunk

CSS-only cyberpunk search input with EaseMotion-friendly variables and responsive behavior.

## Requirements

The component has no JavaScript dependency, uses native search semantics, and supports reduced motion.

## Markup

```html
<label class="cyber-search"><span>Search</span><input type="search" placeholder="Find a component"></label>
```

## Customization

Override accent, surface, border, glow, and radius variables on the component.

## Accessibility

Keep the visible label and native search input.

Provide a clear focus indicator and sufficient contrast.

## Responsive

Use fluid width and stack surrounding controls on narrow screens.

## Motion

Use transitions only for decoration and disable them under `prefers-reduced-motion`.

## Testing

Check keyboard input, focus, zoom, mobile widths, contrast, and reduced motion.

## Files

`README.md` documents the example.

`demo.html` is the standalone demo.

`style.css` contains the pure CSS implementation.
