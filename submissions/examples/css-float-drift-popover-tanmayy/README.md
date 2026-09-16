# CSS Float-Drift Popover

A pure-CSS animated popover utilizing a continuous Float-Drift interaction aesthetic, designed to provide contextual help and order summaries within E-Commerce Checkout layouts. It features a smooth fade-in entrance that transitions seamlessly into a gentle, continuous floating animation.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a lightweight, performant tooltip/popover solution. When a user hovers over (or keyboard focuses on) a trigger element—such as a CVV info icon or an Order Total price—the popover fades into view and begins to slowly drift back and forth along its primary axis. It supports various directional alignments (top, left) using CSS transforms.

### 2. How is it used?

Wrap the trigger element and the popover itself inside a `.popover-wrapper` container. The wrapper handles the hover and focus state detection, applying the visibility classes and triggering the keyframe animation on the child `.float-drift-popover`. Add `tabindex="0"` to the wrapper to ensure keyboard accessibility.

```html
<!-- Example: Order Summary Popover -->
<div class="popover-wrapper" tabindex="0">
  
  <!-- Trigger Element -->
  <span class="total-price popover-trigger">$142.50</span>
  
  <!-- Popover Content (Positioned Left) -->
  <div class="float-drift-popover popover-left">
    <div class="popover-header">Order Summary</div>
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
  --popover-entrance-duration: 0.3s;
  --popover-drift-duration: 3s; /* How slowly it floats */
  --popover-drift-distance: 6px; /* How far it floats up and down */
}
```

### 3. Why is it useful?

In dense UI screens like checkouts, users often need secondary information (like what a CVV is, or a breakdown of taxes and shipping) without leaving the page or opening a modal. Tooltips solve this, but static tooltips can feel lifeless. Adding a subtle, continuous "float-drift" animation makes the popover feel organic and physically detached from the base UI layer. This pure-CSS approach eliminates the need for JavaScript positioning libraries, ensuring instantaneous rendering, smooth hardware-accelerated transform animations, and native fallback support for users requesting reduced motion.
