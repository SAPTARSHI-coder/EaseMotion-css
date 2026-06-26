# Scroll-Driven Image Reveal

1. **What does this do?** Six distinct scroll-driven reveal effects (fade, zoom, slide, blur, clip, flip) using the CSS `animation-timeline: view()` API with zero JavaScript.

2. **How is it used?** Add `animation: name linear; animation-timeline: view(); animation-range: entry 0% entry 100%;` to any element with a registered `@keyframes` animation.

3. **Why is it useful?** Eliminates IntersectionObserver and scroll event listeners. Declarative, GPU-accelerated, and perfectly synchronized with the browser's scroll machinery.
