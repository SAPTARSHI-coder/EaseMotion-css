# CSS Bounce-Pulse Card Grid

A pure-CSS animated card grid utilizing a Bounce-Pulse interaction aesthetic, designed to complement E-Commerce Checkout interface layouts. It features a playful, bouncy hover state and a continuous, attention-grabbing pulse animation for selected items.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a shipping speed during an e-commerce checkout). When a user hovers over an unselected card, it slightly "bounces" upward and scales out to invite interaction. Once a card is selected, it retains a slightly elevated state and triggers a continuous, soft pulsing glow animation to clearly signify the active choice. 

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<label>` tags. The state is driven entirely by the `:checked` pseudo-class and sibling combinators, requiring zero JavaScript logic. 

```html
<div class="card-grid bounce-pulse-grid">
  <!-- Card -->
  <label class="grid-card-label" tabindex="0">
    <!-- Hidden Radio Button controls state -->
    <input type="radio" name="shipping_method" class="card-radio" value="standard" checked>
    
    <!-- Card Content -->
    <div class="card-content">
      <!-- Icon, Text, Price -->
      <div class="card-indicator">
        <!-- SVG Checkmark -->
      </div>
    </div>
  </label>
  
  <!-- Additional Cards... -->
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and colors via root variables:

```css
:root {
  --card-transition-duration: 0.3s;
  --card-bounce-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Creates the "bounce" */
  --card-pulse-duration: 2s; /* Speed of the continuous glow */
  
  --card-border-selected: #0ea5e9;
  --card-pulse-color: rgba(14, 165, 233, 0.4);
}
```

### 3. Why is it useful?

In checkout flows, users appreciate immediate, tactile feedback when making selections that affect their total price or delivery date. The "bounce" effect adds a layer of polish and responsiveness that feels highly interactive, while the continuous "pulse" ensures the user never loses track of their current selection on complex screens. Implementing this purely in CSS ensures optimal performance (60fps animations) and automatically provides static fallbacks for users with `prefers-reduced-motion` enabled, entirely bypassing the need for JavaScript animation libraries.
