# Animated Gradient Border

**What does this do?**
Creates a rotating conic-gradient border around cards or buttons while keeping the inner background untouched.

**How is it used?**
```html
<article class="gradient-border-card" style="--gb-width: 4px; --gb-speed: 6s;">
  <h2>Gradient border</h2>
  <p>The border rotates continuously without JavaScript.</p>
</article>
```

**Why is it useful?**
Animated borders are a compact way to call attention to featured content, active states, and premium actions. This fits EaseMotion CSS because the maintainer can standardize the effect into a readable utility with configurable width, colors, radius, and speed while preserving a no-build, dependency-free workflow.
