# ease-skeleton-shimmer

Animated skeleton placeholders that display a moving gradient highlight while actual content is loading. Pure CSS/HTML — no JavaScript required.

## Why this is useful

Skeleton loaders improve perceived performance and give users a visual cue that content is on its way, instead of a blank screen or a spinner. This component provides reusable shimmer blocks for common UI patterns:

- **Text lines** — paragraph/heading placeholders
- **Profile row** — avatar + text combo (e.g. comment, user card)
- **Content card** — thumbnail image + text lines (e.g. feed/dashboard card)
- **Simple skeleton** — minimal `<div class="skeleton"><i></i>...</div>` structure matching common skeleton markup conventions

## How it works

Each skeleton element is a solid-colored block (`.skeleton` / `.skeleton-line` / etc.) with a `::after` pseudo-element containing a translucent gradient. The gradient is animated with `transform: translateX()` from `-100%` to `100%`, creating a left-to-right sweeping highlight over the base color.

```css
.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%);
  animation: shimmer-sweep 1.6s ease-in-out infinite;
}
```

## Usage

```html
<div class="skeleton-card">
  <div class="skeleton skeleton-line w-80"></div>
  <div class="skeleton skeleton-line w-100"></div>
  <div class="skeleton skeleton-line w-60"></div>
</div>
```

Width utility classes (`w-40` through `w-100`) let you vary line lengths for a more natural, non-uniform placeholder look.

## Accessibility

Respects `prefers-reduced-motion: reduce` — the shimmer animation is disabled for users who have that preference set.

## Browser support

Uses standard CSS `linear-gradient`, `transform`, and `@keyframes` — supported in all modern browsers.
