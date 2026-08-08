# Announce Bar Slide-Down Entrance Fix

### What does this do?

It restores the intended slide-down entrance animation on the announce bar, which currently never plays.

### How is it used?

```html
<div class="ease-announce-bar">
  <span class="ease-announce-bar-content">Your message</span>
</div>
```

### Why is it useful?

`components/announce-bar.css` sets `animation: ease-slide-down 0.3s ease`, but the framework defines no `@keyframes ease-slide-down`. The matching keyframe is named `ease-kf-slide-down` (in `core/animations.css`), and `ease-slide-down` is only a utility class, not a keyframe. An `animation-name` that does not resolve to a keyframe is ignored, so the bar just appears with no entrance.

This showcase uses the correct `ease-kf-slide-down` name so the bar slides in as intended. It also adds a `prefers-reduced-motion: reduce` guard so the entrance is disabled for users who prefer reduced motion, matching the animation-first and accessible philosophy of EaseMotion CSS.
