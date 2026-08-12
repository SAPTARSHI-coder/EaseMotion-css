# CSS Slot Machine Reels (`ease-slot-machine`)

## 1. What does this do?
A fully functional, staggered slot machine spin animation driven purely by CSS without any JavaScript dependencies.

## 2. How is it used?
The component utilizes the CSS Checkbox Hack (`:checked` pseudo-class combined with the general sibling combinator `~`) to toggle the spinning state. When triggered by clicking the `<label>` spin button, CSS `@keyframes` translate vertical symbol strips upward using `translateY()`. Custom `cubic-bezier(0.1, 0.7, 0.1, 1.1)` easing functions simulate realistic mechanical momentum, spin velocity, and a tactile snap as each reel locks into position. Motion blur effects are dynamically applied during rapid movement and resolved upon settling.

## 3. Why is it useful?
Executing high-frequency visual updates such as spinning slot reels using JavaScript (`setInterval` or `requestAnimationFrame`) can cause main-thread congestion and layout thrashing. Handling the spin mechanics entirely with pure CSS offloads rendering and transformations directly to the GPU for butter-smooth 60fps performance. Furthermore, staggered animation durations across reels (`2s`, `3s`, and `4s`) create organic suspense and mechanical authenticity while preserving zero-JS simplicity and full accessibility compliance (`prefers-reduced-motion`).
