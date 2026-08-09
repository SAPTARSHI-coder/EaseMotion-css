# CSS Ripple-Wave Tabs

A pure-CSS animated tab navigation component utilizing a Ripple-Wave interaction aesthetic, designed to complement E-Commerce Checkout interfaces. It features a tactile, expanding ripple animation on selection, alongside a smoothly sliding active indicator, completely eliminating the need for JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable row of tabs (e.g., for switching between Payment Methods like Credit Card, PayPal, and Apple Pay). When a user clicks a tab, a circular "ripple wave" rapidly scales up from the center, fading out as it expands, simulating a material design-style tactile response. Concurrently, an active indicator line slides to the newly selected tab.

### 2. How is it used?

The component relies on a pure CSS radio button group hidden inside a `.tabs-container`. The state of the radio buttons (`:checked`) dictates which tab content is displayed, where the `.tab-indicator` slides, and triggers the `ripple` animation on the `.ripple-wave` child element.

```html
<!-- Example: Payment Method Tabs -->
<div class="tabs-container">
  
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="payment_tab" id="tab-card" checked>
  <input type="radio" name="payment_tab" id="tab-paypal">
  
  <div class="tab-headers">
    <label for="tab-card" class="tab-label">
      Credit Card
      <!-- The element that runs the ripple animation -->
      <div class="ripple-wave"></div>
    </label>
    
    <!-- Sliding Indicator -->
    <div class="tab-indicator"></div>
  </div>
  
  <!-- Tab Contents -->
  <div class="tab-contents-wrapper">
    <div class="tab-content content-card">...</div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and colors via root variables:

```css
:root {
  --tab-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Slide speed */
  --ripple-duration: 0.6s; /* How long the ripple wave lasts */
  
  --ripple-color: rgba(99, 102, 241, 0.2);
  --indicator-color: #6366f1;
}
```

### 3. Why is it useful?

In complex forms like checkouts, users frequently need to toggle between different contexts (like shipping vs. pickup, or different payment gateways). Providing immediate, tactile feedback upon selection reassures the user that their input was registered. The Ripple-Wave effect is a staple of modern UI design (popularized by Material Design), but it usually requires heavy JavaScript event listeners to calculate click coordinates and trigger canvas/DOM animations. By utilizing a simplified center-origin CSS keyframe approach bound to radio states, developers can achieve a very similar premium feel natively, ensuring high performance and automatic fallback for accessibility (`prefers-reduced-motion`).
