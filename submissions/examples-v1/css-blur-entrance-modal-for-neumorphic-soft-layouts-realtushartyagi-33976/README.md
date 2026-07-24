# CSS Blur-Entrance Modal for Neumorphic Soft Layouts

A pure CSS modal component featuring a tactile "blur-entrance" interaction, designed specifically to match the soft, extruded aesthetics of **Neumorphic** (Soft UI) interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Neumorphic aesthetics (embossed/debossed dual shadows, low contrast borders, soft pill shapes), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a soft settings dialog.

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
    <a href="#" class="ease-neu-modal-close" aria-label="Close modal dialog">X</a>
    
    <h2 id="modal-title" class="ease-neu-modal-title">Security Preferences</h2>
    <p class="ease-neu-modal-text">Modal content goes here...</p>
    
    <div class="ease-neu-modal-actions">
      <a href="#" class="ease-neu-modal-btn ease-neu-modal-btn-secondary">Cancel</a>
      <a href="#" class="ease-neu-modal-btn">Apply</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the blur and scale entrance animation. |
| `--ease-modal-blur` | `blur(14px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-neu-shadow-outer` | `9px 9px 16px...` | The dual box-shadow creating the soft extruded (embossed) effect. |
| `--ease-neu-shadow-inner` | `inset 6px 6px...` | The inset box-shadow used for hover or active (debossed) states. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. For Neumorphic interfaces, this creates a soft, tactile "focus-pulling" effect that elegantly draws the user's eye directly to the extruded modal surface, all without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-neumorphic-soft-layouts-realtushartyagi-33976/`.
