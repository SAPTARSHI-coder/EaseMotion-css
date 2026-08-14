# CSS Bounce-Pulse Popover

A pure-CSS animated popover utilizing a Bounce-Pulse interaction aesthetic, designed to provide contextual help and discount breakdowns within E-Commerce Checkout layouts. It features a playful, bouncy entrance transition and a continuous, attention-grabbing pulsing glow while active.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a highly noticeable tooltip/popover solution. When a user hovers over (or keyboard focuses on) a trigger element—such as a promo code help icon or an applied discount badge—the popover springs into view using a custom `cubic-bezier` timing function. Once fully visible, it emits a soft, continuous pulsing shadow to retain the user's attention. It supports various directional alignments (top, left) using CSS transforms.

### 2. How is it used?

Wrap the trigger element and the popover itself inside a `.popover-wrapper` container. The wrapper handles the hover and focus state detection, applying the visibility classes and triggering the pulse keyframe animation on the child `.bounce-pulse-popover`. Add `tabindex="0"` to the wrapper to ensure keyboard accessibility.

```html
<!-- Example: Promo Code Info Popover -->
<div class="popover-wrapper" tabindex="0">
  
  <!-- Trigger Element -->
  <button class="info-icon" aria-label="Promo Code Help" type="button">
    <!-- Icon SVG -->
  </button>
  
  <!-- Popover Content (Positioned Top) -->
  <div class="bounce-pulse-popover popover-top">
    <div class="popover-header">Where to find codes?</div>
    <div class="popover-body">
      <!-- Content here -->
    </div>
    <div class="popover-arrow"></div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics easily via root variables:

```css
:root {
  --popover-bounce-duration: 0.5s;
  --popover-bounce-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --popover-pulse-duration: 2s;
  
  --popover-bg: #2563eb;
  --popover-pulse-color: rgba(37, 99, 235, 0.4);
}
```

### 3. Why is it useful?

In checkout flows, users are highly sensitive to pricing and discounts. When a user successfully applies a promo code, or when they are actively seeking one out, providing immediate, highly visible feedback is crucial. The bouncy entrance makes the popover feel responsive and rewarding, while the continuous pulse ensures the information (like a discount breakdown) cannot be easily ignored. This pure-CSS approach eliminates the need for JavaScript animation libraries, ensuring optimal performance and native fallback support for users requesting reduced motion.
