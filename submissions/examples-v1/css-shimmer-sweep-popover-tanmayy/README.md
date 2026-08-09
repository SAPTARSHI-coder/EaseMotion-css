# CSS Shimmer Sweep Popover

A pure-CSS animated Popover utilizing a smooth Shimmer Sweep interaction transition, styled to complement Modern SaaS interface aesthetics. It requires zero JavaScript, making it highly performant and easy to integrate.

## 📋 Mandatory Questions

### 1. What does this do?

This submission provides a "Popover" (dropdown menu) component that reveals itself with a smooth scaling transition and a glinting "Shimmer Sweep" effect that sweeps across the content as it opens. It uses a pure CSS mechanism (hidden checkbox) to toggle state without JavaScript. The component is fully responsive and exposes CSS custom properties to control the transition timing, easing, and scale factors.

### 2. How is it used?

The component uses a hidden checkbox (`.popover-toggle`) and the `~` general sibling selector to control the visibility and animation of the `.popover-content` without JS. A `.popover-backdrop` label is provided so clicking outside the popover closes it natively.

```html
<div class="popover-wrapper">
  <!-- Hidden Checkbox State -->
  <input type="checkbox" id="popover-toggle" class="popover-toggle" hidden>
  
  <!-- Trigger Button -->
  <label for="popover-toggle" class="trigger-btn">Preferences</label>
  
  <!-- Backdrop for clicking outside to close -->
  <label for="popover-toggle" class="popover-backdrop"></label>
  
  <!-- Popover Content -->
  <div class="popover-content ease-glass-card">
    <div class="shimmer-sweep-overlay"></div>
    <!-- Menu Items... -->
  </div>
</div>
```

**Customization via CSS Properties:**
You can easily adjust the animation parameters using the exposed custom properties on `:root` or locally:

```css
:root {
  --popover-transition-duration: 300ms;
  --popover-transition-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce */
  --popover-shimmer-duration: 600ms;
  --popover-scale-start: 0.95;
  --popover-offset-y: 8px; /* Gap between button and popover */
}
```

### 3. Why is it useful?

Popovers and dropdown menus are ubiquitous in Modern SaaS interfaces. Providing a pure-CSS approach eliminates the need for complex JavaScript event listeners (like "click outside" handlers). Furthermore, the unique "Shimmer Sweep" opening transition adds a premium, high-fidelity micro-interaction that elevates the standard dropdown experience, aligning perfectly with EaseMotion CSS's philosophy of accessible visual excellence.
