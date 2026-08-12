# Zoom Toast Mixin (SCSS)

## Description
An SCSS mixin for generating a "Zoom" entrance and exit animation for toast notifications. The toast scales up from a small size with a slight bounce (using a cubic-bezier easing), and scales down when exiting.

## Files
- `_zoom-toast.scss`: Contains the `@mixin ease-zoom-toast-mixin-ag`, which sets up the zoom-in keyframes, and a zoom-out keyframe for elements with the `.is-hiding-ag` class.

## Usage
```scss
@use 'zoom-toast' as *;

.my-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  
  // Apply the mixin
  @include ease-zoom-toast-mixin-ag(0.4s);
}
```

## Accessibility
- **Reduced Motion**: Disables the scale transformations. The enter animation is completely removed, and the exit animation is replaced with a simple opacity fade.
