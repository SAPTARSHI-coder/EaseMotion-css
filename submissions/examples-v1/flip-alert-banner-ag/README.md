# Flip Alert Banner

A premium, responsive, and light-weight e-commerce alert banner featuring a 3D vertical split-flap flip animation that triggers on hover or focus.

## 1. What does this do?

The Flip Alert Banner displays a promotional message (e.g., a flash sale notification) and flips vertically on the X-axis to reveal a discount code or additional details when hovered or focused by a keyboard user.

## 2. How is it used?

Structure your HTML as follows:

```html
<div
  class="flip-alert-banner-ag flip-x-ag"
  tabindex="0"
  aria-label="Flash Sale Promotion"
>
  <div class="flip-banner-inner-ag">
    <!-- Front Face (Warning Theme) -->
    <div class="flip-banner-front-ag flip-theme-warning-ag">
      <div class="flip-banner-content-ag">
        <span class="flip-banner-badge-ag">Flash Sale</span>
        <span>Get 20% off all summer collections!</span>
      </div>
      <span class="flip-banner-action-ag">Hover to Reveal Code</span>
    </div>
    <!-- Back Face (Success Theme) -->
    <div class="flip-banner-back-ag flip-theme-success-ag">
      <div class="flip-banner-content-ag">
        <span class="flip-banner-badge-ag">Promo Code</span>
        <span>Use discount code at checkout:</span>
      </div>
      <span class="flip-ticket-code-ag">SUMMER20</span>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

It provides an engaging, lightweight promotional alert banner without bloated JavaScript dependencies. By harnessing GPU-accelerated CSS 3D transforms, it guarantees smooth rendering, adheres to light/dark themes, and respects prefers-reduced-motion for user accessibility.
