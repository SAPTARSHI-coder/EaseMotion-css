# CSS Slide-Up Drawer

A pure-CSS animated bottom sheet drawer, designed specifically for mobile-first E-Commerce Checkout layouts. It features a hardware-accelerated `translateY` animation that mimics native mobile OS behaviors, providing a seamless "bottom sheet" experience without any JavaScript overhead.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a togglable slide-up drawer (or bottom sheet), often used in mobile e-commerce to allow users to select shipping addresses or payment methods without leaving the current context. When the user taps a trigger (like "Change Address"), a semi-transparent backdrop fades in, and the drawer smoothly slides up from the bottom edge of the screen.

### 2. How is it used?

The component relies on a pure CSS checkbox hack for state management. The `.drawer-checkbox` controls the visibility of the `.drawer-overlay`. The `.slide-up-drawer` is positioned absolutely at the bottom of the overlay and animates its `transform: translateY()` property based on the checkbox state.

```html
<!-- Example: Address Selection Drawer -->
<!-- 1. The Trigger -->
<label for="drawer-toggle" class="edit-btn">Change</label>

<!-- 2. The Hidden State Controller -->
<input type="checkbox" id="drawer-toggle" class="drawer-checkbox">

<!-- 3. The Drawer Overlay & Container -->
<div class="drawer-overlay">
  <!-- Invisible backdrop to allow clicking outside to close -->
  <label for="drawer-toggle" class="drawer-close-backdrop"></label>
  
  <div class="slide-up-drawer">
    <!-- Drawer Handle, Header, scrollable Body, and Footer -->
    <div class="drawer-handle"></div>
    <div class="drawer-body">
      <!-- Content here -->
    </div>
  </div>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --drawer-transition-duration: 0.4s;
  --drawer-transition-ease: cubic-bezier(0.32, 0.72, 0, 1); /* Decelerating ease mimics native iOS/Android sheets */
  
  --drawer-bg: #ffffff;
  --drawer-radius: 24px;
}
```

### 3. Why is it useful?

In mobile checkouts, keeping the user on a single page reduces friction and drop-off rates. Bottom sheets (slide-up drawers) are the preferred UX pattern for secondary selections (like picking a saved address) because they maintain context and are easily reachable by the user's thumb. Managing this complex interaction entirely with CSS ensures 60fps hardware-accelerated animations and immediate responsiveness, avoiding the layout recalculation jank commonly associated with JavaScript DOM manipulation. Furthermore, the component respects accessibility preferences, automatically degrading to a static popup if `prefers-reduced-motion` is enabled.
