# Modern CSS Scroll-Driven Animation Utilities

This submission introduces utility classes for native CSS Scroll-Driven Animations, resolving Issue #58650.

## Features
- **Zero JavaScript:** Utilizes native `animation-timeline: scroll()` and `animation-timeline: view()` instead of heavy `window.onscroll` JavaScript event listeners.
- **Graceful Degradation:** Wrapped in `@supports` queries. Browsers that don't support the new spec (like older Firefox or Safari < 18) will simply display the elements statically without animation, maintaining usability and accessibility.
- **`.ease-scroll-progress-bar`**: A utility class to attach to a `<div>` for a reading progress bar at the top of the viewport.
- **`.ease-scroll-reveal`**: A utility class to make elements fade and slide up smoothly as they enter the viewport.

## Usage

```html
<!-- Scroll progress indicator at top of page --> 
<div class="ease-scroll-progress-bar"></div> 

<!-- Element that fades in as it scrolls into view --> 
<div class="ease-scroll-reveal"> 
  <h2>Header Revealed on Scroll</h2> 
</div>
```

## Directory Structure
As per the current contribution freeze, this is submitted under `submissions/examples/scroll-driven-utilities/` for the core maintainer to review and integrate into the main engine when appropriate.
