# CSS Elastic Bounce Modal for Modern SaaS Layouts

A pure CSS modal component featuring a snappy, tactile "elastic bounce" entrance animation, designed specifically to match the clean, crisp aesthetics of **Modern SaaS** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Modern SaaS aesthetics (clean white backgrounds, crisp borders, indigo primary buttons), and the precise `cubic-bezier` timing function logic that creates the elastic bounce effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a typical SaaS dashboard action (e.g., inviting a team member).

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#saas-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#saas-modal" class="demo-trigger-btn">Invite Team Member</a>

<!-- Modal Structure -->
<div id="saas-modal" class="ease-bounce-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-bounce-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-bounce-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <div class="ease-bounce-modal-header">
      <h2 id="modal-title" class="ease-bounce-modal-title">Invite Team Member</h2>
      <a href="#" class="ease-bounce-modal-close" aria-label="Close modal dialog">&times;</a>
    </div>
    
    <div class="ease-bounce-modal-body">
      <p class="ease-bounce-modal-text">Modal content goes here...</p>
    </div>
    
    <div class="ease-bounce-modal-footer">
      <a href="#" class="ease-bounce-modal-btn">Cancel</a>
      <a href="#" class="ease-bounce-modal-btn ease-bounce-modal-btn-primary">Send Invite</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the elastic bounce entrance animation. |
| `--ease-modal-easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The precise bezier curve that dictates the "spring" physics of the bounce. |
| `--ease-saas-primary` | `#4f46e5` | The primary brand color used for primary action buttons. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Elastic Bounce Entrance**: utilizing the CSS `:target` pseudo-class combined with a highly tailored `cubic-bezier` transition curve, the modal quickly springs into view, overshoots its target scale slightly, and settles back perfectly. This delivers an incredibly tactile, native-feeling app interaction typical of high-end SaaS products, entirely without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-modal-for-modern-saas-layouts-realtushartyagi-33995/`.
