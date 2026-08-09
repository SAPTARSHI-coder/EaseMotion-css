# CSS 3D-Flip Drawer

A pure-CSS animated accordion drawer utilizing a 3D-Flip interaction aesthetic, designed specifically for E-Commerce Checkout layouts. It features a hardware-accelerated 3D rotation animation that mimics a physical flap opening, without requiring any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a togglable drawer (e.g., for viewing an Order Summary on mobile checkouts). When a user clicks the toggle button, the hidden drawer smoothly hinges down from the top edge in 3D space (`rotateX`). It also elegantly handles animating from `height: 0` to `height: auto` using modern CSS Grid tricks.

### 2. How is it used?

The component relies on a pure CSS checkbox hack. The `.drawer-checkbox` controls the state. A parent container establishes the 3D `perspective`. The `.flip-drawer` uses `transform-style: preserve-3d` and `transform-origin: top center` to create the hinging door effect.

```html
<!-- Example: Order Summary Toggle -->
<div class="flip-drawer-container">
  
  <!-- Hidden Checkbox State Controller -->
  <input type="checkbox" id="drawer-toggle" class="drawer-checkbox">
  
  <!-- Toggle Button -->
  <label for="drawer-toggle" class="drawer-toggle-btn">
    Show Order Summary
  </label>
  
  <!-- The 3D Drawer -->
  <div class="flip-drawer">
    <div class="drawer-content">
      <!-- Order Items / Subtotals go here -->
    </div>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --drawer-transition-duration: 0.5s;
  --drawer-transition-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Creates a slight bounce at the end of the flip */
}
```

### 3. Why is it useful?

In mobile e-commerce checkouts, screen space is highly constrained. Hiding the verbose order summary behind a toggle is standard practice. However, standard slide-down accordions can feel generic. Applying a 3D `rotateX` transform adds a layer of skeuomorphic polish, making the interface feel physical and highly crafted. By achieving this entirely with CSS (including the notoriously difficult `height: 0` to `auto` transition via CSS Grid), developers can implement premium animations that are incredibly lightweight, 60fps smooth, and automatically degrade safely for users with `prefers-reduced-motion` enabled.
