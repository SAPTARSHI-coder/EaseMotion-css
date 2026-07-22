# Wiggle Effect for Invalid Form Input

## What does this example do?
This example demonstrates a classic "wiggle" (or shake) animation applied to a form input field when it is marked as invalid. 

## How is it used?
When your form validation logic determines an input is invalid, apply the `.ease-wiggle-invalid` utility class to the input element.

```html
<input type="email" class="invalid ease-wiggle-invalid" aria-invalid="true">
```

The CSS uses a fast, 0.4-second `@keyframes` animation to rapidly translate the input left and right (`translateX`), mimicking a shaking head to indicate "no" or "error".

## Why is it useful?
Form validation needs to be immediately obvious to the user. While red borders and error text are necessary for accessibility, a subtle wiggle animation draws the user's peripheral vision directly to the field requiring attention, significantly improving the user experience without being overly disruptive.

This implementation is:
- **Performant**: Only the `transform: translateX` property is animated, allowing browsers to utilize hardware acceleration without triggering expensive layout repaints.
- **Accessible**: 
  - A `prefers-reduced-motion: reduce` media query is included to disable the animation for users with vestibular disorders. 
  - Standard focus states are maintained for keyboard navigation.
  - ARIA attributes (`aria-invalid="true"`, `aria-describedby`) ensure screen readers correctly interpret the error state.
