# Scale Progress Bar

Resolves #42547.

### What does this do?
Adds a Scale Progress Bar component to EaseMotion CSS. It features a corporate, clean design with a progress fill that smoothly scales up from the left using a custom `scaleProgress` animation (based on the GPU-accelerated `transform: scaleX` instead of animating `width`).

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. Adjust the `width` percentage on the `.progress-fill` element to set the target progress.

### Why is it useful?
Provides a high-performance progress indicator suitable for dashboards, file uploads, and corporate data visualization tools, avoiding jank by using CSS transforms.
