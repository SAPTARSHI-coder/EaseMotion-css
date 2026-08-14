# Accordion Mixin - EaseMotion CSS

This is a reusable SCSS mixin for Accordion animations, submitted for the React/SCSS track.

## Features
- **Smooth Animations**: Uses `transition` on `max-height` and `opacity` to create a smooth expand/collapse effect.
- **Configurable**: Configurable duration, timing function, delay, and max-height.
- **Accessible**: Provides native focus states and ARIA attribute examples.
- **Responsive**: Fully responsive and adaptable to different UI structures.
- **Reduced Motion Support**: Automatically disables animations if the user has `prefers-reduced-motion` enabled.

## Installation & Usage

1. Copy the `ease-accordion` mixin from `App.scss` into your project's SCSS files.
2. Apply the mixin to the content container of your accordion.

```scss
@mixin ease-accordion(
  $duration: 0.35s,
  $timing: ease,
  $max-height: 500px,
  $delay: 0s
) {
  overflow: hidden;
  transition: max-height $duration $timing $delay, opacity $duration $timing $delay, padding $duration $timing $delay, margin $duration $timing $delay;
  max-height: 0;
  opacity: 0;
  
  &.is-open {
    max-height: $max-height;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
}
```

## Example (React)

```jsx
<div className={`accordion-content ${isOpen ? 'is-open' : ''}`}>
  <p>Accordion content goes here...</p>
</div>
```

## Browser Compatibility
Tested on Chrome, Firefox, Safari, and Edge.

## Accessibility
Ensure your implementation uses appropriate ARIA attributes:
- `aria-expanded` on the trigger button.
- `aria-hidden` on the content container.
- Keyboard navigable using standard button elements.
