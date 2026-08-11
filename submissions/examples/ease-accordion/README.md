# EaseAccordion — CSS Grid height: auto transitions

A modern, highly accessible accordion component for EaseMotion CSS.

## What is it?
This component introduces a clean, zero-dependency accordion/collapsible component designed to solve the classic CSS problem: animating height transitions to `height: auto` without hardcoded pixel limits.

It pairs a layout-trigger structure with modern CSS grid-template-rows interpolation (`0fr` ➔ `1fr`) to transition elements smoothly to their intrinsic container height, without requiring heavy layout-thrashing JavaScript DOM measurements.

---

## How to use it?

### 1. Include Script & Styles
Load the stylesheet in your HTML:
```html
<link rel="stylesheet" href="style.css" />
```

### 2. Accordion HTML Structure
Construct the accordion using interactive `<button>` trigger elements and `aria` attributes:
```html
<div class="ease-accordion">
  
  <div class="ease-accordion-item">
    <button class="ease-accordion-trigger" id="acc-trigger-1" aria-expanded="false" aria-controls="acc-content-1">
      <span>Accordion Section Title</span>
      <span class="ease-accordion-chevron">▼</span>
    </button>
    <div class="ease-accordion-content" id="acc-content-1" role="region" aria-labelledby="acc-trigger-1">
      <div class="ease-accordion-content-inner">
        <div class="ease-accordion-body">
          <p>This is the collapsible panel content that will animate smoothly.</p>
        </div>
      </div>
    </div>
  </div>

</div>
```

### 3. Add Toggler Script
Use a minimal, lightweight inline script to toggle accessibility attributes. No CSS style measurements are needed:
```javascript
document.querySelectorAll('.ease-accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', !isExpanded);
    trigger.closest('.ease-accordion-item')?.classList.toggle('is-open', !isExpanded);
  });
});
```

---

## Technical Deep-Dive: CSS-Grid Height Interpolation

Standard CSS transitions cannot animate height toward intrinsic dimensions:
```css
/* ❌ DOES NOT WORK: browser cannot calculate intermediate values to 'auto' */
.collapsible-body {
  height: 0;
  transition: height 0.3s;
}
.collapsible-body.open {
  height: auto;
}
```

### The Grid Fraction (fr) Solution
Instead of height, we wrap the collapsible body in a grid container and animate `grid-template-rows` from `0fr` to `1fr`:
```css
/* Class structure */
.ease-accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility: hidden;
}

.ease-accordion-trigger[aria-expanded="true"] + .ease-accordion-content {
  grid-template-rows: 1fr;
  visibility: visible;
}

/* Crucial: Child must have min-height set to 0 */
.ease-accordion-content-inner {
  min-height: 0;
  overflow: hidden;
}
```
When `grid-template-rows` is set to `0fr`, the row shrinks to 0. When set to `1fr`, the row dynamically expands to fit the content's exact size. The child element requires `min-height: 0` so the browser allows the grid row size to collapse completely.

### Progressive Enhancement: `interpolate-size`
Where supported in modern evergreen browsers, you can also utilize the new CSS specification to directly enable transitions on auto sizes. We bundle these overrides seamlessly:
```css
@supports (interpolate-size: allow-keywords) {
  :root {
    interpolate-size: allow-keywords;
  }
}
```

---

## Why it fits EaseMotion CSS
EaseMotion CSS is dedicated to providing high-quality, lightweight, zero-dependency, human-readable animation utilities. Accordions are one of the most frequently recreated components in modern web interfaces. By shipping a native CSS-grid-based layout solution, EaseMotion allows downstream projects to implement smooth collapsible interfaces without importing bulky JavaScript libraries.
