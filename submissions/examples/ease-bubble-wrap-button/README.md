# Ease Bubble Wrap Button

## 1. What does this do?
A button that triggers an outward "pop" explosion of bubble-wrap particles when clicked or focused.

## 2. How is it used?
It utilizes `radial-gradient` patterns on the `::before` and `::after` pseudo-elements. When the button is clicked and enters the `:focus` state, the `@keyframes` rapidly alter the `background-position` and `background-size` of the gradients, scattering the circles in different directions before fading to `opacity: 0`.

## 3. Why is it useful?
Normally, a particle burst requires heavy JavaScript to append/remove dozens of `<div>` nodes to the DOM. This purely CSS-based approach prevents layout thrashing, keeps the DOM clean, and offloads the animation physics entirely to the graphics processor.
