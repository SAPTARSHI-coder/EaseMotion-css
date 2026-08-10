# CSS Float-Drift Pricing Table

A pure-CSS animated pricing grid utilizing a Float-Drift interaction aesthetic, designed specifically for Product Catalog layouts. It features a continuous, organic floating animation for featured tiers, and highly responsive hover-drift states for secondary tiers, all achieved without JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a three-tier pricing layout (e.g., Hobby, Pro, Enterprise). To draw the user's attention, the "Pro" (featured) tier constantly and gently floats up and down along the Y-axis. When a user hovers over the other tiers, they elevate slightly and begin their own localized float-drift animation, providing a premium, interactive feel to the catalog.

### 2. How is it used?

The component is built using standard CSS Grid for the layout. The animations are handled via CSS `@keyframes`. Apply the `.featured-drift` class to any card you want to continuously float. For other cards, the hover state (`:hover`, `:focus-within`) triggers a slightly different keyframe animation (`table-drift-hover`) so that the card pops up before drifting.

```html
<!-- Example: Pricing Grid Layout -->
<div class="pricing-table">
  
  <!-- Standard Tier (Drifts on hover) -->
  <div class="pricing-card">
    <div class="card-content">...</div>
  </div>
  
  <!-- Featured Tier (Drifts continuously) -->
  <div class="pricing-card featured-drift">
    <div class="card-content">
      <div class="popular-badge">Most Popular</div>
      <!-- Content... -->
    </div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and branding via root variables:

```css
:root {
  --drift-duration: 4s; /* Speed of the bobbing motion */
  --drift-distance: 12px; /* How far up and down the card moves */
  
  --primary-color: #6366f1; /* Used for the featured border and badges */
}
```

### 3. Why is it useful?

In SaaS and product marketing catalogs, the pricing table is the most critical conversion point on the page. Flat, static pricing tables can fail to direct the user's eye. By applying a subtle, continuous hardware-accelerated float animation to the "Recommended" tier, you subconsciously draw the user's attention to your target plan without being overly aggressive. Handling this animation via CSS ensures 60fps performance without taxing the main JavaScript thread, while perfectly degrading to a static layout for users with `prefers-reduced-motion` enabled.
