# CSS Shimmer-Sweep Hero Section

### What does this do?
Adds a pure-CSS hero section designed for creative portfolio layouts that continuously sweeps dynamic gradient light reflections across display headlines and primary call-to-action buttons.

### How is it used?
```html
<section class="hero-container-sap">
  <h1 class="hero-headline-sap">
    CRAFTING DIGITAL <br>
    <span class="shimmer-text-sap">EXPERIENCES & INTERFACES</span>
  </h1>
  <a href="#" class="btn-primary-sap">
    <span>VIEW WORK</span>
    <div class="shimmer-sweep-sap"></div>
  </a>
</section>
```

### Why is it useful?
It creates a high-end studio aesthetic for hero banners without requiring external Canvas engines or heavy JavaScript libraries. Custom parameters like animation speed and angles are exposed directly via CSS variables at the root of the stylesheet.