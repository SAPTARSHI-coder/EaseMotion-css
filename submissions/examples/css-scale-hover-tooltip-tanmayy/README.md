# CSS Scale-Hover Tooltip

A pure-CSS tooltip utilizing a Scale-Hover interaction aesthetic, designed specifically for Product Catalog layouts where conveying rich information efficiently is critical. It features smooth scale-and-fade animations driven entirely by CSS hover and focus states.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a lightweight, performant tooltip solution. When a user hovers over (or keyboard focuses on) a trigger element—such as a color swatch, a "Free Shipping" badge, or an info icon—the tooltip smoothly scales up and fades into view. It supports various directional alignments (top, left) using CSS transforms.

### 2. How is it used?

Wrap the trigger element and the tooltip itself inside a `.tooltip-wrapper` container. The wrapper handles the hover and focus state detection, applying the active visibility classes to the child `.scale-tooltip`. Add `tabindex="0"` to the wrapper or trigger to ensure keyboard accessibility.

```html
<!-- Example: Color Swatch with Tooltip -->
<div class="tooltip-wrapper" tabindex="0">
  
  <!-- Trigger Element -->
  <span class="swatch" style="background-color: #333;"></span>
  
  <!-- Tooltip Content (Positioned Top) -->
  <div class="scale-tooltip tooltip-top">
    Charcoal Black
    <div class="tooltip-arrow"></div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and aesthetic properties easily via root variables:

```css
:root {
  --tooltip-transition-duration: 0.25s;
  --tooltip-transition-ease: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Slight bounce */
  
  --tooltip-scale-start: 0.8; /* Starts at 80% size and scales to 100% */
  --tooltip-bg: #1e293b;
  --tooltip-color: #ffffff;
}
```

### 3. Why is it useful?

In E-Commerce and product catalogs, screen real estate is premium. Tooltips allow you to hide secondary information (detailed material specs, precise shipping times, color names) behind clean, minimalistic UI patterns. Traditionally, tooltips relied on JavaScript libraries for positioning and animation. This pure-CSS approach eliminates that overhead, ensuring instantaneous rendering, smooth 60fps transform animations, and native fallback support for users requesting reduced motion.
