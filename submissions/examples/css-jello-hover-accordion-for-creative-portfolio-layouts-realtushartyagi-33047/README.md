# CSS Jello-Hover Accordion for Creative Portfolio Layouts

A completely JavaScript-free animated Accordion featuring a highly organic, physics-inspired "Jello-Hover" interaction sequence. Styled specifically for **Creative Portfolio Layouts**, this component utilizes deep contrast, vibrant accents, and a gelatinous skew animation to create a memorable, tactile user experience.

## Files
- `demo.html` – Structural layout showcasing the integration of semantic HTML, inline SVG icons, and the hidden checkbox hack for pure CSS state management.
- `style.css` – The stylesheet containing the oscillating "Jello" keyframes (`easeJelloHoverAnim`), `grid-template-rows` height interpolation, and robust accessibility fallbacks.

## How it works
This accordion implements a two-part animation architecture entirely via CSS:
1. **The Hover State (`@keyframes easeJelloHoverAnim`)**: When a user hovers or focuses the accordion trigger (header), the icon performs a mathematically sequenced `skewX` and `skewY` oscillation. This creates a "wobble" effect that simulates a physical, gelatinous material.
2. **The Open State (`grid-template-rows`)**: Clicking the label toggles a hidden checkbox. Sibling combinators (`~`) transition the content wrapper from `0fr` to `1fr`, allowing the browser to smoothly expand the content area seamlessly. The icon simultaneously transitions into a 45-degree rotation (turning a plus into a cross).

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<div class="ease-accordion-group">
  <div class="ease-accordion-item">
    <input type="checkbox" id="jello-acc-1" class="ease-accordion-trigger-hidden" aria-hidden="true" />
    
    <label for="jello-acc-1" class="ease-accordion-title" tabindex="0">
      <span class="ease-accordion-label">Creative Vision</span>
      <!-- Icon that receives the Jello hover animation -->
      <span class="ease-accordion-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </label>

    <div class="ease-accordion-content-wrapper">
      <div class="ease-accordion-content-inner">
        <p>Your portfolio content here.</p>
      </div>
    </div>
  </div>
</div>
```

## Accessibility (prefers-reduced-motion)
The component implements a strict `@media (prefers-reduced-motion: reduce)` media query. Because the "Jello" effect relies on rapid skew oscillation, it is completely bypassed (`animation: none`) for users with system-level motion reduction enabled to prevent vestibular triggers. The component remains fully keyboard accessible via the `tabindex="0"` attribute on the trigger `<label>`.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero JavaScript overhead. Creative portfolios demand unique, memorable interactions. By leveraging advanced `@keyframes` skew mathematics and hardware-accelerated CSS Grid interpolation, this component delivers a highly stylized, organic interaction completely natively, ensuring top-tier 60fps performance without bloating the JavaScript bundle.
