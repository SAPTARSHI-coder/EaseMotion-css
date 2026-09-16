# CSS Morph-Glow Pricing Table

A pure-CSS animated pricing grid utilizing a Morph-Glow interaction aesthetic, designed specifically for Minimalist Tech layouts (e.g., SaaS pricing pages). It features a complex, hardware-accelerated animated gradient aura that continuously morphs its shape and shifts colors behind the featured pricing tier, drawing the eye without requiring any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a three-tier pricing layout. To aggressively highlight the "Recommended" or "Pro" tier, a heavy, blurred gradient (`.morph-glow-bg`) is positioned behind the card. This background continuously animates its `border-radius` using complex 8-point values, creating a fluid, organic, blob-like shape that shifts and pulses, contrasting beautifully against the sharp, dark minimalist aesthetic of the cards themselves.

### 2. How is it used?

The layout relies on standard CSS Grid (`grid-template-columns: repeat(3, 1fr)`). The visual magic happens via the `.morph-glow-bg` element, which is placed absolutely behind the `.card-inner` content wrapper of the featured tier. The inner wrapper uses `backdrop-filter: blur(20px)` to slightly diffuse the intense glow from behind.

```html
<!-- Example: Featured Tier Layout -->
<div class="pricing-card pro-tier featured-morph">
  
  <!-- The Animated Aura -->
  <div class="morph-glow-bg"></div>
  
  <!-- The actual card content, positioned above the glow -->
  <div class="card-inner">
    <div class="popular-badge">Most Popular</div>
    <!-- Pricing Content... -->
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and gradient colors via root variables:

```css
:root {
  --glow-duration: 8s; /* How fast the blob morphs and shifts color */
  
  --glow-color-1: #3b82f6; /* Blue */
  --glow-color-2: #8b5cf6; /* Purple */
  --glow-color-3: #ec4899; /* Pink */
}
```

### 3. Why is it useful?

In modern SaaS marketing, "dark mode" minimalist designs are incredibly popular, but they risk looking flat. By introducing a highly organic, animated morph-glow behind the primary call-to-action (the Pro tier), you create an immediate visual hierarchy that feels premium and "alive". Achieving this fluid shape-shifting effect strictly via CSS `@keyframes` on `border-radius` avoids the need for heavy Canvas/WebGL libraries or complex SVG morphing scripts. It runs performantly on the GPU and perfectly adheres to `prefers-reduced-motion` accessibility standards by locking to a static, blurred rectangle if motion is disabled by the user.
