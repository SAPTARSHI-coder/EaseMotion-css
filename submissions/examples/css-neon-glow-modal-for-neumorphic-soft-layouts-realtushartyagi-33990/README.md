# CSS Neon Glow Modal for Neumorphic Soft Layouts

A pure CSS modal component featuring an intense "neon glow" interaction, designed specifically to complement and contrast the pillowy, soft aesthetics of dark-mode **Neumorphic Soft** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Dark Neumorphic Soft aesthetics (soft inset and outset box-shadows), Neon Glow aesthetics (vibrant cyan box-shadows), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a neumorphic settings panel.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#neu-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#neu-modal" class="demo-trigger-btn">Open Settings</a>

<!-- Modal Structure -->
<div id="neu-modal" class="ease-neu-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-neu-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-neu-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-neu-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-neu-modal-title">System Settings</h2>
    
    <p class="ease-neu-modal-text">Modal content goes here...</p>
    
    <div class="ease-neu-modal-actions">
      <a href="#" class="ease-neu-modal-btn">Dismiss</a>
      <a href="#" class="ease-neu-modal-btn ease-neu-modal-btn-primary">Save Changes</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the glow and scale entrance animation. |
| `--ease-glow-neon-primary` | `#00ffcc` | The vibrant cyan color used for the glow and primary text accents. |
| `--ease-glow-shadow-active` | `0 0 20px...` | The glowing cyan box-shadow that replaces the soft neumorphic shadows upon activation. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and beautifully transitions the `box-shadow` from a soft, dark neumorphic extrusion to an intense, glowing cyan focus pull. This adds a striking, futuristic aesthetic to otherwise flat Neumorphic layouts, drawing the user's attention instantly without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-neumorphic-soft-layouts-realtushartyagi-33990/`.
