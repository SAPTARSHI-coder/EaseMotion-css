# CSS Tada-Click Accordion for Responsive Dashboard Layouts

A completely JavaScript-free animated Accordion featuring a dynamic, state-driven "Tada" click interaction. Designed specifically for **Responsive Dashboard Layouts**, this component engages users through a highly performant `@keyframes` scale-and-rotate sequence on the accordion icon whenever the state changes.

## Files
- `demo.html` – Structural layout showcasing the integration of semantic HTML, inline SVG icons, and the hidden checkbox hack for pure CSS state management.
- `style.css` – The stylesheet containing the oscillating "Tada" keyframes (`easeTadaClickOpen` and `easeTadaClickClose`), `grid-template-rows` height interpolation, and robust accessibility fallbacks.

## How it works
This accordion utilizes a sophisticated CSS setup to execute a complex sequence upon interaction:
1. **The Click State (`@keyframes easeTadaClickOpen`)**: When a user clicks the accordion header, the hidden checkbox is toggled. The sibling selector triggers an animation on the icon where it slightly shrinks, rapidly oscillates (scales up and rotates left/right), and finally settles exactly at a `180deg` rotation. 
2. **The Open State (`grid-template-rows`)**: Simultaneously, the content wrapper transitions from `0fr` to `1fr`, allowing the browser to smoothly expand the content area seamlessly.
3. **Closing Logic**: Unchecking the box triggers `easeTadaClickClose`, reversing the sequence back to `0deg` with the same energetic flair.

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<div class="ease-accordion-group">
  <div class="ease-accordion-item">
    <input type="checkbox" id="tada-acc-1" class="ease-accordion-trigger-hidden" aria-hidden="true" />
    
    <label for="tada-acc-1" class="ease-accordion-title" tabindex="0">
      <span class="ease-accordion-label">Revenue Overview</span>
      <!-- Chevron Icon that receives the Tada animation -->
      <span class="ease-accordion-icon">▼</span>
    </label>

    <div class="ease-accordion-content-wrapper">
      <div class="ease-accordion-content-inner">
        <p>Your dashboard content here.</p>
      </div>
    </div>
  </div>
</div>
```

## Accessibility (prefers-reduced-motion)
The component implements a strict `@media (prefers-reduced-motion: reduce)` media query. Because the "Tada" effect involves rapid oscillation, it is completely bypassed for users with system-level motion reduction enabled. Instead, the icon simply rotates instantly. The component remains fully keyboard accessible via the `tabindex="0"` attribute on the trigger `<label>`.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero JavaScript overhead. Dashboards often run heavy JS scripts for charts and data grids. By offloading complex interaction sequences—like a Tada click effect and height interpolation—entirely to the CSS engine, this component ensures UI interactions remain buttery smooth without blocking the main JavaScript thread.
