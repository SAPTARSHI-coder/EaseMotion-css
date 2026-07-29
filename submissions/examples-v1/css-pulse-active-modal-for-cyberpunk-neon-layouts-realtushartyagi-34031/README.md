# CSS Pulse-Active Modal for Cyberpunk Neon Layouts

A pure CSS modal component featuring an intense, glowing "pulse-active" micro-interaction on the primary action button, styled specifically for futuristic, high-contrast **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, cyberpunk-specific styling (neon glows, cut corners, monospace accents), and a custom `@keyframes ease-pulse-active` animation that triggers on `:active` for the primary button.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a mock sci-fi interface layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`.

To apply the pulse interaction to your action buttons, give them the `.ease-cyber-btn-pulse` class.

```html
<!-- Trigger -->
<a href="#init-modal" class="trigger-btn">Initialize</a>

<!-- Modal Overlay & Animated Content -->
<div id="init-modal" class="ease-pulse-cyber-modal-overlay">
  <div class="ease-pulse-cyber-modal-content">
    
    <div class="ease-pulse-cyber-modal-header">
      <h3 class="ease-pulse-cyber-modal-title">Initialization Sequence</h3>
      <a href="#" class="ease-pulse-cyber-modal-close-icon">&times;</a>
    </div>
    
    <div class="ease-pulse-cyber-modal-body">
      <p>WARNING: Executing this sequence will override current protocols.</p>
    </div>
    
    <div class="ease-pulse-cyber-modal-footer">
      <a href="#" class="ease-cyber-btn-secondary">Abort</a>
      <!-- Clicking this button triggers the intense Pulse animation on :active -->
      <a href="#" class="ease-cyber-btn-pulse">Engage</a>
    </div>
    
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and cyberpunk aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-pulse-timing` | `0.3s` | The speed of the pulsating loop triggered on click/active state. |
| `--ease-cyber-accent-cyan` | `#00f0ff` | The primary cyan neon color. |
| `--ease-cyber-accent-magenta`| `#ff003c` | The secondary magenta neon color used for the active pulse button. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript interaction observers by utilizing the CSS `:target` pseudo-class for state management and the `:active` pseudo-class for click-based micro-interactions. The "pulse" effect uses an infinite `@keyframes` sequence interpolating `transform: scale()` and highly complex `box-shadow` properties to simulate a surging energy glow. This approach delivers a highly responsive, 60fps tactile interaction that perfectly matches a sci-fi aesthetic without relying on heavy JS or WebGL implementations.

---

> **Note:** PR modifies only files inside `submissions/examples/css-pulse-active-modal-for-cyberpunk-neon-layouts-realtushartyagi-34031/`.
