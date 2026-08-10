# CSS Blur-Entrance Card Grid

A pure-CSS animated card grid utilizing a Blur-Entrance interaction aesthetic, designed to complement clean, modern E-Commerce Checkout interface layouts. It features a sophisticated entrance animation where cards smoothly unblur into view, and an elegant focus state that blurs out unselected options using modern CSS features.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a shipping address during an e-commerce checkout). When the component loads, the cards perform a staggered entrance animation, transitioning from a heavily blurred state to sharp focus. When a user selects a specific card, the unselected sibling cards are subtly blurred out to draw total focus to the active choice. It uses a pure CSS mechanism (hidden radio buttons and `:has()`) to toggle these states without requiring any JavaScript.

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<label>` tags. The blur entrance is handled via a `@keyframes` animation, while the active "focus" state uses the modern `:has()` selector to apply a blur filter to unselected siblings.

```html
<div class="card-grid blur-entrance-grid">
  <!-- Card -->
  <label class="grid-card-label" tabindex="0">
    <!-- Hidden Radio Button controls state -->
    <input type="radio" name="address_method" class="card-radio" value="home" checked>
    
    <!-- Card Content -->
    <div class="card-content">
      <!-- Icon, Text, Indicators -->
    </div>
  </label>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and aesthetics via the root variables:

```css
:root {
  --blur-anim-duration: 0.8s;
  --blur-anim-ease: cubic-bezier(0.16, 1, 0.3, 1);
  
  --blur-unselected-amount: 3px;
  --blur-unselected-opacity: 0.6;
}
```

### 3. Why is it useful?

In complex e-commerce checkouts with multiple addresses or shipping options, minimizing cognitive load is crucial. The entrance blur animation creates a premium, app-like feel. Furthermore, by utilizing the CSS `:has()` pseudo-class to blur out unselected options, you guide the user's focus exactly where it needs to be—confirming their selection. Implementing this purely in CSS ensures a buttery-smooth 60fps experience that gracefully degrades to static opacity changes for users who have `prefers-reduced-motion` enabled.
