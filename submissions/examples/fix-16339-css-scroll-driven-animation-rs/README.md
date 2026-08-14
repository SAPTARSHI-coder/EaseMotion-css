# CSS Scroll-Driven Animations

This submission introduces utility classes for **CSS Scroll-Driven Animations**, allowing elements to animate purely based on the user's scroll position without any JavaScript.

## Bug / Feature Description
Traditionally, scroll-linked animations required heavy JavaScript libraries (like GSAP ScrollTrigger) or complex `IntersectionObserver` setups. The native CSS Scroll-Driven Animations API solves this by linking CSS animations directly to scroll progress or element visibility within the viewport.

## Fix / Implementation Details
- Added `ease-animate-scroll-progress` for creating reading progress bars tied to `scroll(root)`.
- Added `ease-animate-scroll-reveal` for sliding and fading in elements as they enter the viewport using `animation-timeline: view()`.
- Added `ease-animate-scroll-scale` for scaling up elements dynamically as they come into view.
- Defined custom `@keyframes` for the smooth transitions.

## How to Test
1. Open `demo.html` in a supported modern browser (Chrome 115+, Edge 115+).
2. Look at the top edge of the window to see a progress bar that grows as you scroll.
3. Scroll down the page and observe the cards sliding and scaling into view smoothly.
