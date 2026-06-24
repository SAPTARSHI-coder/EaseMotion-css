# Fix: Static fallback values for CSS custom properties

**Fixes issue:** #5044

## Problem
EaseMotion uses CSS variables like `--ease-duration`, `--ease-delay`,
`--ease-timing` etc. without any static fallback. In browsers that do
not support CSS custom properties (var()), the declaration resolves
to nothing - animations and transitions break completely with no
fallback effect.

## Fix
Applied the "double declaration" pattern to each animated property:

```css
animation-duration: 0.3s;
animation-duration: var(--ease-duration, 0.3s);
```

- Browsers without var() support use the first (static) declaration.
- Browsers with var() support read the second declaration, which
  overrides the first due to normal CSS cascade order, and falls
  back to 0.3s if --ease-duration is undefined.

This gives full backward compatibility with zero behavior change
in modern browsers.

## Files
- `style.css` - the fix pattern applied to .ease-fade-in,
  .ease-hover-grow, and .ease-marquee-track
- `demo.html` - visual test

## Testing
1. Open demo.html in a modern browser - animations work as before
2. In DevTools, disable "CSS custom properties" support (or test in
   an older browser/polyfill-free environment)
3. Confirm animations/transitions still run using static fallback
   values instead of breaking

## Acceptance Criteria Met
- [x] Static fallback declared before every var() declaration
- [x] No change in behavior for modern browsers
- [x] Animations work even when CSS variables are unsupported

## Proposed integration
Apply this double-declaration pattern across all component files
in `components/` wherever `--ease-*` custom properties are used
in animation/transition properties.
