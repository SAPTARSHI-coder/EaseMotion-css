# CSS Swing-Hover Accordion for Interactive Interface Layouts

A completely JavaScript-free animated Accordion featuring a dynamic, 3D "Swing-Hover" interaction sequence. Designed specifically for **Interactive Interface Layouts**, this component engages users through playful `transform: perspective()` animations on the accordion header, combined with hardware-accelerated grid expansion for the content reveal.

## Files
- `demo.html` – Structural layout showcasing the integration of semantic HTML, inline SVG icons, and the hidden checkbox hack for pure CSS state management.
- `style.css` – The stylesheet containing the 3D X-axis `@keyframes` swing animation, `grid-template-rows` height interpolation, and accessibility guardrails.

## How it works
The accordion utilizes a two-part animation architecture entirely in CSS:
1. **The Hover State (`@keyframes easeSwingHoverAnim`)**: When a user hovers or focuses the accordion trigger (header), a short, oscillating X-axis rotation is applied (`transform: rotateX(6deg)` down to `0`), simulating a swinging door or pendulum effect.
2. **The Open State (`grid-template-rows`)**: Clicking the label toggles a hidden checkbox. Sibling combinators (`~`) transition the content wrapper from `0fr` to `1fr`, allowing the browser to smoothly interpolate the height without any rigid pixel constraints.

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<div class="ease-accordion-group">
  <div class="ease-accordion-item">
    <input type="checkbox" id="acc-1" class="ease-accordion-trigger-hidden" aria-hidden="true" />
    
    <label for="acc-1" class="ease-accordion-title" tabindex="0">
      <div class="ease-accordion-title-content">
        <!-- Optional Icon -->
        <span class="ease-accordion-label">Interactive User Guide</span>
      </div>
      <!-- Caret Icon -->
    </label>

    <div class="ease-accordion-content-wrapper">
      <div class="ease-accordion-content-inner">
        <p>Your content here.</p>
      </div>
    </div>
  </div>
</div>
```

## Customization
The core behavior is exposed via CSS Custom Properties in the `:root`:
- `--ease-swing-intensity`: Controls the degrees of the X-axis rotation (Default: `6deg`).
- `--ease-swing-duration`: Controls the speed of the hover swing (Default: `0.8s`).

## Accessibility (prefers-reduced-motion)
The component implements a strict `@media (prefers-reduced-motion: reduce)` media query. If a user has system-level motion reduction enabled, the playful 3D swing hover animation is completely disabled (`animation: none`), and the grid expansion transitions instantaneously (`transition-duration: 0.01ms`). The `<label>` trigger utilizes `tabindex="0"` for full keyboard interaction out of the box.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero JavaScript overhead. This component demonstrates how to elevate a historically rigid UI pattern (the accordion) into a highly interactive, tactile element using pure CSS 3D transforms (`preserve-3d` and `rotateX`), keeping the application lightweight while delivering a premium user experience.
