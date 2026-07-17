# CSS Fade-In Modal for Accessible Web Layouts

A pure CSS modal component featuring a smooth, scalable "fade-in" interaction, designed specifically to meet **Accessible Web** guidelines (high contrast, robust focus states, and motion preferences).

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, accessible web aesthetics (high contrast borders, universal `:focus-visible` outlines, `prefers-reduced-motion` queries), and the fade-in animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, fully populated with ARIA roles and labels.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#a11y-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#a11y-modal" class="demo-trigger-btn">Review Disclosures</a>

<!-- Modal Structure -->
<div id="a11y-modal" class="ease-a11y-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-a11y-modal-backdrop-close" tabindex="-1"></a>

  <!-- Proper ARIA attributes applied -->
  <div class="ease-a11y-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <!-- Close button inside the modal -->
    <a href="#" class="ease-a11y-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-a11y-modal-title">Important Disclosures</h2>
    <p class="ease-a11y-modal-text">Modal content goes here...</p>
    
    <div class="ease-a11y-modal-actions">
      <a href="#" class="ease-a11y-modal-btn">I Accept</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and accessible aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.3s` | The duration of the fade and scale entrance animation. |
| `--ease-a11y-focus` | `#ffcc00` | High-contrast yellow focus color applied universally via `:focus-visible`. |
| `--ease-a11y-accent` | `#0044cc` | WCAG AAA compliant blue against white for primary actions. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by prioritizing both animation and inclusive design. The core interaction is the **Fade-In Modal**: utilizing the CSS `:target` pseudo-class, it seamlessly interpolates `opacity` and `transform: scale()` to bring the modal into view natively. Crucially, this implementation bakes in accessibility best practices: high-contrast colors, strict `4px solid` focus outlines for keyboard navigation, clear ARIA roles in the markup, and a `@media (prefers-reduced-motion: reduce)` block that elegantly disables the animation for users who need it.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-in-modal-for-accessible-web-layouts-realtushartyagi-33224/`.
