# Skeleton Loading Screen

**What does this do?**
Shows animated gray placeholder blocks (shimmer effect) while content is loading, instead of a blank screen or spinner.

**How is it used?**
```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-circle"></div>
<div class="skeleton skeleton-block"></div>
```

**Why is it useful?**
Skeleton screens are a standard UX pattern (used by LinkedIn, YouTube, etc.) that reduce perceived load time and prevent layout shift. EaseMotion CSS currently has hover/reveal effects but nothing for loading states — this fills that gap with a pure-CSS, zero-JS, accessible (respects prefers-reduced-motion) component.
