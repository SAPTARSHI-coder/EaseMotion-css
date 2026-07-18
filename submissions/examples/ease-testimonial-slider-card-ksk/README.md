# Testimonial Slider Card (`ease-testimonial-slider-card-ksk`)

1. What does this do?  
A pure CSS testimonial slider card. It features a horizontal slide transition tray styled with an elegant spring physics easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`). When the slide changes, child text elements and author profiles play staggered entrance animations, and the indicator dot expands dynamically.

2. How is it used?  
Place three radio inputs named `slider-group` (`#slide-1`, `#slide-2`, `#slide-3`) immediately before the card `.slider-card`. Set up `<label>` elements pointing to the radio IDs for arrows and indicator dots. Customize physics and styling via variables:

```css
.slider-card {
  --ease-slider-duration: 0.6s;
  --ease-slider-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-slider-bg:       #0f111a;
  --ease-slider-surface:  #161929;
  --ease-slider-accent:   #6366f1;
}
```

3. Why is it useful?  
Provides a highly interactive customer testimonial slider widget requiring zero JavaScript. By targeting child selectors via sibling combinators (`#slide-1:checked ~ .slider-card .slide-1 .slide-quote`), child items play animations (fade-up, avatar scale pop) only when their specific slide becomes active.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #49042.*
