# Animated CSS Hamburger Icons

A collection of 3 buttery-smooth, pure CSS animated hamburger menu icons (Hamburger to Cross, Arrow, and Minus).

### Usage
```html
<button class="ease-hamburger hamburger-cross" aria-label="Menu" aria-expanded="false">
    <span class="bar bar-top"></span>
    <span class="bar bar-mid"></span>
    <span class="bar bar-bot"></span>
</button>
```

When your user clicks the button, use a tiny snippet of JavaScript to toggle the `.active` class on the button element:
```javascript
button.classList.toggle('active');
```
The CSS will handle the rest of the complex animation natively.

### Why is it useful?
Animating the 3 horizontal bars of a mobile menu into an "X" (close state) smoothly is surprisingly complex math. Historically, developers relied on heavy SVG morphing libraries or complex JS plugins to handle the state transitions. 

This component achieves a flawless morph natively in the browser. By applying `.active` classes and utilizing CSS `transform: rotate() translate()` along with finely tuned EaseMotion cubic-bezier transitions on the `<span class="bar">` elements, we offload the entire animation sequence to the browser's hardware-accelerated GPU, resulting in perfect performance with negligible file size.
