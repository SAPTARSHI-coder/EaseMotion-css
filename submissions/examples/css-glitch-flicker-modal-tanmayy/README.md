# CSS Glitch-Flicker Modal

A pure-CSS animated modal dialog utilizing an intense Glitch-Flicker interaction aesthetic, designed specifically for high-urgency E-Commerce Checkout layouts (e.g., Flash Sales, Cyber Monday hacks, or critical warnings). It features an aggressive, skeuomorphic entrance glitch that settles into a subtle, occasional flicker, all achieved without JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a togglable modal overlay with a distinct "cyberpunk" theme. When a user clicks a trigger button, the modal aggressively glitches into view (utilizing CSS transforms, skew, and blur). Once open, pseudo-element layers (`::before` and `::after`) occasionally flicker and distort using complex `clip-path` keyframes, simulating a failing monitor or a system override.

### 2. How is it used?

The component relies on a pure CSS checkbox hack for state management. The `.modal-checkbox` controls the visibility and triggers the animations on the `.glitch-modal`. The visual glitch effect is achieved by duplicating the modal's box shadows and text shadows onto `::before` and `::after` pseudo-elements, which are then rapidly sliced using `clip-path: inset()`.

```html
<!-- Example: Flash Hack Trigger -->
<!-- 1. The Trigger -->
<label for="glitch-modal-toggle" class="glitch-trigger-btn">Apply Hack</label>

<!-- 2. The Hidden State Controller -->
<input type="checkbox" id="glitch-modal-toggle" class="modal-checkbox">

<!-- 3. The Modal Overlay & Container -->
<div class="modal-overlay">
  <!-- Invisible backdrop to close -->
  <label for="glitch-modal-toggle" class="modal-close-backdrop"></label>
  
  <div class="glitch-modal">
    <!-- Pseudo-elements generated via CSS will handle the glitching layers -->
    <div class="modal-content-wrapper">
      <!-- Content here -->
    </div>
  </div>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation timing and cyber-colors via root variables:

```css
:root {
  --modal-entrance-duration: 0.6s;
  
  --glitch-bg: #09090b;
  --glitch-color: #00ff41; /* Hacker Green */
  --glitch-offset-1: #ff003c; /* Red glitch channel */
  --glitch-offset-2: #00e5ff; /* Cyan glitch channel */
}
```

### 3. Why is it useful?

In promotional checkout flows (like Cyber Monday or Flash Sales), creating a sense of extreme urgency and exclusivity is a proven conversion tactic. A standard fade-in modal is often ignored. By implementing a highly aggressive glitch animation, you instantly capture the user's attention and enforce the thematic "hack" or "override" narrative. Managing this entirely with CSS ensures that despite the complex visual effects, the browser can hardware-accelerate the transforms and clip-paths without blocking the main thread. Additionally, the component strictly respects user accessibility preferences, automatically degrading to a static, high-contrast modal if `prefers-reduced-motion` is enabled, preventing potential triggers for photosensitive users.
