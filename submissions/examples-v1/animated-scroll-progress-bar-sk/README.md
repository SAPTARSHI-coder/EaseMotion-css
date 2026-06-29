# Animated Scroll Progress Bar

**What does this do?**  
A thin gradient progress bar fixed at the top of the viewport that fills from left to right as the user scrolls down the page. The fill is driven entirely by CSS scroll-driven animations (`animation-timeline: scroll()`) — no JavaScript event listeners or Intersection Observers.

**How is it used?**  
Open `demo.html` in Chrome/Edge 115+ and scroll. The bar progresses smoothly with the scroll position. For browsers that don't support scroll-driven animations, the bar remains static and the content is still fully readable.

**Why is it useful?**  
Reading-progress indicators improve UX on long-form content by showing users how far they've scrolled. The CSS scroll-driven approach eliminates JS overhead, runs on the compositor thread for jank-free performance, and degrades gracefully. It demonstrates a forward-looking CSS API that reduces complexity in common interaction patterns.
