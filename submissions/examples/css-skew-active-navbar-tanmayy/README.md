# CSS Skew-Active Navbar

A pure-CSS animated progress navbar utilizing a Skew-Active interaction aesthetic, designed to complement E-Commerce Checkout interface layouts. It features smooth hover scale animations and dynamic skewed backgrounds for the active step.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a checkout progress navigation bar (Cart, Shipping, Payment, Review). When a user hovers over a step or selects it, a skewed background element smoothly fades in and scales into view. It uses a pure CSS mechanism (hidden radio buttons) to toggle the active state across the navbar without requiring any JavaScript.

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<label>` tags. The skewed background is achieved via a dedicated `.skew-bg` absolute element that sits behind the text.

```html
<nav class="skew-active-navbar">
  <div class="nav-container">
    
    <!-- Step 1 -->
    <label class="nav-step">
      <!-- Hidden Radio Button controls state -->
      <input type="radio" name="checkout_step" value="cart" class="nav-radio" checked>
      
      <!-- Un-skewed text content -->
      <span class="step-content">
        <span class="step-number">1</span>
        <span class="step-label">Cart</span>
      </span>
      
      <!-- The animated skewed background -->
      <div class="skew-bg"></div>
    </label>
    
    <!-- More steps... -->
  </div>
</nav>
```

**Customization via CSS Properties:**
You can adjust the animation physics and aesthetics via the root variables:

```css
:root {
  --nav-skew-angle: -15deg; /* Defines the slant of the active state */
  --nav-transition-duration: 0.3s;
  --nav-transition-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce ease */
  
  --nav-bg-active: #3b82f6;
  --nav-color-text-active: #ffffff;
}
```

### 3. Why is it useful?

Progress navbars in checkout flows help ground the user and communicate how many steps remain. Using a skewed design adds a modern, dynamic, and forward-moving aesthetic that fits well with contemporary e-commerce branding. By relying entirely on CSS radio states for interaction, developers can easily hook up server-rendered forms or single-page application routers to the navbar without writing custom DOM manipulation logic for the active state styling. Additionally, all animations fallback to standard rectangular states if a user enables `prefers-reduced-motion`.
