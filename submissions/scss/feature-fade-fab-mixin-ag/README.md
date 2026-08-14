# Fade FAB Mixin

## Description
The `ease-fade-fab-mixin-ag` is an SCSS mixin designed for Floating Action Buttons (FABs) or similar floating UI elements. It provides a smooth exit animation that combines a fade-out with a slight scale down and downward translation, making the button feel like it is dropping away naturally when it is dismissed or hidden.

## Installation & Usage
Import the `_fade-fab.scss` file into your styles.

```scss
@import 'path/to/feature-fade-fab-mixin-ag/fade-fab';

.my-floating-button {
  /* Basic FAB styling */
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
  
  /* Include the mixin */
  @include ease-fade-fab-mixin-ag(0.3s, ease-in);
}
```

When you want to trigger the exit animation (e.g., via JavaScript before unmounting the component), add the `.exiting-ag` class to the element.

```javascript
const fab = document.querySelector('.my-floating-button');
fab.classList.add('exiting-ag');

// Remove the element after the animation completes
fab.addEventListener('animationend', () => {
  fab.remove();
});
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long the exit animation lasts. Default is `0.3s`.
- `$easing`: The timing function. Default is `ease-in` (best for exit animations).

## Accessibility Considerations
- **Pointer Events**: The mixin applies `pointer-events: none` while the element is animating out to prevent accidental double-clicks or interaction during the exit phase.
- **Reduced Motion**: Includes a `@media (prefers-reduced-motion: reduce)` media query. For users who prefer reduced motion, the downward translation and scale down are removed, leaving only a fast, simple opacity fade (`ease-fade-fab-fallback-ag`) to fulfill the exit requirement without triggering discomfort.
