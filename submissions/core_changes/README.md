# .ease-card-glow Reduced Motion Fix

Bug: `.ease-card-glow` under `prefers-reduced-motion: reduce` sets `transition: none` but the hover `box-shadow` still snaps instantly — a sudden flash worse than gradual transition.

## Fix

```css
@media (prefers-reduced-motion: reduce) {
  .ease-card-glow:hover,
  .ease-card-glow:focus-visible {
    box-shadow: none;
  }
}
```

Suppresses the glow property itself on hover rather than just removing the transition.

## Files

- `demo.html` — Side-by-side comparison (broken vs fixed), live simulation toggle, syntax-highlighted code
- `style.css` — Fix CSS for `.ease-card-glow`
- `README.md` — This documentation

Fixes #14081
