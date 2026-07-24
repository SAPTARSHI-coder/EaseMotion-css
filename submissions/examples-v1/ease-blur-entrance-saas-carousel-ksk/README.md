# SaaS Blur-Entrance Carousel (`ease-blur-entrance-saas-carousel-ksk`)

1. What does this do?  
An interactive 2-column SaaS feature showcase carousel. Active feature slides enter from a blurred scale state (`filter: blur(16px) scale(0.94)`) to clear full-scale size, while the right-side SVG mockup container plays a spring-loaded rise reveal. Controlled via top feature pills, side arrows, or bottom indicator dots.

2. How is it used?  
Define three radio inputs named `saas-group` (`#saas-1`, `#saas-2`, `#saas-3`) preceding `.saas-carousel-card`. Set up `<label>` elements pointing to the radio IDs for feature pills, arrows, and indicator dots. Customize transitions via CSS custom properties:

```css
.saas-carousel-card {
  --ease-saas-blur:     16px;          /* entrance blur amount          */
  --ease-saas-scale:    0.94;          /* entrance scale offset         */
  --ease-saas-duration: 0.5s;          /* transition duration           */
  --ease-saas-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-saas-accent:   #6366f1;       /* primary theme color           */
}
```

3. Why is it useful?  
Designed specifically for SaaS landing pages and product feature showcases. Offers a multi-feature presentation deck with responsive two-column layouts (stacking automatically on mobile screens) and fluid spring motion—all operating 100% without JavaScript.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #50514.*
