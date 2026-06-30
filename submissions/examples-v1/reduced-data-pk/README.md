# EaseMotion — `prefers-reduced-data` Support

Respect users' bandwidth preferences by disabling decorative animations and heavy visual effects on slow or metered connections.

## The Problem

Users on slow or metered connections may want to disable decorative animations and gradients to save bandwidth and improve perceived performance. EaseMotion currently only respects `prefers-reduced-motion` (for accessibility), not `prefers-reduced-data`.

## The Solution

Add a `@media (prefers-reduced-data: reduce)` block alongside the existing reduced-motion section in `easemotion.css`.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison with toggle, info cards, proposed implementation |
| `style.css` | Demo layout, animation simulation, reduced-data toggle styles |

## What Gets Disabled

| Feature | Status |
|---------|--------|
| Decorative `@keyframes` (shimmer, ripple, pulse) | ❌ Disabled |
| Heavy gradients and box-shadows | ❌ Stripped |
| Non-essential background images | ❌ Removed |
| Content animations (fade-in, slide-up) | ✅ Kept |
| Core layout and interaction | ✅ Unchanged |

## Proposed CSS

Add to `easemotion.css`:

```css
@media (prefers-reduced-motion: reduce),
       (prefers-reduced-data: reduce) {
  :root {
    --ease-speed-fast: 0.01ms;
    --ease-speed-medium: 0.01ms;
    --ease-speed-slow: 0.01ms;
    --ease-animation-iterations: 1;
  }
}

@media (prefers-reduced-data: reduce) {
  .ease-shimmer,
  .ease-ripple,
  .ease-pulse,
  .ease-gradient-bg {
    animation: none !important;
    background-image: none !important;
  }
}
```

## Opt-In Override

Add `.ease-no-preference-data` to elements that should animate despite the data preference:

```css
@media (prefers-reduced-data: reduce) {
  .ease-no-preference-data .ease-shimmer {
    animation: ease-shimmer 2s ease infinite !important;
  }
}
```

## Browser Support

`prefers-reduced-data` is an experimental media query. Check [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data) for current support.
