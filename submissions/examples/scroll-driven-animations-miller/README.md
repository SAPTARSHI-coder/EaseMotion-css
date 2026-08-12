# CSS Scroll-Driven Animation Utilities

## What does this do?
Utility classes built on the native CSS Scroll-Driven Animations API (`animation-timeline: scroll()` and `animation-timeline: view()`). Animations are driven directly by scroll position — no `IntersectionObserver`, no scroll event listeners, no JavaScript at all.

## Classes included

| Class | Effect | Timeline |
|---|---|---|
| `.ease-scroll-progress-bar` | Fixed top bar that fills as the whole page scrolls | `scroll(root)` |
| `.ease-scroll-reveal` | Fade-in-up tied to scroll position | `view()` |
| `.ease-scroll-parallax` | Continuous drift while element is in view | `view()` |
| `.ease-scroll-zoom` | Scales up as element enters viewport | `view()` |
| `.ease-scroll-blur` | Unblurs as element scrolls into view | `view()` |
| `.ease-view-reveal` | Generic fade + slide-up reveal | `view()` |
| `.ease-view-slide-in-left` / `.ease-view-slide-in-right` | Directional slide-in on view entry | `view()` |

## Usage

```html
<!-- Fixed progress bar, place once near top of <body> -->
<div class="ease-scroll-progress-bar"></div>

<!-- Reveal on scroll — no JS needed -->
<div class="ease-scroll-reveal">
  <h2>This fades and slides up as you scroll to it</h2>
</div>

<!-- Directional slide-ins -->
<div class="ease-view-slide-in-left">Slides from the left</div>
<div class="ease-view-slide-in-right">Slides from the right</div>

<!-- Parallax drift -->
<h2 class="ease-scroll-parallax">Moves as the page scrolls</h2>
```

## Fallback — `.ease-scroll-fallback`
For browsers without `animation-timeline` support, the `@supports not (animation-timeline: scroll())` block forces all reveal/zoom/blur/slide classes to their final visible state (opacity 1, no transform, no blur) instead of staying stuck at their `from` keyframe. The progress bar is hidden entirely since there's no scroll position to drive it. Apply `.ease-scroll-fallback` to any custom element that needs the same static fallback behavior.

```css
@supports not (animation-timeline: scroll()) {
  .ease-scroll-fallback {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

## Browser support
Chrome 115+, Edge 115+. Firefox and Safari do not yet support `animation-timeline` — the `@supports` fallback ensures content remains fully visible and accessible regardless.

## prefers-reduced-motion
All scroll-driven animations are disabled under `prefers-reduced-motion: reduce`, immediately showing the final state (no blur, full opacity, no transform offset).

## Why it fits EaseMotion CSS?
This is the most modern, JavaScript-free way to build scroll-driven motion in CSS today. Zero scroll event listeners, zero layout thrashing, zero IntersectionObserver polyfills — animations are native and GPU-composited. Fits EaseMotion's animation-first, composable philosophy with human-readable class names throughout.
