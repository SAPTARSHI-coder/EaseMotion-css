# Scroll-Animated Timeline (Pure CSS)

A vertical timeline where each entry slides in and fades up as it scrolls into view — built entirely with CSS Scroll-Driven Animations (`animation-timeline: view()`), with zero JavaScript.

## How this differs from the existing `scroll-animated-timeline` submission

That submission uses `IntersectionObserver` in `script.js` to toggle a reveal class on each timeline item as it enters the viewport. This demo achieves the identical visual effect with no JavaScript at all, using the same `@supports (animation-timeline: view())` pattern already established for `.ease-reveal` in `core/animations.css`.

## How it works

```css
@supports (animation-timeline: view()) {
  .cq-timeline-item {
    opacity: 0;
    transform: translateX(-24px);
    animation: ease-kf-timeline-reveal 600ms var(--ease-ease, ease) both;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
```

In unsupported browsers, the `@supports` guard simply never applies, leaving items visible and in place by default — a safe, static fallback rather than a broken empty page.

## Usage

```html
<div class="cq-timeline">
  <div class="cq-timeline-item">
    <span class="cq-timeline-date">2024</span>
    <h4 class="cq-timeline-title">Milestone</h4>
    <p class="cq-timeline-desc">Description</p>
  </div>
</div>
```

## Browser support

| Browser | Behavior |
|---------|----------|
| Chrome / Edge 115+ | Items slide/fade in as they scroll into view |
| Firefox, Safari | Static, always-visible timeline (no animation, no breakage) |

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)` to force all items to their final visible state immediately, disabling the reveal animation entirely.

## Why it fits EaseMotion CSS

Reuses the exact `@supports (animation-timeline: view())` + `ease-kf-` keyframe pattern already established in `core/animations.css` for `.ease-reveal`, applying it to a timeline component instead of duplicating reveal logic in JavaScript — consistent with the framework's CSS-first, progressive-enhancement philosophy.

Closes #11306
