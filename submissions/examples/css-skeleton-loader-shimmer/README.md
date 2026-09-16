# CSS Skeleton Loader — Shimmer

A pure CSS skeleton loading placeholder with a shimmer sweep, used to show while real content is still loading. No JavaScript, no dependencies.

## How it works

Each skeleton block uses a linear gradient that's wider than the element itself (`background-size: 200% 100%`), with a slightly lighter band in the middle. Animating `background-position` from one side to the other makes that lighter band sweep across the block, reading as a shimmer of light rather than a flat pulsing color.

## Files

- `demo.html` – two example skeleton layouts: an article card and a profile row
- `style.css` – all styling, custom properties, and the shimmer keyframe
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-skeleton-duration` – 1.6s
- `--ease-skeleton-easing` – ease-in-out
- `--ease-skeleton-radius` – 8px
- `--ease-skeleton-base` – the base skeleton color
- `--ease-skeleton-shine` – the lighter sweep color
- `--ease-skeleton-card-bg` – surrounding card background
- `--ease-skeleton-border` – card border color
- `--ease-skeleton-gap` – spacing between skeleton cards

Example override:

```css
:root {
  --ease-skeleton-base: #e5e5e5;
  --ease-skeleton-shine: #f5f5f5;
}
```

## Notes

- Swap any `.ease-skeleton` block for real content once it loads — the class is meant to be temporary
- Fully responsive; thumbnail height shrinks slightly on mobile
- Respects `prefers-reduced-motion` — the shimmer animation is disabled and the skeleton shows as a flat, static color