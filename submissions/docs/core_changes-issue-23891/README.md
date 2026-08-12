# ease-aspect-ratio — Aspect Ratio Utility

## 1. What does this do?

Adds aspect ratio utility classes using the native CSS `aspect-ratio` property. Supports common ratios (square, video, 4:3, 3:2, 21:9, 9:16, 2:3, 3:4, 2:1, 4:1), semantic aliases (golden, portrait, landscape, cinema, instagram, iphone, a4), legacy padding-box fallback (`.ease-aspect-box`), and responsive breakpoint variants.

**Classes:**
- `.ease-aspect-auto` — Default browser behavior
- `.ease-aspect-square` — 1:1
- `.ease-aspect-video` — 16:9
- `.ease-aspect-{4/3|3/2|8/5|21/9|9/16|2/3|3/4|1/2|2/1|4/1}` — Numeric ratios
- `.ease-aspect-{golden|portrait|landscape|cinema|instagram|iphone|a4}` — Named aliases
- `.ease-aspect-box` — Legacy padding-bottom: 100% fallback
- `.ease-aspect-box-{video|wide|square}` — Legacy fallbacks for common ratios
- `.ease-{sm|md|lg|xl}:aspect-{square|video|auto|4/3|3/2|21/9}` — Responsive

## 2. How is it used?

```html
<!-- Modern -->
<img class="ease-aspect-square" src="photo.jpg" alt="Square" />
<div class="ease-aspect-video">
  <iframe src="..."></iframe>
</div>

<!-- Legacy fallback -->
<div class="ease-aspect-box">
  <div>Child content (absolutely positioned)</div>
</div>

<!-- Responsive -->
<div class="ease-aspect-square ease-lg:aspect-video">
  Square on mobile, 16:9 on desktop
</div>
```

## 3. Why is this useful?

- **16 ratios** — Covering most common use cases
- **Named aliases** — Semantic (golden, portrait, cinema)
- **Legacy fallback** — Padding-box technique for older browsers
- **Responsive** — Breakpoint-prefixed variants
- **Modern** — Uses native `aspect-ratio` where supported
