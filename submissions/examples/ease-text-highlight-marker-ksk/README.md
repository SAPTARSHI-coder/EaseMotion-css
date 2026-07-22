# Text Highlight Marker (`ease-text-highlight-marker-ksk`)

1. What does this do?  
An inline text highlight marker component. Hovering over marked text plays a smooth left-to-right drawing animation (mimicking a highlighter pen sweeping across the line). It supports 4 pre-set highlight colors (yellow, green, cyan, pink), custom hand-drawn sketch overlays, and a CSS-driven toolbar selector.

2. How is it used?  
Add `.ease-marker` around any inline text block. Apply modifier classes for color locks:

```html
<span class="ease-marker marker-green">Green Highlight</span>
```

For the hand-drawn sketch variant, use:
```html
<span class="ease-marker-sketch marker-pink">Sketch Highlight</span>
```

Customize highlight dimensions and timing via CSS custom properties:
```css
.ease-marker {
  --ease-marker-color:     var(--marker-yellow);
  --ease-marker-duration:  0.45s;
  --ease-marker-height:    65%;             /* thickness of line */
  --ease-marker-y-offset:  5%;              /* distance from line bottom */
  --ease-marker-easing:    cubic-bezier(0.25, 1, 0.5, 1);
}
```

3. Why is it useful?  
Provides lightweight, animated, and accessible text highlights for blogs, e-learning platforms, reading interfaces, and portfolios. Fully responsive, wraps perfectly across multi-line text blocks, and functions entirely without JavaScript.

---
*Created for GSSoC-26 — Resolves #49046.*
