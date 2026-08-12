# Marquee Tab-Blur Fix (Issue #32492)

## 1. What does this do?

Prevents a CSS marquee animation from visually jumping forward when a browser
tab regains focus after being hidden, by using the **Page Visibility API** to
pause and resume `animation-play-state` in sync with tab visibility.

## 2. How is it used?

```html
<!-- Two identical copies of the content inside the track -->
<div class="marquee-ticker">
  <div class="marquee-ticker__track">
    <span>Breaking News • Latest Updates • Important Announcement •&nbsp;</span>
    <span>Breaking News • Latest Updates • Important Announcement •&nbsp;</span>
  </div>
</div>
```

The minimal JavaScript required (no framework dependency):

```js
document.addEventListener("visibilitychange", () => {
  document.querySelectorAll(".marquee-ticker__track").forEach(track => {
    track.style.animationPlayState =
      document.hidden ? "paused" : "running";
  });
});
```

## 3. Why is it useful?

Marquee / ticker animations are frequently used for news feeds, announcements,
and live data displays — all contexts where the animation is expected to run
**continuously**.

### Root cause

Browsers throttle (and sometimes freeze) CSS animations in hidden tabs to
save CPU. Without explicit pausing, the browser's internal animation clock
still advances while the tab is hidden. When the tab becomes visible again
the browser performs a *catch-up jump*, snapping the marquee forward by the
amount of time that passed — causing a jarring, broken-looking effect.

### Why `animation-play-state` is the right tool

`animation-play-state: paused` does two things:

1. Freezes the rendered position immediately (no visual change on pause).
2. **Stops the internal clock** for that animation, so there is nothing to
   catch up when play resumes.

Setting it back to `running` resumes from the exact paused position —
completely seamless.

### Interaction with hover-pause

The CSS rule `.marquee-ticker:hover .marquee-ticker__track { animation-play-state: paused }` and the JS inline style operate independently. Hovering still pauses the marquee while the tab is visible; the JS only fires on tab hide/show, so the two mechanisms never conflict.

### Seamless loop technique

The track contains **two identical copies** of the content. The keyframe
animates from `translateX(0)` to `translateX(-50%)`. At -50% the second copy
is aligned exactly where the first copy started, so the browser's seamless
restart of `infinite` is invisible to the viewer.

### Reduced-motion support

```css
@media (prefers-reduced-motion: reduce) {
  .marquee-ticker__track {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This submission fits EaseMotion CSS's philosophy of **composable, accessible,
pure-CSS-first utilities** — the fix requires minimal JavaScript and zero
external dependencies.
