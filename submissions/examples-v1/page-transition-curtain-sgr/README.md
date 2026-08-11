# Page Transition Curtain Animation

## What is this?
A CSS-first page transition effect that sweeps a full-screen colored panel across the viewport when navigating between pages. It resembles a theatre curtain drawing closed and reopening to reveal new content, providing a smooth and professional navigation experience without relying on heavy JavaScript animation libraries.

## How does it work?
The component uses a fixed-position `div` overlay that sits above all page content with `z-index: 9999` and `pointer-events: none` by default. When navigation begins, a tiny JavaScript snippet adds the `is-leaving` class, triggering a `@keyframes` animation that scales the element (using `transform: scaleX(0)` to `scaleX(1)`) to cover the entire screen. Once the animation finishes, the new page content loads, and the JS replaces `is-leaving` with `is-entering`. This triggers the second half of the animation, shrinking the overlay back to `scaleX(0)` from the opposite side to reveal the new page. The entire visual behavior—color, easing, timing, and direction—is driven by CSS custom properties.

## Why is it useful?
Smooth page transitions eliminate the jarring "flash" of a traditional hard page reload, making single-page applications (SPAs) or enhanced multi-page applications feel significantly more premium and cohesive. By keeping the logic minimal and offloading the heavy lifting to CSS transforms and opacities, the transition remains highly performant (running on the GPU) and easily customizable. The inclusion of `prefers-reduced-motion` fallbacks ensures accessibility for all users.
