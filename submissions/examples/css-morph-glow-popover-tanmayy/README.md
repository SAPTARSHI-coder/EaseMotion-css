# CSS Morph-Glow Popover

A pure-CSS animated popover utilizing a Morph-Glow interaction aesthetic, designed specifically for Secure Checkout and Fintech interfaces. It features an organic, morphing aura that radiates from behind the popover card when active, conveying a sense of premium security and high-tech polish.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a highly stylized, performant popover solution. When a user hovers over (or keyboard focuses on) a trigger element—such as a "Learn More" button for shipping protection—the popover fades and scales into view. Behind the solid popover card, a deeply blurred radial gradient becomes visible and begins to smoothly morph its shape and rotate using complex `border-radius` keyframes.

### 2. How is it used?

Wrap the trigger element and the popover itself inside a `.popover-wrapper` container. The popover consists of two distinct layers: the `.morph-glow-aura` (which sits in the back and animates) and the `.popover-content-card` (which sits in the front and holds the actual text).

```html
<!-- Example: Premium Protection Info Popover -->
<div class="popover-wrapper" tabindex="0">
  
  <!-- Trigger Element -->
  <button class="info-btn" type="button">Learn More</button>
  
  <!-- Popover Content (Positioned Left) -->
  <div class="morph-glow-popover popover-left">
    
    <!-- The glowing background that morphs -->
    <div class="morph-glow-aura"></div>
    
    <!-- The solid foreground card -->
    <div class="popover-content-card">
      <div class="popover-header">Coverage Details</div>
      <div class="popover-body">
        <!-- Content here -->
      </div>
    </div>
    <div class="popover-arrow"></div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and glow colors via root variables:

```css
:root {
  --popover-transition-duration: 0.4s;
  --glow-animation-speed: 6s; /* How fast the aura morphs and rotates */
  
  --glow-color-1: #10b981; /* Emerald base */
  --glow-color-2: #059669; /* Emerald accent */
}
```

### 3. Why is it useful?

In secure checkouts, upselling premium protection or explaining complex encryption features requires building trust. Standard, flat tooltips often fail to convey a sense of "premium" quality. By utilizing a fluid, hardware-accelerated morphing glow behind the popover, you instantly elevate the perceived value and security of the interface without relying on heavy WebGL or JavaScript canvas libraries. Furthermore, this component fully respects user accessibility preferences, automatically degrading to a static, non-animated glow if `prefers-reduced-motion` is enabled.
