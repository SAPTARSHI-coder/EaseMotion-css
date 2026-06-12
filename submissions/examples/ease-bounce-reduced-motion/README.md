# What does this do?

Adds the missing `@media (prefers-reduced-motion: reduce)` guard for `.ease-bounce`, `.ease-bounce-in`, and `.ease-bounce-button-exit` so users with vestibular disorders or motion sensitivity can disable the bounce animations through their OS accessibility settings.

# How is it used?

Include the CSS, then use the existing classes as normal — the guard activates automatically when the user has `prefers-reduced-motion: reduce` enabled:

```html
<div class="ease-bounce">
  I will not bounce for users who need reduced motion.
</div>
<div class="ease-bounce-in">
  I will fade in instantly instead of scaling in.
</div>
<button class="ease-bounce-button-exit">
  I will disappear without bouncing.
</button>
```

No new classes, no JavaScript, no markup changes. The guard collapses all three animations to a 0.01ms single-iteration instant transition — identical to how every other animation group in the framework already handles it.

# Why is it useful?

Without this guard, `.ease-bounce`, `.ease-bounce-in`, and `.ease-bounce-button-exit` play full keyframe animations even when the user has enabled `prefers-reduced-motion: reduce` in their OS accessibility settings. This is a **WCAG 2.1 Success Criterion 2.3.3** violation (Animation from Interactions — motion animation triggered by interaction can be disabled unless essential). The fix matches the exact pattern used across all seven sibling animation files in `easemotion/` — fade, slide, rotate, zoom, hover, misc, and timing all already include this block. bounce.css is the only file missing it.
