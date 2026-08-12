# Zoom Banner Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Zoom" hover effect to a banner element. It expects the banner to contain an inner element (like an `<img>` or a `.bg` div) which will scale up slightly on hover.

## Files
- `_zoom-banner.scss`: Contains the `@mixin ease-zoom-banner-mixin-ag`.

## Usage
```scss
@use 'zoom-banner' as *;

.my-banner-ag {
  @include ease-zoom-banner-mixin-ag(0.4s);
  border-radius: 12px;
}
```
```html
<a href="#" class="my-banner-ag">
  <img src="banner.jpg" alt="Sale Banner" />
</a>
```

## Accessibility
- Hooks into `:focus-visible` to support keyboard navigation.
- **Reduced Motion**: Turns off the scaling transformation to prevent motion sickness. Replaces it with a subtle pseudo-element overlay opacity change on hover/focus to maintain interaction feedback.
