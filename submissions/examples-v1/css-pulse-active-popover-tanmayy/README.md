# CSS Pulse-Active Popover (Cyberpunk Neon)

A pure-CSS animated Popover utilizing a smooth Pulse-Active interaction transition, styled to complement Cyberpunk Neon interface aesthetics. It requires zero JavaScript, making it highly performant and easy to integrate.

## 📋 Mandatory Questions

### 1. What does this do?

This submission provides a "Popover" (dropdown menu or config panel) component that reveals itself with a smooth scaling transition. Once open, it transitions into a "Pulse-Active" state, creating a continuous neon pulsating glow effect. It uses a pure CSS mechanism (hidden checkbox) to toggle state without JavaScript. The component is fully responsive, keyboard accessible via tabbing, and exposes CSS custom properties to control the transition timing, pulse intensity, and colors.

### 2. How is it used?

The component uses a hidden checkbox (`.popover-toggle`) and the `~` general sibling selector to control the visibility and animation of the `.popover-content` without JS. A `.popover-backdrop` label is provided so clicking outside the popover closes it natively.

```html
<div class="popover-wrapper">
  <!-- Hidden Checkbox State -->
  <input type="checkbox" id="popover-toggle" class="popover-toggle" hidden aria-hidden="true">
  
  <!-- Trigger Button -->
  <label for="popover-toggle" class="cyber-btn" role="button" tabindex="0">
    <span class="cyber-btn-glitch"></span>
    <span>SYS.OPTS</span>
  </label>
  
  <!-- Backdrop for clicking outside to close -->
  <label for="popover-toggle" class="popover-backdrop"></label>
  
  <!-- Popover Content -->
  <div class="popover-content">
    <!-- Menu Items... -->
  </div>
</div>
```

**Customization via CSS Properties:**
You can easily adjust the animation parameters using the exposed custom properties on `:root` or locally:

```css
:root {
  --popover-transition-duration: 250ms;
  --popover-transition-ease: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --popover-pulse-duration: 2s;
  --popover-pulse-color: #0ff; /* Cyan neon */
  --popover-pulse-color-alt: #f0f; /* Magenta neon */
  --popover-scale-start: 0.9;
  --popover-offset-y: 12px;
}
```

### 3. Why is it useful?

Popovers and dropdown menus are ubiquitous in web interfaces. Providing a pure-CSS approach eliminates the need for complex JavaScript event listeners (like "click outside" handlers). Furthermore, the unique "Pulse-Active" glowing animation and Cyberpunk aesthetics add a high-fidelity interaction that fits perfectly into sci-fi, gaming, or futuristic web applications, aligning with EaseMotion CSS's philosophy of accessible visual excellence.
