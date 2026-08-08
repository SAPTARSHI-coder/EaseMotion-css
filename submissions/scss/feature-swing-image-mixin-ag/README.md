# Swing Image Mixin

## Description
This SCSS mixin applies a "swing" exit animation to an image (or any element). When triggered, the element behaves as if it is swinging on a hinge at the top center, rotating back and forth on the Z-axis with decreasing amplitude before finally dropping its opacity to 0. This is an engaging "Exit Animation" suitable for dismissing items or moving them out of view.

## Usage
Import the mixin into your SCSS files and apply it to a selector. 

```scss
@import 'path/to/submissions/scss/feature-swing-image-mixin-ag/_swing-image.scss';

.my-image {
  // Apply base styling
  width: 300px;
  height: 200px;
  object-fit: cover;
  
  // Include the mixin
  @include ease-swing-image-mixin-ag(0.8s);
}
```

The mixin relies on a state class to trigger the animation. When you want the image to exit (e.g., via JavaScript after a delete action), add the `.ease-is-exiting-ag` class to the element.

```javascript
const imageEl = document.querySelector('.my-image');
// Trigger the exit animation
imageEl.classList.add('ease-is-exiting-ag');

// Optionally remove the element from the DOM after the animation completes
imageEl.addEventListener('animationend', () => {
  imageEl.remove();
});
```

You can customize the duration and timing function:

```scss
.my-custom-image {
  @include ease-swing-image-mixin-ag(1.2s, ease-in);
}
```

## Accessibility Considerations
- **Reduced Motion:** The mixin includes a `prefers-reduced-motion: reduce` media query. If the user prefers reduced motion, the swinging transform animation is entirely disabled. Instead, the mixin gracefully falls back to a standard opacity fade-out (`transition: opacity`) so the user still understands the element is exiting/disappearing without experiencing the motion.
