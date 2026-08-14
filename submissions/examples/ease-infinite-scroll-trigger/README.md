# ease-infinite-scroll-trigger

## What does this do?
A sentinel trigger component for lazy-loaded infinite feeds containing:
- An IntersectionObserver-driven scroll detector (minimal JS)
- A smooth loader fade-in state (`ease-fade-in`)
- A hardware-accelerated animated spinner (`ease-loader-spinner`)

## How is it used?
Place the loader sentinel at the bottom of your container, and observe it using IntersectionObserver. Apply the CSS classes for styling and animations:

```html
<!-- Sentinel Element -->
<div id="infinite-scroll-sentinel" class="sentinel-container">
  <div class="loader-box">
    <!-- Animated Spinner -->
    <div class="ease-loader-spinner"></div>
    <span class="loader-text">Loading more posts...</span>
  </div>
</div>
```

## Why is it useful?
It provides a standardized, performant lazy loading layout for search results, timelines, or catalogs. The loading spinner is optimized with hardware-accelerated transforms to ensure 60fps rendering even under heavy JS executions.

## Tech Stack
- HTML
- CSS (Vanilla, GPU-rendered keyframe spinner)
- Minimal JS (IntersectionObserver for simulation)

## Preview
Open `demo.html` directly in your browser and scroll down the feed to see automatic post generation and spinner trigger loading.
