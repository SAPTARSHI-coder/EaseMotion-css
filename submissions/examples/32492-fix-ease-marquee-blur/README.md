# Fix: ease-marquee Pause on Tab Blur

This community example resolves the jumping/snapping behavior found in infinite marquee animations when browser tabs lose and regain focus.

## The Problem
Modern web browsers aggressively throttle or freeze background CSS keyframe sequences to maximize CPU efficiency. When focus returns to the tab, the browser attempts to fast-forward the elapsed animation frames instantly, causing a jarring visual "jump" inside scrolling components.

## The Solution
By tracking the browser's native Page Visibility API, we explicitly toggle `animation-play-state: paused` onto the scrolling track element when `document.hidden` evaluates to true. This preserves the absolute frame coordinates, resulting in a seamless resume interaction upon tab focus.

## Implementation Snippet
```javascript
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        track.classList.add("ease-marquee-paused");
    } else {
        track.classList.remove("ease-marquee-paused");
    }
});