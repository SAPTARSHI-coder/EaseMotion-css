# Scroll-Driven Viewport Animations

## What does this do?
Utility classes that automatically trigger animations as elements enter or move through the browser viewport during scrolling — using the pure CSS Scroll-Driven Animations API (`animation-timeline: view()` and `animation-timeline: scroll()`). Zero JavaScript, zero dependencies. Animation progress is directly tied to scroll position — scroll back up and animations reverse naturally.

## Classes
| Class | Effect |
|---|---|
| `.scroll-view` | Required base class — sets up the view timeline |
| `.scroll-view-fade-up` | Fades in while sliding up 48px |
| `.scroll-view-scale-in` | Scales from 85% → 100% while fading in |
| `.scroll-view-slide-left` | Slides in from the left (-60px) |
| `.scroll-view-slide-right` | Slides in from the right (+60px) |
| `.scroll-view-rotate-in` | Rotates from -8° to 0° while fading in |
| `.scroll-view-delay-1/2/3` | Offsets the animation range for staggered sibling reveals |
| `.scroll-timeline-progress` | Fills width 0→100% based on document scroll position |

## How to use it
```html
<!-- Just add the class — animates automatically on scroll -->
<div class="scroll-view scroll-view-fade-up">
  Content here
</div>

<!-- Staggered group -->
<div class="scroll-view scroll-view-fade-up">Item 1</div>
<div class="scroll-view scroll-view-fade-up scroll-view-delay-1">Item 2</div>
<div class="scroll-view scroll-view-fade-up scroll-view-delay-2">Item 3</div>

<!-- Document-linked progress bar -->
<div class="progress-track">
  <div class="progress-fill scroll-timeline-progress"></div>
</div>
```

## Browser support
- **Chrome/Edge 115+, Firefox 137+**: Full `animation-timeline: view()` support — true scroll-linked animation
- **All others**: `@supports not` fallback keeps elements in their final visible state — no broken layouts, no invisible content, just no scroll-linked motion
- **`prefers-reduced-motion`**: All scroll animations disabled, content fully visible

## Why it fits EaseMotion CSS
This perfectly fulfills the framework's animation-first, composable, zero-dependency philosophy. Currently developers reach for Framer Motion or GSAP for scroll effects — this lets them create high-end scroll-linked experiences using simple declarative class names, with graceful degradation built in.
