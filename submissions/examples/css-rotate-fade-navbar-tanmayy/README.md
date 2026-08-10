# CSS Rotate-Fade Navbar

A pure-CSS animated progress navbar utilizing a Rotate-Fade interaction aesthetic, designed to complement E-Commerce Checkout interface layouts. It features a playful, dynamic animation for the active step indicator that rotates and scales into view.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a checkout progress navigation bar (Cart, Shipping, Payment, Review). When a user selects a step, a dashed highlight ring smoothly rotates into place while fading in and scaling up. It uses a pure CSS mechanism (hidden radio buttons) to toggle the active state across the navbar without requiring any JavaScript.

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<nav>` tags. The rotate-fade highlight is achieved via a dedicated `.rotate-fade-highlight` absolute element that sits behind the step number.

```html
<nav class="rotate-fade-navbar">
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="checkout_nav" id="step-cart" class="nav-radio" checked>
  <input type="radio" name="checkout_nav" id="step-shipping" class="nav-radio">
  
  <div class="nav-steps-container">
    
    <!-- Step 1 -->
    <label for="step-cart" class="nav-step">
      <div class="step-indicator">
        <span class="step-number">1</span>
        <!-- The animated highlight -->
        <div class="rotate-fade-highlight"></div>
      </div>
      <span class="step-label">Cart</span>
    </label>
    
    <!-- More steps... -->
  </div>
</nav>
```

**Customization via CSS Properties:**
You can adjust the animation physics and aesthetics via the root variables:

```css
:root {
  --nav-anim-duration: 0.6s;
  --nav-anim-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  --nav-color-active: #4f46e5;
  --nav-bg-active: #e0e7ff;
}
```

### 3. Why is it useful?

Progress navbars in checkout flows help ground the user and communicate how many steps remain. Using a rotate-fade design adds a modern, dynamic aesthetic that grabs the user's attention when transitioning between views. By relying entirely on CSS radio states for interaction, developers can easily hook up server-rendered forms or single-page application routers to the navbar without writing custom DOM manipulation logic for the active state styling. Additionally, all animations fallback to standard static states if a user enables `prefers-reduced-motion`.
