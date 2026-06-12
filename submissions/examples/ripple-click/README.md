# Ripple Click Effect

## 1. What does this do?
A click ripple effect that expands outward from the click point on a button, using vanilla JavaScript and CSS keyframes.

## 2. How is it used?
Add the `.ripple-btn` class to a `<button>`. The inline JS creates a `.ripple` element at the click coordinates, which is automatically removed after the animation.
```html
<button class="ripple-btn">Click Me</button>
```

## 3. Why is it useful?
Creates a tactile Material Design-style ripple with minimal code. The ripple starts exactly where the user clicks. Respects `prefers-reduced-motion` by hiding the ripple entirely.
