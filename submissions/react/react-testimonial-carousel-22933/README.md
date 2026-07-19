# React Animated Testimonial Carousel (#22933)

This submission fulfills Issue **#22933** by delivering a polished, production-quality testimonial carousel featuring direction-aware slide transitions, auto-advance with pause-on-hover, a live progress bar, and nested EaseMotion animations.

## Animation Inventory

| Feature | EaseMotion / CSS Technique | Details |
|---------|---------------------------|---------|
| Card entry (forward) | `.ease-slide-up .ease-duration-normal` | `panelKey` increment forces fresh mount |
| Card entry (backward) | `.ease-fade-in .ease-duration-normal` | Softer feel for reverse navigation |
| Quote body | `.ease-fade-in .ease-duration-slow` + 200ms delay | Quote lingers in after card settles |
| Star rating | `.ease-slide-up .ease-duration-fast` × 5 at 60ms stagger | Stars cascade in one-by-one |
| Progress bar | `@keyframes progressFill` over `INTERVAL_MS` | Resets on every navigation via `key` prop |
| Dot indicator | CSS `width` transition (6px ↔ 24px) | Active dot expands into a pill |
| Arrows | `.ease-hover-scale` | Crisp tap feedback |

## Architecture Highlights

### Direction-Aware Transitions
`direction` state tracks whether the user is going `'forward'` or `'backward'`. The `<TestimonialCard>` receives this prop and conditionally applies the correct EaseMotion class. A `panelKey` integer is bumped on every navigation, forcing React to unmount and remount the card component, guaranteeing a fresh keyframe animation fires every time regardless of direction.

### Auto-Advance with Pause-on-Hover
`setInterval` fires `next()` every 5 seconds. A `pausedRef` (not state) is toggled by `mouseenter`/`mouseleave` on the card container. Using a ref instead of state avoids re-creating the interval closure. Hovering over the card pauses the auto-advance and freezes the progress bar animation.

### Auto-Progress Bar
A `<div>` with `animation: progressFill 5s linear forwards` grows from 0% → 100% over the interval duration. It is reset by passing a bumped `progressKey` as its React `key`, which forces a DOM remount and restarts the CSS animation cleanly.

### Dot Pill Indicators
Each dot uses a CSS `width` transition: `6px` when inactive, `24px` when active (expanding into a pill shape). The active dot also receives a gradient background, making the current position immediately scannable.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.

**Tip:** Hover over the card to pause the auto-advance, then use the arrows or dot nav to manually browse testimonials.
