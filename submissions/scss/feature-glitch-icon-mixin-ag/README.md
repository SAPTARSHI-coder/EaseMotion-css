# Glitch Icon Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Glitch" hover effect to an icon (usually text or a font-icon). It uses pseudo-elements (`::before` and `::after`) combined with `clip-path` and `transform: translate` to create a cyberpunk-style RGB split and tearing effect on hover.

## Files
- `_glitch-icon.scss`: Contains the `@mixin ease-glitch-icon-mixin-ag` and the complex keyframes for the glitch layers.

## Usage
```scss
@use 'glitch-icon' as *;

.my-icon-ag {
  @include ease-glitch-icon-mixin-ag(0.4s);
  font-size: 2rem;
  font-weight: bold;
}
```
```html
<!-- Important: Provide the data-icon attribute with the exact same text/character so the pseudo-elements can replicate it -->
<span class="my-icon-ag" data-icon="★">★</span>
```

## Accessibility
- Hooks into `:focus-visible` to support keyboard navigation.
- **Reduced Motion**: Disables the glitch animations (`clip-path` and `skew` shifts). It safely falls back to a simple text color change on hover/focus to prevent issues for users with vestibular disorders.
