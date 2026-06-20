# .ease-card-glow Reduced Motion Fix

This submission fixes a bug where `.ease-card-glow` under `prefers-reduced-motion: reduce` sets `transition: none !important` but the hover box-shadow still fires instantly, causing a sudden flash (Issue **#14081**).

## The Bug

Under reduced motion, the card sets `transition: none` but the hover rule `.ease-card-glow:hover { box-shadow: ... }` still applies — creating a 0ms snap from no-glow to full-glow, which is worse for motion-sensitive users than a gradual transition.

## The Fix

```css
@media (prefers-reduced-motion: reduce) {
  .ease-card-glow:hover,
  .ease-card-glow:focus-visible {
    box-shadow: none;
  }
}
```

This completely removes the glow effect on hover when reduced motion is preferred, avoiding any sudden visual change.

## Features

- Side-by-side comparison: broken (`transition: none`) vs fixed (`box-shadow: none` on hover)
- Live reduced motion simulation toggle (no OS setting change needed)
- Syntax-highlighted code block showing both fix options
- Fully accessible with keyboard navigation
- Respects native `prefers-reduced-motion` automatically

## Files

- `demo.html` — Side-by-side card comparison, fix explanation, live simulation toggle
- `style.css` — Card styles, glow effects, reduced-motion overrides, code syntax highlighting
- `README.md` — This documentation
