# Animated Background Patterns Showcase

Resolves: #35281 — Feature Request: Add an Animated Background Patterns Showcase

## What does this do?

Provides five lightweight, CSS-only animated background patterns — gradient shift, floating blobs, moving grid, glow particles, and mesh glow — that can be used as section or card backgrounds.

## How is it used?

Apply any one pattern class to a container element:

```html
<div class="gradient-shift"></div>
<div class="floating-blobs">
  <span class="blob blob-1"></span>
  <span class="blob blob-2"></span>
  <span class="blob blob-3"></span>
</div>
<div class="moving-grid"></div>
<div class="glow-particles"></div>
<div class="mesh-glow"></div>
```

Each pattern only needs the container to have a defined height (e.g. `height: 200px` or `min-height: 100vh` for a full section background). Open `demo.html` to see all five side by side.

## Why is it useful?

Animated backgrounds are a common request for hero sections, cards, and landing pages, but hand-rolling them usually means picking between heavy JS particle libraries or static images. These five patterns are pure CSS (`background`, `linear-gradient`, `radial-gradient`, `filter: blur`, and `@keyframes`), so they add virtually no weight and fit EaseMotion CSS's animation-first, dependency-free philosophy. All animations pause automatically under `prefers-reduced-motion: reduce` for accessibility.
