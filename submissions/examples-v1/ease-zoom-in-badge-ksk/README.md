# Zoom-In Badge (`ease-zoom-in-badge-ksk`)

1. What does this do?  
An interactive badge component designed for Creative Portfolio layouts. Hovering or focusing the parent container (like a project card) triggers the badge to zoom in and scale up from a blurred, collapsed state (`filter: blur(4px) scale(0.4) translateY(10px)`) using an organic spring animation (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Add `.ease-zoom-badge` inside any hoverable or focusable card container. The badge will zoom in automatically:

```html
<div class="portfolio-card" tabindex="0">
  <span class="ease-zoom-badge">Featured</span>
</div>
```

Customize pop scale, duration, and color themes using CSS variables:
```css
.ease-zoom-badge {
  --ease-badge-scale:     0.4;             /* starting scalepop ratio */
  --ease-badge-duration:  0.42s;           /* pop animation speed */
  --ease-badge-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-badge-bg:        rgba(255, 255, 255, 0.08);
}
```

Pre-configured colors include `.badge-rose`, `.badge-emerald`, `.badge-amber`, and `.badge-indigo`.

3. Why is it useful?  
Instead of static tags that clutter cards, the zoom-in badge reveals key metadata labels dynamically as the user interacts with the catalog. Includes a pulsing status dot (`.badge-pulse-dot`), keyboard accessibility, and a11y reduced-motion overrides.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54571.*
