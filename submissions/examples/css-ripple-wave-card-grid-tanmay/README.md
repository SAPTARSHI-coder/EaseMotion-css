# CSS Ripple-Wave Card Grid

A pure-CSS animated card grid utilizing a Ripple-Wave interaction aesthetic, designed to complement E-Commerce Checkout interfaces. It features a tactile, expanding ripple animation on selection, providing instantaneous visual feedback completely without the use of JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a Shipping Method like Standard, Express, or Store Pickup). When a user clicks a card, a circular "ripple wave" rapidly scales up from the center of the card, fading out as it expands to the edges. This simulates a material design-style tactile response, confirming the user's selection natively.

### 2. How is it used?

The component relies on a pure CSS radio button group hidden inside each `.grid-card-label`. The state of the radio buttons (`:checked`) triggers the `ripple` animation on the `.ripple-wave` child element located inside `.card-content`. 

```html
<!-- Example: Shipping Method Card -->
<label class="grid-card-label" tabindex="0">
  
  <!-- Hidden Radio State Controller -->
  <input type="radio" name="shipping_method" class="card-radio" checked>
  
  <!-- The actual card body -->
  <div class="card-content">
    
    <!-- The element that runs the ripple animation -->
    <div class="ripple-wave"></div>
    
    <!-- Card Text/Icons... -->
    <div class="card-text">
      <h3 class="card-title">Standard Shipping</h3>
    </div>
    
  </div>
</label>
```

**Customization via CSS Properties:**
You can adjust the animation physics and colors via root variables:

```css
:root {
  --ripple-duration: 0.6s; /* How long the ripple wave lasts */
  
  --card-border-active: #3b82f6;
  --ripple-color: rgba(59, 130, 246, 0.15); /* Semi-transparent blue ripple */
}
```

### 3. Why is it useful?

In complex forms like checkouts, users frequently need to toggle between different contexts or delivery methods. Providing immediate, tactile feedback upon selection reassures the user that their input was registered by the system. The Ripple-Wave effect is a staple of modern UI design, but it usually requires heavy JavaScript event listeners to calculate click coordinates and trigger DOM animations. By utilizing a simplified center-origin CSS keyframe approach bound to radio states, developers can achieve a premium feel natively, ensuring high performance and automatic fallback for accessibility (`prefers-reduced-motion`).
