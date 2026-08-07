# Flip Skeleton Mixin (SCSS)

## Description
A reusable SCSS mixin for a "Flip" Loading Skeleton. Instead of a typical opacity pulse, this skeleton performs a continuous 3D flip (`rotateY`), making it perfect for small, distinct loading indicators like avatars or badges.

## Files
- `_flip-skeleton.scss`: Contains the `@mixin ease-flip-skeleton-mixin-ag`.

## Usage
```scss
@use 'flip-skeleton' as *;

.my-avatar-skeleton-ag {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  
  /* Apply the mixin */
  @include ease-flip-skeleton-mixin-ag(2.5s);
}
```
```html
<div class="my-avatar-skeleton-ag is-loading-ag" aria-busy="true" aria-label="Loading avatar"></div>
```

## Accessibility
- Uses `aria-busy` to communicate the loading state to assistive technology.
- **Reduced Motion**: Completely disables the 3D flipping animation, replacing it with a standard, accessible opacity pulse (`reduced-skeleton-pulse-ag`) to prevent vestibular discomfort.
