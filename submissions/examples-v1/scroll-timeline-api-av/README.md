# Native `@scroll-timeline` CSS Architecture

## What does this do?
Proposes a massive rendering performance refactor to aggressively eliminate all heavy JavaScript `IntersectionObserver` and scroll-event listeners used for scroll-based animations, completely replacing them with the highly performant, native CSS `@scroll-timeline` and `view-timeline` APIs.

## How is it used?
Maintainers and core contributors must systematically audit all scroll-driven components—specifically targeting `easemotion.css`, `components/scroll-progress.css`, `components/ease-marquee.css`, and dozens of demo scripts in the `submissions/` directory (spanning 10+ core files).

Currently, developers are violently clogging the browser's main thread by writing heavy JavaScript to track scroll positions:
```javascript
// ❌ BAD: Causes severe scroll jank on mobile devices and drains batteries
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / document.body.scrollHeight) * 100;
  progressBar.style.width = `${scrolled}%`;
});
```

This entire legacy approach must be entirely ripped out. Scroll progress bars and reveal-on-scroll animations must be migrated purely to modern CSS:
```css
/* ✅ GOOD: Zero JS required. Runs perfectly on the GPU/Compositor thread */
@scroll-timeline page-scroll {
  source: auto;
  orientation: block;
}

.ease-progress-bar {
  animation: scaleProgress 1s linear forwards;
  animation-timeline: page-scroll;
}
```

## Why is it useful?
Currently, EaseMotion's scroll animations (like scroll progress bars and fade-in reveal cards) are completely sluggish on lower-end mobile devices. Because the framework currently relies extremely heavily on JavaScript `scroll` event listeners and `IntersectionObserver` callbacks, every single pixel the user scrolls forces the browser's main CPU thread to physically calculate math and update DOM styles. This causes a catastrophic rendering bottleneck known as "Scroll Jank."

By aggressively migrating the entire framework to the modern CSS `@scroll-timeline` and `view-timeline` APIs, we completely eliminate JavaScript from the scroll-tracking equation. The browser actively offloads the scroll tracking directly to its heavily optimized compositor thread (GPU). This instantly secures a flawlessly smooth 60 frames-per-second (60fps) scrolling experience, completely eradicates scroll jank, heavily reduces the final JavaScript bundle size, and dramatically extends mobile battery life for downstream enterprise users out of the box.
