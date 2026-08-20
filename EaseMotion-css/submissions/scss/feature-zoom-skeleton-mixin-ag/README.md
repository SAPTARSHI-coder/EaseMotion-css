# Zoom Skeleton Mixin (SCSS)

## Description
A reusable SCSS mixin for a Skeleton loader component that features a "Zoom" Interactive State. While the skeleton shimmers indicating a loading state, hovering over it causes it to slightly scale up (zoom), providing tactile feedback that the area is interactive or soon-to-be interactive.

## Files
- `_zoom-skeleton.scss`: Contains the `@mixin ease-zoom-skeleton-mixin-ag`.

## Usage
```scss
@use 'zoom-skeleton' as *;

.my-card-skeleton-ag {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  
  /* Apply the zoom interactive skeleton */
  @include ease-zoom-skeleton-mixin-ag(1.02, 0.3s);
}
```
```html
<div class="my-card-skeleton-ag" aria-busy="true" aria-label="Loading card"></div>
```

## Accessibility
- Assumes the developer pairs this with `aria-busy="true"`.
- **Reduced Motion**: Disables both the continuous shimmer animation and the hover scaling effect. The skeleton becomes a static placeholder block to respect user preferences against unnecessary motion.
