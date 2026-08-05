# Skew-Active Hero Section (`ease-skew-active-hero-ksk`)

1. What does this do?  
An interactive 3-column Hero gallery section designed for Creative Portfolios. The hero container splits into skewed columns (`transform: skewX(-10deg)`). Hovering or focusing a column expands its layout width, rotates the column and its child elements back to 0° (unskews them), and fades up descriptive copy using spring motion transitions.

2. How is it used?  
Add `.skew-hero` to your main hero container. Structure columns using `.skew-column` and child elements inside `.column-content`:

```html
<div class="skew-hero">
  <div class="skew-column" tabindex="0">
    <div class="column-content">
      <span class="col-tag">Tag</span>
      <h2 class="col-title">Title</h2>
      <p class="col-desc">Description text...</p>
    </div>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.skew-hero {
  --ease-hero-skew:       -10deg;          /* default X-skew offset */
  --ease-hero-duration:   0.55s;           /* transition speed */
  --ease-hero-easing:     cubic-bezier(0.25, 1, 0.5, 1);
  --ease-hero-bg:         #05070f;
}
```

3. Why is it useful?  
Standard grids look rigid and static. Adding an X-skew boundary division that straightens out elastically under user hover creates an extremely polished, premium designer aesthetic. The component supports full screen responsiveness (transitioning to vertical Y-skews on mobile viewports), keyboard focusability, prefers-reduced-motion overrides, and Light/Dark themes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54627.*
