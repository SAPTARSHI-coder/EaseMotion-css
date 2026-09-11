# CSS Scale-Hover Pricing Table

A pure-CSS animated pricing grid utilizing a Scale-Hover interaction aesthetic, designed specifically for Minimalist Tech layouts (e.g., SaaS pricing pages). It features hardware-accelerated scaling and shadow transitions, along with advanced sibling-fading effects using modern CSS `:has()` pseudo-classes.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a three-tier pricing layout. When a user hovers over (or focuses on) a specific pricing card, that card scales up (`transform: scale(1.04)`) and increases its drop shadow to pop off the page. Simultaneously, using the CSS `:has()` selector, the *other* non-hovered cards slightly scale down and fade out (`opacity: 0.7`), ensuring the user's attention is entirely focused on the tier they are considering.

### 2. How is it used?

The layout relies on standard CSS Grid (`grid-template-columns: repeat(3, 1fr)`). The scale effect is applied directly to the `.pricing-card` on `:hover`. To achieve the sibling-fading effect without JavaScript, the parent container must have the `.has-hover-effect` class.

```html
<!-- Example: Scale-Hover Layout -->
<div class="pricing-table has-hover-effect">
  
  <div class="pricing-card" tabindex="0">
    <!-- Starter Tier Content -->
  </div>
  
  <div class="pricing-card featured-card" tabindex="0">
    <!-- Pro Tier Content -->
  </div>
  
  <div class="pricing-card" tabindex="0">
    <!-- Enterprise Tier Content -->
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --hover-duration: 0.4s;
  --hover-ease: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy but smooth */
  --accent-color: #2563eb; /* Controls the featured border and buttons */
}
```

### 3. Why is it useful?

In minimalist layouts, subtle interactions are key to preventing the design from feeling static or boring. The scale-hover effect provides immediate, satisfying tactile feedback. Furthermore, dimming the siblings using the modern CSS `:has()` selector replicates a complex interaction pattern that historically required JavaScript event listeners (`mouseenter` / `mouseleave` on every card). Achieving this purely in CSS ensures zero JS execution overhead, buttery smooth 60fps animations, and automatic fallback to static states if the user has `prefers-reduced-motion` enabled.
